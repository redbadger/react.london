import React, { PropTypes, Component } from 'react';
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

class Deploy extends Component {
  static propTypes() {
    return {
      content: PropTypes.object,
      environment: PropTypes.string,
      url: PropTypes.string,
    };
  }

  constructor(props) {
    super(props);
    this.state = { deployed: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this.props: ', this.props);
    const { environment, content } = this.props;
    const body = { ...content.form.editor.values };
    this.pushToExternal(environment, body);
    this.setState({ deployed: true });
  }

  pushToExternal(environment, body) {
    return fetch(`/${environment}/`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  }

  render() {
    const { environment, url } = this.props;
    return (
      <div style={style.main}>
        <button onClick={this.handleClick} style={style.button}>
          {`Push To ${environment[0].toUpperCase() + environment.slice(1)}`}
        </button>
        {this.state.deployed ? <div style={style.text}> Deployed!
          <a
            href={`http://london.react.${url}.s3-website-eu-west-1.amazonaws.com/`}
            target="_blank"
            style={style.link}
          >
           Check it out
          </a>
        </div> : null}
      </div>
    );
  }
}

export default radium(Deploy);
