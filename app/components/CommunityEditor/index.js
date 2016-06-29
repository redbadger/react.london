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

// TODO: Inject initial state
const ConnectedForm = reduxForm({
  form: 'community',
})(Form);

const CommunityEditor = ({ community }) => (
  <div className="community-editor">
    <h1>
      Community Editor!
    </h1>
    <ConnectedForm />

    <h2>Preview</h2>
    <div className="preview">
      <Community {...community} />
    </div>
  </div>
);

CommunityEditor.propTypes = {
  community: PropTypes.shape(Community.propTypes).isRequired,
};


export default CommunityEditor;
