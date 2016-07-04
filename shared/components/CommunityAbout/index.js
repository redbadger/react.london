import React, { PropTypes } from 'react';

function html(content) {
  return { dangerouslySetInnerHTML: { __html: content } };
}

const CommunityAbout = ({ summary }) => (
  <section className="CommunityAbout block">
    <div className="content">
      <p className="CommunityAbout__text" {...html(summary)} />
    </div>
  </section>
);

CommunityAbout.propTypes = {
  summary: PropTypes.string,
};

export default CommunityAbout;
