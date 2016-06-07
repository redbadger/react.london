import React, { Component } from 'react';
import ScribeEditor from 'react-scribe';
import { Style } from 'radium';

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
  <div className="rich-text-field">
    {genericStyles}
    <label>{label}</label>
    <ScribeEditor {...field} config={scribePlugins} />
    {field.touched &&
      field.error &&
      <span className="error">{field.error}</span>}
  </div>
);

const genericStyles  = (<Style
  scopeSelector=".rich-text-field"
  rules={{
    '.sc-editor': {
      border: '1px solid #CCCCCC',
      marginBottom: '20px',
    }
  }}
/>);

export default RichTextField;
