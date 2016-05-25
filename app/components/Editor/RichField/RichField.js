import React, { Component } from 'react';
import {Editor as Draft, EditorState, convertToRaw, convertFromRaw, RichUtils} from 'draft-js';

class RichField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: this.getEditorState(this.props.field.value)
    };
  };

  onChange = (editorState) => {
    this.props.field.onChange(this.getRawContent());
    this.setState({ editorState });
  };

  handleKeyCommand = (command) => {
    const handled = RichUtils.handleKeyCommand(this.state.editorState, command);
    this.onChange(this.state.editorState);
    return handled;
  };

  getEditorState(content) {
    if (content) {
      return EditorState.createWithContent(convertFromRaw(content));
    }

    return EditorState.createEmpty();
  }

  getRawContent() {
    return convertToRaw(this.state.editorState.getCurrentContent());
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <Draft
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default RichField;
