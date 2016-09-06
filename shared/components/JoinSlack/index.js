import { SLACK_URL } from '../../../server/constants.js';
import React from 'react';

const JoinSlack = () => (
  <div className="JoinSlack block">
    <div className="content">
      <a
        target="_blank"
        rel="noopener"
        href={SLACK_URL}
        className="JoinSlack__btn"
      >Join us on Slack</a>
    </div>
  </div>
);

export default JoinSlack;
