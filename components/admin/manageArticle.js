import React from 'react'
import {connect} from "react-redux"
import { Field, reduxForm } from 'redux-form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import WysiwygEditor from './formField/wysiwygEditor'
import ProductsPicker from './formField/productsPicker'
import ImageUploader from './formField/imageUploader'
import {loadFirebase} from '../../utils/db'

const validate = values => {
    const errors = {}
    
    if (!values.title) {
        errors.title = 'Required'
    } 
    if (!values.subtitle) {
        errors.subtitle = 'Required'
    } 
    if (!values.subtitle) {
        errors.subtitle = 'Required'
    }
    if (!values.text) {
        errors.text = 'Required'
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

class addArticle extends React.Component {

    handleFormSubmit({title, subtitle, meta_title, meta_description, slug, text, image, status, products }) {
        const firebase = loadFirebase()
        const articleObject = {
            title,
            subtitle,
            meta_title,
            meta_description,
            status,
            image,
            slug,
            added_on: firebase.firestore.FieldValue.serverTimestamp(),
            text
        }

        
        if (this.props.data){
            //EDIT ARTICLE
            articleObject.added_on = this.props.data.post.added_on
            articleObject.updated_on = firebase.firestore.FieldValue.serverTimestamp()
            const articleId = this.props.data.id
            firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').doc(articleId).collection('products').get()
            .then(snapshot => {
                snapshot.forEach((ref) => {          
                    console.log(ref)          
                    firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').doc(articleId).collection('products').doc(ref.id).delete()
                })
                products.map((item) => {
                    firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').doc(articleId).collection('products').doc(item).set({})
                })
            })
            firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').doc(articleId).set(articleObject)
            .then(docRef => {
                console.log("article updated")
                this.props.toggle()
            })
            .catch(error => {
                console.log(error)
            })
        }else{
            //ADD ARTICLE
            firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').add(articleObject)
            .then(docRef => {
                const articleId = docRef.id
                products.map((item) => {
                    firebase.firestore().collection('sites').doc(this.props.countryStore.currentCountry.code).collection('articles').doc(articleId).collection('products').doc(item).set({})
                })
                this.props.toggle()
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    render(){
        console.log(this.props.data)
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
                                    {this.props.data ? ( "Edit article" ) : ( "Write a new article" ) }</h2>
                                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="title" type="text" component={renderField} label="Title" />
                                        </div>
                                        <div className="col-md-6">
                                            <Field name="subtitle" type="text" component={renderField} label="Subtitle" />
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
                                        <div className="col-md-6">
                                            <Field className="form-control form-control-lg" name="status" component="select">
                                                <option value="published">Published</option>
                                                <option value="draft">Draft</option>
                                            </Field>
                                        </div>
                                        <div className="col-md-6">
                                            <Field name="slug" type="text" component={renderField} label="Slug" />
                                        </div>
                                    </div>
                                    <Field name="text" component={WysiwygEditor} label="Text" />
                                    <h4 className="my-4 text-center">Article Image</h4>
                                    <Field name="image" component={ImageUploader}  />
                                    <h4 className="my-4 text-center">Select Products</h4>
                                    <Field name="products" component={ProductsPicker}  />
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


addArticle = reduxForm({
    form: 'addArticle', // a unique identifier for this form
    validate, // <--- warning function given to redux-form
    enableReinitialize: true
  })(addArticle)

export default connect((state, ownProps) => ({ initialValues: ownProps.data && ownProps.data.post, userStore: state.userReducer, countryStore: state.countryReducer }),null)(addArticle)