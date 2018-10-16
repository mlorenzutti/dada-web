import React from 'react'
import {connect} from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { loginWithGoogle, loginWithFacebook, loginWithEmail } from '../utils/login'
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

class LoginModal extends React.Component {

    _openSignupModal = (e) => {
        e.preventDefault()
        this.props.openSignup()
        this.props.toggle()
    }

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
                                <h2><strong>KIDADA</strong></h2>
                                <p>Amazon products for a modern way of living</p>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-lg btn-primary btn-google btn-block mb-3" onClick={() => loginWithGoogle()}>{googleIcon()} Sign in with Google</button>
                                <button className="btn btn-lg btn-primary btn-facebook btn-block" onClick={() => loginWithFacebook()}>{facebookIcon()} Sign in with Facebook</button>
                            </div>
                            <div className="text-center my-4">
                                <strong>OR</strong>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(loginWithEmail)}>
                                    <Field name="email" type="email" component={renderField} label="Email" />
                                    <Field name="password" type="password" component={renderField} label="Password" />
                                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg btn-block mt-3">
                                        Log in
                                    </button>
                                </form>
                            </div>  
                            <div className="text-center mt-4">
                                <span className="text-secondary">Not on Kidada yet?</span> <a href="signup" onClick={(e) => this._openSignupModal(e)}>Register Now</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </ModalBody>
            </Modal>
        );
  }
}

LoginModal = reduxForm({
    form: 'loginForm', // a unique identifier for this form
    validate // <--- warning function given to redux-form
  })(LoginModal)

export default connect((state) => ({ userStore: state.userReducer }),null)(LoginModal)



