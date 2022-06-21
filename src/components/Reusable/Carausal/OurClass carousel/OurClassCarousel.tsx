import React, { Children } from 'react'
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LargeCard from '../../../Homepage/OurClasses/Card/LargeCard';

type Props = {
children:any
}

const OurClassCarousel = (props: Props) => {
    let feature = ['dance', 'music', 'guitar']

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <div className='w-4/5 mx-auto'>
            <Carousel responsive={responsive} >

                
            {props.children}
            </Carousel>
        </div>
    )
}

export default OurClassCarousel