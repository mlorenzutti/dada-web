import React, {Component} from 'react'
import {connect} from "react-redux"
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlistActions"
import { AMAZON_TAG, currencySymbol } from '../utils/const'
import { withNamespaces } from 'react-i18next'

class Product extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            active: this._isInWishlist(this.props.product)
        }
    }


    _isInWishlist = (product) => {
        var result = this.props.wishlistStore.products.find((item) => {
            return item.id == product.id
        })
        return result!=undefined
    }

    _removeFromWishlist = (uid, product, countrycode) => {
        this.setState({active:false})
        this.props.removeFromWishlist(uid,product,countrycode)
    }

    _addFromWishlist = (uid, product, countrycode) => {
        this.setState({active:true})
        this.props.addToWishlist(uid,product,countrycode)
    }

    _renderWishlistButton = (product) => {
        if (this.state.active){
            return (
                <button 
                        onClick={() => this._removeFromWishlist(this.props.userStore.user.uid,product,this.props.countryStore.currentCountry.code)}
                        className="btn btn-primary ml-2 d-inline-block"
                    ><i className="material-icons">favorite</i></button>
            )
        }else{
            return (
                <button 
                        onClick={() => this._addFromWishlist(this.props.userStore.user.uid,product,this.props.countryStore.currentCountry.code)}
                        className="btn btn-primary ml-2 d-inline-block"
                    ><i className="material-icons">favorite_border</i></button>
            )
        }
    }

    render(){
        const { t, product } = this.props;
        return (
            <div className="card card--product">
                <a href={`${product.post.amazon_link}${AMAZON_TAG}`} target="_blank" className="card__link"></a>
                <div className="card__price">{product.post.currency && currencySymbol(product.post.currency)} {product.post.price}</div>
                {product.post.image && 
                <div className="card__image"
                    style={{backgroundImage:`url(${product.post.image})`}}>
                </div>
                }
                <div className="card__button ">
                    <a href={`${product.post.amazon_link}${AMAZON_TAG}`} target="_blank" className="btn btn-primary d-inline-block">
                        {t('cta')}
                    </a>
                    {this._renderWishlistButton(product)}
                </div>
                <div className="card__brand">{t('by')} <strong>{product.post.brand}</strong></div>
                <span className="card__name">{product.post.name}</span>
                
            </div>
        )
    }
}

Product = withNamespaces('common')(Product)

export default connect((state) => ({ userStore: state.userReducer, wishlistStore: state.wishlistReducer, countryStore: state.countryReducer }),{addToWishlist, removeFromWishlist})(Product)
