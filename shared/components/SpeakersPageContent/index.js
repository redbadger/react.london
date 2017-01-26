import React, { PropTypes } from 'react';
import SpeakerPageList from '../SpeakerPageList';
import speakerType from '../../prop-types/speaker-type';
import { ExternalLink } from '../ExternalLink';

const SpeakersPageContent = (props) => {
  return (
    <section className="SpeakersPageContent block">
      <div className="content">
        <SpeakerPageList speakers={props.speakers} />
        <div className="SpeakersPageContent__footer">
          <div className="SpeakersPageContent__footer__title">
            "Simply put everyone is welcome!"
          </div>
          <div className="SpeakersPageContent__footer__text">
            Read <ExternalLink href="">
              10 steps we've taken to make React London 2017 as inclusive as possible
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
