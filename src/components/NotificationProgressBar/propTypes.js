import PropTypes from 'prop-types';

export default {
  timeoutInMilliseconds: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
  color: PropTypes.string,
};
