import React, { PropTypes } from 'react';

const ErrorPage500 = () => (
  <section className="block">
    <div className="content">
      <div className="ErrorPage500">
        <div>
          <img
            src={'/img/500-error.gif'}
            alt="Red Badger logo"
          />
        </div>
        <p className="ErrorPage500__text"><strong>Ooops</strong></p>
        <p className="ErrorPage500__text">
          Looks like something went wrong.<br />
          We’ve been notified and are on it!
        </p>
        <p className="ErrorPage500__text">
          In the mean time try refreshing the page or use the navigation above.
        </p>
        <p className="ErrorPage500__text">
          <strong>Error Code: 500</strong>
        </p>
      </div>
    </div>
  </section>
);

ErrorPage500.propTypes = {
  summary: PropTypes.string,
};

export default ErrorPage500;
