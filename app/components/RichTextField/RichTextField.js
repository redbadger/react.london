import React, { Component } from 'react';
import ScribeEditor from 'react-scribe';

const scribePlugins = [
  'blockquote', 
  'code', 
  'h1', 
  'h2', 
  'h3', 
  'h4', 
  'h5', 
  'linkPrompt',
  'unlink', 
  'ol', 
  'ul'
];

const RichTextField = ({field, label}) => (
  <div>
    <label>{label}</label>
    <ScribeEditor {...field} config={scribePlugins} />
    {field.touched &&
      field.error &&
      <span className="error">{field.error}</span>}
  </div>
);

export default RichTextField;
