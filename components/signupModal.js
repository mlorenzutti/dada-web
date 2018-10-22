import React from 'react'
import {connect} from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { loginWithGoogle, loginWithFacebook, signupWithEmail} from '../utils/login'
import { Field, reduxForm } from 'redux-form'
import { facebookIcon, googleIcon } from '../utils/icons'
import { withNamespaces } from 'react-i18next'
import i18n from '../i18n'

const validate = values => {
    const errors = {}
    
    if (!values.email) {
      errors.email = i18n.t('form.error_required')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = i18n.t('form.error_invalid_email')
    }
    if (!values.password) {
      errors.password = i18n.t('form.error_required')
    } else if (!values.repeat_password) {
      errors.repeat_password = i18n.t('form.error_required')
    } else if (values.password != values.repeat_password) {
      errors.repeat_password = i18n.t('form.error_password_same')
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
        const { handleSubmit, pristine, reset, submitting, t } = this.props
        return (
            <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}/>
            <ModalBody className="pt-0">
                <div className="px-4 pb-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <h2><strong>{t('signup.title')}</strong></h2>
                                <p>{t('signup.headline')}</p>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-lg btn-primary btn-google btn-block mb-3" onClick={() => loginWithGoogle()}>{googleIcon()} {t('signup.signup_google')}</button>
                                <button className="btn btn-lg btn-primary btn-facebook btn-block" onClick={() => loginWithFacebook()}>{facebookIcon()} {t('signup.signup_facebook')}</button>
                            </div>
                            <div className="text-center my-4">
                                <strong>{t('signup.or')}</strong>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(signupWithEmail)}>
                                    <Field name="email" type="email" component={renderField} label={t('form.email')} />
                                    <Field name="password" type="password" component={renderField} label={t('form.password')} />
                                    <Field name="repeat_password" type="password" component={renderField} label={t('form.repeat_password')} />
                                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg btn-block mt-3">
                                        {t('signup.signup_cta')}
                                    </button>
                                </form>
                            </div>  
                            <div className="mt-3">
                                <small dangerouslySetInnerHTML={{__html: t('signup.agree', { linkterms:"/termscondition" , linkcookie:"/cookiepolicy" , interpolation: {escapeValue: false}})}} />

                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </ModalBody>
            </Modal>
        );
  }
}

SignupModal = withNamespaces('common')(SignupModal)

SignupModal = reduxForm({
    form: 'signupForm', // a unique identifier for this form
    validate // <--- warning function given to redux-form
  })(SignupModal)

export default connect((state) => ({ userStore: state.userReducer }),null)(SignupModal)



