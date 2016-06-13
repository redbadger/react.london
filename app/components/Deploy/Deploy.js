import React, { PropTypes } from 'react';
import radium from 'radium';

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

const Deploy = ({ environment, deployContent, content }) => (
  <div style={style.main}>
    <button onClick={() => { deployContent(environment, content); }}>
      Push to {environment}
    </button>
  </div>
);

Deploy.propTypes = {
  environment: PropTypes.string.isRequired,
  deployContent: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

export default radium(Deploy);
