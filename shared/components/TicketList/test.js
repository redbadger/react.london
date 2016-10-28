import React from 'react';
import TicketList, { isSoldOut } from '.';
import { mount, shallow } from 'enzyme';
import tk from 'timekeeper';

describe('TicketList component', () => {
  it('can render okay without any passed properties', () => {
    shallow(<TicketList />);
  });

  it('renders a a TicketList item with the correct price, title and date if available', () => {
    const tickets = [
      {
        title: 'Early Bird',
        releaseDate: {
          iso: '2016-07-29T23:00:00+0000',
        },
        available: true,
        price: '250',
      },
    ];
    const element = mount(<TicketList tickets={tickets} />);
    expect(element.find('.TicketList__ticket__title').text()).to.equal('Early Bird');
    expect(element.find('.TicketList__ticket__date').text()).to.equal(
      'Available 30th July, 2016'
    );
    expect(element.find('.TicketList__ticket__price').text()).to.equal('£250');
  });

  it(
    'renders a a TicketList item with the SOLD out and empty date if the ticket is not available'
    , () => {
      const tickets = [
        {
          title: 'Early Bird',
          releaseDate: {
            iso: '2016-07-29T23:00:00+0000',
          },
          available: false,
          price: '250',
        },
      ];
      const element = mount(<TicketList tickets={tickets} />);
      expect(element.find('.TicketList__ticket').childAt(0).text()).to.equal('Early Bird');
      expect(element.find('.TicketList__ticket').childAt(1).text()).to.equal('');
      expect(element.find('.TicketList__ticket').childAt(2).text()).to.equal('SOLD OUT');
    }
  );

  it('does not die with no tickets', () => {
    mount(<TicketList />);
  });
});
describe('isSoldOut', () => {
  it(
    'expects isSoldOut to return true if tickets are NOT available and is after the release Date'
    , () => {
      tk.freeze(new Date('2016-07-24T20:30:00+0000'));
      const ticket = {
        releaseDate: '2016-06-24T20:30:00+0000',
        available: false,
      };
      const result = isSoldOut(ticket);
      expect(result).to.equal(true);
    });
  it(
    'expects isSoldOut to return false if tickets are NOT available and is before the release Date'
    , () => {
      tk.freeze(new Date('2016-05-24T20:30:00+0000'));
      const ticket = {
        releaseDate: '2016-06-24T20:30:00+0000',
        available: false,
      };
      const result = isSoldOut(ticket);
      expect(result).to.equal(false);
    });
  it(
    'expects isSoldOut to return false if tickets ARE available is before the release Date'
    , () => {
      tk.freeze(new Date('2016-05-24T20:30:00+0000'));
      const ticket = {
        releaseDate: '2016-06-24T20:30:00+0000',
        available: true,
      };
      const result = isSoldOut(ticket);
      expect(result).to.equal(false);
    });
});
