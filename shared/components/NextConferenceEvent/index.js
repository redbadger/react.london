import React from 'react';

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
              <a className="NextConferenceEvent__link--date">Tuesday, 28 March 2017</a>
            </li>
            <li>
              <a className="NextConferenceEvent__link--place">QEII Centre,</a>
            </li>
          </ul>
        </div>

        {/* middle */}

        <div className="NextConferenceEvent__save-the-date">
          <h3>
            Save the date
          </h3>
          <a className="NextConferenceEvent__link--save-the-date">
            Download the date to your calendar
          </a>
        </div>
      </article>
    </div>
  </section>
);

export default NextConferenceEvent;
