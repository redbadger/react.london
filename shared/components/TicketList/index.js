import React from 'react';

const TicketList = () => {
  return (
    <section className="block TicketList">
      <div className="content">
        <div className="TicketList__ticket">
          <span><strong>Early Bird</strong></span>
          <span> Available 1st October, 2016</span>
          <span><strong>£250</strong></span>
        </div>
        <div className="TicketList__ticket">
          <span><strong>Early Bird</strong></span>
          <span> Available 1st October, 2016</span>
          <span><strong>£250</strong></span>
        </div>
      </div>
      <div className="TicketList__booking-btn__container">
        <a
          className="TicketList__booking-btn TicketStatus__booking-btn--active"
        >
          Buy Tickets
        </a>
      </div>
      <div className="TicketList_TCs">
        for T&Cs about tickets, please see <strong>ti.to</strong>
      </div>
    </section>

  );
};

export default TicketList;
