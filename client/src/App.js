import React, { useState, useEffect } from "react";
import "./App.css";
import Jumbo from "./components/JumboSearch/Jumbo";
import { SuspenseWithPerf } from 'reactfire'
import Grid from './components/Layout/Grid/Grid'
import {Spinner} from 'react-bootstrap'
import Input from './components/SubmitPun/SubmitPun'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import PageViewLog from './HOC/pageViewLog/pageViewLog'

const App = () => {
  //TODO setup backend this should work if it
  const [test, settest] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        settest(res.express);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };


  return (
    <Router>
      <SuspenseWithPerf fallback={<Spinner/>} >          
      <div className="App">
          <Switch>
          <Jumbo nameHandler={setName} />
            <Route  path='/'>
              <Grid Title='real title' Text='Real Text' searchName={name} />
            </Route>
            <Route exact path='/submitPun' component={Input} name={name} />
          </Switch>
          <PageViewLog/>
        <h1>{test}</h1>
      </div>
      </SuspenseWithPerf>
    </Router>
  );
};

export default App;
