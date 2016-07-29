/* eslint max-len: ["error", 2000] */
import { getButtonText } from '.';
import tk from 'timekeeper';

// export function getButtonText(ticketsReleaseDateTime, startDateTime, endDateTime, ticketsAvailiable, waitingListOpen) {

describe('getButtonText component', () => {
  it('returns Free Ticket and empty linkType if the current time is before the ticket release time', () => {
    tk.freeze(new Date(100));
    const ticketsReleaseDateTime = new Date(101);
    const result = getButtonText(ticketsReleaseDateTime);

    expect(result).to.deep.equal({
      buttonText: 'Free Ticket',
      linkType: '',
    });
  });

  it('returns Free ticket and Event linkType if the current Time is greater than the release date and there are tickets availiable', () => {
    tk.freeze(new Date(100));
    const ticketsReleaseDateTime = new Date(99);
    const result = getButtonText(ticketsReleaseDateTime, null, true, false);

    expect(result).to.deep.equal({
      buttonText: 'Free Ticket',
      linkType: 'EVENT',
    });
  });

  it('returns Join Waitlist and Event linkType if the waiting list is open', () => {
    const result = getButtonText(null, null, false, true);

    expect(result).to.deep.equal({
      buttonText: 'Join Waitlist',
      linkType: 'EVENT',
    });
  });

  it('returns Watch and Stream linkType if the event is completed', () => {
    tk.freeze(new Date(100));
    const result = getButtonText(null, new Date(99), false, false);

    expect(result).to.deep.equal({
      buttonText: 'Watch',
      linkType: 'STREAM',
    });
  });

  it('returns Join Live Stream and Stream linkType if the current time is greater than the release date time and there are no tickets and no wait list', () => {
    tk.freeze(new Date(100));
    const result = getButtonText(new Date(99), null, false, false);

    expect(result).to.deep.equal({
      buttonText: 'Join Live Stream',
      linkType: 'STREAM',
    });
  });
});
