import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Community from '../../components/Community';
import TextField from '../TextField/index';

const Form = () => (
  <div className="community-editor">

    <section>
      <h3>Community Hero</h3>
      <TextField label="Title" name={'communityTitle'} />
      <TextField label="Summary" name={'communitySummary'} />
    </section>

    <section>
      <h3>Mailing List Sign Up</h3>
      <TextField label="Title" name={'mailingListTitle'} />
      <TextField label="Summary" name={'mailingListSummary'} />
      <TextField label="Conference Text" name={'mailingListConferenceText'} />
    </section>
  </div>
);

const ConnectedForm = reduxForm({
  form: 'community',
})(Form);

const CommunityEditor = ({ initialFormValues, communityProps }) => (
  <div className="community-editor">
    <h1>
      Community Editor!
    </h1>
    <ConnectedForm initialValues={initialFormValues} />

    <h2>Preview</h2>
    <div className="preview">
      <Community {...communityProps} />
    </div>
  </div>
);

CommunityEditor.propTypes = {
  communityProps: PropTypes.shape(Community.propTypes).isRequired,
  initialFormValues: PropTypes.shape(CommunityEditor.propTypes).isRequired,
};


export default CommunityEditor;
