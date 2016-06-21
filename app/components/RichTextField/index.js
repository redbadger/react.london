import React, { PropTypes } from 'react';
import ScribeEditor from 'react-scribe';
import scribeSanitizer from '../../scribe/sanitizer';
import FieldError from '../FieldError/';

const scribePlugins = [
  'ol',
  'ul',
  'blockquote',
  'linkPrompt',
  'unlink',
  {
    command: 'removeFormat',
    action: () => {},
    display: 'fa-eraser',
  },
  {
    command: 'sanitizer',
    action: scribeSanitizer,
    display: '',
  },
];

const RichTextField = (field) => (
  <div className="rich-text-field">
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

export default RichTextField;
