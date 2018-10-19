import React, {Component} from 'react'
import {connect} from "react-redux"
import Link from 'next/link'

class Footer extends Component {
    render(){
        return (
            <footer className="bg-white py-5 px-3 mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="mb-3 d-flex align-items-center">
                                <img src="/static/images/logo.svg" width="60" height="30" className="d-inline-block align-top" alt="" /> <strong className="text-primary">KIDADA</strong>
                            </div>
                            <div className="mb-3">
                                <h5>Handcrafted products from Amazon selected for you</h5>
                            </div>
                            <p>Kidada is an independent company. Amazon is a trademarked brand.<br/> 
©2018 Kidada.co. All rights reserved.</p>

                        </div>
                        <div className="col-sm-5">
                            <h3>Enjoy our selection<br/>Everytime and everywhere</h3>
                            <div className="d-flex">
                                <div>
                                    <img src="/static/images/logo.svg" />
                                </div>
                                <div></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer