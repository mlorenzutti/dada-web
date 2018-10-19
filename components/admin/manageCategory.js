import React from 'react'
import {connect} from "react-redux"
import { Field, reduxForm } from 'redux-form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ImageUploader from './formField/imageUploader'
import {loadFirebase} from '../../utils/db'

const validate = values => {
    const errors = {}
    
    if (!values.name) {
        errors.name = 'Required'
    } 
    if (!values.slug) {
        errors.slug = 'Required'
    } 

    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
        <input {...input} className="form-control form-control-lg" placeholder={label} type={type} />
        {touched &&
            ((error && <div style={{'display':'block'}}className="invalid-feedback">{error}</div>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

class addCategory extends React.Component {

    handleFormSubmit({name, description, slug, image, meta_title, meta_description }) {
        const firebase = loadFirebase()
        const categoryObject = {
            name,
            slug,
            image: image ? image : null,
            description: description ? description : null,
            meta_title: meta_title ? meta_title : null,
            meta_description: meta_description ? meta_description : null,
            added_on: firebase.firestore.FieldValue.serverTimestamp(),
        }
        if (this.props.data){
            //EDIT CATEGORY
            categoryObject.added_on = this.props.data.post.added_on
            categoryObject.updated_on = firebase.firestore.FieldValue.serverTimestamp()
            const categoryId = this.props.data.id
            firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('categories').doc(categoryId).set(categoryObject)
            .then(docRef => {
                console.log("category updated")
                this.props.toggle()
            })
            .catch(error => {
                console.log(error)
            })
        }else{
            //ADD CATEGORY
            firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('categories').add(categoryObject)
            .then(docRef => {
                this.props.toggle()
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <Modal size={'lg'} isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}/>
            <ModalBody className="pt-0">
                <div className="px-4 pb-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div>
                                <h2 className="mb-4 text-center">
                                    {this.props.data ? ( "Edit category" ) : ( "Add a new category" ) }</h2>
                                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="name" type="text" component={renderField} label="Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <Field name="description" type="text" component={renderField} label="Description" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="meta_title" type="text" component={renderField} label="Meta Title" />
                                        </div>
                                        <div className="col-md-6">
                                            <Field name="meta_description" type="text" component={renderField} label="Meta Description" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Field name="slug" type="text" component={renderField} label="Slug" />
                                        </div>
                                    </div>
                                    <h4 className="my-4 text-center">Category Image</h4>
                                    <Field name="image" component={ImageUploader}  />
                                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg btn-block my-4">
                                        {this.props.data ? ( "Edit" ) : ( "Send" ) }
                                    </button>
                                    
                                </form>
                            </div>  
                            
                        </div>
                    </div>
                    
                </div>
                
                
            </ModalBody>
            </Modal>
        )
    }

}


addCategory = reduxForm({
    form: 'addCategory', // a unique identifier for this form
    validate, // <--- warning function given to redux-form
    enableReinitialize: true
  })(addCategory)

export default connect((state, ownProps) => ({ initialValues: ownProps.data && ownProps.data.post, userStore: state.userReducer, countryStore: state.countryReducer }),null)(addCategory)