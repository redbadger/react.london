import React, {Component} from 'react';
import style from './Editor.css';
import { reduxForm, Field } from 'redux-form';
import {Editor as Draft, EditorState} from 'draft-js';

class TextField extends Component {
  render() {
    const { component } = this.props;
    const { label } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type="text" {...component}/>
        {component.touched &&
          component.error &&
          <span className="error">{component.error}</span>}
      </div>
    );
  }
}

class Editor extends Component {
  render() {
    const { aboutSummary } = this.props.initialValues;
    console.log(aboutSummary);
    return (
      <aside className="Editor">
        <h3>About section</h3>


          <Field
            name="aboutTitle"
            component={component =>
              <TextField component={component} label="Title" />
            }/>

          <Draft editorState={aboutSummary} />

          <h3>Upcoming Meetup</h3>
          <Field
            name="upcomingMeetupName"
            component={component =>
            <TextField component={component} label="Name" />
          }/>

          <Field
            name="upcomingMeetupDetails"
            component={component =>
            <TextField component={component} label="Details" />
          }/>

          <Field
            name="upcomingMeetupWhen"
            component={component =>
            <TextField component={component} label="When" />
          }/>

          <Field
            name="upcomingMeetupWhere"
            component={component =>
            <TextField component={component} label="Where" />
          }/>

          <Field
            name="upcomingMeetupWhereLink"
            component={component =>
            <TextField component={component} label="WhereLink" />
          }/>

          <Field
            name="upcomingMeetupCtaText"
            component={component =>
            <TextField component={component} label="CtaText" />
          }/>

          <Field
            name="upcomingMeetupCtaLink"
            component={component =>
            <TextField component={component} label="CtaLink" />
          }/>

          <Field
            name="upcomingMeetupStreamingText"
            component={component =>
            <TextField component={component} label="StreamingText" />
          }/>

          <Field
            name="upcomingMeetupStreamingLink"
            component={component =>
            <TextField component={component} label="StreamingLink" />
          }/>

      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

export default Editor;
