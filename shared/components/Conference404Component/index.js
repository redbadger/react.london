
import React, { PropTypes } from 'react';

const Conference404Component = () => (
  <section className="Conference404Component block">
    <div className="content">
      <p className="Conference404Component__text">
      </p>
      <p className="Conference404Component__text--bold">
        <object
          data={'/img/SVG/404_missing_react.svg'}
          type="image/svg+xml"
        >
          <img
            srcSet={'/img/PNG/404_missing_react.png'}
            src={'/img/PNG/404_missing_react.png'}
            alt="Red Badger logo"
          />
        </object>
        <h2>Ooops</h2>
        <h2>
          Seems like the page you are looking for has gone walkies!
          Please use the navigation above to hunt it down.
        </h2>
      </p>
    </div>
  </section>
);

Conference404Component.propTypes = {
  summary: PropTypes.string,
};

export default Conference404Component;
