import React from 'react'
import {connect} from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { loginWithGoogle, loginWithFacebook, loginWithEmail } from '../utils/login'
import { Field, reduxForm } from 'redux-form'
import { facebookIcon, googleIcon } from '../utils/icons'
import { withNamespaces } from 'react-i18next'
import i18n from '../i18n'



function validate (values){
    const errors = {}
    
    if (!values.email) {
      errors.email = i18n.t('form.error_required')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = i18n.t('form.error_invalid_email')
    }
    if (!values.password) {
      errors.password = i18n.t('form.error_required')
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
        const { handleSubmit, pristine, reset, submitting, t } = this.props
        return (
            <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}/>
            <ModalBody className="pt-0">
                <div className="px-md-4 px-2 pb-3 pb-md-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <h2><strong>{t('login.title')}</strong></h2>
                                <p>{t('login.headline')}</p>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-lg btn-primary btn-google btn-block mb-3" onClick={() => loginWithGoogle()}>{googleIcon()} {t('login.login_google')}</button>
                                <button className="btn btn-lg btn-primary btn-facebook btn-block" onClick={() => loginWithFacebook()}>{facebookIcon()} {t('login.login_facebook')}</button>
                            </div>
                            <div className="text-center my-4">
                                <strong>{t('login.or')}</strong>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(loginWithEmail)}>
                                    <Field name="email" type="email" component={renderField} label={t('form.email')} />
                                    <Field name="password" type="password" component={renderField} label={t('form.password')} />
                                    <button type="submit" disabled={submitting} className="btn btn-alt btn-lg btn-block mt-3">
                                        {t('login.login_cta')}
                                    </button>
                                </form>
                            </div>  
                            <div className="text-center mt-4">
                                <span className="text-secondary">{t('login.not_registered')}</span> <a href="signup" onClick={(e) => this._openSignupModal(e)}>{t('login.signup_now')}</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </ModalBody>
            </Modal>
        );
  }
}

LoginModal = withNamespaces('common')(LoginModal)

LoginModal = reduxForm({
    form: 'loginForm', // a unique identifier for this form
    validate // <--- warning function given to redux-form
  })(LoginModal)

export default connect((state) => ({ userStore: state.userReducer }),null)(LoginModal)



