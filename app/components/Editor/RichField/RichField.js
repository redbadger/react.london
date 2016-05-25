import React, { Component } from 'react';
import {Editor as Draft, EditorState, convertToRaw, convertFromRaw, RichUtils} from 'draft-js';

class RichField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: this.getEditorState(this.props.field.value)
    };
  }

  onChange(editorState) {
    this.props.field.onChange(this.getRawContent(editorState));
    this.setState({ editorState });
  }

  handleKeyCommand(command) {
    return RichUtils.handleKeyCommand(this.state.editorState, command);
  }

  getEditorState(content) {
    if (content) {
      return EditorState.createWithContent(convertFromRaw(content));
    }

    return EditorState.createEmpty();
  }

  getRawContent(editorState) {
    return convertToRaw(editorState.getCurrentContent());
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <Draft
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
          onChange={this.onChange.bind(this)}
          ref="editor" />
      </div>
    );
  }
}

export default RichField;
