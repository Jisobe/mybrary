import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Home.css';
import MybraryApi from '../api/MybraryApi';
import { useState, useEffect } from 'react';

export default function Home() {

  const [libraries, setLibraries] = useState([])

  useEffect(() => {
    loadLibraries()
  }, [])

  const loadLibraries = async () => {
    const data = await MybraryApi.getAllLibraries()
    setLibraries(data ? data : [])
  }

  const renderLibraries = () => {
    return libraries.map((libraries, index) => {
      return <p key={index}>{ libraries.name }</p>
    })
  }

  return (
    <div className = 'page'>
      <Container>
        <Row>
          <div className="home-intro">Welcome to Mybrary. Catelog your home library.</div>
        </Row>
        <Row> { renderLibraries() } </Row>
        <Row className="home-carousel">
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
        </Row>
      </Container>
    </div>
  )
}
