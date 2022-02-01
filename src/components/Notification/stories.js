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
const longTitle = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum';
const veryLongMessage =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.';

export const Danger = Template.bind({});
Danger.args = {
  id: 'test-id',
  type: NotificationTypes.DANGER,
  position: NotificationPositions.TOP_LEFT,
  title: shortTitle,
  message: message,
};

export const Information = Template.bind({});
Information.args = {
  id: 'test-id',
  type: NotificationTypes.INFO,
  position: NotificationPositions.TOP_LEFT,
  title: shortTitle,
  message: message,
};

export const Success = Template.bind({});
Success.args = {
  id: 'test-id',
  type: NotificationTypes.SUCCESS,
  position: NotificationPositions.TOP_LEFT,
  title: shortTitle,
  message: message,
};

export const Warning = Template.bind({});
Warning.args = {
  id: 'test-id',
  type: NotificationTypes.WARNING,
  position: NotificationPositions.TOP_LEFT,
  title: shortTitle,
  message: message,
};

export const DangerWithLongText = Template.bind({});
DangerWithLongText.args = {
  id: 'test-id',
  type: NotificationTypes.DANGER,
  position: NotificationPositions.TOP_LEFT,
  title: longTitle,
  message: veryLongMessage,
};

export const DangerWithAutoHide = Template.bind({});
DangerWithAutoHide.args = {
  id: 'test-id',
  type: NotificationTypes.INFO,
  position: NotificationPositions.TOP_LEFT,
  title: shortTitle,
  message: message,
  autoHide: true,
  autoHideTimeout: 10000,
};
