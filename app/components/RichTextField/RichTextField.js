import React, { Component, PropTypes } from 'react';
import ScribeEditor from 'react-scribe';
import { Style } from 'radium';

const scribePlugins = [
  'blockquote', 
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

RichTextField.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

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
