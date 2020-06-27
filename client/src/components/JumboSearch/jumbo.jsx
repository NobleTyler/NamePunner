import React, {useState} from 'react'
import { Jumbotron, Form, FormControl, Button } from 'react-bootstrap'

const Jumbo = props => {
const [searchBar,setSearchBar] = useState()
  return (
    <Jumbotron>
      <h1>Welcome to name punner</h1>
      <p>Enter in the search bar the names you need puns for</p>
      <Form>
        <FormControl
          type='text'
          placeholder='Enter name here'
          className='form-control-lg'
          width='100%'
          onChange={event => setSearchBar(event.target.value)}
        />
        <Button variant='outline-dark' onClick={props.nameHandler(searchBar)}>Search</Button>
      </Form>
    </Jumbotron>
  )
}

export default Jumbo
