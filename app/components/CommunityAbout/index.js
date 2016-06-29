import React, { PropTypes } from 'react';

function html(content) {
  return { __html: content };
}

const CommunityAbout = ({ communitySummary }) => (
  <section className="About block">
    <div className="content">
      <p className="About__text" dangerouslySetInnerHTML={html(communitySummary)} />
    </div>
  </section>
);

CommunityAbout.propTypes = {
  communitySummary: PropTypes.string,
};


export default CommunityAbout;
