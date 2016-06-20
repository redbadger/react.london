import React, { PropTypes } from 'react';
import { reduxForm, FieldArray } from 'redux-form';
import EventPreview from '../../containers/EventPreview';
import TextField from '../TextField/index.js';

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
        <TextField label="Name" name={speaker + 'name'} />
        <TextField label="Company" name={speaker + 'company'} />
        <TextField label="Talk Title" name={speaker + 'talkTitle'} />
        <TextField label="Talk Summary" name={speaker + 'talkSummary'} />
        <TextField label="Twitter Handle" name={speaker + 'twitterHandle'} />
        <TextField label="GitHub Handle" name={speaker + 'githubHandle'} />
        <TextField label="Blog URL" name={speaker + 'blogURL'} />
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
        <TextField label="Time" name={item + 'time'} />
        <TextField label="Text" name={item + 'text'} />
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
        <TextField label="Image" name={sponsor + 'imageURL'} />
        <TextField label="URL" name={sponsor + 'websiteURL'} />
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
        <TextField label="Title" name={event + 'title'} />
        <TextField label="Date" name={event + 'date'} />
        <TextField label="Time" name={event + 'time'} />
        <TextField label="Venue" name={event + 'venue'} />
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
        <TextField label="Title" name={'eventTitle'} />
        <TextField label="Address" name={'eventAddress'} />
        <TextField label="Date" name={'eventDate'} />
        <TextField label="Start Time" name={'eventStartTime'} />
        <TextField label="End Time" name={'eventEndTime'} />
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
