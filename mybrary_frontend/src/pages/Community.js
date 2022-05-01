import React from 'react';
// import { useState, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Community.css';
// import Post from '../components/Post';
// import Group from '../components/Group';


function Community() {

  const renderRecentPosts = () => {
    const elements = [];
    for (let i=0; i<5; i++){
      elements.push(
        <Link className="card-link-inner" to={`/post/${i}`}> 
          <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
            <Card.Header className="card-header-inner" >Recent Posts</Card.Header>
            <Card.Body className="card-body-inner">
              <Card.Text className="card-text-inner">
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>  
      )
    }

    return elements
  }

  const renderMyRecentPosts = () => {
    const elements = [];
    for (let i=0; i<5; i++){
      elements.push(
        <Link className="card-link-inner" to={`/post/${i}`}> 
          <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
            <Card.Header className="card-header-inner" >Recent Posts</Card.Header>
            <Card.Body className="card-body-inner">
              <Card.Text className="card-text-inner">
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>  
      )
    }

    return elements
  }

  const renderGroups = () => {
    const elements = [];
    for (let i=0; i<5; i++){
      elements.push(
        <Link className="card-link-inner" to={`/group/${i}`}> 
          <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
            <Card.Header className="card-header-inner" >Groups</Card.Header>
            <Card.Body className="card-body-inner">
              <Card.Text className="card-text-inner">
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>  
      )
    }

    return elements
  }

  const renderFriends = () => {
    const elements = [];
    for (let i=0; i<5; i++){
      elements.push(
        <Link className="card-link-inner" to={`/friend/${i}`}> 
          <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
            <Card.Header className="card-header-inner" >Friends</Card.Header>
            <Card.Body className="card-body-inner">
              <Card.Text className="card-text-inner">
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>  
      )
    }

    return elements
  }
  

  return (
    <div className="page">
      <h1>Community</h1>
      <Container className="container">
        <Row className="m-3">
          <Col>
            <Card>
              <Card.Header as="h5">
                <p></p>
                <p>Recent Posts</p>
                <Link className='title-link' to="/posts">View All</Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  { renderRecentPosts() }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Card>
              <Card.Header as="h5">
                <Link className='title-link' to="/posts">New Post</Link>
                My Recent Posts
                <Link className='title-link' to="/my-posts">View All</Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  { renderMyRecentPosts() }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Card>
              <Card.Header as="h5">
                <Link className='title-link' to="/groups">Add Group</Link>
                Groups
                <Link className='title-link' to="/groups">View All</Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  { renderGroups() }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Card>
              <Card.Header as="h5">
                <Link className='title-link' to="/friends">Add Friend</Link>
                Friends
                <Link className='title-link' to="/friends">View All</Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  { renderFriends() }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Community