import { PropTypes } from 'react';
export const ticketType = PropTypes.shape({
  title: PropTypes.string,
  releaseDate: PropTypes.shape({
    iso: PropTypes.string,
  }),
  available: PropTypes.bool,
  price: PropTypes.string,
});

