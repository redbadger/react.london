import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SpeakerEditor extends Component {
  render() {
    const { speakers, speaker, index, textField } = this.props;
    return (
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
          component={textField}
        />
        <button type="button" onClick={() => speakers.remove(index)}>Remove Speaker</button>
      </div>
    );
  }
}

export default SpeakerEditor;
