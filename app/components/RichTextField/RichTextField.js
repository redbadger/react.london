import React, { Component, PropTypes } from 'react';
import ScribeEditor from 'react-scribe';
import Radium, { Style } from 'radium';
import scribeSanitizer from '../../scribe/sanitizer';

const scribePlugins = [
  'ol',
  'ul',
  'unlink',
  'blockquote',
  'linkPrompt',
  'removeFormat',
  'cleanup',
  {
    'command': 'cleanup',
    'action': scribeSanitizer,
    'display': 'hidden',
  }
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
    },
    'button[data-command-name="cleanup"]': {
      display: 'none',
    }
  }}
/>);

export default Radium(RichTextField);
