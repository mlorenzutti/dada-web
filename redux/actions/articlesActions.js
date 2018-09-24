export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const FETCH_ARTICLES_SYNC = 'FETCH_ARTICLES_SYNC'
export const FETCH_ARTICLE_SYNC = 'FETCH_ARTICLE_SYNC'
export const FETCH_ARTICLES_PRODUCTS = 'FETCH_ARTICLES_PRODUCTS'
export const FETCH_ARTICLE_PRODUCTS = 'FETCH_ARTICLE_PRODUCTS'

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

export const fetchArticleProducts = (articleId,countryCode) => async dispatch => {

    

    const firebase = await loadFirebase();
    
    firebase.firestore().collection('articles')
        .doc(articleId)
        .collection('products')
        .get()
        .then((snapshot) => {
            let promises = []
            snapshot.forEach(function(doc) {
                promises.push(firebase.firestore().collection('sites').doc(countryCode).collection('products').doc(doc.id).get())                
            });
            
            Promise.all(promises).then(values => {

                const newState = []
                
                values.forEach(function(doc){    
                    if (doc.data()){                
                        newState.push({
                            id: doc.id,
                            post: doc.data()
                        })
                    }
                })    

                dispatch({
                    type: FETCH_ARTICLE_PRODUCTS,
                    payload: newState
                })
            })
            
        })
}


export const fetchAllArticleProducts = (articles,countryCode) => async dispatch => {

    const firebase = await loadFirebase();

    articles.map((article,key) => {


        firebase.firestore().collection('articles')
        .doc(article.id)
        .collection('products')
        .get()
        .then((snapshot) => {
            let promises = []
            snapshot.forEach(function(doc) {
                promises.push(firebase.firestore().collection('sites').doc(countryCode).collection('products').doc(doc.id).get())                
            });
            
            Promise.all(promises).then(values => {

                const newState = []
                
                values.forEach(function(doc){                    
                    newState.push({
                        id: doc.id,
                        post: doc.data()
                    })
                })    

                dispatch({
                    type: FETCH_ARTICLES_PRODUCTS,
                    payload: {
                        articleId: article.id,
                        products: newState
                    }
                })
            })
            
        })

    }) 

    
  };