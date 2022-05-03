import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Community.css';
import MybraryApi from '../api/MybraryApi';
// import Post from '../components/Post';
// import Group from '../components/Group';


function Community(props) {

  const [posts, setPosts] = useState([]);
  const [usersBooks, setUsersBooks] = useState([])
  const [comments, setComments] = useState([])
  const allBooks = props.user[0]['book'];

  //load all 
  useEffect(() => {
    loadAllPosts()
  }, [])

  const loadAllPosts = async () => {
    const postsData = await MybraryApi.getAllPosts()
    setPosts(postsData ? postsData : [])
  }

  //get user specific posts
  let userPosts = []
  const getUserPosts = () => {
    return userPosts.push(posts.filter(post => post.poster === props.user[0].id))
  }

  //load user book information
  useEffect(() => {
    loadBook()
  }, [])
  
  const loadBook = async () => {
    const userBooks = []
    for (const userBook of allBooks){      
      const bookData = await MybraryApi.getBook(userBook)
      userBooks.push(bookData)
    }
    setUsersBooks(userBooks)
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

  const renderRecentPosts = () => {
    let count = 0
    if (posts.length > 0) {
      return posts.map((post) => {
        while (count < 5){
          count ++          
          return (
            <Col className="post">
              <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
                <Card.Header className="card-header-inner" >{post['title']}</Card.Header>
                <Card.Body className="card-body-inner">
                  <Card.Text className="card-text-inner">
                    <div className="card-description">{post['description']}</div>
                    <hr/>
                    <DropdownButton id="dropdown-basic-button" title="Book">
                      { post['book'].length > 0 && getBookTitle(post['book']) }
                      { post['book'].length === 0 && <Dropdown.Item>No Books selected</Dropdown.Item> }                      
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Comment">                  
                      { post['comment'].length > 0 && getCommentDetail(post['comment']) }
                      { post['comment'].length === 0 && <Dropdown.Item>No Comments</Dropdown.Item> }
                    </DropdownButton>
                  </Card.Text>
                  <div className="card-buttons">
                  <Button className="delete"><Link to={`/post/${post['id']}`} className='post-card'>Edit</Link></Button>
                  <Button className="delete"><Link to={`/post/${post['id']}/comment`} className='post-card'>Comment</Link></Button>
                  </div>
                </Card.Body>
              </Card>        
            </Col>
          )
        }
      }) 
    }else {
      return (<div>No Posts</div>)
    } 
  }

  const renderMyRecentPosts = () => {
    getUserPosts()
    console.log(userPosts)
    let count = 0
    if (userPosts[0].length > 0) {
      return userPosts[0].map((post) => {
        while(count<5){
          count++           
          return (
            <Col className="post">
              <Card style = {{width: '14.5rem', height: '18rem'}} className="card-inner">
                <Card.Header className="card-header-inner" >{post['title']}</Card.Header>
                <Card.Body className="card-body-inner">
                  <Card.Text className="card-text-inner">
                    <div>{post['description']}</div>
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
                  <div className="card-buttons">
                  <Button className="delete"><Link to={`/post/${post['id']}`} className='post-card'>Edit</Link></Button>
                  <Button className="delete"><Link to={`/post/${post['id']}/comment`} className='post-card'>Comment</Link></Button>
                  </div>
                </Card.Body>
              </Card>        
            </Col>
          )
        } 
      })
    }else {
      return (<div>No Posts</div>)
    }  
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