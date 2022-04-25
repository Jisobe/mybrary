import React from 'react';
import { Row, Container, Col, Button, Offcanvas, Popover, Overlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState, useRef } from 'react';
import Login from './Login';

function Nav() {

  // helpers for menu off canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // helper for login popover
  const [showLogin, setShowLogin] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShowLogin(!showLogin);
    setTarget(event.target);
  };

  const onHide = () => {
    setShowLogin(!showLogin);
  }

  return (
    <Container fluid className="nav-container">
      <Row className="nav-row">
        <Col className='logo'>
          <Button variant="primary" className ="btn btn-primary" onClick={handleShow}>
            Menu
          </Button>
          <Offcanvas show={show} onHide={handleClose} className="nav-offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="nav-offcanvas-name">Mybrary Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="menu-body">
              <Link to='/' className='name-link'>Home</Link>
              <Link to='/mybrary' className='name-link'>My Library</Link>
              <Link to='/community' className='name-link'>Community</Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col className='name'><Link to='/' className='name-link'>Mybrary</Link></Col>
        <Col className='login'>
          <div ref={ref}>
            <Button onClick={handleClick}>Login</Button>
            <Overlay
              show={showLogin}
              target={target}
              placement="left"
              container={ref}
              containerPadding={20}
              rootClose ='true'
              onHide = {onHide}
              rootCloseEvent='click'
            >
              <Popover id="popover-contained">
                <Popover.Header as="h3">Login</Popover.Header>
                <Popover.Body>
                  <Login/>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Nav