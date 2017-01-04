import React from 'react';

const SchedulePageOverview = (props) => {
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
              href={props.calendarURL}
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

SchedulePageOverview.propTypes = {
  calendarURL: React.PropTypes.string,
};

export default SchedulePageOverview;

