import fetch from 'isomorphic-fetch';

const dummyState = {
  data: {
    community: {
      id: 'V3-PWiMAAGEz2yz5',
      title: 'React London',
      summary: 'React is having a huge impact on the way we think about Web UI development. Our Meetups are an opportunity to learn why and share experiences. We are a sociable group and very welcoming to newcomers.\nSee you soon!',
      mailingListTitle: 'Get ticket reminders and event information about React London events straight to your inbox.',
      events: [
        {
          id: 'V3-PjyMAAF0n2y3Q',
          title: 'React London July Meetup',
          datetime: {
            iso: '2016-07-27T23:00:00+0000',
          },
          location: 'Skills Matter, CodeNode, 10 South Place, London EC2M 7EB',
          talks: [
            {
              id: 'V3-t-SMAALE426eq',
              summary: 'Earlier this year, Facebook came out with their take on building a highly customisable rich text editor ­Draft.js. Built especially for React and powered by an immutable data model, it takes on the daunting task of solving all our rich text editing problems. She will provide a brief explanation on how Draft.js works and talk about her experience using it on a project along with Redux Form.',
              title: 'GraphQL for beginners',
              speakers: [
                {
                  name: 'Alex Savin',
                  company: 'Red Badger',
                  twitterHandle: 'alexsavinme',
                  githubHandle: 'asavin',
                  blogURL: 'https://alexsavin.me',
                  imageURL: 'http://react.london/assets/img/Speakers/kadikraman.jpg',
                },
              ],
            },
            {
              id: 'V3-t-SMAALE426eq',
              summary: 'Earlier this year, Facebook came out with their take on building a highly customisable rich text editor ­Draft.js. Built especially for React and powered by an immutable data model, it takes on the daunting task of solving all our rich text editing problems. She will provide a brief explanation on how Draft.js works and talk about her experience using it on a project along with Redux Form.',
              title: 'GraphQL for beginners',
              speakers: [
                {
                  name: 'Alex Savin',
                  company: 'Red Badger',
                  twitterHandle: 'alexsavinme',
                  githubHandle: 'asavin',
                  blogURL: 'https://alexsavin.me',
                  imageURL: 'http://react.london/assets/img/Speakers/kadikraman.jpg',
                },
              ],
            },
            {
              id: 'V3-t-SMAALE426eq',
              summary: 'Earlier this year, Facebook came out with their take on building a highly customisable rich text editor ­Draft.js. Built especially for React and powered by an immutable data model, it takes on the daunting task of solving all our rich text editing problems. She will provide a brief explanation on how Draft.js works and talk about her experience using it on a project along with Redux Form.',
              title: 'GraphQL for beginners',
              speakers: [
                {
                  name: 'Alex Savin',
                  company: 'Red Badger',
                  twitterHandle: 'alexsavinme',
                  githubHandle: 'asavin',
                  blogURL: 'https://alexsavin.me',
                  imageURL: 'http://react.london/assets/img/Speakers/kadikraman.jpg',
                },
              ],
            },,
          ],
        },
      ],
    },
  },
};

export function getSiteState() {
  return new Promise(resolve => resolve(dummyState.data));
}
