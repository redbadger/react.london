
import React, { PropTypes } from 'react';

const ErrorPage404 = () => (
  <section className="block">
    <div className="content">
      <div className="ErrorPage404">
        <object
          data={'/img/SVG/404_missing_react.svg'}
          type="image/svg+xml"
          className="ErrorPage404__image"
        >
          <img
            srcSet={'/img/PNG/404_missing_react.png'}
            src={'/img/PNG/404_missing_react.png'}
            alt="Red Badger logo"
          />
        </object>
        <h2 className="ErrorPage404__text"><strong>Ooops</strong></h2>
        <h2 className="ErrorPage404__text">
          Seems like the page you are looking for has gone walkies!
          Please use the <strong>navigation above</strong> to hunt it down.
        </h2>
      </div>
    </div>
  </section>
);

ErrorPage404.propTypes = {
  summary: PropTypes.string,
};

export default ErrorPage404;
