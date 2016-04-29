import React, {Component} from 'react';
import style from './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
  };

  handleChange = (event) => {
    const { updateText } = this.props;

    updateText({
      key: event.target.name,
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="Editor">
        <label for="aboutTitle">Title</label>
        <input
          name="aboutTitle"
          value = {this.props.aboutTitle}
          onChange = {this.handleChange}
        ></input>

        <label for="aboutSummary">Summary</label>
        <textarea
          name="aboutSummary"
          value = {this.props.aboutSummary}
          onChange = {this.handleChange}
        />
      </div>
    );
  }
}

export default Editor;
