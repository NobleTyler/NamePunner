/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './App.css';
import Jumbo from './components/JumboSearch/jumbo';
import PageViewLog from './HOC/pageViewLog/pageViewLog';
import Routes from './HOC/Routes/routes';

const App = () => {
  // Setup hooks used in app
  const [test, settest] = useState('');
  const [name, setName] = useState('');

  // Always capitalize the first letter and lower case the rest
  const nameSetHandler = (nameArg = name) => {
    setName(nameArg.charAt(0).toUpperCase() + nameArg.slice(1).toLowerCase());
  };
  // Fetches our GET route from the Express server.
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  // UseEffect is there to call the backend API and update information on the page with it
  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        settest(res.express);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  // eslint-disable-next-line no-console
  console.log(test);

  return (
    <div className="App">
      <Jumbo nameHandler={nameSetHandler} />
      <Routes name={name} />
      <PageViewLog />
    </div>
  );
};

export default App;
