import { memo, useEffect, useRef, useState } from 'react';

import PropList from './propTypes';
import styles from './styles.module.css';

/**
 * Notification Progress Bar Component
 * <p>This progress bar will be used at the bottom of the notification if the notification have autoHide property and if it's value is true</p>
 * <p>This component renders a full width div element within it's parent element, and in given time this div element reduces it's size</p>
 * <p>When size is 0, onComplete callback function automatically will be called</p>
 *
 * @param {object} props - props
 * @param {number} props.timeoutInMilliseconds - timeout in milliseconds
 * @param {Function} props.onComplete - onComplete callback function
 * @param {string} props.color - color
 * @returns {Element} - JSX.Element
 */
const NotificationProgressBar = ({
  timeoutInMilliseconds,
  onComplete,
  color = 'red',
}) => {
  const progress = 100;
  const minusValue = progress / (timeoutInMilliseconds / progress);

  const [width, setWidth] = useState(progress);

  const interval = useRef(null);

  useEffect(() => {
    setWidth(100);
    let time = 0;

    interval.current = setInterval(() => {
      time += 100;
      setWidth((width) => width - minusValue);
      if (time === timeoutInMilliseconds) {
        clearInterval(interval.current);
        onComplete();
      }
    }, 100);

    return () => {
      clearInterval(interval.current);
    };
  }, [minusValue, onComplete, timeoutInMilliseconds]);

  return (
    <div
      data-testid="progress-bar"
      className={styles.progressBar}
      style={{ backgroundColor: color, width: `${width}%` }}></div>
  );
};

NotificationProgressBar.propTypes = PropList;

export default memo(NotificationProgressBar);
