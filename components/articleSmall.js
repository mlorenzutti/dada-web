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
            products,
            image
        } = this.props.article.post
        return (
            <div className="article">
                <div className="row">
                    <div className="col-lg-6 col-md-4" >
                    <div className="article-image" style={{backgroundImage:"url("+image+")"}}></div>
                    </div>
                    <div className="col-lg-6 col-md-8 pt-4 d-flex flex-column justify-content-between">
                    <div className="mb-4 px-4 px-md-0 pr-md-4">
                        <h3><strong>{title}</strong></h3>
                        <p>{subtitle}</p>
                        <Link href={`/article?slug=${slug}&id=${id}`} as={`/a/${slug}/${id}/`}>
                        <a className="btn btn-primary btn-sm">Read more</a>
                        </Link>
                    </div>
                    <div className="d-none d-md-flex">
                        {products && products.slice(0, 3).map((product,key) => {
                            return (
                                <div className="card-mini bg-white p-3 mr-3 text-center" key={key}>
                                    {product.post.image && 
                                    <div className="card-mini__image"
                                        style={{backgroundImage:`url(${product.post.image})`}}
                                    >
                                    </div>
                                    }
                                    <div className="card-mini__brand d-inline-block text-truncate w-100">
                                       {product.post.brand}
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