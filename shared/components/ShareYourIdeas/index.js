import { SLACK_URL } from '../../../server/constants.js';
import React from 'react';

const ShareYourIdeas = () => (
  <div className="ShareYourIdeas block">
    <div className="content">
      <p className="ShareYourIdeas__text">
        We want to hear from you! Send us your ideas and suggestions for the
        conference.
      </p>
      <a
        target="_blank"
        rel="noopener"
        href={SLACK_URL}
        className="ShareYourIdeas__btn"
      >
        Share your ideas
      </a>
    </div>
  </div>
);

export default ShareYourIdeas;
