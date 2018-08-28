export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const FETCH_ARTICLES_SYNC = 'FETCH_ARTICLES_SYNC'
export const FETCH_ARTICLE_SYNC = 'FETCH_ARTICLE_SYNC'
export const FETCH_ARTICLES_PRODUCTS = 'FETCH_ARTICLES_PRODUCTS'
export const FETCH_ARTICLE_PRODUCTS_SYNC = 'FETCH_ARTICLE_PRODUCTS_SYNC'

import {loadFirebase} from '../../utils/db'


export const fetchArticlesSync = (firebase) => {
  return {
      type: 'FETCH_ARTICLES_SYNC',
      payload: firebase.firestore().collection('articles').orderBy('added_on', 'desc').get()
  }
}

export const fetchArticleSync = (firebase,articleId) => {
    return {
        type: 'FETCH_ARTICLE_SYNC',
        payload: firebase.firestore().collection('articles').doc(articleId).get()
    }
}

export const fetchArticleProducts = (firebase,articleId) => {
    return {
        type: 'FETCH_ARTICLE_PRODUCTS_SYNC',
        payload: firebase.firestore().collection('articles').doc(articleId).collection('products').orderBy('added_on', 'desc').get()
    }
}


export const fetchAllArticleProducts = (articles) => async dispatch => {

    const firebase = await loadFirebase();

    articles.map((article,key) => {

        console.log(article.id)

        firebase.firestore().collection('articles')
        .doc(article.id)
        .collection('products')
        .orderBy('added_on', 'desc')
        .get()
        .then((snapshot) => {
            let newState = []
            snapshot.forEach(function(doc) {
                newState.push({
                    id: doc.id,
                    post: doc.data()
                });
            });
            dispatch({
                type: FETCH_ARTICLES_PRODUCTS,
                payload: {
                    articleId: article.id,
                    products: newState
                }
              })
        })

    }) 

    
  };