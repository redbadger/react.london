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

  shouldComponentUpdate = (nextProps, nextState) => {
    this.setState({
      editorState: this.setDefaultValue(nextProps.field.value)
    })
    return true;
  };

  onChange = (editorState) => {
    this.props.field.onChange(this.getRawContent());
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

  getRawContent() {
    return convertToRaw(this.state.editorState.getCurrentContent());
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
