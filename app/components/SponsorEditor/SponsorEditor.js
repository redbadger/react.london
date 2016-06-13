import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import TextField from '../TextField/TextField.js';

const SponsorEditor = ({ sponsors, sponsor, index }) => (
  <div>
    <h5>Sponsor {index + 1}</h5>
    <Field
      name={`${sponsor}.name`}
      label="Name"
      component={TextField}
    />
    <Field
      name={`${sponsor}.picture`}
      label="Picture URL"
      component={TextField}
    />
    <Field
      name={`${sponsor}.url`}
      label="URL to Sponsor"
      component={TextField}
    />
    <button
      className="remove-sponsor"
      type="button"
      onClick={() => sponsors.remove(index)}
    >
        Remove Sponsor
    </button>
  </div>
);

SponsorEditor.propTypes = {
  sponsors: PropTypes.object,
  sponsor: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default SponsorEditor;
