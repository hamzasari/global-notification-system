import { v4 as uuidv4 } from 'uuid';

/**
 * Notification Model
 * <p>Model to store notifications</p>
 * <p>In this project all notifications will be based on this model and ambiguity of objects used will be prevented</p>
 *
 * @param {string} type - type
 * @param {string} position - position
 * @param {string} title - title
 * @param {string} message - message
 * @param {boolean} autoHide - autoHide
 * @param {number} autoHideTimeout - autoHideTimeout
 */
function NotificationModel(
  type,
  position,
  title,
  message,
  autoHide,
  autoHideTimeout
) {
  this.id = uuidv4();
  this.type = type;
  this.position = position;
  this.title = title;
  this.message = message;
  this.autoHide = autoHide;
  this.autoHideTimeout = autoHideTimeout;
}

export default NotificationModel;
