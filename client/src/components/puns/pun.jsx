import React from 'react';
import {Card} from 'react-bootstrap'
/**
 * This will be the component where we display puns.
 * Only displays text right now
 * @param {} props 
 */
const Pun = (props) =>{
<Card style={{width:'18rem'}}>
<Card.Body>
<Card.Title>{props.Title}</Card.Title>
    <Card.Text>
        {props.Text}
    </Card.Text>
</Card.Body>
</Card>
}
//TODO allow images to show in these 
export default  Pun;