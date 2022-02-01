import { memo } from 'react';

import { faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropList from './propTypes';
import styles from './styles.module.css';

/**
 * Notification Component
 * <p>Component to render only one notification</p>
 *
 * @param {object} props - props
 * @param {string} props.id - notification id
 * @param {string} props.type - notification type
 * @param {string} props.position - notification position
 * @param {string} props.title - notification title
 * @param {string} props.message - notification message
 * @returns {Element} - notification component
 */
const Notification = ({ id, type, position, title, message }) => {
  console.info(type);

  return (
    <div
      className={`${styles.notification} ${styles[position]}`}
      style={{ borderColor: 'red' }}
      data-testid={id}>
      <div className={styles.notificationContent}>
        <div className={styles.notificationIcon}>
          <FontAwesomeIcon icon={faCoffee} color={'red'} />
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
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

Notification.propTypes = PropList;

export default memo(Notification);
