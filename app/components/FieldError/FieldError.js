import React, { PropTypes } from 'react';

const FieldError = ({ touched, error }) => {
  if (touched && error) {
    return <span className="error">{error}</span>;
  }
  return null;
};

FieldError.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export default FieldError;
