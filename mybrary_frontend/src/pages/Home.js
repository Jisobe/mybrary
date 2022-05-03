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
  
  const renderBestSellerList = () => {
    let results = bestSellers['results']
    let list = results.lists

    return (list.map((item) => {
      let book = item.books
      return (book.map((bookItem) => {
        return (
          <Carousel.Item>
            <img
              className=""
              src={bookItem.book_image}
              alt="Book cover"
            />
          </Carousel.Item>
        )
      }))
    }))
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
          <div> 
            <Row><h3>New York Times Best Sellers</h3></Row>
              <Carousel>
                { renderBestSellerList() }
              </Carousel>
          </div>
        }
      </Container>
    </div>
  )
}
