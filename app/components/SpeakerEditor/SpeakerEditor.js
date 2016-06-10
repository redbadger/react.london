import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '../TextField/TextField.js';
import ImageField from '../ImageField/ImageField.js';
import RichTextField from '../RichTextField/RichTextField.js';

const SpeakerEditor = ({
  speakers, speaker, index
}) => (
  <div>
    <h5>Talk {index + 1}</h5>
    <Field
      name={`${speaker}.name`}
      label = "Name"
      component={TextField}
    />
    <Field
      name={`${speaker}.title`}
      label = "Title"
      component={TextField}
    />
    <Field
      name={`${speaker}.blurb`}
      label = "Blurb"
      component={RichTextField}
    />
    <Field
      name={`${speaker}.picture`}
      label = "Picture URL"
      component={ImageField}
    />
    <button
      type="button"
      onClick={() => speakers.remove(index)}
    >Remove Speaker</button>
  </div>
);

SpeakerEditor.PropTypes = {
  speakers: PropTypes.array.isRequired,
  speaker: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default SpeakerEditor;
