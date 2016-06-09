import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

import TextField from '../TextField/TextField.js';
import ImageField from '../ImageField/ImageField.js';
import RichTextField from '../RichTextField/RichTextField.js';
import SpeakerEditor from '../SpeakerEditor/SpeakerEditor.js';
import Deploy from '../../containers/Deploy';
import Save from '../Save/Save.js';
import SponsorEditor from '../SponsorEditor/SponsorEditor.js';

import Radium, { Style } from 'radium';

class Editor extends Component {

  createTextField = field => <TextField field={field} label={field.label} />

  createRichTextField = field => <RichTextField field={field} label={field.label} />

  createImageField = field => <ImageField field={field} label={field.label} />

  createSpeakers = ({ fields }) => (
    <div>
      <button type="button" onClick={() => fields.push({})}>Add Speaker</button>
      {fields.map((speaker, index) =>
        <SpeakerEditor
          key={index}
          speakers={fields}
          speaker={speaker}
          index={index}
          textField={this.createTextField}
          richTextField={this.createRichTextField}
          imageField={this.createImageField}
          />
      )}
    </div>
  );

  createSponsors = ({ fields }) => (
    <div>
      <button type="button" onClick={() => fields.push({})}>Add Sponsor</button>
      {fields.map((sponsor, index) =>
        <SponsorEditor
          key={index}
          sponsors={fields}
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

        <h2>About section</h2>

        <section style={styles.section}>

          <Field
            name="about.title"
            label="Title"
            component={this.createTextField}
            />

          <Field
            name="about.summary"
            label="Summary"
            component={this.createRichTextField}
            />

        </section>

        <h2>Upcoming Meetup</h2>

        <section style={styles.section}>

          <Field
            name="meetup.title"
            label="Title"
            component={this.createTextField}
          />

          <Field
            name="meetup.details"
            label="Details"
            component={this.createRichTextField}
            />

          <Field
            name="meetup.when"
            label="When is it happening?"
            component={this.createTextField}
          />

        <h4 style={styles.subHeading}>Details about the meetup location</h4>

          <Field
            name="meetup.where.text"
            label="Where is it happening?"
            component={this.createTextField}
            />

          <Field
            name="meetup.where.url"
            label="Direction link"
            component={this.createTextField}
            />

        <h4 style={styles.subHeading}>More information link</h4>

          <Field
            name="meetup.signup.text"
            label="Link text"
            component={this.createTextField}
            />

          <Field
            name="meetup.signup.url"
            label="Link"
            component={this.createTextField}
            />

        <h4 style={styles.subHeading}>Live stream link</h4>
          <Field
            name="meetup.streaming.text"
            label="Link text"
            component={this.createTextField}
            />

          <Field
            name="meetup.streaming.url"
            label="Link"
            component={this.createTextField}
            />

        <h4 style={styles.subHeading}>Talks</h4>

        <FieldArray name="meetup.speakers" component={this.createSpeakers}/>

        <FieldArray name="meetup.sponsors" component={this.createSponsors}/>

        <Deploy environment='staging' url='dev' />
        <Deploy environment='live' url='live'/>

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
  }}
/>);

export default Radium(Editor);
