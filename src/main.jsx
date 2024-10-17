import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { store } from './data/redux/store.js'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
)
