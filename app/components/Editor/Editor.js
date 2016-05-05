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
    const editorState = EditorState.createEmpty();
    return (
      <aside className="Editor">
        <h3>About section</h3>


          <Field
            name="aboutTitle"
            component={aboutTitle =>
              <Draft editorState={editorState} onChange={aboutTitle.onChange} />
            }/>

          <Field
            name="aboutSummary"
            component={aboutSummary =>
              <TextField component={aboutSummary} label="Summary" />
            }/>

          <h3>Upcoming Meetup</h3>
          <Field
            name="upcomingMeetupName"
            component= {upcomingMeetupName =>
            <TextField component={upcomingMeetupName} label="Name" />
          }/>

          <Field
            name="upcomingMeetupDetails"
            component= {upcomingMeetupDetails =>
            <TextField component={upcomingMeetupDetails} label="Details" />
          }/>

          <Field
            name="upcomingMeetupWhen"
            component= {upcomingMeetupWhen =>
            <TextField component={upcomingMeetupWhen} label="When" />
          }/>

          <Field
            name="upcomingMeetupWhere"
            component= {upcomingMeetupWhere =>
            <TextField component={upcomingMeetupWhere} label="Where" />
          }/>

          <Field
            name="upcomingMeetupWhereLink"
            component= {upcomingMeetupWhereLink =>
            <TextField component={upcomingMeetupWhereLink} label="WhereLink" />
          }/>

          <Field
            name="upcomingMeetupCtaText"
            component= {upcomingMeetupCtaText =>
            <TextField component={upcomingMeetupCtaText} label="CtaText" />
          }/>

          <Field
            name="upcomingMeetupCtaLink"
            component= {upcomingMeetupCtaLink =>
            <TextField component={upcomingMeetupCtaLink} label="CtaLink" />
          }/>

          <Field
            name="upcomingMeetupStreamingText"
            component= {upcomingMeetupStreamingText =>
            <TextField component={upcomingMeetupStreamingText} label="StreamingText" />
          }/>

          <Field
            name="upcomingMeetupStreamingLink"
            component= {upcomingMeetupStreamingLink =>
            <TextField component={upcomingMeetupStreamingLink} label="StreamingLink" />
          }/>

      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

export default Editor;
