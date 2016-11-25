import React, { PropTypes } from 'react';

const CommunityAbout = ({ summary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <p className="CommunityAbout__text--bold">
        <strong>
          Join us at our monthly meetup
        </strong>
      </p>
      <p className="CommunityAbout__text">
        {summary}
      </p>
    </div>
  </section>
);

CommunityAbout.propTypes = {
  summary: PropTypes.string,
};

export default CommunityAbout;
