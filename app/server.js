require('es6-promise').polyfill();

import 'ignore-styles';

import express from 'express';
import serialize from 'serialize-javascript';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store';
import routes from './routes';

import Preview from './components/Preview/Preview';

import  bodyParser from 'body-parser';
import { minify } from 'html-minifier';

import AWS from 'aws-sdk';

const app = express();

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

const HTML = ({ content, store }) => (
  <html>
    <head>
      <meta charset="UTF-8" />
    </head>
    <body>
      <div id="main" dangerouslySetInnerHTML={{ __html: content }} />
      <div id="devtools" />
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())}` }} />
      <script src='/build/bundle.js' />
    </body>
  </html>
);

const generateStaticSite = ((properties, headers) => {
  let markup = renderToStaticMarkup(<Preview
    radiumConfig={{ userAgent: headers['user-agent'] }}
    text={ properties }
  />);

  markup = `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8" />
    </head>
    <body>
      ${markup}
    </body>
  </html>`;

  const site = (minify(markup, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  }));

  return site;
});

const shipToAws = ((bucketName, site) => {
  AWS.config.update({
    region: 'eu-west-1',
  });

  let s3 = new AWS.S3();

  s3.putObject({
    Bucket: bucketName,
    Key: 'index.html',
    ACL: 'public-read',
    Body: site,
    ContentType: 'text/html',
  }, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
});

app.post('/staging/', (req, res) => {
  const site = generateStaticSite(req.body, req.headers);
  shipToAws('london.react.dev', site);
  res.send(site);
});

app.post('/live/', (req, res) => {
  const site = generateStaticSite(req.body, req.headers);
  shipToAws('london.react.live', site);
  res.send(site);
});

const getInitialState = () => ({
  aboutTitle: 'THE AWESOME London React User Group',
  aboutSummary: {
    entityMap: {},
    blocks: [
      {
        key: '305s2',
        text: 'This group was established by Red Badger, a software company at Old Street.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: 'a6j5n',
        text: 'React is already having a huge impact on the way we think about Web UI development at Red Badger and this is an opportunity to learn why and share your own experiences.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '6eu1n',
        text: 'We meet once a month, usually on the 3rd Wednesday of each month',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '756f1',
        text: 'We generally have 2 or 3 speakers and loads of questions, pizzas and beer.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '6lvqe',
        text: 'We are a sociable group and very welcoming to newcomers. Follow us on Twitter @Londonreact and join the conversation on Slack here',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '425i0',
        text: 'See you soon!',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ],
  },
  upcomingMeetupName: 'June React User Group',
  upcomingMeetupDetails: {
    entityMap: {},
    blocks: [
      {
        key: '151i4',
        text: 'TICKET INFO WILL FOLLOW',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 23,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: 'd3g2j',
        text: 'Join us for an evening of great conversation around React.js- ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: 'dl9t8',
        text: '6:30- Doors open for pizza and beers ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 4,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: '9fntu',
        text: '7:00- Intro from Stu ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 4,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: 'elsnd',
        text: '7:10- 2 or 3 speakers each with 20 minutes to talk followed by Q&A ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 4,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: '9nf5s',
        text: '8:30\/ 9:00- Everyone is welcome to stay for another drink Our speakers for the evening are.... ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 10,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: '6iivf',
        text: 'More details will follow shortly We will live stream and record the event- we will post a link here prior to the event.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ],
  },
  upcomingMeetupWhen: 'Tuesday, June 28, 2016',
  upcomingMeetupWhere: 'Facebook, 10 Brock Street, Regents Place, London',
  upcomingMeetupWhereLink: 'https://maps.google.com/maps?f=q&hl=en&q=10+Brock+Street%2C+Regents+Place%2C+London%2C+gb',
  upcomingMeetupCtaText: 'For full details please see',
  upcomingMeetupCtaLink: 'http://www.meetup.com/London-React-User-Group/events/230114076/',
  upcomingMeetupStreamingText: 'Check out the live stream',
  upcomingMeetupStreamingLink: 'https://www.youtube.com/channel/UCHlIVrJki1BxwKe7NtFYZRg',
  upcomingMeetupSpeaker1Name: 'Zoë',
  upcomingMeetupSpeaker1Title: 'Stupid names for npm modules',
  upcomingMeetupSpeaker1Blurb: 'If it\'s a word, it\'s probably been used to name a npm module.',
  upcomingMeetupSpeaker1Picture: 'http://lorempixel.com/200/200/animals/',
  upcomingMeetupSpeaker2Name: 'Marcel',
  upcomingMeetupSpeaker2Title: 'Writing COBOL underwater',
  upcomingMeetupSpeaker2Blurb: 'Writing COBOL underwater is quite difficult, as Marcel will explain',
  upcomingMeetupSpeaker2Picture: 'http://lorempixel.com/200/200/animals/',
  upcomingMeetupSpeaker3Name: 'To be confirmed',
  upcomingMeetupSpeaker3Title: 'To be confirmed',
  upcomingMeetupSpeaker3Blurb: 'If you are interested in taking this slot, please talk to Amy',
  upcomingMeetupSpeaker3Picture: 'http://lorempixel.com/200/200/animals/',
});

app.get('/content/', (req, res) => {
  console.log('******************************');
  console.log('GET /content called!');
  console.log('******************************');
  res.json(getInitialState());
});

app.use((req, res) => {
  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathnname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(
        <Provider
          radiumConfig={{ userAgent: req.headers['user-agent'] }}
          store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>));
    }
  });
});

app.listen(8080, function () {
  console.log('Server listening on 8080, Ctrl+C to blow it all to hell.');
});
