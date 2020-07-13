import React from 'react';
import {
  Jumbotron, Form, FormControl, Button, Navbar,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import './jumbo.css';

/**
 * Component for the jumbotron at the top of the page
 * @param {nameHandler} props
 */
const Jumbo = ({ nameHandler }) => {
  // setup props validation
  Jumbo.propTypes = {
    // eslint-disable-next-line react/require-default-props
    nameHandler: propTypes.func,
  };
  // setup Hooks used to grab the pathname later
  const location = useLocation();
  // check which page we are on, to use in displaying buttons correctly
  const isLocationSubmit = location.pathname === '/submitPun';
  return (
    <>
      <Navbar>
        <Link to="/">
          <Button className="button-left" disabled={!isLocationSubmit}>Home</Button>
        </Link>
        <Link to="/submitPun">
          <Button className="button-left" disabled={isLocationSubmit}>Submit</Button>
        </Link>
      </Navbar>
      <Jumbotron>
        <h1>Welcome to Name Punner</h1>
        <p>Enter in the search bar the names you need puns for</p>
        <Form>
          <FormControl
            type="text"
            placeholder="Enter name here"
            className="form-control-lg"
            width="100%"
            onChange={(event) => nameHandler(event.target.value)}
          />
        </Form>
      </Jumbotron>
    </>
  );
};

export default Jumbo;
