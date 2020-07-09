import React,{useState,useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout'

const App = () => {
  //TODO setup backend this should work if it
  const [test, settest] = useState('')
  
  useEffect(() => {
      console.log("This runs right?")
      callBackendAPI()
      .then(res => {
        settest(res.express)
      })
      .catch(err => console.log(err));
    
  }, [])

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  const callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return (body)
}

 callBackendAPI()

  return (
    <div className="App">
      <Layout testHandle={settest}/>
      <h1>{test}</h1>
    </div>
  );
}

export default App;
