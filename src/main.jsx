import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './Pages/Auth/Auth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Auth />
    </Provider>
  </StrictMode>,
);
