import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Popover, Button, Overlay } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';
import './MyPosts.css'
import Add from '../components/AddPost'

function MyPosts(props) {

  const [posts, setPosts] = useState([]);
  const [usersBooks, setUsersBooks] = useState([])
  // const userPostId = props.user[0].post

  //load all 
  useEffect(() => {
    loadAllPosts()
  }, [])

  const loadAllPosts = async () => {
    const postsData = await MybraryApi.getAllPosts()
    setPosts(postsData ? postsData : [])
  }

  let userPosts = []
  const getUserPosts = () => {
    return userPosts.push(posts.filter(post => post.poster === props.user[0].id))
  }

  console.log(userPosts)

  // get book title
  useEffect(() => {
    loadBook()
  }, [])

  const loadBook = async () => {

    const userBooks = []

    userPosts[0].map((post) => {
      const bookData = await MybraryApi.getBook(userBook)
      userBooks.push(bookData)      
    } )   
    
    
    setUsersBooks(userBooks)
  }

  const renderPosts = () => {
    getUserPosts()
    if (userPosts[0].length > 0) {
      return userPosts[0].map((post) => {
        return (
          <Col className="post">
            <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
              <Card.Header className="user-post-card-header-inner" >{post['title']}</Card.Header>
              <Card.Body className="user-post-card-body-inner">
                <Card.Text className="user-post-card-text-inner">
                  <div>{post['description']}</div>
                  <hr/>
                  {/* <div>Book: { getBookTitle(post['book'])}</div> */}
                  <div>Book: {post['book']}</div>
                  <div>Comments: {post['comment']}</div>              
                </Card.Text>
                <Button className="delete"><Link to={`/post/${post['id']}`} className='post-card'>Edit</Link></Button>
              </Card.Body>
            </Card>        
          </Col>
        )
      })
    }else {
      return (<div>No Posts</div>)
    }
    
  }

  const [showAddPost, setShowAddPost] = useState(false);
  const [targetAddPost, setTargetAddPost] = useState(null);
  const refAddPost = useRef(null);

  const handleClickAddPost = (event) => {
    setShowAddPost(!showAddPost);
    setTargetAddPost(event.target);
  };

  const onHideAddPost = () => {
    setShowAddPost(!showAddPost);
  };

  return (
    <div className="page post-card">
      <Container className="user-post-card-container">
        <Row className="m-3">
          <div ref={refAddPost}>
            <Button onClick={handleClickAddPost}>Add Post</Button>
            <Overlay
              show={showAddPost}
              target={targetAddPost}
              placement="bottom"
              container={refAddPost}
              containerPadding={20}
              rootClose ='true'
              onHide = {onHideAddPost}
              rootCloseEvent='click'
            >
              <Popover id="popover-contained">
                <Popover.Header as="h3">Add Post</Popover.Header>
                <Popover.Body>
                  <Add user={props.user}/>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </Row>
        <Row >{posts.length > 0 &&  renderPosts() }</Row>
        <Row className="m-3"></Row>
        
      </Container>  
    </div>
  )
}

export default MyPosts