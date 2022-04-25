import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
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


// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}/> */}
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/signup' element={ <Signup/> } />
          <Route path='/activate/:uid/:token' element={ <Activate/> } />
          <Route path='/reset-password' element={ <ResetPassword/> } />
          <Route path='/reset-password/confirm' element={ <ResetPasswordConfirm/> } />
          <Route path='/mybrary' element={ <MybraryHome/> } />
          <Route path='/library' element={ <Library/> } />
          <Route path='/community' element={ <Community/> } />
          <Route path='/posts' element={ <Posts/> } />
          <Route path='/post/:id' element={ <Post/> } />
          <Route path='/my-posts' element={ <MyPosts/> } />
          <Route path='/groups' element={ <Groups/> } />
          <Route path='/group/:id' element={ <Group/> } />
          <Route path='/my-groups' element={ <MyGroups/> } />
          <Route path='/friends' element={ <Friends/> } />
          <Route path='/friend/:id' element={ <Friend/> } />
        </Routes> 
        <hr />
        <Footer />   
      </HashRouter>
    </div>
  )
} 

export default App


