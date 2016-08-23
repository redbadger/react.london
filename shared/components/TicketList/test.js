import React from 'react';
import TicketList, { BuyTickets } from '.';
import { mount, shallow } from 'enzyme';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('TicketList component', () => {
  it('can render okay without any passed properties', () => {
    shallow(<TicketList />);
  });

  it('renders a a TicketList item with the correct price, title and date if available', () => {
    let tickets = [
      {
        title: 'Early Bird',
        releaseDate: {
          iso: '2016-07-29T23:00:00+0000',
        },
        available: true,
        price: 250,
      },
    ];
    const element = mount(<TicketList tickets={tickets} />);
    expect(element.find('.TicketList__ticket').childAt(0).text()).to.equal('Early Bird');
    expect(element.find('.TicketList__ticket').childAt(1).text()).to.equal(
      'Available 30th July, 2016'
    );
    expect(element.find('.TicketList__ticket').childAt(2).text()).to.equal('£250');
  });

  it(
    'renders a a TicketList item with the SOLD out and empty date if the ticket is not available'
    , () => {
      let tickets = [
        {
          title: 'Early Bird',
          releaseDate: {
            iso: '2016-07-29T23:00:00+0000',
          },
          available: false,
          price: 250,
        },
      ];
      const element = mount(<TicketList tickets={tickets} />);
      expect(element.find('.TicketList__ticket').childAt(0).text()).to.equal('Early Bird');
      expect(element.find('.TicketList__ticket').childAt(1).text()).to.equal('');
      expect(element.find('.TicketList__ticket').childAt(2).text()).to.equal('SOLD OUT');
    }
  );

  it(
    'renders a the TicketList button with the disabled class and text if no tickets are available'
    , () => {
      let tickets = [
        {
          title: 'Early Bird',
          releaseDate: {
            iso: '2016-07-29T23:00:00+0000',
          },
          available: false,
          price: 250,
        },
      ];
      const element = mount(<BuyTickets tickets={tickets} />);
      expect(element.find('a').props().className).to.equal(
        'TicketList__booking-btn TicketList__booking-btn--disabled'
      );
      expect(element.find('a').text()).to.equal('Sold Out');
    });
});
