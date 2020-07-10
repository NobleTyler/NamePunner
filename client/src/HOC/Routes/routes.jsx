import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Grid from '../../components/Layout/Grid/Grid'
import Input from '../../components/SubmitPun/SubmitPun'

const Routes = (props) => {
  return (
      <Switch>
        <Route exact path='/'>
          <Grid Title='real title' Text='Real Text' searchName={props.name} />
        </Route>
        <Route path='/submitPun' component={Input} name={props.name} />
      </Switch>
  )
}

export default Routes
