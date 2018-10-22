import React, {Component} from 'react'
import {connect} from "react-redux"
import Link from 'next/link'

class Footer extends Component {
    render(){
        return (
            <footer className="bg-white py-md-5 py-3 px-3 mt-5">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-7 flex-order-1 order-1 order-sm-0 text-center text-md-left">
                            <div className="mb-3 align-items-center d-none d-md-flex">
                                <img src="/static/images/logo.svg" width="60" height="30" className="d-inline-block align-top" alt="" /> <strong className="text-primary">KIDADA</strong>
                            </div>
                            <div className="mb-3 d-none d-md-block">
                                <h4 className="text-primary">Handcrafted products from Amazon selected for you</h4>
                            </div>
                            <p>Kidada is an independent company. Amazon is a trademarked brand.<br/> 
©2018 Kidada.co. All rights reserved.</p>
                            <div className="d-md-flex">
                                <Link href={'/about'}>
                                    <a className="mr-md-3 d-block d-md-inline-block">About</a>
                                </Link>
                                <Link href={'/cookiepolicy'}>
                                    <a className="mr-md-3 d-block d-md-inline-block">Cookie policy</a>
                                </Link>
                                <Link href={'/termscondition'}>
                                    <a className="mr-md-3 d-block d-md-inline-block">Terms & Condition</a>
                                </Link>
                                <Link href={'/privacypolicy'}>
                                    <a className="d-block d-md-inline-block">Privacy Policy</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-5 text-center order-0 order-sm-1 pb-5 pb-md-0">
                            <img src="/static/images/icons/icon_60pt@3x_bg.png" width="80" />
                            <h3 className="font-light mt-3">Enjoy our selection<br/>Everytime and everywhere</h3>
                            <div className="my-3">Our app is available on iOS and Android</div>
                            <div className="d-flex align-items-center justify-content-center mt-3 mx-auto" style={{maxWidth:290}}>
                                <div className="px-2">
                                    <img src="/static/images/appstore_es.png" height="auto" className="mw-100"/>
                                </div>
                                <div className="px-2">
                                    <img src="/static/images/playstore_es.png" height="auto" className="mw-100" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer