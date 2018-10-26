import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchUser } from '../redux/actions/userActions'
import { setCountry } from '../redux/actions/countryActions'
import { checkCountryCookie } from '../utils/country'
import { logout } from '../utils/login'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import { withI18next } from '../utils/withI18next'

import { countryList } from '../utils/country'



class Settings extends Component {

    static async getInitialProps(ctx) {
        const {store, req, query} = ctx
        await checkCountryCookie(ctx,store.getState().countryReducer,store)
        return {}
    }

  componentDidMount(){
    this.props.fetchUser()
   
  }

  _printCountries = () => {

        const currentCountry = this.props.countryStore.currentCountry
        const countries = []
        Object.keys(countryList).forEach(function(key) {
            countries.push(countryList[key])
        })

        return countries.map((country,key) => {
            return (
                <div className="col-sm-6 mb-3 mb-md-0" key={key}>
                    <div 
                        className={`country-select ${currentCountry.code == country.code ? "country-select--active" : ""}`}
                        onClick={() => this.props.setCountry(country)}
                    >
                        <div className="country-select__image">
                            <img src={`/static/images/flags/${country.slug}.png`}></img>
                        </div>
                        <div className="country-select__name">
                            {country.name}
                        </div>
                    </div>
                </div>
            )
        })
  }


  render() {
    const { currentCountry, t } = this.props
    const user = this.props.userStore.user
    return (
      <div>
        <Head>
              <title>{t('settings_metaTitle')}</title>
              <meta name="description" content={t('settings_metaDescription')} />
        </Head>
        <Header activePage="settings"/>
        <div className="py-md-5 py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col py-5 text-center">
                <h1 className="h2">Your Settings</h1>
              </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2 col-sm-12">
                    <div className="bg-white p-md-5 p-4 ">
                        <strong>Select your Amazon country</strong>
                        <div className="row my-4">
                        {this._printCountries()}
                        </div>
                        {user && user.isAnonymous == false &&  
                        <div>
                            <strong>Your Data</strong>
                            <div className="row mt-3">
                                <div className="col-sm-4">E-mail</div>
                                <div className="col-sm-8">{user.email}</div>
                            </div>
                            {user.displayName && 
                            <div className="row mt-3">
                                <div className="col-sm-4">Name</div>
                                <div className="col-sm-8">{user.displayName}</div>
                            </div>
                            }
                            <div className="row mt-3">
                                <div className="col-sm-12">
                                    <button onClick={() => logout()} className="btn btn-secondary btn-sm">Sign Out</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


Settings = withI18next(['common', 'seo'])(Settings)
export default connect((state) => ({ userStore: state.userReducer, countryStore: state.countryReducer }),{fetchUser, setCountry})(Settings)

