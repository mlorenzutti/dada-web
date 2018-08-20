import React, {Component} from 'react'

class Product extends Component {
    render(){
        const { data } = this.props;
        return (
            <div className="card card--product">
                <a href={data.post.amazon_link} target="_blank">
                <div className="card__button text-nowrap">
                    <button className="btn btn-primary d-inline-block">
                        Buy on Amazon
                    </button>
                    <button className="btn btn-primary ml-2 d-inline-block"><i className="material-icons">favorite_border</i></button>
                </div>
                <div className="card__price">{data.post.price}</div>
                <div className="card__image"
                    style={{backgroundImage:`url(${data.post.image})`}}>
                </div>
                <div className="card__brand">by <strong>{data.post.brand}</strong></div>
                <span className="card__name">{data.post.name}</span>
                </a>
            </div>
        )
    }

}

export default Product