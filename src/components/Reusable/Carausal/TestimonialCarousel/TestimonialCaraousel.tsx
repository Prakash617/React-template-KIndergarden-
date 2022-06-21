import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from './TestimonialCard';

type Props = {}

const TestimonialCaraousel = (props: Props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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

            <Container className='px-[12rem]'>

                <Carousel responsive={responsive}>
                    <div> <TestimonialCard/> </div>
                    <div> <TestimonialCard/> </div>
                    <div> <TestimonialCard/> </div>
                    <div> <TestimonialCard/> </div>
                    <div> <TestimonialCard/> </div>
                    <div> <TestimonialCard/> </div>
                    
                    {/* <div><img src="/Image/CC/cc2.png" alt="" /> </div> */}
                    
                </Carousel>

            </Container>
        </div>
    )
}

export default TestimonialCaraousel