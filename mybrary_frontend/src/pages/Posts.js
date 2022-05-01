import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Popover, Button, Overlay } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';
import Book from '../components/Book'
import './Posts.css'

function Posts() {

  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    loadAllPosts()
  }, [])

  const loadAllPosts = async () => {
    const postsData = await MybraryApi.getAllPosts()
    setPosts(postsData ? postsData : [])
  }

  console.log(posts)
  const renderPosts = () => {
    return ( posts.map((post) => {
      return (
      <div key={post['id']} className='post-card'>
        <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
          <Card.Header className="post-card-header-inner" as="h5">{post['title']}</Card.Header>
          <Card.Body className="post-card-body-inner">
            <Card.Text className="post-card-text-inner">
              {post['description']}
            </Card.Text>
          </Card.Body>
        </Card>        
      </div>)
    }))
  }

  return (
    <div className="page post-card">
        { renderPosts() }
    </div>
  )
}

export default Posts