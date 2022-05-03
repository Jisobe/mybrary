import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Popover, Button, Overlay } from 'react-bootstrap';
import About from '../components/AboutBook';
import MybraryApi from '../api/MybraryApi';
import { Tab, Tabs } from 'react-bootstrap';

function Book(props) {

  const [usersBooks, setUsersBooks] = useState([])
  const allBooks = props.lib[0]['book'];

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

  const filteredData = usersBooks.filter((book) => {

    if (props.input === '') {
        return book;
    }
    else {
        return book.title.toLowerCase().includes(props.input)
    }
  })  

  const renderBookList = () => {
    return (filteredData.map((usersBook) => {
      return(
        <div key={usersBook['id']}>
          <Button><Link className='lib-link' to={`/book/${usersBook['id']}`}>{usersBook['title']}</Link></Button>
        </div>
      )
    }))
  }

  return (
      <div className="card-text">{ renderBookList() }</div>
  )
}

export default Book