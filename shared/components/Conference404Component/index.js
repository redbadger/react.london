
import React, { PropTypes } from 'react';

const Conference404Component = () => (
  <section className="Conference404Component block">
    <div className="content">
      <p className="Conference404Component__text">
      </p>
      <p className="Conference404Component__text--bold">
        <strong>
          Oops it seems as though this page went walkies...
        </strong>
      </p>
    </div>
  </section>
);

Conference404Component.propTypes = {
  summary: PropTypes.string,
};

export default Conference404Component;
