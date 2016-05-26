import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

import TextField from '../TextField/TextField.js';
import RichField from '../RichField/RichField.js';
import SpeakerEditor from '../SpeakerEditor/SpeakerEditor.js';
import Deploy from '../Deploy/Deploy';
import Save from '../Save/Save.js';
import SponsorEditor from '../SponsorEditor/SponsorEditor.js';

import Radium, { Style } from 'radium';

class Editor extends Component {

  createTextField = field => (
    <TextField field={field} label={field.label} />
  );

  createRichField = field => (
    <RichField field={field} label={field.label} />
  );

  createSpeakers = speakers => (
    <div>
      <button type="button" onClick={() => speakers.push({})}>Add Speaker</button>
      {speakers.map((speaker, index) =>
        <SpeakerEditor
          key={index}
          speakers={speakers}
          speaker={speaker}
          index={index}
          textField={this.createTextField}
          />
      )}
    </div>
  );

  createSponsors = sponsors => (
    <div>
      <button type="button" onClick={() => sponsors.push({})}>Add Sponsor</button>
      {sponsors.map((sponsor, index) =>
        <SponsorEditor
          key={index}
          sponsors={sponsors}
          sponsor={sponsor}
          index={index}
          textField={this.createTextField}
          />
      )}
    </div>
  );

  render() {
    return (
      <aside style={styles} className="editor">
        {genericStyles}

        <Save saveFunction={this.props.callPutContent} content={this.props.content.form.editor.values}/>

        <h2>About section</h2>

        <section style={styles.section}>

          <Field
            name="aboutTitle"
            label="Title"
            component={this.createTextField}
            />

          <Field
            name="aboutSummary"
            label="Summary"
            component={this.createRichField}
            />

        </section>

        <h2>Upcoming Meetup</h2>

        <section style={styles.section}>

          <Field
            name="upcomingMeetupName"
            label="Name"
            component={this.createTextField}
          />

          <Field
            name="upcomingMeetupDetails"
            label="Details"
            component={this.createRichField}
            />

          <Field
            name="upcomingMeetupWhen"
            label="When is it happening?"
            component={this.createTextField}
          />

        <h4 style={styles.subHeading}>Details about the meetup location</h4>

          <Field
            name="upcomingMeetupWhere"
            label="Where is it happening?"
            component={this.createTextField}
            />

          <Field
            name="upcomingMeetupWhereLink"
            label="Direction link"
            component={this.createTextField}
            />

        <h4 style={styles.subHeading}>More information link</h4>

          <Field
            name="upcomingMeetupCtaText"
            label="Link text"
            component={this.createTextField}
            />

          <Field
            name="upcomingMeetupCtaLink"
            label="Link"
            component={this.createTextField}
            />

        <h4 style={styles.subHeading}>Live stream link</h4>
          <Field
            name="upcomingMeetupStreamingText"
            label="Link text"
            component={this.createTextField}
            />

          <Field
            name="upcomingMeetupStreamingLink"
            label="Link"
            component={this.createTextField}
            />

        <h4 style={styles.subHeading}>Talks</h4>

        <FieldArray name="upcomingMeetupSpeakers" component={this.createSpeakers}/>

        <FieldArray name="sponsors" component={this.createSponsors}/>

        <Deploy environment='staging' content={this.props.content} url='dev' />
        <Deploy environment='live' content={this.props.content} url='live'/>

        <Save saveFunction={this.props.callPutContent} content={this.props.content.form.editor.values}/>
      </section>
      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

const styles = {
  borderRight: '1px solid #C9C9C9',
  boxShadow: '3px 0px 5px 0px rgba(201,201,201,1)',
  padding: '10px 40px 0px 30px',
  maxWidth: '500px',
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
    '.DraftEditor-root': {
      width: '100%',
      padding: '2px 5px',
      margin: '2px 0px 20px',
      border: '1px solid #CCCCCC',
    },
    '.public-DraftStyleDefault-block': {
      marginBottom: '1em',
    },
  }}
/>);

export default Radium(Editor);
