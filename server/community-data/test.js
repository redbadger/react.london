import deepFreeze from 'deep-freeze';
import communityData from '.';
import { data as fixture } from '../../test/fixtures/badger-brain-payload.json';

deepFreeze(fixture);

describe('community-data transform', () => {
  it('gets community values', () => {
    const community = fixture.community;
    const state = communityData(fixture);
    expect(Object.keys(state)).to.deep.equal([
      'title',
      'summary',
      'mailingListTitle',
      'mailingListSummary',
      'featuredEvents',
      'futureEvents',
    ]);
    expect(state.title).to.equal(community.title);
    expect(state.summary).to.equal(community.summary);
    expect(state.mailingListTitle).to.equal(community.mailingListTitle);
    expect(state.mailingListSummary).to.equal(community.mailingListSummary);
    expect(state.featuredEvents).to.be.a('array');
  });

  it('defaults if no values', () => {
    expect(communityData(undefined)).to.deep.equal({});
    expect(communityData({})).to.deep.equal({});
  });

  describe('featuredEvents selection', () => {
    it('selects a the next event with a Featured displayLevel', () => {
      const events = [
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
        { title: '3', displayLevel: 'Featured' },
        { title: '4', displayLevel: 'Featured' },
      ];
      const data = { community: { ...fixture.community, events } };
      const state = communityData(data);
      expect(state.featuredEvents).to.deep.equal([{
        title: '3', displayLevel: 'Featured',
      },
      {
        title: '4', displayLevel: 'Featured',
      }]);
    });
    it('selects a the next event with a Current displayLevel', () => {
      const events = [
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
        { title: '3', displayLevel: 'Current' },
      ];
      const data = { community: { ...fixture.community, events } };
      const state = communityData(data);
      expect(state.featuredEvents).to.deep.equal([{
        title: '3', displayLevel: 'Current',
      }]);
    });

    it('defaults to {} with no event with a Featured or Current displayLevel', () => {
      const events = [
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
      ];
      const data = { community: { ...fixture.community, events } };
      const state = communityData(data);
      expect(state.featuredEvents).to.deep.equal([]);
    });
  });

  describe('futureEvents selection', () => {
    it('selects the first 3 highlighted events', () => {
      const events = deepFreeze([
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
        { title: '3', displayLevel: 'Featured' },
        { title: '3', displayLevel: 'Highlighted' },
        { title: '4', displayLevel: 'Highlighted' },
        { title: '5', displayLevel: 'Featured' },
        { title: '6', displayLevel: 'Highlighted' },
        { title: '7', displayLevel: 'Highlighted' },
      ]);
      const data = { community: { ...fixture.community, events } };
      const state = communityData(data);
      expect(state.futureEvents).to.deep.equal([
        { title: '2', displayLevel: 'Highlighted' },
        { title: '3', displayLevel: 'Highlighted' },
        { title: '4', displayLevel: 'Highlighted' },
      ]);
    });
    it('selects the first 3 Upcoming events', () => {
      const events = deepFreeze([
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Upcoming' },
        { title: '3', displayLevel: 'Featured' },
        { title: '3', displayLevel: 'Upcoming' },
        { title: '4', displayLevel: 'Upcoming' },
        { title: '5', displayLevel: 'Featured' },
        { title: '6', displayLevel: 'Upcoming' },
        { title: '7', displayLevel: 'Upcoming' },
      ]);
      const data = { community: { ...fixture.community, events } };
      const state = communityData(data);
      expect(state.futureEvents).to.deep.equal([
        { title: '2', displayLevel: 'Upcoming' },
        { title: '3', displayLevel: 'Upcoming' },
        { title: '4', displayLevel: 'Upcoming' },
      ]);
    });

    it('gets as many as possible if there are less than 3', () => {
      const events = deepFreeze([
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
      ]);
      const data = { community: { ...fixture.community, events } };
      const state = communityData(data);
      expect(state.futureEvents).to.deep.equal([
        { title: '2', displayLevel: 'Highlighted' },
      ]);
    });
  });
});
