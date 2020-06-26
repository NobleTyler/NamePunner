import React from 'react';
import './App.css';
import Layout from './components/layout/layout'

const App = () => {

  return (
    <div className="App">
      <Layout>
          <h1 className="header">{process.env.REACT_APP_NAME}</h1>
      </Layout>
    </div>
  );
}

export default App;
