import React, {Component} from 'react';
import {Editor as Draft, EditorState, convertToRaw, convertFromRaw, RichUtils} from 'draft-js';

class RichField extends React.Component {
  constructor(props) {
    super(props);

    const defaultValue = this.props.field.value;
    this.state = {
      editorState: this.setDefaultValue(defaultValue),
    };

    this.onChange = (editorState) => {
      this.props.field.onChange(this.getRawContent());
      console.log(JSON.stringify(this.getRawContent()));
      this.setState({ editorState });
    };

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }

    return false;
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
    return (
      <Draft
        editorState={editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange} />
    );
  }
}

export default RichField;
