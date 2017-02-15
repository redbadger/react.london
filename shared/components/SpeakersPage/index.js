/* eslint-disable max-len */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import speakerType from '../../prop-types/speaker-type';
import SpeakersPageAbout from '../SpeakersPageAbout';
import SpeakersPageContent from '../SpeakersPageContent';
import MailingList from '../MailingList';

const SpeakersPage = (props) => {
  const description = '13 of the most talented people from our community exploring the possibilities that the newest advances in React brings.';
  const metaImage = 'https://react.london/img/JPG/OG_React_Speakers.jpg';
  const title = 'Speakers at React London 2017';
  return (
    <div className="SpeakersPage">
      <Helmet
        meta={[
           { name: 'twitter:card', content: 'summary_large_image' },
           { name: 'twitter:site', content: '@ReactLondon_' },
           { name: 'twitter:title', content: title },
           { name: 'twitter:description', content: description },
           { name: 'twitter:image', content: metaImage },
           { property: 'og:type', content: 'article' },
           { property: 'og:url', content: 'https://react.london/speakers' },
           { property: 'og:title', content: title },
           { property: 'og:image', content: metaImage },
           { property: 'og:description', content: description },
        ]}
      />
      <SpeakersPageAbout />
      <SpeakersPageContent {...props} />
      <MailingList
        mailingListTitle="Stay tuned"
        mailingListSummary="Get ticket reminders and event information about the conference."
        page="conference"
      />
    </div>
  );
};

SpeakersPage.propTypes = {
  speakers: PropTypes.arrayOf(speakerType),
};

export default SpeakersPage;
