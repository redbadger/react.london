import React, { PropTypes } from 'react';
import SpeakerPageTalkList from '../SpeakerPageTalkList';
import speakerType from '../../prop-types/speaker-type';
import { ExternalLink } from '../ExternalLink';

const SpeakersPageContent = (props) => {
  return (
    <section className="SpeakersPageContent block">
      <div className="content">
        <h2 className="SpeakersPageContent__header">On stage</h2>
        <p>
          We are thrilled to have members of the Facebook team joining
          us on the day for a panel discussion.
        </p>
        <SpeakerPageTalkList talks={props.talks} />
        <div className="SpeakersPageContent__footer">
          <div className="SpeakersPageContent__footer__title">
            "Simply put everyone is welcome!"
          </div>
          <div className="SpeakersPageContent__footer__text">
            Read <ExternalLink href="">
              10 ways we’ve made React London 2017 an inclusive event
            </ExternalLink>
          </div>

          <ExternalLink
            href="https://ti.to/red-badger/react-london-2017/"
            className="SpeakersPageContent__footer__button"
          >
              Get me a ticket
          </ExternalLink>

        </div>
      </div>
    </section>
  );
};

SpeakersPageContent.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPageContent;
