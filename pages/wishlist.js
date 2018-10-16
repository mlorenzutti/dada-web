import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchProducts } from '../redux/actions/productsActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { checkCountryCookie } from '../utils/country'
import Header from '../components/header'

import "../style/style.scss"

import Product from '../components/product'


class Wishlist extends Component {

  static async getInitialProps(ctx) {
    const {store, req, query} = ctx
    await checkCountryCookie(ctx,store.getState().countryReducer,store)
    const countryCode = store.getState().countryReducer.currentCountry.code
    return {countryCode}
}

  componentDidMount(){
    this.props.fetchUser()
    if (this.props.userStore.user != null){
      console.log("pluto2")
      this.props.fetchWishlist(this.props.userStore.user.uid, this.props.countryCode)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.userStore.user == null && this.props.userStore.user != null){
      console.log("pippo2")
      this.props.fetchWishlist(this.props.userStore.user.uid, this.props.countryCode)
    }
  }

  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className="bg-light py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col py-5 text-center">
                <h1 className="h2">Your Wishlist</h1>
              </div>
            </div>
            <div className="row">
              {this.props.wishlistStore.products.map((item,key) => {
                return (
                  <div className="col-sm-4" key={key}>
                    <Product product={item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ wishlistStore: state.wishlistReducer, userStore: state.userReducer }),{fetchUser,fetchWishlist})(Wishlist)

