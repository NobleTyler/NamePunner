import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavigationBar = props => {
  return (
    <React.Fragment>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>NamePunner</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='form-control'
              width='100%'
              onChange={event => props.nameHandler(event.target.value)}
            />
            <Button variant='outline-light'>Search</Button>
          </Form>
        </Nav>
      </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar
