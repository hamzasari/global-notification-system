import { useState, useCallback, createContext } from 'react';

import NotificationModel from '../../models/NotificationModel';

import NotificationPositions from '../../constants/notificationPositions';

import PropList from './propTypes';

export const NotificationContext = createContext({
  notifications: [],
  position: '',
  addNotification: () => {},
  removeNotification: () => {},
  removeFirstNotification: () => {},
  setPosition: () => {},
});

/**
 * NotificationProvider
 * <p>Notification provider component to use react context for notifications</p>
 * <p>We are using this context to store our notifications</p>
 *
 * @param {Element} children - children
 * @returns {Element} - JSX.Element
 */
const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationPosition, setNotificationPosition] = useState(
    NotificationPositions.TOP_LEFT
  );

  /**
   * removeNotification function
   * <p>Removes a notification with given id</p>
   *
   * @param {string} id - id
   */
  const removeNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((x) => x.id !== id)
    );
  };

  /**
   * removeFirstNotification function
   * <p>Removes first notification from notification list</p>
   */
  const removeFirstNotification = () => {
    setNotifications((notifications) => [...notifications.slice(1)]);
  };

  /**
   * addNotification function
   * <p>Adds new notification object to notification list</p>
   *
   * @param {string} type - type
   * @param {string} title - title
   * @param {string} message - message
   * @param {boolean} autoHide - autoHide
   * @param {number} autoHideTimeout - autoHideTimeout
   */
  const addNotification = (type, title, message, autoHide, autoHideTimeout) => {
    const newNotification = new NotificationModel(
      type,
      notificationPosition,
      title,
      message,
      autoHide,
      autoHideTimeout
    );

    setNotifications((notifications) => [...notifications, newNotification]);
  };

  /**
   * setPosition function
   * <p>Updates position where notifications are shown</p>
   *
   * @param {string} position - position
   */
  const setPosition = (position) => {
    setNotificationPosition(position);
  };

  // NOTE: There is a warning for dependency arrays on useCallback usages,
  // but it is not a problem because we don't want to change anything according to dependency arrays,
  // the warning appears because of eslint configuration and it is OK to see if we need to add something to dependency array when using useCallback
  const contextValue = {
    notifications,
    position: notificationPosition,
    removeNotification: useCallback((id) => removeNotification(id), []),
    removeFirstNotification: useCallback(() => removeFirstNotification(), []),
    addNotification: useCallback(
      (type, title, message, autoHide, autoHideTimeout) =>
        addNotification(type, title, message, autoHide, autoHideTimeout),
      []
    ),
    setPosition: useCallback((position) => setPosition(position), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = PropList;

export default NotificationProvider;
