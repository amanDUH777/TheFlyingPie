import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from './App';
// import store and provider
import { store } from '../src/features/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
