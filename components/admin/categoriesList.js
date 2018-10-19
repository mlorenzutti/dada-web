import React from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
import CategoryItem from './categoryItem'



class categoriesList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const firebase = loadFirebase()
        const countryCode = this.props.countryStore.currentCountry.code
        firebase.firestore().collection('sites').doc(countryCode).collection('categories')
        .orderBy('name', 'desc')
        .onSnapshot(snapshot => {

            let categories = []
  
            snapshot.forEach((doc) => {

                categories.push({
                    id: doc.id,
                    post: doc.data()
                });
                
               
            });

            this.setState({categories})

            

        })
    }

    render(){
        return (
            <div>
                {this.state.categories.map((category) => {
                    return (
                        <CategoryItem data={category} key={category.id}/>
                    )
                })}
            </div>
        )
    }


}

export default connect((state) => ({ userStore: state.userReducer, countryStore: state.countryReducer }),null)(categoriesList)