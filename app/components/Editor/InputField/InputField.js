import React, { Component } from 'react';

class InputField extends Component {
  handleFile = (fieldName, event) => {
    event.preventDefault();

    const { Field } = this.props;
    const files = [ ...event.target.files ];
    Field[fieldName].handleChange(files);
}

  render() {
    const { field } = this.props;
    const { label } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type='file' onChange={
          ( e ) => {
            e.preventDefault();
            const reader = new FileReader();
            const { field } = this.props;
            // convert files to an array
            const files = [ ...e.target.files ];

            reader.onload = (e) => {
              console.log(e.target.result);
              field.onChange(e.target.result);
            }

            reader.readAsDataURL(e.target.files[0])
          }} />
      </div>
    );
  }
}

export default InputField;
