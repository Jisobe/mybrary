import React from 'react';
import { Tabs, Tab, Container, Button, Table, Overlay, Popover } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import './AddBook.css'
import { useNavigate, useParams, Link } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';

function AddComment(props) {

  const navigate = useNavigate()
  const params = useParams()
  const [posts, setPosts] = useState({});
  const [books, setBooks] = useState([]);

  //load post info
  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const postData = await MybraryApi.getPost(params.id)
    setPosts(postData ? postData : [])
  }

  //load all book information
  useEffect(() => {
    loadBook()
  }, [])

  const loadBook = async () => {

    const bookData = await MybraryApi.getAllBooks()
    setBooks(bookData ? bookData : [])

  }

  const [formData, setFormData] = useState({    
    description: '',
    post: params.id, 
    commenter: props.user[0].id,
  })

  const { description, post, commenter} = formData
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(posts.id)
    console.log(description)
    console.log(post)
    console.log(commenter)
    let postData = {
      description: description,
      post : post,
      commenter : commenter,
    }
  
    const data = await MybraryApi.createNewComment(postData)
  
    if (data) {
      navigate('/my-posts')
    }
  }

  // get book title
  const getBookTitle = (postBook) => {
    return books.map((book) => {
      if(book.id === postBook[0]){
        return (<td>{book.title}</td>)
      }
    })
  }

    //render add comment popover
    const [showAddComment, setShowAddComment] = useState(false);
    const [targetAddComment, setTargetAddComment] = useState(null);
    const refAddComment = useRef(null);
  
    const handleClickAddComment = (event) => {
      setShowAddComment(!showAddComment);
      setTargetAddComment(event.target);
    };
  
    const onHideAddComment = () => {
      setShowAddComment(!showAddComment);
    };
  
  return (
    <div className="page">
      <Container fluid>
        <Button><Link className="back-link" to="/my-posts">Back to My Posts</Link></Button>
        <div className="table-div">
          <Table striped bordered hover>
            <thead className='table-header'>
              <tr>
                <th>Title</th>
                <th>Decription</th>
                <th>Book</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody className='table-body'>
              {posts.title !== undefined && 
              <tr>
                <td>{posts['title']}</td>
                <td>{posts['description']}</td>
                { posts.book.length > 0 && getBookTitle(posts['book']) }
                { posts.book.length === 0 && <td>No Books selected</td> }
                <td>{posts['comment']}</td>
              </tr>}
            </tbody>
          </Table>
        </div>
        <div>
          <div ref={refAddComment}>
            <Button className="delete" onClick={handleClickAddComment}>Comment </Button>
            <Overlay
              show={showAddComment}
              target={targetAddComment}
              placement="bottom"
              container={refAddComment}
              containerPadding={20}
              rootClose ='true'
              onHide = {onHideAddComment}
              rootCloseEvent='click'
            >
              <Popover id="popover-contained">
                <Popover.Header as="h3">Add Comment</Popover.Header>
                <Popover.Body>
                  <form onSubmit={onSubmit} className="form">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Comment"
                        name="description"
                        value={description}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <button className="btn btn-primary" type='submit'>Add</button>
                  </form>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AddComment