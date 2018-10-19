import React from 'react'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
import ProductItem from './productItem'

class productsList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const firebase = loadFirebase()
        const countryCode = this.props.countryStore.currentCountry.code
        firebase.firestore().collection('sites').doc(countryCode).collection('products')
        .orderBy('added_on', 'desc')
        .onSnapshot(snapshot => {
            let products = []
            snapshot.forEach((doc) => {
                products.push({
                    id: doc.id,
                    post: {
                        ...doc.data()
                    }
                });
            });
            this.setState({products})
        })
    }

    render(){
        return (
            <div className="row mt-3">
                {this.state.products.map((product) => {
                    return (
                        <div className="col-sm-6" key={product.id}>
                            <ProductItem data={product} />
                        </div>
                    )
                })}
            </div>
        )
    }


}

export default connect((state) => ({ userStore: state.userReducer, countryStore: state.countryReducer }),null)(productsList)  