import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Popover, Button, Overlay } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Library.css';
import Add from '../components/AddBook';
import Search from '../components/SearchBook';
// import About from '../components/AboutBook';
import MybraryApi from '../api/MybraryApi';
import Book from '../components/Book'

function Library(props) {

  console.log('-------------start-----------------')
  const navigate = useNavigate()
  const [libraries, setLibraries] = useState([]);
  const [books, setBooks] = useState([]);

  //load all libraries
  useEffect(() => {
    loadAllLibraries();
  }, [])

  const loadAllLibraries = async () => {
    const libsData = await MybraryApi.getAllLibraries()
    setLibraries(libsData ? libsData : [])
  }

  // Load all books
  useEffect(() => {
    loadAllBooks()
  }, [libraries])

  const loadAllBooks = async () => {
    const bookData = await MybraryApi.getAllBooks()
    setBooks(bookData ? bookData : [])
  }  

  // helpers for add book
  const [showAddBook, setShowAddBook] = useState(false);
  const [targetAddBook, setTargetAddBook] = useState(null);
  const refAddBook = useRef(null);

  const handleClickAddBook = (event) => {
    setShowAddBook(!showAddBook);
    setTargetAddBook(event.target);
  };

  const onHideAddBook = () => {
    setShowAddBook(!showAddBook);
  };

  // Library
  const lib = libraries.filter(library => 
    library['owner'] === props.user[0]['id']
  ) 

  const createLibrary = async (e) => {
    e.preventDefault();

    let libData = {
      name: e.target[0].value,
      owner: props.user[0]['id'],
      book:[]
    }
    const data = await MybraryApi.createNewLibrary(libData)

    if (data){
      setLibraries(data)
      navigate('/mybrary')
    }
  }

  //render library 
  const renderLibrary = () => {
    return(
      <>
        {lib.length === 0 && 
          <div>
            <h1>Please add your library</h1>
            <form onSubmit={createLibrary} className="name-lib">
              <input type="text" placeholder="Library Name" name='library'/>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        }
        {lib.length !== 0 && 
        <>
        <h1>{lib[0]['name']}</h1> 
        <Container className="container lib-container">
          <Row className="m-3">
            <Col>
              <Button><Link className='lib-link' to={Search}>Search Library</Link></Button>
            </Col>
            <Col>
              <div ref={refAddBook}>
                <Button onClick={handleClickAddBook}>Add Book</Button>
                <Overlay
                  show={showAddBook}
                  target={targetAddBook}
                  placement="bottom"
                  container={refAddBook}
                  containerPadding={20}
                  rootClose ='true'
                  onHide = {onHideAddBook}
                  rootCloseEvent='click'
                >
                  <Popover id="popover-contained">
                    <Popover.Header as="h3">Add Book</Popover.Header>
                    <Popover.Body>
                      <Add user={props.user} lib = {lib} loadUser={props.loadUser}/>
                    </Popover.Body>
                  </Popover>
                </Overlay>
              </div>
            </Col>
          </Row>
          <Row className="m-3 list-of-books">
            <Col>
              <Card>
                <Card.Header id='card-header-lib' as="h5">Master Book List</Card.Header>
                <Card.Body>
                  <Card.Text as = 'div' className="card-text">
                    < Book lib = {lib} books = {books}/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </>
      } 
      </>
      
    )
  }

  return (
    <div className="page">
      { renderLibrary() }
    </div>
  )
}

export default Library