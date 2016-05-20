import React, { Component } from 'react';

class TextField extends Component {
  render() {
    const { field } = this.props;
    const { label } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type="text" {...field}/>
        {field.touched &&
          field.error &&
          <span className="error">{field.error}</span>}
      </div>
    );
  }
}

export default TextField;
