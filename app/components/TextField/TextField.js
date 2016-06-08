import React, { Component } from 'react';

const TextField = ({ field, label }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...field} />
    {field.touched &&
      field.error &&
      <span className="error">{field.error}</span>}
  </div>
);

export default TextField;
