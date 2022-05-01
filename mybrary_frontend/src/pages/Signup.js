import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import MybraryApi from '../api/MybraryApi';
import './signup.css'

function Signup() {

  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({    
    username: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    email: ''
  })
  const { username, password, confirm_password, first_name, last_name, email } = formData
  
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value})

  const onSubmit = async (e) => {
    e.preventDefault()
    let isValid = true

    console.log(errors)
    setErrors({})
    
    if (formData['password'] !== formData['confirm_password']){
      isValid = false;
      setErrors({password : "Passwords don't match"});
    }

    if (isValid){
      let signupData = {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email
      }

      const data = await MybraryApi.createNewUser(signupData)

      if (data) {
        navigate('/mybrary')
      }
    }

  }

  return (
    <Container className="signup-container page">
      <h1>Signup</h1>
      <p>Please enter you information below to signup for an account</p>
      <div className="signup">
        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              placeholder="username"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control"
              placeholder="password"
              name="password"
              value={password}
              onChange={onChange}
              minLength = '6'
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control"
              placeholder="confirm password"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              minLength = '6'
              required
            />
          </div>
          { errors.password && <p> { errors.password } </p>}
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              placeholder="first name"
              name="first_name"
              value={first_name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              placeholder="last name"
              name="last_name"
              value={last_name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control"
              placeholder="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <button className="btn btn-primary" type='submit'>Signup</button>
        </form>
        
      </div>
    </Container>
  )
}

export default Signup