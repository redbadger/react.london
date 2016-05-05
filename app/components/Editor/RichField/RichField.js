import React, {Component} from 'react';
import {Editor as Draft, EditorState, convertToRaw, convertFromRaw} from 'draft-js';

class RichField extends React.Component {
  constructor(props) {
    super(props);

    const defaultValue = this.props.field.value;
    this.state = {
      editorState: this.setDefaultValue(defaultValue),
    };

    this.onChange = (editorState) => {
      this.props.field.onChange(this.getRawContent());
      this.setState({ editorState });
    };

  }

  setDefaultValue(defaultValue) {
    if (defaultValue) {
      return EditorState.createWithContent(convertFromRaw(defaultValue));
    }

    return EditorState.createEmpty();
  }

  getRawContent() {
    return convertToRaw(this.state.editorState.getCurrentContent());
  }

  render() {
    const { editorState } = this.state;
    return <Draft editorState={editorState} onChange={this.onChange} />;
  }
}

export default RichField;
