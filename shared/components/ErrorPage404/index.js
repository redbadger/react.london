
import React, { PropTypes } from 'react';

const ErrorPage404 = () => (
  <section className="block">
    <div className="content">
      <div className="ErrorPage404">
        <div className="ErrorPage404__image"></div>
        <p className="ErrorPage404__text"><strong>Ooops</strong></p>
        <p className="ErrorPage404__text">
          Seems like the page you are looking for has gone walkies!
          Please use the <strong>navigation above</strong> to hunt it down.
        </p>
      </div>
    </div>
  </section>
);

ErrorPage404.propTypes = {
  summary: PropTypes.string,
};

export default ErrorPage404;
