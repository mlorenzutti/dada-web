import React, {Component} from 'react';
import {connect} from "react-redux"
import {loadFirebase} from '../../../utils/db'
import FileUploader from "react-firebase-file-uploader"


class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: this.props.input.value ? this.props.input.value : "",
            isUploading: false,
            progress: 0,
        };
        
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        loadFirebase()
        .storage()
        .ref("articles")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ imageUrl: url }));
    };

    componentDidMount(){
        
    }

    componentDidUpdate(){
        this.props.input.onChange(this.state.imageUrl)
    }

    

    render(){
        return (
            <div className="image-uploader">
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.imageUrl && <p><img src={this.state.imageUrl} /></p>}
                <FileUploader
                    accept="image/*"
                    name="imageUrl"
                    randomizeFilename
                    storageRef={loadFirebase().storage().ref("articles")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
            </div>
        );
    }
}

export default ImageUploader