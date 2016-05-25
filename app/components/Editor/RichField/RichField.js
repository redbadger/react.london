import React, { Component } from 'react';
import {Editor as Draft, EditorState, convertToRaw, convertFromRaw, RichUtils} from 'draft-js';

class RichField extends React.Component {
  constructor(props) {
    super(props);

    const defaultValue = this.props.field.value;

    console.log('in RichField ', this.props.field);

    this.state = {
      editorState: this.setDefaultValue(defaultValue),
    };

  };

  onChange = (editorState) => {
    this.props.field.onChange(this.getRawContent(editorState));
    this.setState({ editorState });
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }

    return false;
  };

  setDefaultValue(defaultValue) {
    if (defaultValue) {
      return EditorState.createWithContent(convertFromRaw(defaultValue));
    }

    return EditorState.createEmpty();
  }

  getRawContent(editorState) {
    return convertToRaw(editorState.getCurrentContent());
  }

  render() {
    console.log('in RichField renDER', this.props.field);
    const { editorState } = this.state;
    return (
      <div>
        <label>{this.props.label}</label>
        <Draft
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default RichField;
