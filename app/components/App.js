import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addText } from '../actions';

import style from './App.css';

class App extends Component {
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
    const { dispatch } = this.props;
    console.log(this.state.userText);
    dispatch(addText(this.state.userText));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>This is <span className='special'>React!</span></h1>
        <input
          type='text'
          value = {this.state.userText}
          onChange = {this.handleChange}
          />
        <button onClick = {this.updateText}>
          Add text!
        </button>
        {this.props.userTexts.map(u => (<div>User said: {u}</div>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTexts: state,
});

App = connect(mapStateToProps)(App);

export default App;
