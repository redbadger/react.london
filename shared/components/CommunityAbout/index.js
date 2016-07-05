import React, { PropTypes } from 'react';

const CommunityAbout = ({ communitySummary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <p className="CommunityAbout__text">
        {communitySummary}
      </p>
      <p className="CommunityAbout__text--bold">
        <strong>
          See you soon!
        </strong>
      </p>
    </div>
  </section>
);

CommunityAbout.propTypes = {
  communitySummary: PropTypes.string,
};

export default CommunityAbout;
