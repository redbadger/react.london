import React, { Component } from 'react';

import Editor from '../../containers/Editor';
import Preview from '../../containers/Preview';

import Radium, { Style } from 'radium';

class App extends Component {
  componentDidMount() {
    this.props.callFetchContent();
  }

  render() {
    const { children, loading } = this.props;
    return (
      <div style={styles}>
        { loading ? <div>LOADING</div> :
          <div style={styles}>
            <Editor />
            <Preview />
          </div>
        }
      </div>
    );
  }
};

const styles = {
  width: '100%',
  display: 'flex',
};

export default Radium(App);
