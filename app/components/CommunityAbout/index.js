import React, { PropTypes } from 'react';

function html(content) {
  return { __html: content };
}

const CommunityAbout = ({ communitySummary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <p className="CommunityAbout__text" dangerouslySetInnerHTML={html(communitySummary)} />
    </div>
  </section>
);

CommunityAbout.propTypes = {
  communitySummary: PropTypes.string,
};


export default CommunityAbout;
