import React, {Component} from 'react'
import Link from 'next/link'

class Header extends Component {
    render(){
        return (
            <nav className="py-md-3 sticky-top navbar-light bg-white">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 d-none d-md-block">
                            <div className="d-flex">
                                <Link href={'/'} as={'/'} prefetch>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">home</i> Home
                                    </a>
                                </Link>
                                <Link href={'/featured'} as={'/featured'} prefetch>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">star</i> Featured
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <Link href={'/'} as={'/'} prefetch>
                                <a className="navbar-brand mr-0">
                                    <img src="/static/images/logo.svg" width="70" height="40" className="d-inline-block align-top" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-5 d-none d-md-block justify-content-end">
                            <div className="d-flex justify-content-end">
                                <Link href={'/wishlist'} as={'/wishlist'} prefetch>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">favorite</i> Wishlist
                                    </a>
                                </Link>
                                <Link href={'/settings'} as={'/settings'} prefetch>
                                    <a className="header-link">
                                        <i className="material-icons header-icons">settings</i> Settings
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-between d-md-none">
                        <div className="col-auto">
                            <Link href={'/'} as={'/'} prefetch>
                                <a className="header-link-mobile">
                                    <i className="material-icons header-icons-mobile">home</i> Home
                                </a>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link href={'/featured'} as={'/featured'} prefetch>
                                <a className="header-link-mobile">
                                    <i className="material-icons header-icons-mobile">star</i> Featured
                                </a>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link href={'/wishlist'} as={'/wishlist'} prefetch>
                                <a className="header-link-mobile">
                                    <i className="material-icons header-icons-mobile">favorite</i> Wishlist
                                </a>
                            </Link>
                        </div>
                    </div>
                    
              
                </div>
            </nav>
        )
    }

}

export default Header