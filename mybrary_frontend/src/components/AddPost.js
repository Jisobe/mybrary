import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './AddBook.css'
import { useNavigate } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';

function AddPost(props) {

  const navigate = useNavigate()
  const [usersBooks, setUsersBooks] = useState([])
  const allBooks = props.user[0]['book'];
  
  const [formData, setFormData] = useState({    
    title: '',
    description: '',
    book: [],
    poster: props.user[0].id, 
    comment: [],
  })
  
  const { title, description, book, poster, comment} = formData
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
  const onChangeBook = e => setFormData({ ...formData, [e.target.name]: [e.target.value]})

  
  const onSubmit = async (e) => {
    e.preventDefault()
    
    console.log(book)
    let postData = {
      title: title,
      description: description,
      book : book,
      poster : poster,
      comment : comment,
    }
  
    const data = await MybraryApi.createNewPost(postData)
  
    if (data) {
      navigate('/community')
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
      return (
        <option value={book.id}>{book.title}</option>        
      )        
    }))
  }
  
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Post" title="Post" className="manual-form">
          <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Title"
                name="title"
                value={title}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Description"
                name="description"
                value={description}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group-label">Book</label>
              <select name="book" id="book" onChange={onChangeBook} multiple={true}>
                { renderBookOptions() }
              </select>
            </div>
            <button className="btn btn-primary" type='submit'>Add</button>
          </form>
        </Tab>
      </Tabs>
    </div>
  )
}

export default AddPost