import React, { PropTypes } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import CommunityPreview from '../../containers/CommunityPreview';

const Speakers = ({ fields }) => (
  <ul>
    <div>
      <button type="button" onClick={() => fields.push()}>Add Speaker</button>
    </div>
    {fields.map((speaker, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)} >
          Remove Speaker
        </button>

        <div>
          <label>Name</label>
          <Field name={speaker + 'name'} type="text" component="input" />
        </div>
        <div>
          <label>Company</label>
          <Field name={speaker + 'company'} type="text" component="input" />
        </div>
        <div>
          <label>Talk Title</label>
          <Field name={speaker + 'talkTitle'} type="text" component="input" />
        </div>
        <div>
          <label>Talk Summary</label>
          <Field name={speaker + 'talkSummary'} type="text" component="input" />
        </div>
        <div>
          <label>Twitter Handle</label>
          <Field name={speaker + 'twitterHandle'} type="text" component="input" />
        </div>
        <div>
          <label>GitHub Handle</label>
          <Field name={speaker + 'githubHandle'} type="text" component="input" />
        </div>
        <div>
          <label>Blog URL</label>
          <Field name={speaker + 'blogURL'} type="text" component="input" />
        </div>
      </li>
    ))}
  </ul>
);

Speakers.propTypes = {
  fields: PropTypes.shape({
    push: PropTypes.func,
    remove: PropTypes.func,
  }),
};

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
        <FieldArray name="members" component={Speakers} />
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
