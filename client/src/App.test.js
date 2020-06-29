import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './config/config'

test('renders learn react link', () => {
  const { getByText } = render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <App />
  </FirebaseAppProvider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
