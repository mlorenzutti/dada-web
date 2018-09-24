import React, {Component} from 'react'
import Link from 'next/link'
import {connect} from "react-redux"

class ArticleFeatured extends Component {
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
            <Link href={`/article?slug=${slug}&id=${id}`} as={`/a/${slug}/${id}/`}>
                <div className="article-feat" style={{backgroundImage:"url("+image+")"}}>
                    <div className="article-feat__text">
                    <h1>{title}</h1>
                    <h4 className="d-none d-md-block">{subtitle}</h4>
                    </div>
                </div>
            </Link>
        )
    }

}

export default ArticleFeatured