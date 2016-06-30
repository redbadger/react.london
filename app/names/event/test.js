import { formNameToEventID, eventIDToFormName } from '.';

describe('names/event formNameToEventID', () => {
  it('correctly parses event names', () => {
    expect(formNameToEventID('event::123')).to.equal('123');
    expect(formNameToEventID('event::50')).to.equal('50');
    expect(formNameToEventID('event::something')).to.equal('something');
    expect(formNameToEventID('event::hello-world!')).to.equal('hello-world!');
  });

  it('returns null for non-event name strings', () => {
    expect(formNameToEventID('events::123')).to.equal(undefined);
    expect(formNameToEventID('Hi!')).to.equal(undefined);
    expect(formNameToEventID('event:1')).to.equal(undefined);
    expect(formNameToEventID('')).to.equal(undefined);
  });
});


describe('names/event eventIDToFormName', () => {
  it('converts eventIDs to event form names', () => {
    expect(eventIDToFormName('123')).to.equal('event::123');
    expect(eventIDToFormName('50')).to.equal('event::50');
    expect(eventIDToFormName('something')).to.equal('event::something');
    expect(eventIDToFormName('hello-world!')).to.equal('event::hello-world!');
  });
});
