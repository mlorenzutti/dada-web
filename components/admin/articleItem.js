import React from 'react'
import dynamic from 'next/dynamic'
import {connect} from "react-redux"
import {loadFirebase} from '../../utils/db'
const ManageArticle = dynamic(() => import('./manageArticle'), {  
    ssr: false
})

class articleItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editOpen: false
        }
    }

    _toggleEditArticle = () => {
        this.setState({
            editOpen: !this.state.editOpen
        });
    }

    render(){
        const article = this.props.data
        return (
            <div className="shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between">
                <div>
                    <strong>{article.post.title}</strong><br/>
                    {article.post.subtitle}
                </div>
                <div className="flex-shrink-0 pl-2">
                    <button className="btn btn-sm btn-primary mr-2" onClick={() => this._toggleEditArticle()}><i className="material-icons">edit</i></button>
                    <button className="btn btn-sm btn-secondary btn-primary"><i className="material-icons">delete</i></button>
                </div>
                {this.state.editOpen && 
                <ManageArticle modalOpen={this.state.editOpen} data={article} toggle={this._toggleEditArticle} />
                }
            </div>
        )
    }
}

export default articleItem