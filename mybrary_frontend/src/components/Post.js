import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Popover, Button, Overlay, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';
import Book from '../components/Book'

function Post(props) {

  const navigate = useNavigate()
  const params = useParams()
  const [isUpdate, setIsUpdate] = useState(false)
  const [post, setPost] = useState([]);
  const [usersBooks, setUsersBooks] = useState([])
  const allBooks = props.user[0]['book'];  


  //load post info
  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const postData = await MybraryApi.getPost(params.id)
    setPost(postData ? postData : [])
  }

  //Render delete/update buttons based on user
  const checkPoster = () => {
    return post['poster'] === props.user.id
  }  

  //delete post
  const deletePost = async () => {
    const data = await MybraryApi.deletePost(params.id)
    if (data){
      navigate('/my-posts')
    }
    else{
      console.error('error occured on delete')
    }
  }

  //update post
  const selectUpdate = () => {setIsUpdate(!isUpdate)}
  const onSubmit = async (e) => {
    e.preventDefault()
    let postData = {
      title: e.target['title'].value,
      description: e.target['description'].value,
      book: [e.target['book'].value],
      comment: [],
      // comment: [e.target['comment'].value],
      poster: post['poster'],
    }
    const data = await MybraryApi.updateFullPost(params.id, postData)
    if (data) {
      navigate('/my-posts')
    }
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

  //render book OPTIONS
  const renderBookOptions = () => {
    return (usersBooks.map((book) => {
      if (post.book === book.id){
        return (
          <option selected value={book.id}>{book.title}</option>        
        )
      }else{
        return (
          <option value={book.id}>{book.title}</option>        
        )        
      }
    }))
  }

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
              <tr>
                <td>{post['title']}</td>
                <td>{post['description']}</td>
                <td>{post['book']}</td>
                <td>{post['comment']}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='button-div'>
          {checkPoster && <Button onClick={ deletePost }>Delete</Button> }
          {checkPoster && <Button onClick={ selectUpdate }>Update</Button>}
        </div>
        {isUpdate &&
        <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <label className="form-group-label">Post Title</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={post['title']}
                name="title"
                defaultValue={post['title']}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Description</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={post['description']}
                name="description"
                defaultValue={post['description']}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Book</label>
              <select name="book" id="book">
                { renderBookOptions() }
              </select>
              {/* <input 
                type="number" 
                className="form-control"
                placeholder={post['book']}
                name="book"
                defaultValue={post['book']}
                max='5'
                required
              /> */}
            </div>
            {/* <div className="form-group">
              <label className="form-group-label">Comments</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={post['comment']}
                name="comment"
                defaultValue={post['comment']}
              />
            </div> */}
            <button className="btn btn-primary" type='submit'>Save</button>
          </form>}
      </Container>
    </div>
  )
}

export default Post