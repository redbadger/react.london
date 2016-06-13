import React, { PropTypes } from 'react';
import ScribeEditor from 'react-scribe';
import radium, { Style } from 'radium';
import scribeSanitizer from '../../scribe/sanitizer';
import FieldError from '../FieldError/FieldError';

const scribePlugins = [
  'ol',
  'ul',
  'unlink',
  'blockquote',
  'linkPrompt',
  'removeFormat',
  'cleanup',
  {
    command: 'cleanup',
    action: scribeSanitizer,
    display: 'hidden',
  },
];

const genericStyles = (<Style
  scopeSelector=".rich-text-field"
  rules={{
    '.sc-editor': {
      border: '1px solid #CCCCCC',
      marginBottom: '20px',
    },
    'button[data-command-name="cleanup"]': {
      display: 'none',
    },
  }}
/>);

const RichTextField = (field) => (
  <div className="rich-text-field">
    {genericStyles}
    <label>{field.label}</label>
    <ScribeEditor {...field} config={scribePlugins} />
    <FieldError {...field} />
  </div>
);

RichTextField.propTypes = {
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default radium(RichTextField);
