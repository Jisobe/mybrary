import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Library from './pages/Library';
import Community from './pages/Community';
import MybraryHome from './pages/MybraryHome';
import Posts from './pages/Posts';
import MyPosts from './pages/MyPosts';
import Groups from './pages/Groups';
import MyGroups from './pages/MyGroups';
import Friends from './pages/Friends';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Post from './components/Post';
import Group from './components/Group';
import Friend from './components/Friend';
import AboutBook from './components/AboutBook';
import AddComment from './components/AddComment';
import VerifyLogin from './pages/VerifyLogin';
import MybraryApi from './api/MybraryApi';

function App() {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState([])

  useEffect(() => {
    loadUser()
  }, [username])

  const loadUser = async () => {
    const data = await MybraryApi.getAllUsers()
    setUser(data ? data : [])
  }
  

  return (
    <div className="App">
      <HashRouter>
        <Nav setUsername={ setUsername } username={ username } setUser={ setUser } user={ user } />
        <Routes>
          <Route path='/' element={ <Home user={ user } /> } />
          <Route path='/signup' element={ <Signup/> } />
          <Route path='/reset-password' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <ResetPassword user={ user }/>} />} />
          <Route path='/mybrary' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <MybraryHome user={ user }/>} />} />
          <Route path='/library' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Library username={ username } user={ user } loadUser={ loadUser }/>} />} />
          <Route path='/book/:id' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <AboutBook username={ username } user={ user }/>} />} />
          <Route path='/community' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Community user={ user }/>} />} />
          <Route path='/posts'element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Posts user={ user }/>} />} />
          <Route path='/post/:id' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Post user={ user }/>} />} />
          <Route path='/post/:id/comment' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <AddComment user={ user }/>} />} />
          <Route path='/my-posts' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <MyPosts user={ user }/>} />} />
          <Route path='/groups' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Groups user={ user }/>} />} />
          <Route path='/group/:id' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Group user={ user }/>} />} />
          <Route path='/my-groups' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <MyGroups user={ user }/> } />} />
          <Route path='/friends' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Friends user={ user }/>} />} />
          <Route path='/friend/:id' element={< VerifyLogin username={ username } setUsername={ setUsername } signedInPage= { () => <Friend user={ user }/>} />} />
        </Routes> 
        <hr />  
      </HashRouter>
    </div>
  )
} 

export default App


