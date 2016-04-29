import React, {Component} from 'react';
import style from './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      userText: event.target.value,
    });
  };

  updateText = () => {
    const { addText } = this.props;
    addText(this.state.userText);
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value = {this.state.userText}
          onChange = {this.handleChange}
          />
        <button onClick = {this.updateText}>
          Add text!
        </button>
      </div>
    );
  }
}

export default Editor;
