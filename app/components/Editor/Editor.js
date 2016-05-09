import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';

import TextField from './TextField/TextField.js';
import RichField from './RichField/RichField.js';

import Radium, { Style } from 'radium';

class Editor extends Component {
  pushToExternal = (environment) => {
    fetch(`/${environment}/`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.props.content.form.editor.values),
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

        <h3>About section</h3>

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


          <h3>Upcoming Meetup</h3>
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
            <TextField field={field} label="When" />
          }/>

          <Field
            name="upcomingMeetupWhere"
            component={field =>
            <TextField field={field} label="Where" />
          }/>

          <Field
            name="upcomingMeetupWhereLink"
            component={field =>
            <TextField field={field} label="WhereLink" />
          }/>

          <Field
            name="upcomingMeetupCtaText"
            component={field =>
            <TextField field={field} label="CtaText" />
          }/>

          <Field
            name="upcomingMeetupCtaLink"
            component={field =>
            <TextField field={field} label="CtaLink" />
          }/>

          <Field
            name="upcomingMeetupStreamingText"
            component={field =>
            <TextField field={field} label="StreamingText" />
          }/>

          <Field
            name="upcomingMeetupStreamingLink"
            component={field =>
            <TextField field={field} label="StreamingLink" />
          }/>

        <button onClick={this.pushToStaging}>Push To Staging</button>
        <button onClick={this.pushToLive}>Push To Live</button>
      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

const styles = {
  borderRight: '2px solid black',
  padding: '20px',
  width: '1000px',
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
    'DraftEditor-root': {
      width: '100%',
      border: '1px solid #ccc',
    },
  }}
/>);

export default Radium(Editor);
