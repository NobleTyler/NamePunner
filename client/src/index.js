/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import firebaseConfig from './config/config';
import App from './App';
import * as serviceWorker from './serviceWorker';
/**
 * Outputs the entire app.
 * Be wary when changing the order as there could be unintended side effects.
*/
ReactDOM.render(
  <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <React.StrictMode>
        <SuspenseWithPerf fallback={<Spinner />}>
          <App />
        </SuspenseWithPerf>
      </React.StrictMode>
    </FirebaseAppProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
