import React, { Component } from 'react';
import Radium from 'radium';

class Deploy extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    const { deployContent, environment, content } = this.props;
    const body = { ...content.form.editor.values };

    deployContent(environment, body)
  }

  render() {
    const { environment, url } = this.props;
    return (
      <div style={style.main}>
        <button onClick={this.handleClick} style={style.button}>
          {`Push To ${environment[0].toUpperCase() + environment.slice(1)}`}
        </button>
        {this.state.deployed ? <div style={style.text}> Deployed!
          <a href={`http://london.react.${url}.s3-website-eu-west-1.amazonaws.com/`}
            target='_blank'
            style={style.link}>
           Check it out
          </a>
          </div> : null}
      </div>
    );
  }
}

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
