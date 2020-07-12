/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './App.css';
import Jumbo from './components/JumboSearch/jumbo';
import PageViewLog from './HOC/pageViewLog/pageViewLog';
import Routes from './HOC/Routes/routes';

const App = () => {
  // TODO setup backend this should work if it
  const [test, settest] = useState('');
  const [name, setName] = useState('');

  // Fetches our GET route from the Express server.
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        settest(res.express);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Jumbo nameHandler={setName} />
      <Routes name={name} />
      <PageViewLog />
      <h1>{test}</h1>
    </div>
  );
};

export default App;
