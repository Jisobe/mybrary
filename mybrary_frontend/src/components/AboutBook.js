import React from 'react';
import { useState, useEffect } from 'react';
import { Tab, Tabs, Button, Container, Table  } from 'react-bootstrap';
import './AboutBook.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';

function AboutBook(props) {

  const [book, setBook] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const params = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    loadBook()
  }, [])

  const loadBook = async () => {  
    const bookData = await MybraryApi.getBook(params.id)
    setBook(bookData)
  }

  const deleteBook = async () => {
    const data = await MybraryApi.deleteBook(params.id)
    if (data){
      navigate('/library')
    }
    else{
      console.error('error occured on delete')
    }
  }

  const selectUpdate = () => {setIsUpdate(!isUpdate)}


  const onSubmit = async (e) => {
    e.preventDefault()

    let bookData = {
      title: e.target['title'].value,
      author: e.target['author'].value,
      description: e.target['description'].value,
      rating: e.target['rating'].value,
      location: e.target['location'].value,
      library: book['library'],
      wishlist: book['wishlist'],
      post: book['post'],
    }

    const data = await MybraryApi.updateFullBook(params.id, bookData)

    if (data) {
      navigate('/mybrary')
    }
  }

  return (
    <div className="page">
      <Container fluid>
        <Button><Link className="back-link" to="/library">Back to Library</Link></Button>
        <div className="table-div">
          <Table striped bordered hover>
            <thead className='table-header'>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Rating</th>
                <th>Decription</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody className='table-body'>
              <tr>
                <td>{book['title']}</td>
                <td>{book['author']}</td>
                <td>{book['rating']}</td>
                <td>{book['description']}</td>
                <td>{book['location']}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='button-div'>
          <Button onClick={ deleteBook }>Delete</Button> 
          <Button onClick={ selectUpdate }>Update</Button>
        </div>
        {isUpdate &&
        <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <label className="form-group-label">Book Title</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={book['title']}
                name="title"
                defaultValue={book['title']}
                // onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Author</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={book['author']}
                name="author"
                defaultValue={book['author']}
                // onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Description</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={book['description']}
                name="description"
                defaultValue={book['description']}
                // onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Rating</label>
              <input 
                type="number" 
                className="form-control"
                placeholder={book['rating']}
                name="rating"
                defaultValue={book['rating']}
                // onChange={onChange}
                max='5'
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Location</label>
              <input 
                type="text" 
                className="form-control"
                placeholder={book['location']}
                name="location"
                defaultValue={book['location']}
                // onChange={onChange}
                required
              />
            </div>
            <button className="btn btn-primary" type='submit'>Save</button>
          </form>}
      </Container>
    </div>
  )
}

export default AboutBook