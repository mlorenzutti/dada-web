import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchProducts } from '../redux/actions/productsActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'

import "../style/style.scss"

import Product from '../components/product'


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    backgroundSize: 'contain',
    paddingTop: '70%', // 16:9
  }
});

class Wishlist extends Component {

  componentDidMount(){
    this.props.fetchUser()
    if (this.props.userStore.user != null){
      this.props.fetchWishlist(this.props.userStore.user.uid)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.userStore.user == null && this.props.userStore.user != null){
      this.props.fetchWishlist(this.props.userStore.user.uid)
    }
  }

  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="bg-light py-5">
          <div className="container">
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
