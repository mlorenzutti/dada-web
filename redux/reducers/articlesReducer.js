import {
    FETCH_ARTICLES_SYNC,
    FETCH_ARTICLES_PRODUCTS,
    FETCH_ARTICLE_PRODUCTS_SYNC,
    FETCH_ARTICLE_SYNC
} from '../actions/articlesActions'  

const INITIAL_STATE = { articles: [], currentArticle: null }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTICLES_SYNC:
            return {
                ...state, articles: action.payload
            }
        case FETCH_ARTICLE_SYNC:
            return {
                ...state, currentArticle: action.payload
            }
        case FETCH_ARTICLE_PRODUCTS_SYNC:
            return {
                ...state,
                currentArticle: {
                    ...state.currentArticle,
                    products: action.payload
                }
            }
        case FETCH_ARTICLES_PRODUCTS:
            return {
                ...state, 
                articles: state.articles.map(
                    (article, i) => article.id === action.payload.articleId ? {...article, post: { ...article.post, products: action.payload.products  } }
                                            : article
                )
            }
        default:
            return state;
    }

}