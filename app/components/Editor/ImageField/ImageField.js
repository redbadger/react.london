import React, { Component } from 'react';

class ImageField extends Component {

  handleImage = (e) => {
    let file = e.target.files[0];
    let imageType = /^image\//;

    if (!imageType.test(file.type)) {
      alert('Please select a valid image');
    }

    let reader = new FileReader();

    reader.onload = (e) => {
      this.props.field.onChange(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { field } = this.props;
    const { label } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleImage}
        />
        {field.touched &&
          field.error &&
          <span className="error">{field.error}</span>}
      </div>
    );
  }
}

export default ImageField;
