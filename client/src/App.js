import React, { useState, useEffect } from "react";
import "./App.css";
import Jumbo from "./components/JumboSearch/Jumbo";
import { SuspenseWithPerf ,useAnalytics} from 'reactfire'
import Grid from './components/Layout/Grid/Grid'
import Input from './components/SubmitPun/SubmitPun'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import PageViewLog from './HOC/pageViewLog/pageViewLog'

const App = () => {
  //TODO setup backend this should work if it
  const [test, settest] = useState("");
  const [name, setName] = useState("");
  const analytics = useAnalytics();
  useEffect(() => {
    console.log("This runs right?");
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
const grid = () => { 
  return (
    //<SuspenseWithPerf fallback={'...loading'} traceId={'load-pun-grid'}>
      <Grid Title='real title' Text='Real Text' searchName={name} />
    //</SuspenseWithPerf>
   )
}


  return (
    <SuspenseWithPerf fallback={'...loading'} traceId={'load-pun-grid'}>
    <Router>
      <div className="App">
          <Jumbo nameHandler={setName} />
          <Switch>
            <Route exact path='/' render={grid} />
            <Route exact path='/submitPun' component={Input} name={name} />
          </Switch>
          <PageViewLog/>
        <h1>{test}</h1>
      </div>
    </Router>
    </SuspenseWithPerf>
  );
};

export default App;
