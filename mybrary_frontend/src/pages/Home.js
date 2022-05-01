import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Home.css';
import MybraryApi from '../api/MybraryApi';
import NYTApi from '../api/NYTApi';
import { useState, useEffect } from 'react';

export default function Home() {

  const [bestSellers, setBestSellers] = useState('')

  useEffect(() => {
    loadBestSellerList()
  }, [])

  const loadBestSellerList = async () => {

    const data = await NYTApi.getBestSellers()
    setBestSellers(data ? data : [])
  }

  let titles = []
  // const [titles, setTitles] = useState([])

  const getBestSellerTitles = () => {
    let results = bestSellers['results']
    let list = results.lists
    let bookLists = []
    let books = []
    let lists = []
    
    bookLists.push(list.map(item => item.books))

    bookLists.map((list) => {
      lists.push(list)
    }) 

    lists.map((book) => {
      books.push(book)
    })

    let listOfBooks = (books[0])

    return listOfBooks.map((book) => {
      book.map((book2) => {
        titles.push(book2.title)
        // let newTitle = book2.title
        // setTitles(prevTitles => {return [...prevTitles, newTitle]})
      })
    })
  }

  console.log(bestSellers)
  
  const renderBestSellerList = () => {
    getBestSellerTitles()
    // console.log(titles)
    return (
      titles.map((title, index) => {
        return ( <div key={index}> {title} </div>)
      })
    )
  }

  return (
    <div className = 'page'>
      <Container>
        <Row>
          <div className="home-intro">
            <div>Welcome to Mybrary.</div> 
            <div>Catalog your home library.</div>
          </div>
        </Row>
        {bestSellers && 
          <Row>  
            <h3>New York Times Best Sellers</h3>
            <div>{ renderBestSellerList() }</div>
          </Row>}
        {/* <Row> { renderUser() } </Row> */}
        {/* <Row className="home-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row> */}
      </Container>
    </div>
  )
}
