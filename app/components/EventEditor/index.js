import React, { PropTypes } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import EventPreview from '../../containers/EventPreview';

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

const Schedule = ({ fields }) => (
  <ul>
    <div>
      <button type="button" onClick={() => fields.push()}>Add Schedule Item</button>
    </div>
    {fields.map((item, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)} >
          Remove Schedule Item
        </button>
        <div>
          <label>Time</label>
          <Field name={item + 'time'} type="text" component="input" />
        </div>
        <div>
          <label>Text</label>
          <Field name={item + 'text'} type="text" component="input" />
        </div>
      </li>
    ))}
  </ul>
);

Schedule.propTypes = {
  fields: PropTypes.shape({
    push: PropTypes.func,
    remove: PropTypes.func,
  }),
};

const Sponsors = ({ fields }) => (
  <ul>
    <div>
      <button type="button" onClick={() => fields.push()}>Add Sponsor</button>
    </div>
    {fields.map((sponsor, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)} >
          Remove Sponsor
        </button>
        <div>
          <label>Image</label>
          <Field name={sponsor + 'imageURL'} type="text" component="input" />
        </div>
        <div>
          <label>URL</label>
          <Field name={sponsor + 'websiteURL'} type="text" component="input" />
        </div>
      </li>
    ))}
  </ul>
);

Sponsors.propTypes = {
  fields: PropTypes.shape({
    push: PropTypes.func,
    remove: PropTypes.func,
  }),
};

const UpcomingEvents = ({ fields }) => (
  <ul>
    <div>
      <button type="button" onClick={() => fields.push()}>Add Upcoming Event</button>
    </div>
    {fields.map((event, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)} >
          Remove Event
        </button>
        <div>
          <label>Title</label>
          <Field name={event + 'title'} type="text" component="input" />
        </div>
        <div>
          <label>Date</label>
          <Field name={event + 'date'} type="text" component="input" />
        </div>
        <div>
          <label>Time</label>
          <Field name={event + 'time'} type="text" component="input" />
        </div>
        <div>
          <label>Venue</label>
          <Field name={event + 'venue'} type="text" component="input" />
        </div>
      </li>
    ))}
  </ul>
);

UpcomingEvents.propTypes = {
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
          <Field name="eventTitle" type="text" component="input" />
        </div>
        <div>
          <label>Address</label>
          <Field name="eventAddress" type="text" component="input" />
        </div>
        <div>
          <label>Date</label>
          <Field name="eventDate" type="text" component="input" />
        </div>
        <div>
          <label>Start Time</label>
          <Field name="eventStartTime" type="text" component="input" />
        </div>
        <div>
          <label>End Time</label>
          <Field name="eventEndTime" type="text" component="input" />
        </div>
      </section>

      <section>
        <h3>Speakers</h3>
        <FieldArray name="eventSpeakers" component={Speakers} />
      </section>

      <section>
        <h3>Schedule</h3>
        <FieldArray name="eventSchedule" component={Schedule} />
      </section>

      <section>
        <h3>Sponsors</h3>
        <FieldArray name="eventSponsors" component={Sponsors} />
      </section>

      <section>
        <h3>Upcoming Events</h3>
        <FieldArray name="upcomingEvents" component={UpcomingEvents} />
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
      <EventPreview />
    </div>
  </div>
);

EventEditor.propTypes = {
  eventID: PropTypes.string,
};


export default EventEditor;
