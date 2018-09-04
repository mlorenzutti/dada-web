import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchArticleSync, fetchArticleProducts, FETCH_ARTICLE_SYNC } from '../redux/actions/articlesActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { loadFirebase } from '../utils/db'

import Product from '../components/product'

import "../style/style.scss"

class Article extends Component {

    static async getInitialProps({store, req, query}) {
        const fb = await loadFirebase();
        //get Products
        const fetchArticleAction = fetchArticleSync(fb,query.id);
        store.dispatch(fetchArticleAction);
        await fetchArticleAction.payload.then((payload) => {
            store.dispatch({type: FETCH_ARTICLE_SYNC, payload: payload.data() })
        }) 
        
        return {articleId: query.id};
    }

    componentDidMount(){

        this.props.fetchUser()
        this.props.fetchArticleProducts(this.props.articleId)
        if (this.props.userStore.user != null){
          this.props.fetchWishlist(this.props.userStore.user.uid)
        }
      }
    
      componentDidUpdate(prevProps){
        if (prevProps.userStore.user == null && this.props.userStore.user != null){
          this.props.fetchWishlist(this.props.userStore.user.uid)
        }
      }

    render(){
        const {
            title,
            subtitle,
            image,
            text,
            products
        } = this.props.articleStore.currentArticle
        return (
            <div className="container-fluid mt-5" >
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mb-5">
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={image} className="w-100 mb-3"></img>
                                <div className="mt-4" dangerouslySetInnerHTML={{__html:text}}></div>
                            </div>
                            <div className="col-lg-6 pl-lg-5">
                                <div className="row">
                                {products && products.map((item,key) => {
                                    return (
                                        <div className="col-sm-6" key={key}>
                                            <Product product={item} />
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
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
     fetchUser,
     fetchWishlist,
     fetchArticleSync,
     fetchArticleProducts
})(Article)
  