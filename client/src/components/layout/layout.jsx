import React, { useState } from 'react'
import Jumbo from '../JumboSearch/Jumbo'
import {Route} from 'react-router-dom'
import Grid from './Grid/Grid'
import Switch from 'react-bootstrap/esm/Switch'
/**
 * Layout defines the layout of the main page, but also the whole app since so far it's really just one page
 * @param {*} props
 */
const Layout = props => {
    return (
    <React.Fragment>
      

      {props.children}
    </React.Fragment>
  )
}

export default Layout
