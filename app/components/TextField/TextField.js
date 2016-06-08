import React, { PropTypes } from 'react';

const TextField = ({ field, label }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...field} />
    {field.touched &&
      field.error &&
      <span className="error">{field.error}</span>}
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
