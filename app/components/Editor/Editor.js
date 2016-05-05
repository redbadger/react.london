import React, {Component} from 'react';
import style from './Editor.css';
import { reduxForm, Field } from 'redux-form';

class Editor extends Component {
  render() {

    return (
      <aside className="Editor">
        <h3>About section</h3>
          <Field
            name="aboutTitle"
            component={aboutTitle =>
              <div>
                <label>About title</label>
                <input type="text" {...aboutTitle}/>
                {aboutTitle.touched &&
                 aboutTitle.error &&
                 <span className="error">{aboutTitle.error}</span>}
              </div>
            }/>

          <Field
            name="aboutSummary"
            component={aboutSummary =>
              <div>
                <label>About summary</label>
                <input type="text" {...aboutSummary}/>
                {aboutSummary.touched &&
                 aboutSummary.error &&
                 <span className="error">{aboutSummary.error}</span>}
              </div>
            }/>

          <h3>Upcoming Meetup</h3>
          <Field
            name="upcomingMeetupName"
            component= {upcomingMeetupName =>
            <div>
              <label>Name</label>
              <input type="text" {...upcomingMeetupName} />
              {upcomingMeetupName.touched &&
                upcomingMeetupName.error &&
                <span className="error">{upcomingMeetupName.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupDetails"
            component= {upcomingMeetupDetails =>
            <div>
              <label>Details</label>
              <input type="text" {...upcomingMeetupDetails} />
              {upcomingMeetupDetails.touched &&
                upcomingMeetupDetails.error &&
                <span className="error">{upcomingMeetupDetails.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupWhen"
            component= {upcomingMeetupWhen =>
            <div>
              <label>When</label>
              <input type="text" {...upcomingMeetupWhen} />
              {upcomingMeetupWhen.touched &&
                upcomingMeetupWhen.error &&
                <span className="error">{upcomingMeetupWhen.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupWhere"
            component= {upcomingMeetupWhere =>
            <div>
              <label>Where</label>
              <input type="text" {...upcomingMeetupWhere} />
              {upcomingMeetupWhere.touched &&
                upcomingMeetupWhere.error &&
                <span className="error">{upcomingMeetupWhere.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupWhereLink"
            component= {upcomingMeetupWhereLink =>
            <div>
              <label>WhereLink</label>
              <input type="text" {...upcomingMeetupWhereLink} />
              {upcomingMeetupWhereLink.touched &&
                upcomingMeetupWhereLink.error &&
                <span className="error">{upcomingMeetupWhereLink.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupCtaText"
            component= {upcomingMeetupCtaText =>
            <div>
              <label>CtaText</label>
              <input type="text" {...upcomingMeetupCtaText} />
              {upcomingMeetupCtaText.touched &&
                upcomingMeetupCtaText.error &&
                <span className="error">{upcomingMeetupCtaText.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupCtaLink"
            component= {upcomingMeetupCtaLink =>
            <div>
              <label>CtaLink</label>
              <input type="text" {...upcomingMeetupCtaLink} />
              {upcomingMeetupCtaLink.touched &&
                upcomingMeetupCtaLink.error &&
                <span className="error">{upcomingMeetupCtaLink.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupStreamingText"
            component= {upcomingMeetupStreamingText =>
            <div>
              <label>StreamingText</label>
              <input type="text" {...upcomingMeetupStreamingText} />
              {upcomingMeetupStreamingText.touched &&
                upcomingMeetupStreamingText.error &&
                <span className="error">{upcomingMeetupStreamingText.error}</span>}
            </div>
          }/>

          <Field
            name="upcomingMeetupStreamingLink"
            component= {upcomingMeetupStreamingLink =>
            <div>
              <label>StreamingLink</label>
              <input type="text" {...upcomingMeetupStreamingLink} />
              {upcomingMeetupStreamingLink.touched &&
                upcomingMeetupStreamingLink.error &&
                <span className="error">{upcomingMeetupStreamingLink.error}</span>}
            </div>
          }/>

      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

export default Editor;
