import React, {Component} from 'react'
import {connect} from "react-redux"
import { fetchUser } from '../redux/actions/userActions'
import { setCountry } from '../redux/actions/countryActions'
import { checkCountryCookie } from '../utils/country'

import { countryList } from '../utils/country'

import "../style/style.scss"


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
    const { currentCountry } = this.props;
    return (
      <div>
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
                        <div className="row mt-4">
                        {this._printCountries()}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ userStore: state.userReducer, countryStore: state.countryReducer }),{fetchUser, setCountry})(Settings)
