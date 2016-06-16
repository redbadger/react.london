import React, { PropTypes } from 'react';

const Community = ({
  communityTitle,
  communitySummary,
  mailingListTitle,
  mailingListSummary,
  mailingListConferenceText,
}) => (
  <div className="community">
    <h1>
      Community!
    </h1>

    <div>Community Title: {communityTitle}</div>
    <div>Community Summary: {communitySummary}</div>

    <div>Mailing List Title: {mailingListTitle}</div>
    <div>Mailing List Summary: {mailingListSummary}</div>
    <div>Mailing List Conference Text: {mailingListConferenceText}</div>
  </div>
);

Community.propTypes = {
  communityTitle: PropTypes.string,
  communitySummary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  mailingListConferenceText: PropTypes.string,
};

export default Community;
