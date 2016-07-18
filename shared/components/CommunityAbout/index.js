import React, { PropTypes } from 'react';

const CommunityAbout = ({ summary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <p className="CommunityAbout__text">
        {summary}
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
  summary: PropTypes.string,
};

export default CommunityAbout;
