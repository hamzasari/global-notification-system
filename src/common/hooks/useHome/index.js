import { useCallback, useEffect, useState } from 'react';
import notificationPositions from '../../constants/notificationPositions';

import useNotification from '../useNotification';

/**
 * useHome custom hook
 * <p>Custom hook to make code more readable and to separate logic and render and to follow separation of concerns design pattern</p>
 *
 * @returns {object} - state values and functions used in home page
 */
const useHome = () => {
  const titleText = 'Lorem Ipsum';
  const messageText =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.';
  const autoHideTimeoutValue = 5000;

  const [notificationPosition, setNotificationPosition] = useState(
    notificationPositions.BOTTOM_RIGHT
  );
  const [title, setTitle] = useState(titleText);
  const [message, setMessage] = useState(messageText);
  const [autoHide, setAutoHide] = useState(true);
  const [autoHideTimeout, setAutoHideTimeout] = useState(autoHideTimeoutValue);

  const { addNotification, removeFirstNotification, setPosition } =
    useNotification();

  useEffect(() => {
    setPosition(notificationPosition);
  }, [notificationPosition, setPosition]);

  const onAddNotification = useCallback(
    (e) => {
      addNotification(
        e.target.value,
        title,
        message,
        autoHide,
        autoHideTimeout
      );
    },
    [addNotification, autoHide, autoHideTimeout, message, title]
  );

  const onRemoveFirstNotification = useCallback(() => {
    removeFirstNotification();
  }, [removeFirstNotification]);

  const onChangeTitleInputHandler = useCallback((e) => {
    if (e.target.value.length === 0) {
      setTitle(titleText);
    } else {
      setTitle(e.target.value);
    }
  }, []);

  const onChangeMessageInputHandler = useCallback((e) => {
    if (e.target.value.length === 0) {
      setMessage(messageText);
    } else {
      setMessage(e.target.value);
    }
  }, []);

  const onAutoHideSelectChangeHandler = useCallback((e) => {
    setAutoHide(e.target.value);
  }, []);

  const onChangeTimeoutInputHandler = useCallback((e) => {
    if (e.target.value.length === 0) {
      setAutoHideTimeout(autoHideTimeoutValue);
    } else {
      setAutoHideTimeout(Number(e.target.value));
    }
  }, []);

  return {
    notificationPosition,
    setNotificationPosition,
    setPosition,
    autoHide,
    onAutoHideSelectChangeHandler,
    autoHideTimeout,
    onChangeTimeoutInputHandler,
    onAddNotification,
    onRemoveFirstNotification,
    title,
    onChangeTitleInputHandler,
    message,
    onChangeMessageInputHandler,
  };
};

export default useHome;
