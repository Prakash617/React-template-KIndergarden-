import React from 'react'
import { Carousel } from 'react-bootstrap';


type Props = {}

const CarouselContainer = (props: Props) => {
  
  return (
    <>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-full h-[50rem] object-cover"
      src="Image/c1.jpg"
      
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-full h-[50rem] object-cover"
      src="Image/c2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-full h-[50rem] object-cover"
      src="Image/c3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  
  </Carousel.Item> 
</Carousel>

    </>
  )
}

export default CarouselContainer