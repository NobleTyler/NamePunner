import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Col } from 'react-bootstrap';
import propTypes from 'prop-types';
import { useFirestore, useFirestoreDocData } from 'reactfire';
/**
 * This Form is used to add new puns to the database if you find any.
 */
const SubmitPun = ({ searchName }) => {
  // Set up hooks
  const { register } = useForm();
  const [userPun, setUserPun] = useState('');
  const punRef = useFirestore()
    .collection('namepuns')
    .doc('punDocument');
  const puns = useFirestoreDocData(punRef);

  // Props validation
  SubmitPun.propTypes = {
    searchName: propTypes.string,
  };
  SubmitPun.defaultProps = {
    searchName: 'User',
  };

  // use firebase connection to add to collection
  const PushToFirebase = () => {
    // get the value we try to update
    const arrayArg = Object(puns)[searchName] ? [userPun, ...Object(puns)[searchName]] : [userPun];
    punRef.set({
      [searchName]: arrayArg,
    }, { merge: true })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error setting document:', error);
      });
  };
  return (
    <Form onSubmit={PushToFirebase}>
      <Form.Group>
        <Form.Label>
          <h3>
            New pun for:
            {searchName}
          </h3>
        </Form.Label>
        <Col xs="auto">
          <Form.Control
            as="textarea"
            rows="3"
            name="punSumbission"
            ref={register({ required: true, minLength: 50, maxLength: 500 })}
            onChange={(e) => setUserPun(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Pun
      </Button>
    </Form>
  );
};
export default SubmitPun;
