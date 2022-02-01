import { render, screen } from '@testing-library/react';

import Notification from '.';

test('checks if the notification is rendered', () => {
  render(
    <Notification
      id="test-id"
      type="danger"
      position="bottomRight"
      title="Notification Title"
      message="Notification message"
    />
  );

  const notificationElement = screen.getByTestId('test-id');

  expect(notificationElement).toBeInTheDocument();
});

test('check content is rendered correctly', () => {
  const titleText = 'Notification Title';
  const messageText = 'Notification message';
  const type = 'danger';
  const position = 'bottomRight';

  render(
    <Notification
      id="test-id"
      type={type}
      position={position}
      title={titleText}
      message={messageText}
    />
  );

  const title = screen.getByTestId('title');

  expect(title.innerHTML).toEqual(titleText);

  const message = screen.getByTestId('message');

  expect(message.innerHTML).toEqual(messageText);
});
