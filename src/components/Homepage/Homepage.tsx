import React from 'react'

import Btn from '../Reusable/Button/Btn'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    FaShippingFast,
    FaFastForward
} from 'react-icons/fa';
import CarouselContainer from '../Reusable/Carausal/CarouselContainer';

import NavC from '../Navbar/NavC';
import Ourteam from './Ourteam/Ourteam';
import OurClasses from './OurClasses/OurClasses';
import OurStaitic from './Our Statistic/OurStaitic';
import NiceCard from '../CardContainer/NiceCard';
import { Container } from 'react-bootstrap';
import CardContainer from '../CardContainer/CardContainer';
import Courses from '../Courses/Courses';
import Features from '../Features/Features';
import WhoAreWe from '../WhoAreWe/WhoAreWe';
import Footer from '../Footer/Footer';
import ClientCarousel from '../Reusable/Carausal/ClientCarousel/ClientCarousel';
import TestimonialCaraousel from '../Reusable/Carausal/TestimonialCarousel/TestimonialCaraousel';
import TestimonialCard from '../Reusable/Carausal/TestimonialCarousel/TestimonialCard';
import Testimonial from '../Testimonial/Testimonial';
import TestimonialSlickCaraousel from '../Reusable/Carausal/TestimonialCarousel/TestimonialSlickCaraousel';
import SimpleSlider from '../Reusable/Carausal/TestimonialCarousel/TestimonialSlickCaraousel';
import OurClassCarousel from '../Reusable/Carausal/OurClass carousel/OurClassCarousel';

type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
            <div className='relative w-full'>

                <div className='z'>
                    <CarouselContainer />

                </div>
                <div className='absolute top-1 z-10 w-full'>

                    <NavC />
                </div>

            </div>
            <div>
                <CardContainer />
                <Ourteam/>
                <OurClasses/>
                <OurStaitic/>
                <Courses/>
                <Features/>
                <WhoAreWe/>
                <Testimonial/>
               
               
                <ClientCarousel/>
                <Footer/>
            </div>


            <div>

            </div>


        </>
    )
}

export default Homepage