import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';

import TextField from './TextField/TextField.js';
import RichField from './RichField/RichField.js';
import readyToRender from '../../utilities/readyToRender.js';

import Radium, { Style } from 'radium';

class Editor extends Component {
  pushToExternal = (environment) => {
    const body = readyToRender(this.props.content.form.editor);

    fetch(`/${environment}/`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  };

  pushToStaging = () => {
    this.pushToExternal('staging');
  };

  pushToLive = () => {
    this.pushToExternal('live');
  };

  render() {
    return (
      <aside style={styles} className="editor">
        {genericStyles}

        <h2>About section</h2>

        <section style={styles.section}>

          <Field
            name="aboutTitle"
            component={field =>
              <TextField field={field} label="Title" />
            }/>

          <Field
            name="aboutSummary"
            component={field =>
              <RichField field={field} label="Summary" />
            }/>

        </section>

        <h2>Upcoming Meetup</h2>

        <section style={styles.section}>

          <Field
            name="upcomingMeetupName"
            component={field =>
            <TextField field={field} label="Name" />
          }/>

          <Field
            name="upcomingMeetupDetails"
            component={field =>
            <RichField field={field} label="Details" />
          }/>

          <Field
            name="upcomingMeetupWhen"
            component={field =>
            <TextField field={field} label="When is it happening?" />
          }/>

        <h4 style={styles.subHeading}>Details about the meetup location</h4>

          <Field
            name="upcomingMeetupWhere"
            component={field =>
            <TextField field={field} label="Where is it happening?" />
          }/>

          <Field
            name="upcomingMeetupWhereLink"
            component={field =>
            <TextField field={field} label="Direction link" />
          }/>

        <h4 style={styles.subHeading}>More information link</h4>

          <Field
            name="upcomingMeetupCtaText"
            component={field =>
            <TextField field={field} label="Link text" />
          }/>

          <Field
            name="upcomingMeetupCtaLink"
            component={field =>
            <TextField field={field} label="Link" />
          }/>

        <h4 style={styles.subHeading}>Live stream link</h4>
          <Field
            name="upcomingMeetupStreamingText"
            component={field =>
            <TextField field={field} label="Link text" />
          }/>

          <Field
            name="upcomingMeetupStreamingLink"
            component={field =>
            <TextField field={field} label="Link" />
          }/>

        <h4 style={styles.subHeading}>Talks</h4>
          <h5>First talk</h5>
          <Field
            name="upcomingMeetupSpeaker1Name"
            component={field =>
              <TextField field={field} label="Name" />
          } />
          <Field
            name="upcomingMeetupSpeaker1Title"
            component={field =>
              <TextField field={field} label="Title" />
          } />
          <Field
            name="upcomingMeetupSpeaker1Blurb"
            component={field =>
              <TextField field={field} label="Blurb" />
          } />
          <Field
            name="upcomingMeetupSpeaker1Picture"
            component={field =>
              <TextField field={field} label="Picture URL" />
          } />
          <h5>Second talk</h5>
          <Field
            name="upcomingMeetupSpeaker2Name"
            component={field =>
              <TextField field={field} label="Name" />
          } />
          <Field
            name="upcomingMeetupSpeaker2Title"
            component={field =>
              <TextField field={field} label="Title" />
          } />
          <Field
            name="upcomingMeetupSpeaker2Blurb"
            component={field =>
              <TextField field={field} label="Blurb" />
          } />
          <Field
            name="upcomingMeetupSpeaker2Picture"
            component={field =>
              <TextField field={field} label="Picture URL" />
          } />
          <h5>Third talk</h5>
          <Field
            name="upcomingMeetupSpeaker3Name"
            component={field =>
              <TextField field={field} label="Name" />
          } />
          <Field
            name="upcomingMeetupSpeaker3Title"
            component={field =>
              <TextField field={field} label="Title" />
          } />
          <Field
            name="upcomingMeetupSpeaker3Blurb"
            component={field =>
              <TextField field={field} label="Blurb" />
          } />
          <Field
            name="upcomingMeetupSpeaker3Picture"
            component={field =>
              <TextField field={field} label="Picture URL" />
          } />

          <button onClick={this.pushToStaging}>Push To Staging</button>
          <button onClick={this.pushToLive}>Push To Live</button>
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
