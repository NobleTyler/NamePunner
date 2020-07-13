import React from 'react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import Grid from '../../components/Layout/Grid/grid';
import Input from '../../components/SubmitPun/submitPun';
/**
 * Set up the Routes used in the web app
 * Does some validation and only passes the name from the jumbotron down
 * @param {name} param
 */
const Routes = ({ name }) => {
  // set up props validation
  Routes.propTypes = {
    name: propTypes.string,
  };
  Routes.defaultProps = {
    name: 'User',
  };
  return (
    <Switch>
      <Route exact path="/">
        <Grid Title="real title" Text="Real Text" searchName={name} />
      </Route>
      <Route path="/submitPun">
        <Input searchName={name} />
      </Route>
    </Switch>
  );
};

export default Routes;
