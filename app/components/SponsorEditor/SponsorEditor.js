import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';

const SponsorEditor = ({ sponsors, sponsor, index, textField }) => (
  <div>
    <h5>Sponsor {index + 1}</h5>
    <Field
      name={`${sponsor}.name`}
      label = "Name"
      component={textField}
    />
    <Field
      name={`${sponsor}.picture`}
      label = "Picture URL"
      component={textField}
    />
    <Field
      name={`${sponsor}.url`}
      label = "URL to Sponsor"
      component={textField}
    />
    <button
      className="remove-sponsor"
      type="button"
      onClick={ () => sponsors.remove(index)}
      >
        Remove Sponsor
    </button>
  </div>
);

SponsorEditor.PropTypes = {
  sponsors: PropTypes.object,
  sponsor: PropTypes.string,
  index: PropTypes.number.isRequired,
  textField: PropTypes.func.isRequired,
};

export default SponsorEditor;
