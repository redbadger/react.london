import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CommunityPreview from '../../containers/CommunityPreview';


const Form = () => (
  <div className="community-editor">

    <section>
      <h3>Community Hero</h3>
      <div>
        <label>Title</label>
        <Field name="communityTitle" type="text" component="input" />
      </div>
      <div>
        <label>Summary</label>
        <Field name="communitySummary" type="text" component="input" />
      </div>
    </section>

    <section>
      <h3>Mailing List Sign Up</h3>
      <div>
        <label>Title</label>
        <Field name="mailingListTitle" type="text" component="input" />
      </div>
      <div>
        <label>Summary</label>
        <Field name="mailingListSummary" type="text" component="input" />
      </div>
      <div>
        <label>Conference Text</label>
        <Field name="mailingListConferenceText" type="text" component="input" />
      </div>
    </section>
  </div>
);

const ConnectedForm = reduxForm({
  form: 'community',
})(Form);

const CommunityEditor = () => (
  <div className="community-editor">
    <h1>
      CommunityEditor!
    </h1>
    <ConnectedForm />

    <h2>Preview</h2>
    <div className="preview">
      <CommunityPreview />
    </div>
  </div>
);

CommunityEditor.propTypes = {
};


export default CommunityEditor;
