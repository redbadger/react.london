/* eslint-disable max-len */

import React from 'react';
import Helmet from 'react-helmet';

import MailingList from '../MailingList';
import ConferenceAbout from '../ConferenceAbout';
import NextConferenceEvent from '../NextConferenceEvent';
import ShareYourIdeas from '../ShareYourIdeas';

const Conference = (props) => {
  const description = 'London’s first React conference brought to you by Europe’s biggest React community.';
  const metaImage = 'https://react.london/img/JPG/OG_React_Home.jpg';
  const title = 'React London 2017';
  return (
    <div>
      <Helmet
        meta={[
           { property: 'twitter:card', content: 'summary_large_image' },
           { property: 'twitter:site', content: '@ReactLondon_' },
           { property: 'twitter:title', content: title },
           { property: 'twitter:description', content: description },
           { property: 'twitter:image', content: metaImage },
           { property: 'og:url', content: 'https://react.london' },
           { property: 'og:title', content: title },
           { property: 'og:image', content: metaImage },
           { property: 'og:description', content: description },
        ]}
      />
      <ConferenceAbout />
      <NextConferenceEvent {...props} />
      <MailingList
        mailingListTitle="Stay tuned"
        mailingListSummary="Get ticket reminders and event information about the conference."
        page="conference"
      />
      <ShareYourIdeas />
    </div>
  );
};

export default Conference;
