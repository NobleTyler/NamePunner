import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import { useFirestore } from 'reactfire';
/**
 * This Form is used to add new puns to the database if you find any.
 */
const SubmitPun = ({ searchName }) => {
  // Set up hooks
  const { register } = useForm();
  const [userPun, setUserPun] = useState('');
  const db = useFirestore();

  // Props validation
  SubmitPun.propTypes = {
    searchName: propTypes.string,
  };
  SubmitPun.defaultProps = {
    searchName: 'User',
  };

  // use firebase connection to add to collection
  const PushToFirebase = () => {
    console.log(`YO this got called did you press sumbit ${searchName} and ${userPun}`);
    db.collection('namepuns').add({
      name: searchName,
      pun: userPun,
    });
  };
  return (
    <Form onSubmit={PushToFirebase}>
      <Form.Group>
        <Form.Label>
          New pun for:
          {searchName}
        </Form.Label>
        <Form.Control
          as="textarea"
          rows="1"
          name="punSumbission"
          ref={register({ required: true, minLength: 50, maxLength: 500 })}
          onChange={(e) => setUserPun(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Pun
      </Button>
    </Form>
  );
};
export default SubmitPun;
