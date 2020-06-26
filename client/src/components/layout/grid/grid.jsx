import React,{useEffect,useRef} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Pun from '../../puns/pun'
import { useFirestoreDocData, useFirestore} from 'reactfire';
//TODO make this generate for each props, still deciding if I'm importing pun objects or just like some json

/**
 * This is the grid used in the layout. It's used to hold cards at the moment and reacts to screen size changes via bootstrap
 * @param {*} props 
 */
const Grid = (props) =>{
    //lazy load in the puns from namepuns
    const punRef = useFirestore().collection('namepuns').doc('punDocument')
    //subscribe to puns document
    const puns = useFirestoreDocData(punRef)
    //get values
    let punLines = useRef('')
    //UseRef allows us to mutate the current within useEffect. Make sure to use.current
    useEffect(() => {
       punLines.current = Object.values(puns)[0][props.searchName]
       console.log(punLines.current)
    }, [puns,props.searchName])
    //Rethink if this could pull too much information
    //let transformedPuns = Object.keys(puns[0])
    return (
    <Container fluid>
     <Row>
        <Col xs={12} sm={6} md={4} large={3} xl={2}  ><Pun Title={"testing punlines"} Text={punLines.current}/></Col>
        <Col xs={12} sm={6} md={4} large={3} xl={2} ><Pun Title={props.Title} Text={"yep"}/></Col>
        <Col xs={12} sm={6} md={4} large={3} xl={2} ><Pun Title={props.Title} Text={props.Text}/></Col>
        <Col xs={12} sm={6} md={4} large={3} xl={2} ><Pun Title={props.Title} Text={props.Text}/></Col>
     </Row>   
    </Container>
    )
}

export default Grid;