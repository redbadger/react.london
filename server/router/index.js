import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '../../shared/components/routes';
import reducer from '../../shared/reducers';

const dummyState = {
  community: {
    communitySummary: `React is having a huge impact on the way we think about
    Web UI development. Our Meetups are an opportunity to learn why and share
    experiences. We are a sociable group and very welcoming to newcomers.`,
    mailingListTitle: 'Stay tuned',
    mailingListSummary: `Get ticket reminders and event information about React
    London events straight to your inbox.`,
    eventTitle: 'July React Meetup',
    eventDate: 'Tuesday, 26 July 2016',
    eventAddress: 'Skills Matter, CodeNode, 10 South Place, London EC2M 7EB',
    eventStartTime: '18:30',
    eventEndTime: '21:30',
    eventSpeakers: [
      {
        name: 'Kadi Kraman',
        company: 'Red Badger',
        talkTitle: 'Draft.js in the real world',
        talkSummary: `Earlier this year, Facebook came out with their take on
        building a highly customisable rich text editor ­Draft.js. Built
        especially for React and powered by an immutable data model, it takes
        on the daunting task of solving all our rich text editing problems. She
        will provide a brief explanation on how Draft.js works and talk about
        her experience using it on a project along with Redux Form.`,
        twitterHandle: 'kadikraman',
        githubHandle: 'kadikraman',
      },
      {
        name: 'Ben Lambert',
        company: 'BBC Sport',
        talkTitle: 'Draft.js in the real world',
        talkSummary: `A talk around the challenges that BBC Sport have faced
        with running React at scale, and what we did to overcome them, and our
        migration from an old Angluar stack. Ben will also cover in a little
        detail how the BBC push updates to millions of clients
        simultaneously.`,
        twitterHandle: 'benjdlambert',
        githubHandle: 'benjdlambert',
      },
      {
        name: 'Fabio Santos',
        company: 'YLD',
        talkTitle: 'React, GraphQL and Relay in practice',
        talkSummary: `Using React, GraphQL and Relay, in production, for a
        national publication. Fabio will outline what went well, what went
        wrong, traps to avoid, and how to avoid them.`,
        twitterHandle: 'fabiosantoscode',
        githubHandle: 'fabiosantosart',
      },
    ],
    // eventSchedule,
    // eventSponsors,
    // upcomingEvents,
  },
};

function sendSite(res, renderProps) {
  const state = dummyState; // TODO
  const store = createStore(reducer, state);
  const initialState = store.getState();
  const content = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );
  res.render('index', { content, initialState });
}

function router(req, res) {
  const location = req.url;
  match({ routes, location }, (error, _, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (renderProps) {
      return sendSite(res, renderProps);
    }
    res.status(404).send('Not found');
  });
}

export default router;
