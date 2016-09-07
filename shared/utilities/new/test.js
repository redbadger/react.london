import { getTicketStatusOptions } from '.';
// PRE_RELEASE, TICKETS_LIVE, WAITLIST, LIVE_STREAM, EVENT_ENDED
// Need to have unhappy tests too for this.

describe.only('getTicketStatusOptions New', () => {
  it('takes the test', () => {
    const event = {
      status: 'PRE_RELEASE',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets will go live on',
      subtitle: 'Date',
      buttonText: 'FREE TICKET AVAILABLE SOON',
    });
  });
});
