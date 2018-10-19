import React from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
const ManageCategory = dynamic(() => import('./manageCategory'), {  
    ssr: false
})

class categoryItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editOpen: false,
            deleteOpen: false
        }
    }

    _toggleEditCategory = () => {
        this.setState({
            editOpen: !this.state.editOpen
        });
    }

    _toggleDeleteCategory = () => {
        this.setState({
            deleteOpen: !this.state.deleteOpen
        });
    }

    _deleteCategory = () => {
        const firebase = loadFirebase()
        firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('categories').doc(this.props.data.id).delete()
        .then(() => {
            this._toggleDeleteCategory()
        })
    }

    render(){
        const category = this.props.data
        return (
            <div className="bg-white shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between">
                <div>
                    <strong>{category.post.name}</strong>
                </div>
                <div className="flex-shrink-0 pl-2">
                    <button className="btn btn-sm btn-primary mr-2" onClick={() => this._toggleEditCategory()}><i className="material-icons">edit</i></button>
                    <button className="btn btn-sm btn-secondary btn-primary" onClick={() => this._toggleDeleteCategory()}><i className="material-icons">delete</i></button>
                </div>
                {this.state.editOpen && 
                <ManageCategory modalOpen={this.state.editOpen} data={category} toggle={this._toggleEditCategory} />
                }
                <Modal size={'sm'} isOpen={this.state.deleteOpen} toggle={this._toggleDeleteCategory}>
                    <ModalHeader toggle={this.props._toggleDeleteCategory}>Delete Category</ModalHeader>
                    <ModalBody className="pt-0">
                        Are you sure you want to delete this category?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this._deleteCategory}>Yes, delete it</Button>{' '}
                        <Button color="secondary" onClick={this._toggleDeleteCategory}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect((state) => ({ countryStore: state.countryReducer }),null)(categoryItem)