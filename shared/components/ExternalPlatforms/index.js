import { SLACK_URL, YOUTUBE_URL } from '../../../server/constants.js';
import { ExternalLink } from '../ExternalLink';
import React from 'react';

const ExternalPlatforms = () => (
  <div className="ExternalPlatforms">
    <ExternalLink
      href={SLACK_URL}
      className="ExternalPlatforms__btn ExternalPlatforms__btn--slack"
    >
      Join us on Slack
    </ExternalLink>
    <ExternalLink
      href={YOUTUBE_URL}
      className="ExternalPlatforms__btn ExternalPlatforms__btn--youtube"
    >
      Watch previous Meetups
    </ExternalLink>
  </div>
);

export default ExternalPlatforms;
