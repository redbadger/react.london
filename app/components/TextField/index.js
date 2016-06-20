import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

const TextField = ({ name, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} type="text" component="input" id={name} />
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextField;
