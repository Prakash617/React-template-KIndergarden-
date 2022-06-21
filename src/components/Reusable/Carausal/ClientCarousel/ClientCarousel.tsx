import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {}

const ClientCarousel = (props: Props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>



            <Container className='my-3'>
            <Carousel responsive={responsive}>
                <div> <img src="/Image/CC/cc1.png" alt="" /> </div>
                <div><img src="/Image/CC/cc2.png" alt="" /> </div>
                <div><img src="/Image/CC/cc3.png" alt="" /> </div>
                <div><img src="/Image/CC/cc2.png" alt="" /> </div>
                <div><img src="/Image/CC/cc4.png" alt="" /> </div>
                <div><img src="/Image/CC/cc2.png" alt="" /> </div>
            </Carousel>
            </Container>
        </div>
    )
}

export default ClientCarousel