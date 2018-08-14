import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchProducts } from '../redux/actions/productsActions'

class Index extends Component {

  componentDidMount(){
    this.props.fetchProducts()
  }
 

  render() {

    return (
      <div>
        <h2>ciao</h2>
        {
          this.props.productsStore.products.map((item) => {
            return (
              <div>
                <img src={item.post.image} />
                {item.post.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default connect((state) => ({ productsStore: state.productsReducer }),{fetchProducts})(Index);

