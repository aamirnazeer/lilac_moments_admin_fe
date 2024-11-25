import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import App from './App.tsx';
import { Theme } from '@radix-ui/themes';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="iris">
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </StrictMode>
);
