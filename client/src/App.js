import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'

const App = () => {
  const [test, settest] = useState('')
  useEffect(() => {
    return () => {
      callBackendAPI()
      .then(res => settest(res.express))
      .catch(err => console.log(err));
    }
  }, [])

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  console.log(body)
}
  return (
    <div className="App">
      <h1>{test}</h1>
      <Layout/>
    </div>
  );
}

export default App;
