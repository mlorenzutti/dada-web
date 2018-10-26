import React, {Component} from 'react'
import {connect} from "react-redux"
import Link from 'next/link'
import LoginModal from './loginModal'
import SignupModal from './signupModal'
import { withNamespaces } from 'react-i18next'
import Icon from '@mdi/react'
import { mdiHomeVariant, mdiStar, mdiHeart, mdiSettings, mdiAccount } from '@mdi/js'

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
                                        <Icon 
                                        className="material-icons header-icons"
                                        color="white"
                                        path={mdiHomeVariant}
                                        size={1.2}
                                        /> {t('nav.home')}
                                    </a>
                                </Link>
                                <Link href={'/featured'} as={'/featured'}>
                                    <a className="header-link">
                                    <Icon 
                                        className="material-icons header-icons"
                                        color="white"
                                        path={mdiStar}
                                        size={1.2}
                                        /> {t('nav.featured')}
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
                            <div className="d-flex justify-content-end align-items-center">
                                <Link href={'/wishlist'} as={'/wishlist'}>
                                    <a className="header-link">
                                    <Icon 
                                        className="material-icons header-icons"
                                        color="white"
                                        path={mdiHeart}
                                        size={1.2}
                                        /> {t('nav.wishlist')}
                                    </a>
                                </Link>
                                {this.props.userStore.user == null || (this.props.userStore.user && this.props.userStore.user.isAnonymous == true) && 
                                <div>
                                    
                                    <Link href={'/settings'} as={'/settings'}>
                                        <a className="header-link">
                                            <Icon 
                                            className="material-icons header-icons"
                                            color="white"
                                            path={mdiSettings}
                                            size={1.2}
                                            /> 
                                        </a>
                                    </Link>
                                    <button onClick={() => this._toggleLoginModal()} className="btn btn-alt btn-sm">
                                         {t('nav.login')}
                                    </button>
                                </div>
                                }
                                {this.props.userStore.user && this.props.userStore.user.isAnonymous == false && 
                                <div>
                                    <Link href={'/settings'} as={'/settings'}>
                                        <a className="header-link">
                                            <Icon 
                                            className="material-icons header-icons"
                                            color="white"
                                            path={mdiSettings}
                                            size={1.2}
                                            /> {t('nav.settings')}
                                        </a>
                                    </Link>
                                </div>
                                }
                            </div>
                        </div>
                        <div className="d-block d-md-none mobile-login">
                            {this.props.userStore.user == null || (this.props.userStore.user && this.props.userStore.user.isAnonymous == true) &&
                                <button onClick={() => this._toggleLoginModal()} className="btn btn-primary btn-xs">
                                    {t('nav.join')}
                                </button>
                            }
                        </div>
                    </div>
                    
                </div>
                <div className="row no-gutters d-md-none">
                    <div className="col text-center">
                        <Link href={'/'} as={'/'}>
                            <a className={`header-link-mobile ${this.props.activePage === "index" ? "header-link-mobile__active" : ""}`}>
                            <Icon 
                                className="material-icons header-icons-mobile"
                                color="#13ddd8"
                                path={mdiHomeVariant}
                                size={.8}
                                /> 
                            </a>
                        </Link>
                    </div>
                    <div className="col text-center">
                        <Link href={'/featured'} as={'/featured'}>
                            <a className={`header-link-mobile ${this.props.activePage === "featured" ? "header-link-mobile__active" : ""}`}>
                            <Icon 
                                className="material-icons header-icons-mobile"
                                color="#13ddd8"
                                path={mdiStar}
                                size={.8}
                                /> 
                            </a>
                        </Link>
                    </div>
                    <div className="col text-center">
                        <Link href={'/wishlist'} as={'/wishlist'}>
                            <a className={`header-link-mobile ${this.props.activePage === "wishlist" ? "header-link-mobile__active" : ""}`}>
                            <Icon 
                                className="material-icons header-icons-mobile"
                                color="#13ddd8"
                                path={mdiHeart}
                                size={.8}
                                /> 
                            </a>
                        </Link>
                    </div>
                    <div className="col text-center">
                        <Link href={'/settings'} as={'/settings'}>
                            <a className={`header-link-mobile ${this.props.activePage === "settings" ? "header-link-mobile__active" : ""}`}>
                            <Icon 
                                className="material-icons header-icons-mobile"
                                color="#13ddd8"
                                path={mdiSettings}
                                size={.8}
                                /> 
                            </a>
                        </Link>
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
