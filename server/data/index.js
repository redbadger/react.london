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
        imageURL: '/img/Speakers/kadikraman.jpg',
      },
      {
        name: 'Ben Lambert',
        company: 'BBC Sport',
        talkTitle: 'BBC Sport and React',
        talkSummary: `A talk around the challenges that BBC Sport have faced
        with running React at scale, and what we did to overcome them, and our
        migration from an old Angluar stack. Ben will also cover in a little
        detail how the BBC push updates to millions of clients
        simultaneously.`,
        twitterHandle: 'benjdlambert',
        githubHandle: 'benjdlambert',
        imageURL: '/img/Speakers/benjdlambert.jpeg',
      },
      {
        name: 'Fabio Santos',
        company: 'YLD',
        talkTitle: 'React, GraphQL and Relay in practice',
        talkSummary: `Using React, GraphQL and Relay, in production, for a
        national publication. Fabio will outline what went well, what went
        wrong, traps to avoid, and how to avoid them.`,
        twitterHandle: 'fabiosantosart',
        githubHandle: 'fabiosantoscode',
        imageURL: '/img/Speakers/fabiosantosart.jpg',
      },
    ],
    eventSchedule: [
      {
        time: '8:30',
        text: 'Introduction from Louis',
      },
      {
        time: '9:30',
        text: 'Why React is fooBar',
      },
      {
        time: '11.00',
        text: 'Time for some lunch',
      },
      {
        time: '2.00',
        text: 'Home time, enough React',
      },
    ],
    eventSponsors: [
      {
        websiteURL: 'http://google.com',
        imageURL: 'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      },
    ],
    // upcomingEvents,
  },
};

export function getSiteState() {
  return new Promise(resolve => resolve(dummyState));
}
