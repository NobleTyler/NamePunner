import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import 'bootstrap/dist/css/bootstrap.css'
import firebaseConfig from './config/config'
import { BrowserRouter } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

ReactDOM.render(
  <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <React.StrictMode>
        <SuspenseWithPerf fallback={<Spinner/>}>
          <App />
        </SuspenseWithPerf>
      </React.StrictMode>
    </FirebaseAppProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
