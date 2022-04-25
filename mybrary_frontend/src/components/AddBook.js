import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';
import './AddBook.css'

function AddBook() {


  const [formData, setFormData] = useState({    
    title: '',
    author: '',
    description: '',
    rating: '',
  })

  const { title, author, description, rating } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()

  }

  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Search" title="Search">
          Title
        </Tab>
        <Tab eventKey="Manual" title="Manual" className="manual-form">
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
                placeholder="Author"
                name="author"
                value={author}
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
              <input 
                type="number" 
                className="form-control"
                placeholder="Rating"
                name="rating"
                value={rating}
                onChange={onChange}
                max='5'
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

export default AddBook