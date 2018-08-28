import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchProducts, fetchProductsSync, FETCH_PRODUCTS_SYNC } from '../redux/actions/productsActions'
import { fetchArticlesSync, fetchAllArticleProducts, FETCH_ARTICLES_SYNC } from '../redux/actions/articlesActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { loadFirebase } from '../utils/db'

import "../style/style.scss"

import Product from '../components/product'
import ArticleSmall from '../components/articleSmall'

class Index extends Component {
  static async getInitialProps({store, req, query}) {
      const fb = await loadFirebase();
      //get Products
      const fetchProductsAction = fetchProductsSync(fb);
      store.dispatch(fetchProductsAction);
      await fetchProductsAction.payload.then((payload) => {
          let newState = []
  
          payload.forEach(function(doc) {
            newState.push({
              id: doc.id,
              post: doc.data()
            });
          });
          store.dispatch({type: FETCH_PRODUCTS_SYNC, payload: newState })
      })
      //get Articles
      const fetchArticlesAction = fetchArticlesSync(fb);
      store.dispatch(fetchArticlesAction);     
      await fetchArticlesAction.payload.then((payload) => {
          let listArticles = []
          payload.forEach(function(doc) {
            listArticles.push({
              id: doc.id,
              post: doc.data()
            });            
          });         
          store.dispatch({type: FETCH_ARTICLES_SYNC, payload: listArticles }) 
      })
      
      return {};
  }

  componentDidMount(){
    this.props.fetchUser()
    this.props.fetchAllArticleProducts(this.props.articleStore.articles)
    if (this.props.userStore.user != null){
      this.props.fetchWishlist(this.props.userStore.user.uid)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.userStore.user == null && this.props.userStore.user != null){
      this.props.fetchWishlist(this.props.userStore.user.uid)
    }
  }

  _buildGrid = () => {
    const productGrid = []
    const articleCount = this.props.articleStore.articles.length
    let articleIndex = 0
         
    this.props.productsStore.products.map((item,key) => {
      if (key%13===0){
        if (articleIndex<articleCount){

          productGrid.push({
            type: 'article',
            data: this.props.articleStore.articles[articleIndex]
          })
          articleIndex++
        }        
      }else{
        productGrid.push({
          type: 'product',
          data: item
        })
      }
    })

    return productGrid.map((item,key) => {
      if (item.type==="article"){
        return (
          <div className="col-sm-12 mt-4 mb-5" key={key}>
            <ArticleSmall article={item.data}/>
          </div>
        )
      }else{
        return (
          <div className="col-sm-4" key={key}>
            <Product product={item.data} />
          </div>
        )
      }
    })
  }

  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col py-5 text-center">
                <h1 className="h2">Handcrafted products from <strong>Amazon</strong> selected for you</h1>
              </div>
            </div>
            <div className="row">
              {this._buildGrid()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ 
  articleStore: state.articlesReducer,
  productsStore: state.productsReducer,
  userStore: state.userReducer
 }),{
   fetchProducts,
   fetchProductsSync,
   fetchUser,
   fetchWishlist,
   fetchArticlesSync,
   fetchAllArticleProducts
  })(Index)

