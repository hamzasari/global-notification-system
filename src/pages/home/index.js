import colors from '../../common/constants/colors';

import notificationPositions from '../../common/constants/notificationPositions';
import notificationTypes from '../../common/constants/notificationTypes';

import useHome from '../../common/hooks/useHome';

import styles from './styles.module.css';

/**
 * Home page
 * <p>I didn't make separate components for this testing gui intentionally to not to waste too much time</p>
 * <p>This page is only for testing and won't live long for this project</p>
 *
 * @returns {Element} - JSX.Element
 */
const Home = () => {
  const {
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
  } = useHome();

  return (
    <div className={styles.page}>
      <div className={styles.demoContainer}>
        <div className={styles.commonContainer}>
          <label className={styles.label}>Position</label>
          <select
            className={styles.select}
            value={notificationPosition}
            onChange={(e) => {
              setNotificationPosition(e.target.value);
              setPosition(e.target.value);
            }}>
            {Object.keys(notificationPositions).map((key) => {
              return (
                <option key={key} value={notificationPositions[key]}>
                  {key}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.commonContainer}>
          <label className={styles.label}>Auto Hide</label>
          <select
            className={styles.select}
            value={autoHide}
            onChange={onAutoHideSelectChangeHandler}>
            <option value={true}>TRUE</option>
            <option value={''}>FALSE</option>
          </select>
        </div>
        <div className={styles.commonContainer}>
          <label className={styles.label}>Auto Hide Timeout</label>
          <input
            type="text"
            className={styles.textInput}
            placeHolder="Timeout in milliseconds (Default value is 5000)"
            value={autoHideTimeout}
            onChange={onChangeTimeoutInputHandler}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            value={notificationTypes.INFO}
            style={{ backgroundColor: colors.BLUE }}
            onClick={onAddNotification}>
            INFORMATION
          </button>
          <button
            className={styles.button}
            value={notificationTypes.DANGER}
            style={{ backgroundColor: colors.RED }}
            onClick={onAddNotification}>
            DANGER
          </button>
          <button
            className={styles.button}
            value={notificationTypes.SUCCESS}
            style={{ backgroundColor: colors.GREEN }}
            onClick={onAddNotification}>
            SUCCESS
          </button>
          <button
            className={styles.button}
            value={notificationTypes.WARNING}
            style={{ backgroundColor: colors.YELLOW }}
            onClick={onAddNotification}>
            WARNING
          </button>
          <button
            className={styles.button}
            onClick={onRemoveFirstNotification}
            style={{ color: 'black' }}>
            Remove first notification
          </button>
        </div>
        <div className={styles.textInputContainer}>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Notification Title (Leave empty to use with default values)"
            value={title}
            onChange={onChangeTitleInputHandler}
          />
          <input
            type="text"
            className={styles.textInput}
            placeholder="Notification Message (Leave empty to use with default values)"
            value={message}
            onChange={onChangeMessageInputHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
