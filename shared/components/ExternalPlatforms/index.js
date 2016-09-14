import { SLACK_URL, YOUTUBE_URL } from '../../../server/constants.js';
import React from 'react';

const ExternalPlatforms = () => (
  <div className="ExternalPlatforms">
    <a
      target="_blank"
      rel="noopener"
      href={SLACK_URL}
      className="ExternalPlatforms__btn ExternalPlatforms__btn--slack"
    >Join us on Slack</a>
    <a
      target="_blank"
      rel="noopener"
      href={YOUTUBE_URL}
      className="ExternalPlatforms__btn ExternalPlatforms__btn--youtube"
    >Watch previous Meetups</a>
  </div>
);

export default ExternalPlatforms;
