import React from 'react'
import {connect} from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { loginWithGoogle, loginWithFacebook, signupWithEmail} from '../utils/login'
import { Field, reduxForm } from 'redux-form'
import { facebookIcon, googleIcon } from '../utils/icons'

const validate = values => {
    const errors = {}
    
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (!values.repeat_password) {
      errors.repeat_password = 'Required'
    } else if (values.password != values.repeat_password) {
      errors.repeat_password = 'The password must be the same'
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

class SignupModal extends React.Component {

    componentDidUpdate(prevProps){
        if (prevProps.userStore.user && prevProps.userStore.user.isAnonymous == true && this.props.userStore.user.isAnonymous == false && this.props.modalOpen){
            this.props.toggle()
        }
    }
      
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}/>
            <ModalBody className="pt-0">
                <div className="px-4 pb-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <h2><strong>Sign up now!</strong></h2>
                                <p>Amazon products for a modern way of living</p>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-lg btn-primary btn-google btn-block mb-3" onClick={() => loginWithGoogle()}>{googleIcon()} Sign up with Google</button>
                                <button className="btn btn-lg btn-primary btn-facebook btn-block" onClick={() => loginWithFacebook()}>{facebookIcon()} Sign up with Facebook</button>
                            </div>
                            <div className="text-center my-4">
                                <strong>OR</strong>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(signupWithEmail)}>
                                    <Field name="email" type="email" component={renderField} label="Email" />
                                    <Field name="password" type="password" component={renderField} label="Password" />
                                    <Field name="repeat_password" type="password" component={renderField} label="Repeat Password" />
                                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg btn-block mt-3">
                                        Sign up
                                    </button>
                                </form>
                            </div>  
                            <div className="mt-3">
                                <small>By clicking Sign Up, you agree to our <a href="#">Terms</a>. Learn how we use cookies and similar technology in our <a href="#">Cookies Policy</a>.</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </ModalBody>
            </Modal>
        );
  }
}

SignupModal = reduxForm({
    form: 'signupForm', // a unique identifier for this form
    validate // <--- warning function given to redux-form
  })(SignupModal)

export default connect((state) => ({ userStore: state.userReducer }),null)(SignupModal)



