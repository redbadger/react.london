import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const SpeakerEditor = ({
  speakers, speaker, index, textField, imageField
}) => (
  <div>
    <h5>Talk {index + 1}</h5>
    <Field
      name={`${speaker}.name`}
      label = "Name"
      component={textField}
    />
    <Field
      name={`${speaker}.title`}
      label = "Title"
      component={textField}
    />
    <Field
      name={`${speaker}.blurb`}
      label = "Blurb"
      component={textField}
    />
    <Field
      name={`${speaker}.picture`}
      label = "Picture URL"
      component={imageField}
    />
    <button
      type="button"
      onClick={() => speakers.remove(index)}
    >Remove Speaker</button>
  </div>
);

export default SpeakerEditor;
