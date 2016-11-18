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
      <section className="block SpeakersPage__no-cfp">
        <div className="content">
          <p>
            In order to ensure the day is packed with the freshest,
            newest content our call for papers will not open until November.
            We will announce the full speaker line up in February.
          </p>
        </div>
      </section>
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
