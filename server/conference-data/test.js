import deepFreeze from 'deep-freeze';
import conferenceData from '.';
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
