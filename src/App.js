import NotificationProvider from './common/providers/NotificationProvider';

import Notifications from './components/Notifications';
import Home from './pages/home';

/**
 * App
 * <p>Main entry point</p>
 * <p>NotificationProvider is added here to use react context within children components</p>
 * <p>Also, Notifications component is added here to show notifications using react context</p>
 *
 * @returns {Element} - JSX.Element
 */
function App() {
  return (
    <NotificationProvider>
      <Home />
      <Notifications />
    </NotificationProvider>
  );
}

export default App;
