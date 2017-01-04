import React from 'react';
import MailingList from '../MailingList';
import SchedulePageOverview from '../SchedulePageOverview';
import Schedule from '../Schedule';

const SchedulePage = (props) => {
  return (
    <div>
      <SchedulePageOverview {...props} />
      <Schedule />
      <MailingList
        mailingListTitle="Stay tuned"
        mailingListSummary="Get ticket reminders and event information about the conference."
        page="conference"
      />
    </div>
  );
};

export default SchedulePage;
