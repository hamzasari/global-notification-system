import PropTypes from 'prop-types';

export default {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};
