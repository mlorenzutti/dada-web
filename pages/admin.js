import React, {Component} from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import { fetchProducts, fetchProductsSync  } from '../redux/actions/productsActions'
import { fetchArticlesSync, fetchAllArticleProducts  } from '../redux/actions/articlesActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { loadFirebase } from '../utils/db'
import { checkCountryCookie } from '../utils/country'
import Header from '../components/header'
const ManageArticle = dynamic(() => import('../components/admin/manageArticle'), {  
    ssr: false
})
import ArticleList from '../components/admin/articlesList'

import "../style/style.scss"

import Product from '../components/product'
import ArticleSmall from '../components/articleSmall'

class Admin extends Component {
  static async getInitialProps(ctx) {
      const {store, req, query} = ctx
      await checkCountryCookie(ctx,store.getState().countryReducer,store)
      const countryCode = store.getState().countryReducer.currentCountry.code
      return {countryCode};
  }

  constructor(props){
      super(props)
      this.state = {
          addArticle: false
      }
  }



  componentDidMount(){
    this.props.fetchUser()   
  }

  componentDidUpdate(prevProps){
    
  }

  _toggleAddArticle = () => {
    this.setState({
        addArticle: !this.state.addArticle
    });
}


  

  render() {
    const { classes } = this.props;
    return (
      <div>
          <Header />
          {this.props.userStore.user != null && this.props.userStore.user.isAnonymous == false && this.props.userStore.isAdmin && 
          <div>
            <div className="bg-primary  mb-3">
                <div className="container-fluid">
                <div className="row">
                    <div className="col ">
                    <div className="py-md-4 py-4 text-center  text-light ">
                        <h1 className="h4 p-0 m-0">Admin</h1>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-sm-8">
                        <h5>Products</h5>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Articles</h5>
                            <button onClick={() => this._toggleAddArticle()} className="btn btn-primary btn-sm">Add Article</button>
                        </div>
                        <ManageArticle modalOpen={this.state.addArticle} toggle={this._toggleAddArticle} />
                        <ArticleList />
                    </div>
                </div>
            </div>
          </div>
          }
        
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
   fetchUser
  })(Admin)

