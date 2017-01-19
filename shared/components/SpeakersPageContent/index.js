import React, { PropTypes } from 'react';
import SpeakerPageTalkList from '../SpeakerPageTalkList';
import speakerType from '../../prop-types/speaker-type';

const SpeakersPageContent = (props) => {
  console.log(props);
  return (
    <section className="SpeakersPageContent block">
      <div className="content">
        <h2 className="SpeakersPageContent__header">On stage</h2>
        <p>
          We are thrilled to have members of the Facebook team joining
          us on the day for a panel discussion.
        </p>
        <SpeakerPageTalkList talks={props.talks} />
      </div>
    </section>
  );
};

SpeakersPageContent.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPageContent;
