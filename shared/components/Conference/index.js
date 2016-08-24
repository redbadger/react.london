import React from 'react';
import MailingList from '../MailingList';
import ConferenceAbout from '../ConferenceAbout';
import NextConferenceEvent from '../NextConferenceEvent';
import ShareYourIdeas from '../ShareYourIdeas';

const Conference = () => (
  <div>
    <ConferenceAbout />
    <NextConferenceEvent />
    <MailingList
      mailingListTitle="Stay tuned"
      mailingListSummary="Get ticket reminders and event information about the conference."
      page="conference"
    />
    <ShareYourIdeas />
  </div>
);

export default Conference;
