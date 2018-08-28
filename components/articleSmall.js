import React, {Component} from 'react'
import Link from 'next/link'
import {connect} from "react-redux"

class ArticleSmall extends Component {
    render(){
        const { 
            id
        } = this.props.article
        const {
            subtitle,
            slug,
            title,
            products
        } = this.props.article.post
        console.log(products)
        return (
            <div className="bg-white">
                <div className="row">
                    <div className="col-sm-6" >
                    <div style={{height:300,backgroundImage:"url(https://cdn.mos.cms.futurecdn.net/yGg9PE8Dv2WgpDTtYCAMa-970-80.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    </div>
                    <div className="col-sm-6 pt-4 px-4 d-flex flex-column justify-content-between">
                    <div>
                        <h3><strong>{title}</strong></h3>
                        <p>{subtitle}</p>
                        <Link href={`/article?slug=${slug}&id=${id}`} as={`/a/${slug}/${id}/`}>
                        <a className="btn btn-primary btn-sm">Read more</a>
                        </Link>
                    </div>
                    <div className="d-flex">
                        {products && products.slice(0, 3).map((product,key) => {
                            return (
                                <div className="card-mini bg-white p-3 mr-3 text-center" key={key}>
                                    <div className="card-mini__image"
                                        style={{backgroundImage:`url(${product.post.image})`}}
                                    >
                                    </div>
                                    <div className="card-mini__brand">
                                        <small><strong>{product.post.brand}</strong></small>
                                    </div>
                                    <small className="card-mini__name d-inline-block text-truncate w-100">{product.post.name}</small>
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

export default ArticleSmall