import React, { useState, useEffect } from 'react'
import './App.css'
import Jumbo from './components/JumboSearch/Jumbo'
import { useAnalytics } from 'reactfire'
import PageViewLog from './HOC/pageViewLog/pageViewLog'
import Routes from './HOC/Routes/routes'

const App = () => {
  //TODO setup backend this should work if it
  const [test, settest] = useState('')
  const [name, setName] = useState('')
  const analytics = useAnalytics()

  useEffect(() => {
    callBackendAPI()
      .then(res => {
        settest(res.express)
      })
      .catch(err => console.log(err))
  }, [])

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  return (
      <div className='App'>
            <Jumbo nameHandler={setName} />
            <Routes name={name}/> 
      {/* <PageViewLog />*/}
      <h1>{test}</h1>
      </div>
  )
}

export default App
