/* eslint-disable max-len */

import React from 'react';
import Helmet from 'react-helmet';

import SchedulePageOverview from '../SchedulePageOverview';
import Schedule from '../Schedule';

const SchedulePage = props => {
  const description =
    'Single track, talks, panel event, food, fun and friends with the React community.';
  const metaImage = 'https://react.london/img/JPG/OG_React_Schedule.jpg';
  const title = 'One day React conference in London';
  return (
    <div>
      <Helmet
        meta={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@ReactLondon_' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: metaImage },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: 'https://react.london/schedule' },
          { property: 'og:title', content: title },
          { property: 'og:image', content: metaImage },
          { property: 'og:description', content: description },
        ]}
      />
      <SchedulePageOverview {...props} />
      <Schedule />
    </div>
  );
};

export default SchedulePage;
