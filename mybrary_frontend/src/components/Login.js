import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './Login.css'


function Login() {

  const [formData, setFormData] = useState({    
    username: '',
    password: ''
  })

  const { username, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()

  }
  

  return (
    <Container className="signup-container">
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
          <button className="btn btn-primary" type='submit'>Login</button>
        </form>
        <p className="mt-1">
          Need an Account? <Link to='/signup'>Sign up</Link>
        </p>
        <p className="mt-1">
          Forgot password? <Link to='/reset-password'>Reset Password</Link>
        </p>
      </div>
    </Container>
  )
}

export default Login