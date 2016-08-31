import React from 'react';

const calendarURL = 'https://calendar.google.com/calendar/event?action=TEMPLATE' +
  '&tmeid=YTVpcXZjcTI2aGJhb3Zoamw2NjVkZ2QwOWsgbG5kaDVzdXRrbmtyZjZpbjEzYWgzYmUwbW9AZw' +
  '&tmsrc=lndh5sutknkrf6in13ah3be0mo%40group.calendar.google.com';

const locationURL = 'https://goo.gl/maps/GkqTFrJKaUR2';

const NextConferenceEvent = () => (
  <section className="NextConferenceEvent block">
    <div className="content">
      <article className="NextConferenceEvent__section-container">
        <div className="NextConferenceEvent__details">
          <h3>
            React London 2017
          </h3>
          <ul>
            <li>
              <a
                className="NextConferenceEvent__link--date"
                href={calendarURL}
                target="_blank"
                rel="noopener"
              >
                Tuesday, 28 March 2017
              </a>
            </li>
            <li>
              <a
                className="NextConferenceEvent__link--place"
                href={locationURL}
                target="_blank"
                rel="noopener"
              >
                QEII Centre, Westminster
              </a>
            </li>
          </ul>
        </div>

        {/* middle */}

        <div className="NextConferenceEvent__save-the-date">
          <h3>
            Save the date
          </h3>
          <a
            className="NextConferenceEvent__btn"
            href={calendarURL}
            target="_blank"
            rel="noopener"
          >
            Add to calendar
          </a>
        </div>
      </article>
    </div>
  </section>
);

export default NextConferenceEvent;
