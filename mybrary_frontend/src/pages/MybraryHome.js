import React from 'react';
import { Link } from 'react-router-dom'
import './MybraryHome.css';
import Community from '../img/Community.png';
import Library from '../img/Library.png';
import Queue from '../img/Reading_Queue.png';
import Wish from '../img/Wish_List.png';

function MybraryHome() {

  return (
    <div className='page '>
      <div className='mybrary-home-container'>
            <Link to="/library"><img className='logo' src={Library} alt='Library logo' /></Link>
            <Link to='/community'><img className='logo' src={Community} alt='Community logo' /></Link>
            <Link to='/queue'><img className='logo' src={Queue} alt='Reading Queue logo' /></Link>
            <Link to="/wishlist"><img className='logo' src={Wish} alt='Wish list logo' /></Link>
      </div>
    </div>
  )
}

export default MybraryHome