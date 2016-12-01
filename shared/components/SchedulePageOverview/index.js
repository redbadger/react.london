import React from 'react';

const SchedulePageOverview = () => {
  return (
    <div className="SchedulePageOverview block">
      <div className="content">
        <div className="SchedulePageOverview__container">
          <div className="SchedulePageOverview__details">
            <div>
              8:30 - 9pm
            </div>
            <a
              className="SchedulePageOverview__date"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=aHJsNXJsaG42dWJkbHFwaG1zYmpnYzY4aXMgcmVkLWJhZGdlci5jb21fNGM0c3VlMjVwbzJvaDhpY3VndXNjMDBoa2tAZw&tmsrc=red-badger.com_4c4sue25po2oh8icugusc00hkk%40group.calendar.google.com"
              target="_blank"
              rel="noopener"
            >
              28 March 2017
            </a>
            <div>
              QE11 Centre, Westminster
            </div>
          </div>
          <div className="SchedulePageOverview__cfp">
            <a
              href="https://www.papercall.io/reactlondon2017"
              className="SchedulePageOverview__button"
              target="_blank"
              rel="noopener"
            >
              Call for papers
            </a>
            <div>
              Closes 31 Jan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePageOverview;

