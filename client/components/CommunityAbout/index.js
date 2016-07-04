import React, { PropTypes } from 'react';

function html(content) {
  return { dangerouslySetInnerHTML: { __html: content } };
}

const CommunityAbout = ({ communitySummary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <p className="CommunityAbout__text" {...html(communitySummary)} />
    </div>
  </section>
);

CommunityAbout.propTypes = {
  communitySummary: PropTypes.string,
};

export default CommunityAbout;
