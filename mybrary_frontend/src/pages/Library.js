import React from 'react';
import { useState, useRef } from 'react';
import { Container, Row, Col, Card, Popover, Button, Overlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Library.css';
import Add from '../components/AddBook';
import Search from '../components/SearchBook';
import About from '../components/AboutBook';

function Library() {

  // helpers for book details
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const onHide = () => {
    setShow(!show);
  };

  // helpers for add book
  const [showAddBook, setShowAddBook] = useState(false);
  const [targetAddBook, setTargetAddBook] = useState(null);
  const refAddBook = useRef(null);

  const handleClickAddBook = (event) => {
    setShowAddBook(!showAddBook);
    setTargetAddBook(event.target);
  };

  const onHideAddBook = () => {
    setShowAddBook(!showAddBook);
  };
  
  const renderBookList = () => {
    const elements = [];
    for (let i=0; i<5; i++){
      elements.push(
        <div key={i} ref={ref}>
          <Button onClick={handleClick}>asfbajsf asfjkabs vabjkfagashrdvsegsgdfhdfg</Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
            rootClose ='true'
            onHide = {onHide}
            rootCloseEvent='click'
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3">Details</Popover.Header>
              <Popover.Body>
                <About/>
              </Popover.Body>
            </Popover>
          </Overlay>
        </div>
      )
    }

    return elements
  }

  return (
    <div className="page">
      <h1>Library Name</h1>
      <Container className="container lib-container">
        <Row className="m-3">
          <Col><Link to={Search}>Search Library</Link></Col>
          <Col>
            <div ref={refAddBook}>
              <Button onClick={handleClickAddBook}>Add Book</Button>
              <Overlay
                show={showAddBook}
                target={targetAddBook}
                placement="bottom"
                container={refAddBook}
                containerPadding={20}
                rootClose ='true'
                onHide = {onHideAddBook}
                rootCloseEvent='click'
              >
                <Popover id="popover-contained">
                  <Popover.Header as="h3">Add Book</Popover.Header>
                  <Popover.Body>
                    <Add />
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </Col>
        </Row>
        <Row className="m-3 list-of-books">
          <Col>
            <Card>
              <Card.Header as="h5">List of Books</Card.Header>
              <Card.Body>
                <Card.Text>
                  { renderBookList() }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Library