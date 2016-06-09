import React, { PropTypes } from 'react';
import FieldError from '../FieldError/FieldError';

const TextField = ({ field, label }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...field} />
    <FieldError {...field} />
  </div>
);

TextField.PropTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

export default TextField;
