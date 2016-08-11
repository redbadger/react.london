import deepFreeze from 'deep-freeze';
import { mapStateToProps } from '.';
import { data as fixture } from '../../../test/fixtures/badger-brain-payload.json';

deepFreeze(fixture);

describe('Community mapStateToProps', () => {
  it('gets community values', () => {
    const community = fixture.community;
    const state = mapStateToProps(fixture);
    expect(Object.keys(state)).to.deep.equal([
      'title',
      'summary',
      'mailingListTitle',
      'mailingListSummary',
      'featuredEvent',
      'shhhhhhhh',
    ]);
    expect(state.title).to.equal(community.title);
    expect(state.summary).to.equal(community.summary);
    expect(state.mailingListTitle).to.equal(community.mailingListTitle);
    expect(state.mailingListSummary).to.equal(community.mailingListSummary);
    expect(state.featuredEvent).to.be.a('object');
  });

  it('defaults if no values', () => {
    expect(mapStateToProps(undefined)).to.deep.equal({});
    expect(mapStateToProps({})).to.deep.equal({});
  });

  describe('featuredEvent selection', () => {
    it('selects a the next event with a Featured displayLevel', () => {
      const events = [
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
        { title: '3', displayLevel: 'Featured' },
        { title: '4', displayLevel: 'Featured' },
      ];
      const data = { community: { ...fixture.community, events } };
      const state = mapStateToProps(data);
      expect(state.featuredEvent).to.deep.equal({
        title: '3', displayLevel: 'Featured',
      });
    });

    it('defaults to {} with no event with a Featured displayLevel', () => {
      const events = [
        { title: '1', displayLevel: 'Regular' },
        { title: '2', displayLevel: 'Highlighted' },
      ];
      const data = { community: { ...fixture.community, events } };
      const state = mapStateToProps(data);
      expect(state.featuredEvent).to.deep.equal({});
    });
  });
});



//
//
// import deepFreeze from 'deep-freeze';
// import { mapStateToProps } from '.';
// import { data as fixture } from '../../../test/fixtures/badger-brain-payload.json';
//
// deepFreeze(fixture);
// const community = fixture.community;
// const state = mapStateToProps(fixture);
//
// describe('Community mapStateToProps', () => {
//   it('gets community values', () => {
//     console.log(mapStateToProps(state));
//     expect(mapStateToProps(state)).to.deep.equal({
//       summary: 'community summary!',
//       shhhhhhhh: {
//         flip: 'Gur orfg jnl gb',
//         open: ' yrnea vf ol qbvat',
//         xoyo: ' vg jebat. - Qna Noenzbi',
//       },
//     });
//   });
//
//   it('defaults if no values', () => {
//     expect(mapStateToProps({})).to.deep.equal({});
//
//     expect(Object.keys(state)).to.deep.equal([
//       'shhhhhhhh',
//       'title',
//       'summary',
//       'mailingListTitle',
//       'mailingListSummary',
//       'featuredEvent',
//     ]);
//     expect(state.title).to.equal(community.title);
//     expect(state.summary).to.equal(community.summary);
//     expect(state.mailingListTitle).to.equal(community.mailingListTitle);
//     expect(state.mailingListSummary).to.equal(community.mailingListSummary);
//     expect(state.featuredEvent).to.be.a('object');
//   });
//
//   it('defaults if no values', () => {
//     expect(mapStateToProps(undefined)).to.deep.equal({});
//     expect(mapStateToProps({})).to.deep.equal({});
//   });
//
//   describe('featuredEvent selection', () => {
//     it('selects a the next event with a Featured displayLevel', () => {
//       const events = [
//         { title: '1', displayLevel: 'Regular' },
//         { title: '2', displayLevel: 'Highlighted' },
//         { title: '3', displayLevel: 'Featured' },
//         { title: '4', displayLevel: 'Featured' },
//       ];
//       const data = { community: { ...fixture.community, events } };
//       const props = mapStateToProps(data);
//       expect(props.featuredEvent).to.deep.equal({
//         title: '3', displayLevel: 'Featured',
//       });
//     });
//
//     it('defaults to {} with no event with a Featured displayLevel', () => {
//       const events = [
//         { title: '1', displayLevel: 'Regular' },
//         { title: '2', displayLevel: 'Highlighted' },
//       ];
//       const data = { community: { ...fixture.community, events } };
//       const props = mapStateToProps(data);
//       expect(props.featuredEvent).to.deep.equal({});
//     });
//   });
// });
