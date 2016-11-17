import React, { PropTypes } from 'react';
import speakerType from '../../prop-types/speaker-type';
import SpeakersPageAbout from '../SpeakersPageAbout';
import SpeakersPageContent from '../SpeakersPageContent';
import MailingList from '../MailingList';

const SpeakersPage = (props) => {
  return (
    <div className="SpeakersPage">
      <SpeakersPageAbout />
      <SpeakersPageContent {...props} />
      <MailingList
        mailingListTitle="Stay tuned"
        mailingListSummary="Get ticket reminders and event information about the conference."
        page="conference"
      />
    </div>
  );
};

SpeakersPage.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPage;
