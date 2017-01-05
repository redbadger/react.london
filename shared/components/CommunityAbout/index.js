import React, { PropTypes } from 'react';
import InterestedSpeaker from '../InterestedSpeaker';

const CommunityAbout = ({ summary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <div className="text">
        <p className="CommunityAbout__text--bold">
          <strong>
            Join us at our monthly meetup
          </strong>
        </p>
        <p className="CommunityAbout__text">
          {summary}
        </p>
      </div>
      <InterestedSpeaker />
    </div>
  </section>
);

CommunityAbout.propTypes = {
  summary: PropTypes.string,
};

export default CommunityAbout;
