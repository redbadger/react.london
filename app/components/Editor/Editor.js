import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

import TextField from '../TextField/TextField.js';
import RichTextField from '../RichTextField/RichTextField.js';
import SpeakerEditor from '../SpeakerEditor/SpeakerEditor.js';
import Deploy from '../Deploy/Deploy';
import Save from '../Save/Save.js';
import SponsorEditor from '../SponsorEditor/SponsorEditor.js';

import Radium, { Style } from 'radium';

const SpeakerEditors = ({ fields }) => (
  <div>
    <button type="button" onClick={() => fields.push({})}>Add Speaker</button>
    {fields && fields.map((speaker, index) =>
      <SpeakerEditor
        key={index}
        speakers={fields}
        speaker={speaker}
        index={index}
      />
    )}
  </div>
);

const SponsorEditors = ({ fields }) => (
  <div>
    <button type="button" onClick={() => fields.push({})}>Add Sponsor</button>
    {fields && fields.map((sponsor, index) =>
      <SponsorEditor
        key={index}
        sponsors={fields}
        sponsor={sponsor}
        index={index}
        />
    )}
  </div>
);

const Editor = ({ content }) => (
  <aside style={styles} className="editor">
    {genericStyles}

    <h2>About section</h2>

    <section style={styles.section}>

      <Field name="about.title" label="Title" component={TextField} />
      <Field name="about.summary" label="Summary" component={RichTextField} />

    </section>

    <h2>Upcoming Meetup</h2>

    <section style={styles.section}>

      <Field name="meetup.title" label="Title" component={TextField} />
      <Field name="meetup.details" label="Details" component={RichTextField} />
      <Field name="meetup.when" label="When is it happening?" component={TextField} />


      <h4 style={styles.subHeading}>Details about the meetup location</h4>

      <Field name="meetup.where.text" label="Where is it happening?" component={TextField} />
      <Field name="meetup.where.url" label="Direction link" component={TextField} />


      <h4 style={styles.subHeading}>More information link</h4>

      <Field name="meetup.signup.text" label="Link text" component={TextField} />
      <Field name="meetup.signup.url" label="Link" component={TextField} />


      <h4 style={styles.subHeading}>Live stream link</h4>

      <Field name="meetup.streaming.text" label="Link text" component={TextField} />
      <Field name="meetup.streaming.url" label="Link" component={TextField} />


      <h4 style={styles.subHeading}>Talks</h4>

      <FieldArray name="meetup.speakers" component={SpeakerEditors}/>

      <FieldArray name="meetup.sponsors" component={SponsorEditors}/>


      <h4 style={styles.subHeading}>Deployment</h4>

      <Deploy environment='staging' content={content} url='dev' />
      <Deploy environment='live' content={content} url='live'/>

    </section>
  </aside>
);

const EditorForm = reduxForm({
  form: 'editor',
})(Editor);

const styles = {
  borderRight: '1px solid #C9C9C9',
  boxShadow: '3px 0px 5px 0px rgba(201,201,201,1)',
  padding: '10px 40px 0px 30px',
  minWidth: '350px',
  resize: 'horizontal',
  overflow: 'auto',
  backgroundColor: '#ffffff',
  section: {
    display: 'block',
    marginBottom: 40,
  },
  subHeading: {
    marginTop: '30px',
    marginBottom: '10px',
  },
};

const genericStyles  = (<Style
  scopeSelector=".editor"
  rules={{
    'input, textarea': {
      display: 'block',
      width: '100%',
      padding: '2px 5px',
      margin: '2px 0px 20px',
      fontSize: '1em',
    },
    textarea: {
      maxWidth: '100%',
      minHeight: 200,
    },
  }}
/>);

export default Radium(EditorForm);
