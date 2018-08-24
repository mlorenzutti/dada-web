import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchProducts, fetchProductsSync, FETCH_PRODUCTS_SYNC } from '../redux/actions/productsActions'
import { fetchUser } from '../redux/actions/userActions'
import { fetchWishlist } from '../redux/actions/wishlistActions'
import { loadFirebase } from '../utils/db'

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
  static async getInitialProps({store, req, query}) {
      const fb = await loadFirebase();
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
      return {};
  }

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
                <h1 className="h2">Handcrafted products from <strong>Amazon</strong> selected for you</h1>
              </div>
            </div>
            <div className="row">
              {this.props.productsStore.products.map((item,key) => {
                if (key%13===0){
                  return (
                    <div className="col-sm-12 mt-4 mb-5">
                      <div className="bg-white">
                        <div className="row">
                          <div className="col-sm-6" >
                            <div style={{height:300,backgroundImage:"url(https://cdn.mos.cms.futurecdn.net/yGg9PE8Dv2WgpDTtYCAMa-970-80.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                          </div>
                          <div className="col-sm-6 pt-4 px-4 d-flex flex-column justify-content-between">
                            <div>
                              <h3><strong>Best Mirrorless Cameras 2018</strong></h3>
                              <p>Our expert guide will help you choose the best mirrorless camera for you</p>
                              <a href="#" className="btn btn-primary btn-sm">Read more</a>
                            </div>
                            <div className="d-flex">
                              <div className="card-mini bg-white p-3 mr-3 text-center">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/81SmMdtAzAL._AC_UL140_SR140,140_.jpg"></img><br/>
                                <small><strong>Sony</strong></small><br/>
                                <small className="d-inline-block text-truncate w-100">a7R III 42.4MP Full-Frame Mirrorless Interchangeable-Lens Camera</small>
                              </div>
                              <div className="card-mini bg-white p-3 mr-3 text-center">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/81SmMdtAzAL._AC_UL140_SR140,140_.jpg"></img><br/>
                                <small><strong>Sony</strong></small><br/>
                                <small className="d-inline-block text-truncate w-100">a7R III 42.4MP Full-Frame Mirrorless Interchangeable-Lens Camera</small>
                              </div>
                              <div className="card-mini bg-white p-3 mr-3 text-center">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/81SmMdtAzAL._AC_UL140_SR140,140_.jpg"></img><br/>
                                <small><strong>Sony</strong></small><br/>
                                <small className="d-inline-block text-truncate w-100">a7R III 42.4MP Full-Frame Mirrorless Interchangeable-Lens Camera</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }else{
                  return (
                    <div className="col-sm-4" key={key}>
                      <Product product={item} />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ productsStore: state.productsReducer, userStore: state.userReducer }),{fetchProducts,fetchProductsSync,fetchUser,fetchWishlist})(Index)

