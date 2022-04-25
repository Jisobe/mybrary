import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap';
import './MybraryHome.css';

function MybraryHome() {
  return (
    <div className='page'>
      <Container fluid className="mybrary-home-container m-3">
        <Row className="mybrary-home-row m-4">
          <Col className="mybrary-home-col m-3"></Col>
          <Col className="mybrary-home-col m-3">
            <Link to="/library">Library</Link>
          </Col>
        </Row>
        <Row className="mybrary-home-row m-3">
          <Col className="mybrary-home-col m-3"><Link to='/community'>Community</Link></Col>
          <Col className="mybrary-home-col m-3"></Col>
        </Row>
        <Row className="mybrary-home-row m-3">
          <Col className="mybrary-home-col m-3"></Col>
          <Col className="mybrary-home-col m-3"><Link to='/queue'>Reading Queue</Link></Col>
        </Row>
        <Row className="mybrary-home-row m-3">
          <Col className="mybrary-home-col m-3">
            <Link to="/wishlist">Wishlists</Link>
          </Col>
          <Col className="mybrary-home-col m-3"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default MybraryHome