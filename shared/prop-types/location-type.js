import { PropTypes } from 'react';

export default PropTypes.shape({
  address: PropTypes.string,
  coordinates: PropTypes.shape({
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }),
});
