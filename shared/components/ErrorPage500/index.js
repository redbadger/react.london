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
        <h2>Ooops</h2>
        <h2 className="ErrorPage500__text">
          Looks like something went wrong.<br />
          We’ve been notified and are on it!
        </h2>
        <h2 className="ErrorPage500__text">
          In the mean time try refreshing the page or using the navigation above.
        </h2>
        <h2>
          Error Code: 500
        </h2>
      </div>
    </div>
  </section>
);

ErrorPage500.propTypes = {
  summary: PropTypes.string,
};

export default ErrorPage500;
