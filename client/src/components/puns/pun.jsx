import React from 'react';
import { Card } from 'react-bootstrap';
import './pun.css';
import propTypes from 'prop-types';
/**
 * This will be the component where we display puns.
 * Only displays text right now
 * @param {} props
 */
const Pun = ({ Title, Text }) => {
  Pun.propTypes = {
    Title: propTypes.string,
    Text: propTypes.string,
  };
  Pun.defaultProps = {
    Title: 'Title',
    Text: 'Your pun here',
  };
  return (
    <Card style={{ flex: 1, width: '18rem' }} bg="dark" text="white">
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
// TODO allow images to show in these
export default Pun;
