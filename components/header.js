import React, {Component} from 'react'

class Header extends Component {
    render(){
        return (
            <nav className="row py-3 sticky-top navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-5">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">
                                    <i className="material-icons header-icons">home</i> Home
                                </a>
                                <a className="nav-item nav-link active" href="#">
                                    <i className="material-icons header-icons">star</i> Featured
                                </a>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <a className="navbar-brand mr-0" href="#">
                                <img src="/static/images/logo.svg" width="70" height="40" className="d-inline-block align-top" alt="" />
                            </a>
                        </div>
                        <div className="col-5 justify-content-end">
                            <div className="navbar-nav justify-content-end">
                                <a className="nav-item nav-link active" href="#">
                                    <i className="material-icons header-icons">favorite</i> Wishlist
                                </a>
                            </div>
                        </div>
                    </div>
                    
              
                </div>
            </nav>
        )
    }

}

export default Header