import { memo, useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useNotificationStyle from '../../common/hooks/useNotificationStyle';
import useNotification from '../../common/hooks/useNotification';

import NotificationProgressBar from '../NotificationProgressBar';

import PropList from './propTypes';
import styles from './styles.module.css';

/**
 * Notification Component
 * <p>Component to render only one notification</p>
 * <p>If this element has autoHide prop as true, NotificationProgressBar component will be rendered at the bottom of this component</p>
 * <p>After progress bar reaches 0 width, callback function will be automatically called and removeNotification context function will be called to remove related notification from notifications</p>
 *
 * @param {object} props - props
 * @param {string} props.id - notification id
 * @param {string} props.type - notification type
 * @param {string} props.position - notification position
 * @param {string} props.title - notification title
 * @param {string} props.message - notification message
 * @param {boolean} props.autoHide - auto hide?
 * @param {number} props.autoHideTimeout - auto hide timeout in milliseconds
 * @returns {Element} - notification component
 */
const Notification = ({
  id,
  type,
  position,
  title,
  message,
  autoHide,
  autoHideTimeout,
}) => {
  const { icon, closeIcon, color } = useNotificationStyle(type);
  const { removeNotification } = useNotification();

  const onClickHandler = useCallback(() => {
    removeNotification(id);
  }, [id, removeNotification]);

  return (
    <div
      className={`${styles.notification} ${styles[position]}`}
      style={{ borderColor: color }}
      data-testid={id}
      onClick={onClickHandler}>
      <div className={styles.notificationContent}>
        <div className={styles.notificationIcon}>
          <FontAwesomeIcon icon={icon} color={color} />
        </div>
        <div className={styles.notificationTextContainer}>
          <p className={styles.notificationTitle} data-testid="title">
            {title}
          </p>
          <p className={styles.notificationMessage} data-testid="message">
            {message}
          </p>
        </div>
        <button>
          <FontAwesomeIcon icon={closeIcon} />
        </button>
      </div>
      {autoHide && (
        <NotificationProgressBar
          color={color}
          timeoutInMilliseconds={autoHideTimeout}
          onComplete={onClickHandler}
        />
      )}
    </div>
  );
};

Notification.propTypes = PropList;

// NOTE: memo is used here to get pure component, and memo also prevents re-render issues when this component's props isn't changed
// In this project, equality function is not used in memo usages, because for the sake of this demo there is not much complex props and components and equality functions are not needed
export default memo(Notification);
