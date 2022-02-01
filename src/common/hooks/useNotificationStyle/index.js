import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faQuestionCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Colors from '../../constants/colors';
import NotificationTypes from '../../constants/notificationTypes';

/**
 * useNotificationStyle custom hook
 * <p>Custom hook to select necessary style values for notifications</p>
 *
 * @param {string} type - notification type
 * @returns {object} - style values for notification
 */
const useNotificationStyle = (type) => {
  let icon, color;

  switch (type) {
    case NotificationTypes.DANGER:
      icon = faExclamationCircle;
      color = Colors.RED;
      break;
    case NotificationTypes.INFO:
      icon = faInfoCircle;
      color = Colors.BLUE;
      break;
    case NotificationTypes.SUCCESS:
      icon = faCheckCircle;
      color = Colors.GREEN;
      break;
    case NotificationTypes.WARNING:
      icon = faExclamationTriangle;
      color = Colors.YELLOW;
      break;

    default:
      icon = faQuestionCircle;
      color = Colors.BLUE;
      break;
  }

  return { icon, closeIcon: faTimes, color };
};

export default useNotificationStyle;
