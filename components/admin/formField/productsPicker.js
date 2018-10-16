import React, {Component} from 'react';
import {connect} from "react-redux"
import {loadFirebase} from '../../../utils/db'

class ProductsPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {products: [], selectedProducts: this.props.input.value ? this.props.input.value : []};
    }

    componentDidMount(){
        const firebase = loadFirebase();
        firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('products').orderBy('added_on', 'desc').get()
        .then(snapshot => {
            
            const productList = []
            snapshot.forEach(function(doc){
                productList.push({
                    id: doc.id,
                    data: doc.data()
                });
            })
            this.setState({products:productList})
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidUpdate(){
        this.props.input.onChange(this.state.selectedProducts)
    }

    _toggleProduct = (productId) => {

        if (this.state.selectedProducts.indexOf(productId) != -1){
            const selectedProducts = this.state.selectedProducts.filter(item => item !== productId)
            this.setState({selectedProducts})
        }else{
            const selectedProducts = this.state.selectedProducts
            selectedProducts.push(productId)
            this.setState({selectedProducts})
        }
    }

    _printProduct = (product) => {
        const productData = product.data
        const productId = product.id
        const isSelected = this.state.selectedProducts.indexOf(productId) != -1
        return (
            
                <div className="product-picker" onClick={() => this._toggleProduct(productId)}>
                    <div className="product-picker__select">
                        {isSelected ? ( 
                            <i className="material-icons">check_box</i>

                        ) : (
                            <i className="material-icons">check_box_outline_blank</i>
                        )}
                    </div>
                    <div className="product-picker__image" style={{backgroundImage:"url("+productData.image+")"}}>
                        
                    </div>
                    <div className="product-picker__text">
                        {productData.name}
                    </div>
                    
                </div>
            
        )
    }

    render(){
        return (
            <div className="products-picker">
                <div className="row">
                    {this.state.products.map((product) => {
                        return (
                            <div key={product.id} className="col-sm-6">{this._printProduct(product)}</div>
                        )
                    })} 
                </div>
            </div>
        );
    }
}

export default connect((state) => ({ countryStore: state.countryReducer }),null)(ProductsPicker)
