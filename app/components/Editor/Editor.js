import React, {Component} from 'react';
import style from './Editor.css';
import { reduxForm, Field } from 'redux-form';
import TextField from './TextField/TextField.js';
import RichField from './RichField/RichField.js';

class Editor extends Component {
  render() {
    return (
      <aside className="Editor">
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

      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

export default Editor;
