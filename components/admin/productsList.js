import React from 'react'
import {connect} from "react-redux"

class productsList extends React.Component {

    render(){
        return (
            <div></div>
        )
    }


}

export default connect((state) => ({ userStore: state.userReducer, countryStore: state.countryReducer }),null)(productsList)  