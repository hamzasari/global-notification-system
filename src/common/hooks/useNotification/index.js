import { useContext } from 'react';

import { NotificationContext } from '../../providers/NotificationProvider';

/**
 * useNotification custom hook
 * <p>Custom hook to make code more readable and to avoid having to write too many lines in files we use notification context</p>
 *
 * @returns {object} - Notification context values and functions
 */
const useNotification = () => {
  const {
    notifications,
    position,
    removeNotification,
    removeFirstNotification,
    addNotification,
    setPosition,
  } = useContext(NotificationContext);

  return {
    notifications,
    position,
    removeNotification,
    removeFirstNotification,
    addNotification,
    setPosition,
  };
};

export default useNotification;
