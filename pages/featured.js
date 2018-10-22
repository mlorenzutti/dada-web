import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchProducts, fetchProductsSync, FETCH_PRODUCTS_SYNC } from '../redux/actions/productsActions'
import { fetchArticlesSync, fetchAllArticleProducts, FETCH_ARTICLES_SYNC } from '../redux/actions/articlesActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { loadFirebase } from '../utils/db'
import { checkCountryCookie } from '../utils/country'
import Header from '../components/header'
import Footer from '../components/footer'

import "../style/style.scss"

import ArticleFeatured from '../components/articleFeatured'

class Index extends Component {
  static async getInitialProps(ctx) {
      const {store, req, query} = ctx
      await checkCountryCookie(ctx,store.getState().countryReducer,store)
      const countryCode = store.getState().countryReducer.currentCountry.code
      const fb = await loadFirebase();
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
      
      return {};
  }

  componentDidMount(){
    this.props.fetchUser()
    
  }

  componentDidUpdate(prevProps){
    
  }

  

  render() {
    const { classes } = this.props;
    return (
      <div>
          <Header />
          
            
            
              {this.props.articleStore.articles.map((item,key) => {
                  return (
                    
                      <ArticleFeatured key={key} article={item}/>
                    
                  )
              })}
            
          
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

