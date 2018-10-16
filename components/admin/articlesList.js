import React from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
import ArticleItem from './articleItem'



class articleList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const firebase = loadFirebase()
        const countryCode = this.props.countryStore.currentCountry.code
        firebase.firestore().collection('sites').doc(countryCode).collection('articles')
        .orderBy('added_on', 'desc')
        .onSnapshot(snapshot => {

            let newState = []
  
            snapshot.forEach((doc) => {

                firebase.firestore().collection('sites').doc(countryCode).collection('articles')
                .doc(doc.id)
                .collection('products')
                .get()
                .then((snapshotProducts) => {
                    
                    let products = []
                    snapshotProducts.forEach(function(docProducts) {
                        products.push(docProducts.id)                
                    });
                    newState.push({
                        id: doc.id,
                        post: {
                            ...doc.data(),
                            products
                        }
                    });
                    this.setState({articles: newState})
                })
               
            });

            

        })
    }

    render(){
        return (
            <div>
                {this.state.articles.map((article) => {
                    return (
                        <ArticleItem data={article} key={article.id}/>
                    )
                })}
            </div>
        )
    }


}

export default connect((state) => ({ userStore: state.userReducer, countryStore: state.countryReducer }),null)(articleList)