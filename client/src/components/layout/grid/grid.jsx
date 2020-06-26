import React, { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pun from '../../puns/pun'
import { useFirestoreDocData, useFirestore } from 'reactfire'

/**
 * This is the grid used in the layout. It's used to hold cards at the moment and reacts to screen size changes via bootstrap
 * @param {*} props
 */
const Grid = props => {
  //lazy load in the puns from namepuns
  const punRef = useFirestore()
    .collection('namepuns')
    .doc('punDocument')
  //subscribe to puns document
  const puns = useFirestoreDocData(punRef)
  //get values
  let punLines = useRef('')
  //UseRef allows us to mutate the current within useEffect. Make sure to use.current
  useEffect(() => {
    punLines.current = Object.values(puns)[0][props.searchName]
    console.log(punLines.current)
  }, [puns, props.searchName])
  //returns array into predefined chunks
  const chunkify = (arr, chunk = 4) =>{
    return Array.from({ length: Math.ceil(arr.length / chunk) }, (v, i) =>
      arr.slice(i * chunk, i * chunk + chunk)
    )
}
  
  //generates rows to put in the grid,feed in 2 dimmensional aray
  const rowGenerator = ({ data }) => {
    return (
      
        
          
    0    
    )
  }
  //generates columns to put in the grid, feed in one dimensional array
  const cellGenerator = (data) => {
    return(
        data.map(pun => (
        <Col xs={12} sm={6} md={4} large={3} xl={2}>
            <Pun Title={props.searchName} Text={pun}/>
        </Col>
        ))
    )
  }
  console.log(cellGenerator(['TestPun','testpun2','testpun3','testpun4','testpun5','testpun6']))

  return (
    <Container fluid>
      <Row>
          {cellGenerator(['TestPun','testpun2','testpun3'])}
        <Col xs={12} sm={6} md={4} large={3} xl={2}>
          <Pun Title={props.Title} Text={'yep'} />
        </Col>
        <Col xs={12} sm={6} md={4} large={3} xl={2}>
          <Pun Title={props.Title} Text={props.Text} />
        </Col>
        <Col xs={12} sm={6} md={4} large={3} xl={2}>
          <Pun Title={props.Title} Text={props.Text} />
        </Col>
      </Row>
    </Container>
  )
}

export default Grid
