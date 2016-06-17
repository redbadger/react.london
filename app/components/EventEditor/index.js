import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import CommunityPreview from '../../containers/CommunityPreview';

const Form = () => {
  return (
    <div className="event-editor">
      <section>
        <h3>Event</h3>
        <div>
          <label>Title</label>
          <Field name="title" type="text" component="input" />
        </div>
        <div>
          <label>Address</label>
          <Field name="address" type="text" component="input" />
        </div>
        <div>
          <label>Date</label>
          <Field name="date" type="text" component="input" />
        </div>
        <div>
          <label>Start Time</label>
          <Field name="startTime" type="text" component="input" />
        </div>
        <div>
          <label>End Time</label>
          <Field name="endTime" type="text" component="input" />
        </div>
      </section>

      <section>
        <h3>Speakers</h3>
      </section>

      <section>
        <h3>Schedule</h3>
      </section>

      <section>
        <h3>Sponsors</h3>
      </section>

      <section>
        <h3>upcomingEvents</h3>
      </section>
    </div>
  );
};

// TODO: Inject initial state
const ConnectedForm = reduxForm({
  form: 'event',
})(Form);

const EventEditor = () => (
  <div className="event-editor">
    <h1>
      Event Editor!
    </h1>
    <ConnectedForm />

    <h2>Preview</h2>
    <div className="preview">
      <CommunityPreview />
    </div>
  </div>
);

EventEditor.propTypes = {
  eventID: PropTypes.string,
};


export default EventEditor;
