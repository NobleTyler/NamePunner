import React from 'react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import Grid from '../../components/Layout/Grid/grid';
import Input from '../../components/SubmitPun/submitPun';

const Routes = ({ name }) => {
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
      <Route path="/submitPun" component={Input} name={name} />
    </Switch>
  );
};

export default Routes;
