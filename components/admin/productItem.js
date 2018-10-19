import React from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class productItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            deleteOpen: false
        }
    }

    _toggleDeleteProduct = () => {
        this.setState({
            deleteOpen: !this.state.deleteOpen
        });
    }

    _deleteProduct = () => {
        const firebase = loadFirebase()
        firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('products').doc(this.props.data.id).delete()
        .then(() => {
            this._toggleDeleteProduct()
        })
    }

    render(){
        const product = this.props.data
        return (
            <div className="bg-white shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between">
                <div className="mr-3">
                    <img width="40" src={product.post.image} />
                </div>
                <div className="flex-grow-1">
                    <strong>{product.post.name}</strong><br/>
                    {product.post.brand}<br/>
                    {product.post.currency} {product.post.price}
                </div>
                <div className="flex-shrink-0 pl-2">
                    <button className="btn btn-sm btn-secondary btn-primary" onClick={() => this._toggleDeleteProduct()}><i className="material-icons">delete</i></button>
                </div>
                <Modal size={'sm'} isOpen={this.state.deleteOpen} toggle={this._toggleDeleteProduct}>
                    <ModalHeader toggle={this.props._toggleDeleteProduct}>Delete Product</ModalHeader>
                    <ModalBody className="pt-0">
                        Are you sure you want to delete this product?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this._deleteProduct}>Yes, delete it</Button>{' '}
                        <Button color="secondary" onClick={this._toggleDeleteProduct}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect((state) => ({ countryStore: state.countryReducer }),null)(productItem)