console.log('Compiling html...');

import { renderToString } from 'react-dom/server';
import { minify } from 'html-minifier';
import { writeFileSync } from 'fs';
import community from './app/components/Community';

const props = {
  communityTitle: 'A title!',
  communitySummary: 'All very important',
  mailingListTitle: 'Sign up',
  mailingListSummary: 'Learn all sort about React',
  mailingListConferenceText: 'Want to know about the conference too?',
  eventTitle: 'The best event yet',
  eventAddress: '123 Old Street',
  eventDate: 'Tomorrow!',
  eventStartTime: '6pm',
  eventEndTime: '9pm',
  eventSpeakers: [
    {
      name: 'Sarah',
      company: 'Green Elephant',
      talkTitle: 'Clean GenServer APIs',
      talkSummary: 'Making your processes developer friendly',
      twitterHandle: 'foo',
      githubHandle: 'bar',
      blogURL: 'https://foo.bar',
    },
  ],
  eventSchedule: [
    { time: '6pm', text: 'Do things' },
    { time: '9pm', text: 'Do stuff' },
  ],
  eventSponsors: [
    {
      websiteURL: 'barfoo',
      imageURL: 'slim',
    },
    {
      websiteURL: 'foobar',
      imageURL: 'foobar',
    },
  ],
  upcomingEvents: [
    {
      venue: 'codemesh',
      time: '9pm',
      date: '1915',
      title: 'Code Mesh',
    },
  ],
};

function wrapBody(markup) {
  const page = `<!DOCTYPE html>
  <html>
    <head>
      <title>React London</title>
      <link rel="stylesheet" href="main.css" type="text/css" charset="utf-8">
    </head>
    <body>
      ${markup}
    </body>
  </html>`;
  return minify(page, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  });
}

const body = renderToString(community(props));
const page = wrapBody(body);
writeFileSync('dist/index.html', page);

console.log('dist/index.html written');
