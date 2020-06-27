import React,{useState} from 'react'
import Jumbo from '../JumboSearch/jumbo'
import Grid from './grid/grid'
import { SuspenseWithPerf } from 'reactfire'

/**
 * Layout defines the layout of the main page, but also the whole app since so far it's really just one page
 * @param {*} props 
 */
const Layout = props => {
  const [name,setName] = useState('Please enter a name')

  const setNameHandler = (newName) =>{
    console.log(newName)
    setName(newName);
  }


  return (
    <React.Fragment>
      <Jumbo nameHandler={setNameHandler}/>
      <SuspenseWithPerf fallback={'...loading puns'} traceId={'load-pun-grid'}>
        <Grid Title='real title' Text='Real Text' searchName={name}></Grid>
      </SuspenseWithPerf>
      {props.children}
    </React.Fragment>
  )
}

export default Layout
