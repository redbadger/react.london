import React, { Component } from 'react';

class ImageField extends Component {
  handleImage = e => {
    let file = e.target.files[0];
    let imageType = /^image\//;

    if (!imageType.test(file.type)) {
      alert('Please select a valid image');
      return;
    }

    if (file.size > 1000000) {
      alert('Please select an image which is less than 1MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      this.props.field.onChange(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { field, label } = this.props;
    const showError = field.touched && field.error;
    return (
      <div>
        <label className="speaker">{label}</label>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleImage}
        />
      {showError && <span className="error">{field.error}</span>}
      </div>
    );
  }
}

export default ImageField;
