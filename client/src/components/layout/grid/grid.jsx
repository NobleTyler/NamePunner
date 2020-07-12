import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import propTypes from 'prop-types';
import Pun from '../../Puns/pun';
import './grid.css';

/**
 * This is the grid used in the layout. It's used to hold cards at the moment.
 * It reacts to screen size changes via bootstraps grid system
 * @param {*} props
 */
const Grid = ({ searchName }) => {
  Grid.propTypes = {
    // eslint-disable-next-line react/require-default-props
    searchName: propTypes.string,
  };
  // lazy load in the puns from namepuns
  const punRef = useFirestore()
    .collection('namepuns')
    .doc('punDocument');
  // subscribe to puns document
  const puns = useFirestoreDocData(punRef);
  const punLines = useRef('');

  // UseRef allows us to mutate the current within useEffect. Make sure to use.current
  useEffect(() => {
    punLines.current = Object.values(puns)[0][searchName];
  }, [puns, searchName]);

  // returns array into predefined chunks
  const chunkify = (arr = [], chunk = 4) => (
    Array.from({ length: Math.ceil(arr.length / chunk) }, (v, i) => (
      arr.slice(i * chunk, i * chunk + chunk)))
  );

  // generates columns to put in the grid, feed in one dimensional array
  const cellGenerator = (data) => data.map((pun) => (
    <Col
      className="column-centered"
      key={pun.id}
      xs={12}
      sm={6}
      large={3}
      xl={2}
    >
      <Pun Title={searchName} Text={pun} />
    </Col>
  ));
  // generates rows to put in the grid,feed in 2 dimmensional aray
  const rowGenerator = (data) => {
    const chunks = chunkify(data);
    return chunks.map((chunkArray) => (
      <Row className="row-centered" key={chunkArray.id * -1}>{cellGenerator(chunkArray)}</Row>));
  };
  /*
   TODO make title not the search name,
   have it be based on the request that is made when the user hits search maybe?
   */

  return (
    <Container fluid key={4} className="gridContainer">
      {rowGenerator(punLines.current)}
    </Container>
  );
};

export default Grid;
