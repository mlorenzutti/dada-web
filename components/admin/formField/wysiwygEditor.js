import React, {Component} from 'react';
import RichTextEditor from 'react-rte';

class EditorWysiwyg extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {value: this.props.input.value ? RichTextEditor.createValueFromString(this.props.input.value, 'html') : RichTextEditor.createEmptyValue()};
        
    }

    onChange = (value) => {
        console.log(value)
        this.setState({value});
        if (this.props.input.onChange) {
          this.props.input.onChange(
            value.toString('html')
          );
        }
      };
    

    render(){
        return (
            <RichTextEditor
                value={this.state.value}
                onChange={this.onChange}
                className="text-editor"
            />
        );
    }
}

export default EditorWysiwyg