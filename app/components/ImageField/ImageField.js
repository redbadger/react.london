import React, { Component } from 'react';
import FieldError from '../FieldError/FieldError';

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
    const field = this.props.field || {}; // TODO: test.
    return (
      <div>
        <label className="speaker">{field.label}</label>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleImage}
        />
        <FieldError {...field} />
      </div>
    );
  }
}

export default ImageField;
