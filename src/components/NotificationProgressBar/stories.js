import { action } from '@storybook/addon-actions';

import NotificationProgressBar from '.';

export default {
  title: 'Notification Progress Bar',
  component: NotificationProgressBar,
  argTypes: {
    onComplete: { action: 'onComplete' },
  },
};

/**
 * Template for stories
 *
 * @param {object} args - args
 * @returns {Element} - JSX.Element
 */
const Template = (args) => <NotificationProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  timeoutInMilliseconds: 1000,
  onComplete: action('onComplete'),
};
