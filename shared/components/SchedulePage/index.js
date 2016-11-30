import React from 'react';
import MailingList from '../MailingList';
import SchedulePageOverview from '../SchedulePageOverview';

const SchedulePage = () => {
  return (
    <div>
      <SchedulePageOverview />
      <MailingList
        mailingListTitle="Stay tuned"
        mailingListSummary="Get ticket reminders and event information about the conference."
        page="conference"
      />
    </div>
  );
};

export default SchedulePage;
