import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import propTypes from 'prop-types';
/**
 * This Form is used to add new puns to the database if you find any.
 */
const SubmitPun = ({ name }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(`You should put this data in firebase${data}`);

  SubmitPun.propTypes = {
    name: propTypes.string,
  };
  SubmitPun.defaultProps = {
    name: 'User',
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>
          New pun for:
          {name}
        </Form.Label>
        <Form.Control
          as="textarea"
          rows="1"
          name="punSumbission"
          ref={register({ required: true, minLength: 50, maxLength: 500 })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Pun
      </Button>
    </Form>
  );
};
export default SubmitPun;
