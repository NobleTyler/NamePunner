import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf} from 'reactfire';
import Layout from './components/layout/layout'
function App() {
  return (
    <div className="App">
      <Layout>
          <h1 className="header">{process.env.REACT_APP_NAME}</h1>
      </Layout>
    </div>
  );
}

export default App;
