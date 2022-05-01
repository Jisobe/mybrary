import React from 'react';
import { Row, Container, Col, Button, Offcanvas, Popover, Overlay } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState, useRef } from 'react';
import Login from './Login';
import MybraryApi from '../api/MybraryApi';
import Logo from '../img/Mybrary.png';

function Nav(props) {

  const navigate = useNavigate()
  // helpers for menu off canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // helper for login popover
  const [showLogin, setShowLogin] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (e) => {
    setShowLogin(!showLogin);
    setTarget(e.target);
  };

  const onHide = () => {
    setShowLogin(!showLogin);
  }

  //logout
  const handleLogout = async () => {
    const data = await MybraryApi.logoutUser()
    if (data){
      props.setUsername('');
      props.setUser([])
      navigate('/')
    }
  }

  const renderAuth = () => {
    if (props.username === ''){
      return (
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
                <Login setUsername={props.setUsername} username={props.username} setUser={props.setUser} user={props.user}/>
              </Popover.Body>
            </Popover>
          </Overlay>
        </div>
      )
    }
    return (
      <>
        <p className="welcome">Welcome, {props.username}</p>
        <Button onClick={ handleLogout }>Logout</Button>
      </>
    )
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
        <Col className='name'><Link to='/' className='name-link'><img className='logo' src={Logo} alt='Logo' /></Link></Col>
        <Col className='login'>
          { renderAuth() }
        </Col>
      </Row>
    </Container>
  )
};

export default Nav