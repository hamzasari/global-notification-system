import NotificationTypes from '../../common/constants/notificationTypes';
import NotificationPositions from '../../common/constants/notificationPositions';

import Notification from '.';

import styles from './styles.module.css';

export default {
  title: 'Notification',
  component: Notification,
  argTypes: {
    type: {
      control: { type: 'select', options: NotificationTypes },
    },
    position: {
      control: { type: 'select', options: NotificationPositions },
    },
  },
};

/**
 * Template for stories
 *
 * @param {object} args - args
 * @returns {Element} - JSX.Element
 */
const Template = (args) => (
  <div className={styles[args.position]}>
    <Notification {...args} />
  </div>
);

const shortTitle = 'Lorem Ipsum';
const message =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.';

export const Danger = Template.bind({});
Danger.args = {
  id: 'test-id',
  type: NotificationTypes.DANGER,
  position: NotificationPositions.TOP_LEFT,
  title: shortTitle,
  message: message,
};
