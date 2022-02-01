import { render, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';

import NotificationProgressBar from '.';

test('check width', async () => {
  const onCompleteHandler = jest.fn();

  render(
    <NotificationProgressBar
      timeoutInMilliseconds={1000}
      onComplete={onCompleteHandler}
    />
  );

  const progressBarDiv = screen.getByTestId('progress-bar');

  expect(progressBarDiv.style.width).toEqual('100%');

  await wait(() => {
    expect(onCompleteHandler).toHaveBeenCalled();
  });
});
