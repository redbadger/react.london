import React, { PropTypes } from 'react';
import speakerType from '../../prop-types/speaker-type';
import SpeakersPageAbout from '../SpeakersPageAbout';
import SpeakersPageContent from '../SpeakersPageContent';
import MailingList from '../MailingList';
import { ExternalLink } from '../ExternalLink';

const SpeakersPage = (props) => {
  return (
    <div className="SpeakersPage">
      <SpeakersPageAbout />
      <SpeakersPageContent {...props} />
      <section className="block SpeakersPage__no-cfp">
        <div className="content">
          <p>
            There are 6 speaking slots up for grabs as well as
            4 lightning talks - we want to hear from you!
            Check out the call for papers
            <ExternalLink
              href="https://www.papercall.io/reactlondon2017"
              className="become-speaker-link"
            >
              here
            </ExternalLink>
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
