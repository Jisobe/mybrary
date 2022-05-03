import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Popover, Button, Overlay, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';
import Book from '../components/Book'
import './Posts.css'

function Posts(props) {

  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [usersBooks, setUsersBooks] = useState([])
  const [comments, setComments] = useState([])
  const allBooks = props.user[0]['book'];


  //load all posts
  useEffect(() => {
    loadAllPosts()
  }, [])

  const loadAllPosts = async () => {
    const postsData = await MybraryApi.getAllPosts()
    setPosts(postsData ? postsData : [])
  }

  //load comments
  useEffect(() => {
    loadComment()
  }, [])
  
  const loadComment = async () => {
    const commentData = await MybraryApi.getAllComments()
    setComments(commentData ? commentData : [])
  }

  // get book title
  const getBookTitle = (postBook) => {
    return usersBooks.map((book) => {
      if(book.id === postBook[0]){
        return (
          <Dropdown.Item href={`#/book/${book.id}`}>{book.title}</Dropdown.Item>
        )
      }
    })
  }
  
  // get comment detail
    const getCommentDetail = (postComments) => {
      for(let postComment of postComments) {
        console.log(postComment)
        return comments.map((comment) => {
          if(comment.id === postComment){
            return (
              <Dropdown.Item>{comment.description}</Dropdown.Item>
            )
          }
        })
      }
    }

  const renderPosts = () => {
    return ( posts.map((post) => {
      return (
      <div key={post['id']} className='post-card'>
        <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
          <Card.Header className="post-card-header-inner" as="h5">{post['title']}</Card.Header>
          <Card.Body className="post-card-body-inner">
            <Card.Text className="post-card-text-inner">
              {post['description']}
              <hr/>
              <DropdownButton id="dropdown-basic-button" title="Book">
                { post['book'].length > 0 && getBookTitle(post['book']) }
                { post['book'].length === 0 && <div>No Books selected</div> }
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Comments">
                { post['comment'].length > 0 && getCommentDetail(post['comment']) }
                { post['comment'].length === 0 && <div>No Comments</div> }
              </DropdownButton>
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