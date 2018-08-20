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

class Index extends Component {

  componentDidMount(){
    this.props.fetchProducts()
    this.props.fetchUser()
    console.log(this.props.userStore)
  }

  componentDidUpdate(prevProps){
    if (prevProps.userStore == null && this.props.userStore != null){
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
                <h2>Handcrafted products from <strong>Amazon</strong> selected for you</h2>
              </div>
            </div>
            <div className="row">
              {this.props.productsStore.products.map((item,key) => {
                return (
                  <div className="col-sm-4" key={key}>
                    <Product data={item} />
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

export default connect((state) => ({ productsStore: state.productsReducer, userStore: state.userReducer }),{fetchProducts,fetchUser})(Index)

