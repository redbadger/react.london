import React, { PropTypes } from 'react';
import FieldError from '../FieldError/FieldError';

const TextField = (field) => (
  <div>
    <label>{field.label}</label>
    <input type="text" {...field} />
    <FieldError {...field} />
  </div>
);

TextField.PropTypes = {
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TextField;
