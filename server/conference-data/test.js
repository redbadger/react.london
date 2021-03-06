import deepFreeze from 'deep-freeze';
import conferenceData, { pickSpeakersFromTalks } from '.';
import { data as fixture } from '../../test/fixtures/bb-conference-payload.json';

deepFreeze(fixture);

describe('conference-data transform', () => {
  it('defaults if no values', () => {
    expect(conferenceData(undefined)).to.deep.equal({});
    expect(conferenceData({})).to.deep.equal({});
  });

  it('does not explode if the partners are null', () => {
    const data = { event: { ...fixture.event, partners: null } };
    const state = conferenceData(data);
    expect(state.gold).to.deep.equal(undefined);
    expect(state.silver).to.deep.equal(undefined);
    expect(state.bronze).to.deep.equal(undefined);
    expect(state.supporter).to.deep.equal(undefined);
  });

  it('selects a the next event with a Featured displayLevel', () => {
    const partners = [
      { name: '1', level: 'Gold' },
      { name: '2', level: 'Silver' },
      { name: '3', level: 'Bronze' },
      { name: '4', level: 'Supporter' },
      { name: '5', level: 'Gold' },
      { name: '6', level: 'Silver' },
      { name: '7', level: 'Bronze' },
      { name: '8', level: 'Supporter' },
    ];
    expect(fixture.event.partners.length).not.to.equal(null);
    const data = { event: { ...fixture.event, partners } };
    const state = conferenceData(data);
    expect(state.gold).to.deep.equal([
      { name: '1', level: 'Gold' },
      { name: '5', level: 'Gold' },
    ]);
    expect(state.silver).to.deep.equal([
      { name: '2', level: 'Silver' },
      { name: '6', level: 'Silver' },
    ]);
    expect(state.bronze).to.deep.equal([
      { name: '3', level: 'Bronze' },
      { name: '7', level: 'Bronze' },
    ]);
    expect(state.supporter).to.deep.equal([
      { name: '4', level: 'Supporter' },
      { name: '8', level: 'Supporter' },
    ]);
  });
});

describe('conference querying for ticket data', () => {
  it('returns the correct associated data for the ticket query', () => {
    const data = { event: { ...fixture.event } };
    const state = conferenceData(data);
    expect(state.tickets).to.deep.equal([{
      title: 'Early Bird',
      releaseDate: {
        iso: '2016-08-26T23:00:00+0000',
      },
      price: '350',
      available: true,
    }]);
  });
});

describe('pickSpeakersFromTalks', () => {
  it('returns correct list of speakers picked from talks', () => {
    const talks = [
      {
        id: 'V8cF9yoAACoAd01r',
        title: 'Awesome talk by Christopher',
        summary: 'Summary of the talk',
        speakers: [
          {
            id: 'V8cFyioAACsAd0yt',
            name: 'Christopher Chedeau',
            company: 'Facebook',
            twitterHandle: 'Vjeux',
            githubHandle: 'githubhandle',
            blogURL: 'http://www.google.com',
            imageURL: 'http://www.google.com/image.jpg',
          },
        ],
      },
      {
        id: 'V6IZrywAACwAN97-',
        title: 'Re-writing a frontend with re-usable React Components via an API',
        summary: 'Detailed summary',
        speakers: [
          {
            id: 'V6IZdiwAACwAN94X',
            name: 'Chris McKenzie',
            company: 'Not on the High Street',
            twitterHandle: null,
            githubHandle: 'chrisface',
            blogURL: null,
            imageURL: '//res.cloudinary.com/speaker.png',
          },
          {
            id: 'V8cFyioAACsAd0yt',
            name: 'Christopher Chedeau',
            company: 'Facebook',
            twitterHandle: 'Vjeux',
            githubHandle: 'githubhandle',
            blogURL: 'http://www.google.com',
            imageURL: 'http://www.google.com/image.jpg',
          },
        ],
      },
    ];

    const filteredSpeakers = pickSpeakersFromTalks(talks);
    expect(filteredSpeakers).to.deep.equal([
      {
        id: 'V8cFyioAACsAd0yt',
        name: 'Christopher Chedeau',
        company: 'Facebook',
        twitterHandle: 'Vjeux',
        githubHandle: 'githubhandle',
        blogURL: 'http://www.google.com',
        imageURL: 'http://www.google.com/image.jpg',
        talks: [
          {
            id: 'V8cF9yoAACoAd01r',
            title: 'Awesome talk by Christopher',
            summary: 'Summary of the talk',
          },
          {
            id: 'V6IZrywAACwAN97-',
            title: 'Re-writing a frontend with re-usable React Components via an API',
            summary: 'Detailed summary',
          },
        ],
      },
      {
        id: 'V6IZdiwAACwAN94X',
        name: 'Chris McKenzie',
        company: 'Not on the High Street',
        twitterHandle: null,
        githubHandle: 'chrisface',
        blogURL: null,
        imageURL: '//res.cloudinary.com/speaker.png',
        talks: [
          {
            id: 'V6IZrywAACwAN97-',
            title: 'Re-writing a frontend with re-usable React Components via an API',
            summary: 'Detailed summary',
          },
        ],
      },
    ]);
    expect(filteredSpeakers.length).to.equal(2);
  });

  it('doesn\'t explode if there are no talks', () => {
    expect(pickSpeakersFromTalks()).to.deep.equal([]);
    expect(pickSpeakersFromTalks([])).to.deep.equal([]);
  });
});

describe('conference querying for calendarURL', () => {
  it('returns the correct associated data for the calendarURL query', () => {
    const data = { event: { ...fixture.event } };
    const state = conferenceData(data);
    expect(state.calendarURL).to.deep.equal('http://www.google.com');
  });
});
