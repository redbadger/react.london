import React, { PropTypes, Component } from 'react';
import FieldError from '../FieldError/FieldError';

class ImageField extends Component {

  static propTypes() {
    return {
      field: PropTypes.shape({
        onClick: PropTypes.func,
        onChange: PropTypes.func,
      }),
    };
  }

  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(e) {
    const file = e.target.files[0];
    const imageType = /^image\//;

    if (!imageType.test(file.type)) {
      alert('Please select a valid image');
      return;
    }

    if (file.size > 1000000) {
      alert('Please select an image which is less than 1MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = event => {
      this.props.field.onChange(event.target.result);
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
