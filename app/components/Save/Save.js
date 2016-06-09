import React, { PropTypes } from 'react';
import Radium from 'radium';

const style = {
  main: {
    margin: '10px 0px 15px',
  },
  button: {
    padding: 10,
    marginBottom: 5,
  }
};

const Save = ({ saveFunction, content }) => (
  <div style={style.main}>
    <button
      style={style.button}
      onClick={() => { saveFunction(content) }}
    >Save</button>
  </div>
);

Save.PropTypes = {
  saveFunction: PropTypes.func.isRequired,
  content: PropTypes.string,
};

export default Radium(Save);
