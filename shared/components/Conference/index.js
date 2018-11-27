/* eslint-disable max-len */

import React from 'react';
import Helmet from 'react-helmet';

import ConferenceAbout from '../ConferenceAbout';
import NextConferenceEvent from '../NextConferenceEvent';
import ShareYourIdeas from '../ShareYourIdeas';

const Conference = props => {
  const description =
    'London’s first React conference brought to you by Europe’s biggest React community.';
  const metaImage = 'https://react.london/img/JPG/OG_React_Home.jpg';
  const title = 'React London 2017';
  return (
    <div>
      <Helmet
        meta={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@ReactLondon_' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: metaImage },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://react.london' },
          { property: 'og:title', content: title },
          { property: 'og:image', content: metaImage },
          { property: 'og:description', content: description },
        ]}
      />
      <ConferenceAbout />
      <NextConferenceEvent {...props} />
      <ShareYourIdeas />
    </div>
  );
};

export default Conference;
