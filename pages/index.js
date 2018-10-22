import React, {Component} from 'react'
import {connect} from "react-redux"
import Head from 'next/head'
import { fetchProducts, fetchProductsSync, FETCH_PRODUCTS_SYNC } from '../redux/actions/productsActions'
import { fetchArticlesSync, fetchAllArticleProducts, FETCH_ARTICLES_SYNC } from '../redux/actions/articlesActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { loadFirebase } from '../utils/db'
import { checkCountryCookie } from '../utils/country'
import Header from '../components/header'
import Footer from '../components/footer'

import "../style/style.scss"

import Product from '../components/product'
import ArticleSmall from '../components/articleSmall'

class Index extends Component {
  static async getInitialProps(ctx) {
      const {store, req, query} = ctx
      await checkCountryCookie(ctx,store.getState().countryReducer,store)
      const countryCode = store.getState().countryReducer.currentCountry.code
      const fb = await loadFirebase()
      
      //get Products
      if (!process.browser) {
        const fetchProductsAction = fetchProductsSync(fb,countryCode);
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
        const fetchArticlesAction = fetchArticlesSync(fb,countryCode);
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
      }else{
        //normal fetch
      }
      
      return {countryCode};
  }

  componentDidMount(){
    console.log('didmount')
    this.props.fetchUser()
    this.props.fetchAllArticleProducts(this.props.articleStore.articles,this.props.countryCode)
    if (this.props.userStore.user != null){
      this.props.fetchWishlist(this.props.userStore.user.uid, this.props.countryCode)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.userStore.user == null && this.props.userStore.user != null){
      this.props.fetchWishlist(this.props.userStore.user.uid, this.props.countryCode)
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
        }else{
          productGrid.push({
            type: 'product',
            data: item
          })
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
          <div className="col-md-4 col-sm-6" key={key}>
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
          <Head>
              <title>Kidada - Handcrafted products from Amazon selected for you</title>
          </Head>
          <Header />
          <div className="bg-primary  mb-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col ">
                  <div className="py-md-4 py-4 text-center  text-light ">
                    <h1 className="h4 p-0 m-0">Handcrafted products from <strong>Amazon</strong> selected for you</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {this._buildGrid()}
            </div>
          </div>
          <Footer />
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

