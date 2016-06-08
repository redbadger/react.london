import React, { Component } from 'react';
import Radium from 'radium';

class Save extends Component {
  onSaveClick = () => {
    const { saveFunction, content } = this.props;
    saveFunction(content);
  }

  render() {
    return (
      <div style={style.main}>
        <button
          style={style.button}
          onClick={this.onSaveClick}
        >Save</button>
      </div>
    )
  }
}

const style = {
  main: {
    margin: '10px 0px 15px',
  },
  button: {
    padding: 10,
    marginBottom: 5,
  }
};

export default Radium(Save);
