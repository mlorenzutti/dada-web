import React, {Component} from 'react'
import {connect} from "react-redux"
import Link from 'next/link'
import LoginModal from './loginModal'
import SignupModal from './signupModal'
import { withNamespaces } from 'react-i18next'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginModal: false,
            signupModal: false
        }
      }
    
    _toggleLoginModal = () => {
        this.setState({
            loginModal: !this.state.loginModal
        });
    }
    _toggleSignupModal = () => {
        this.setState({
            signupModal: !this.state.signupModal
        });
    }

    render(){
        const { t } = this.props
        return (
            <nav className="py-md-3 sticky-top navbar-light bg-white">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 d-none d-md-block">
                            <div className="d-flex">
                                <Link href={'/'} as={'/'}>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">home</i> {t('nav.home')}
                                    </a>
                                </Link>
                                <Link href={'/featured'} as={'/featured'}>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">star</i> {t('nav.featured')}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <Link href={'/'} as={'/'}>
                                <a className="navbar-brand mr-0">
                                    <img src="/static/images/logo.svg" width="70" height="40" className="d-inline-block align-top" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-5 d-none d-md-block justify-content-end">
                            <div className="d-flex justify-content-end">
                                <Link href={'/wishlist'} as={'/wishlist'}>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">favorite</i> {t('nav.wishlist')}
                                    </a>
                                </Link>
                                {this.props.userStore.user == null || (this.props.userStore.user && this.props.userStore.user.isAnonymous == true) && 
                                <button onClick={() => this._toggleLoginModal()} className="header-link">
                                    <i className="material-icons header-icons">face</i> {t('nav.login')}
                                </button>
                                }
                                {this.props.userStore.user && this.props.userStore.user.isAnonymous == false && 
                                <Link href={'/settings'} as={'/settings'}>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">settings</i> {t('nav.settings')}
                                    </a>
                                </Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-between d-md-none">
                        <div className="col-auto">
                            <Link href={'/'} as={'/'}>
                                <a className="header-link-mobile">
                                    <i className="material-icons header-icons-mobile">home</i> {t('nav.home')}
                                </a>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link href={'/featured'} as={'/featured'}>
                                <a className="header-link-mobile">
                                    <i className="material-icons header-icons-mobile">star</i> {t('nav.featured')}
                                </a>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link href={'/wishlist'} as={'/wishlist'}>
                                <a className="header-link-mobile">
                                    <i className="material-icons header-icons-mobile">favorite</i> {t('nav.wishlist')}
                                </a>
                            </Link>
                        </div>   
                    </div>
                </div>
                <LoginModal modalOpen={this.state.loginModal} toggle={this._toggleLoginModal} openSignup={this._toggleSignupModal}/>
                <SignupModal modalOpen={this.state.signupModal} toggle={this._toggleSignupModal} />
            </nav>
        )
    }

}

Header = withNamespaces('common')(Header)

export default connect((state) => ({ userStore: state.userReducer }),null)(Header)
