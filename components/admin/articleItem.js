import React from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
const ManageArticle = dynamic(() => import('./manageArticle'), {  
    ssr: false
})

class articleItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editOpen: false,
            deleteOpen: false
        }
    }

    _toggleEditArticle = () => {
        this.setState({
            editOpen: !this.state.editOpen
        });
    }

    _toggleDeleteArticle = () => {
        this.setState({
            deleteOpen: !this.state.deleteOpen
        });
    }

    _deleteArticle = () => {
        const firebase = loadFirebase()
        firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').doc(this.props.data.id).delete()
        .then(() => {
            this._toggleDeleteArticle()
        })
    }

    render(){
        const article = this.props.data
        return (
            <div className="bg-white shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between">
                <div>
                    <strong>{article.post.title}</strong><br/>
                    {article.post.subtitle}
                </div>
                <div className="flex-shrink-0 pl-2">
                    <button className="btn btn-sm btn-primary mr-2" onClick={() => this._toggleEditArticle()}><i className="material-icons">edit</i></button>
                    <button className="btn btn-sm btn-secondary btn-primary" onClick={() => this._toggleDeleteArticle()}><i className="material-icons">delete</i></button>
                </div>
                {this.state.editOpen && 
                <ManageArticle modalOpen={this.state.editOpen} data={article} toggle={this._toggleEditArticle} />
                }
                <Modal size={'sm'} isOpen={this.state.deleteOpen} toggle={this._toggleDeleteArticle}>
                    <ModalHeader toggle={this.props._toggleDeleteArticle}>Delete Article</ModalHeader>
                    <ModalBody className="pt-0">
                        Are you sure you want to delete this article?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this._deleteArticle}>Yes, delete it</Button>{' '}
                        <Button color="secondary" onClick={this._toggleDeleteArticle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect((state) => ({ countryStore: state.countryReducer }),null)(articleItem)