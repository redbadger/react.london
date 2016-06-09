import React, { Component } from 'react';
import Radium from 'radium';

const Deploy = ({ environment, deployContent, content }) => (
  <div style={style.main}>
    <button onClick={() => { deployContent(environment, content) }}>
      Push to { environment }
    </button>
  </div>
);

const style = {
  main: {
    margin: '10px 0px 15px',
  },
  button: {
    padding: 10,
    marginBottom: 5,
  },
  link: {
    marginLeft: 5,
  },
};

export default Radium(Deploy);
