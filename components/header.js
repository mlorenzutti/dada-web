import React, {Component} from 'react'
import Link from 'next/link'

class Header extends Component {
    render(){
        return (
            <nav className="row py-3 sticky-top navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-5">
                            <div className="navbar-nav">
                                <Link href={'/'} as={'/'} prefetch>
                                    <a className="nav-item nav-link active">
                                        <i className="material-icons header-icons">home</i> Home
                                    </a>
                                </Link>
                                <a className="nav-item nav-link active" href="#">
                                    <i className="material-icons header-icons">star</i> Featured
                                </a>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <Link href={'/'} as={'/'} prefetch>
                                <a className="navbar-brand mr-0">
                                    <img src="/static/images/logo.svg" width="70" height="40" className="d-inline-block align-top" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-5 justify-content-end">
                            <div className="navbar-nav justify-content-end">
                                <Link href={'/wishlist'} as={'/wishlist'} prefetch>
                                    <a className="nav-item nav-link active">
                                        <i className="material-icons header-icons">favorite</i> Wishlist
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
              
                </div>
            </nav>
        )
    }

}

export default Header