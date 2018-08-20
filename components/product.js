import React, {Component} from 'react'
import {connect} from "react-redux"
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlistActions"

class Product extends Component {

    _isInWishlist = (product) => {
        var result = this.props.wishlistStore.products.find((item) => {
            return item.id == product.id
        })
        return result!=undefined
    }

    _renderWishlistButton = (product) => {
        const isInWishlist = this._isInWishlist(product)
        if (isInWishlist){
            return (
                <button 
                        onClick={() => this.props.removeFromWishlist(this.props.userStore.user.uid,product)}
                        className="btn btn-primary ml-2 d-inline-block"
                    ><i className="material-icons">favorite</i></button>
            )
        }else{
            return (
                <button 
                        onClick={() => this.props.addToWishlist(this.props.userStore.user.uid,product)}
                        className="btn btn-primary ml-2 d-inline-block"
                    ><i className="material-icons">favorite_border</i></button>
            )
        }
    }

    render(){
        const { product } = this.props;
        return (
            <div className="card card--product">
                <div className="card__button text-nowrap">
                    <a href={product.post.amazon_link} target="_blank" className="btn btn-primary d-inline-block">
                        Buy on Amazon
                    </a>
                    {this._renderWishlistButton(product)}
                </div>
                <div className="card__price">{product.post.price}</div>
                <div className="card__image"
                    style={{backgroundImage:`url(${product.post.image})`}}>
                </div>
                <div className="card__brand">by <strong>{product.post.brand}</strong></div>
                <span className="card__name">{product.post.name}</span>
                
            </div>
        )
    }
}

export default connect((state) => ({ userStore: state.userReducer, wishlistStore: state.wishlistReducer }),{addToWishlist, removeFromWishlist})(Product)
