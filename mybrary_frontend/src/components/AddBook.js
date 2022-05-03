import React from 'react';
import { Tabs, Tab, Modal, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import './AddBook.css'
import { useNavigate } from 'react-router-dom';
import MybraryApi from '../api/MybraryApi';
import OpenLibraryAPI from '../api/OpenLibraryApi'

function AddBook(props) {

  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  //  add manual book
  const [formData, setFormData] = useState({    
    title: '',
    author: '',
    description: '',
    rating: '',
    locale: '',
    owner: `${props.user[0]['id']}`,
    library: `${props.lib[0]['id']}`,
    wishlist: '',
    post: [],
  })

  const { title, author, description, rating, locale, library, wishlist, post, owner} = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

  const onSubmit = async (e) => {
    e.preventDefault()
    
    let bookData = {
      title: title,
      author: author,
      description: description,
      rating: rating,
      location: locale,
      owner: owner,
      library: library,
      wishlist: wishlist,
      post: post,
    }

    const data = await MybraryApi.createNewBook(bookData)

    if (data) {
      props.loadUser()
      navigate('/mybrary')
    }
  }

  // Add Searched book
  const addSearched = async (result) => {
    let bookData = {
      title: result['title'],
      author: result['author_name'][0],
      description: 'description',
      rating: 0,
      location: '',
      owner: `${props.user[0]['id']}`,
      library: `${props.lib[0]['id']}`,
      wishlist: '',
      post: [],
    }
    const data = await MybraryApi.createNewBook(bookData)
    if (data) {
      props.loadUser()
      navigate('/mybrary')
    }
  }

  //search open library api
  const searchBook = async (e) => {
    e.preventDefault()
    setLoading(!loading)
    let searchValue = e.target[0].value
    let query = searchValue.replace(' ', '+')
    const data = await OpenLibraryAPI.getBookInfo(query)
    if(data) {
      let topFifteen = []
      for (let i=0; i<15; i++){
        topFifteen.push(data.docs[i])
      }
      setSearchResults(topFifteen)
      setModalShow(true)
      setLoading(!loading)
    }
  }

  // https://covers.openlibrary.org/b/id/10521270-L.jpg -- number is cover_i

  const showSearchResults = () => {
    if(searchResults[0] !== undefined){
      return( searchResults.map((result) => {
        console.log(result)
        while (result !== undefined){
          return(
            <div className="search-results">
              {result['cover_i'] && <img src={`https://covers.openlibrary.org/b/id/${result['cover_i']}-M.jpg`}  alt={result['title']} onClick={ () => addSearched(result)}/>}
              {!result['cover_i'] && <Button onClick={ () => addSearched(result)}><div key={result.id}>{result['title']}</div></Button>}
              {/* <Button onClick={ () => addSearched(result)}>Add</Button> */}
            </div>
          )
        }
      }))
    }else{
      return (
        <div className="no-search-results">
          <div>No results for your search</div>
          <div>Please modify your parameters</div>
        </div>

      )
    }

  }

  return (
    <div>
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Top Search Results
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { showSearchResults() }
        </Modal.Body>
      </Modal>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Search" title="Search">
          <form onSubmit={ searchBook } className="form">
            <input 
              type="text" 
              className="form-control"
              placeholder="Search"
              name="search"
              required
            />
            <button className="btn btn-primary" type='submit'>
              {loading && <Spinner animation="border" role="status"/>}
              Search
            </button>
          </form>
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
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                placeholder="Location"
                name="locale"
                value={locale}
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

export default AddBook