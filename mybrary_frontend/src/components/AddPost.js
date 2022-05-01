import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';
import './AddBook.css'
import { useNavigate } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';

function AddPost(props) {

  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({    
    title: '',
    description: '',
    book: [],
    poster: props.user[0].id, 
    comment: [],
  })
  
  const { title, description, book, poster, comment} = formData
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
  
  const onSubmit = async (e) => {
    e.preventDefault()
    
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
            <button className="btn btn-primary" type='submit'>Add</button>
          </form>
        </Tab>
      </Tabs>
    </div>
  )
}

export default AddPost