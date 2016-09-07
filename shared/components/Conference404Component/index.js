
import React, { PropTypes } from 'react';

const Conference404Component = () => (
  <section className="block">
    <div className="content">
      <div className="Conference404Component">
        <object
          data={'/img/SVG/404_missing_react.svg'}
          type="image/svg+xml"
          className="Conference404Component__image"
        >
          <img
            srcSet={'/img/PNG/404_missing_react.png'}
            src={'/img/PNG/404_missing_react.png'}
            alt="Red Badger logo"
          />
        </object>
        <h2>Ooops</h2>
        <h2 className="Conference404Component__text">
          Seems like the page you are looking for has gone walkies!
          Please use the <strong>navigation above</strong> to hunt it down.
        </h2>
      </div>
    </div>
  </section>
);

Conference404Component.propTypes = {
  summary: PropTypes.string,
};

export default Conference404Component;
