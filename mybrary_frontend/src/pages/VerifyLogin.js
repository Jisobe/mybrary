import React from 'react'
import Login from '../components/Login';
import { Link } from 'react-router-dom'

function VerifyLogin(props) {

  if (props.username === ''){
    return(
      <div className="page">
      <p>Please Login or <Link to='/signup'>Signup</Link> to view this page</p>
      <Login setUsername={props.setUsername}/>
      </div>
    )
  }
  return (
    <div>
      { props.signedInPage() }
    </div>
  )
}

export default VerifyLogin