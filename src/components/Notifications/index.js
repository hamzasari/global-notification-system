import { memo } from 'react';

import Notification from '../Notification';

import useNotification from '../../common/hooks/useNotification';

import styles from './styles.module.css';

/**
 * Notifications Component
 * <p>Component to render notifications</p>
 * <p>This component renders all notifications via react context values</p>
 *
 * @returns {Element} - JSX.Element
 */
const Notifications = () => {
  const { notifications, position } = useNotification();

  return (
    <div className={`${styles.notificationContainer} ${styles[position]}`}>
      {notifications &&
        notifications.length > 0 &&
        notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              type={notification.type}
              position={position}
              title={notification.title}
              message={notification.message}
              autoHide={notification.autoHide}
              autoHideTimeout={notification.autoHideTimeout}
            />
          );
        })}
    </div>
  );
};

export default memo(Notifications);
