import React, { PropTypes } from 'react';
import speakerType from '../../prop-types/speaker-type';
import SpeakerList from '../SpeakersList';
import MailingList from '../MailingList';

const SpeakersPage = ({ speakers }) => {
  return (
    <div className="SpeakersPage">
      <div className="speakers-list-intro">
        <h2>On stage</h2>
      </div>
      <SpeakerList speakers={speakers} />
      <div className="no-cfp-announcement">
        <p>
            As we hope the conference will include the newest
            freshest topics our call for papers will not open until
            November. We will announce the full speaker line up in
            February.
        </p>
      </div>
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