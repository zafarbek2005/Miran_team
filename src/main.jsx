import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './context/index'; 
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
