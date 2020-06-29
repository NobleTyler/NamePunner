import React from 'react'
import { Jumbotron, Form, FormControl } from 'react-bootstrap'
/**
 * Component for the jumbotron at the top of the page, requires nameHandler from props, to set the name used in the queries in layout
 * @param {nameHandler} props
 */
const Jumbo = props => {
  return (
    <Jumbotron>
      <h1>Welcome to Name Punner</h1>
      <p>Enter in the search bar the names you need puns for</p>
      <Form>
        <FormControl
          type='text'
          placeholder='Enter name here'
          className='form-control-lg'
          width='100%'
          onChange={event => props.nameHandler(event.target.value)}
        />
      </Form>
    </Jumbotron>
  )
}

export default Jumbo
