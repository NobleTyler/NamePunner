import React from 'react';
import { Jumbotron, Form, FormControl } from 'react-bootstrap';
import propTypes from 'prop-types';
/**
 * Component for the jumbotron at the top of the page
 * @param {nameHandler} props
 */
const Jumbo = ({ nameHandler }) => {
  Jumbo.propTypes = {
    // eslint-disable-next-line react/require-default-props
    nameHandler: propTypes.func,
  };
  return (
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
  );
};

export default Jumbo;
