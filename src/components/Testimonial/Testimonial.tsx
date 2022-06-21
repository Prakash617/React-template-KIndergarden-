import React from 'react'
import { Container } from 'react-bootstrap'
import TestimonialCaraousel from '../Reusable/Carausal/TestimonialCarousel/TestimonialCaraousel'

type Props = {}

const Testimonial = (props: Props) => {
    return (
        <>
            <Container className='my-[8rem]' >
                <div className='flex-col'>
                    <div>
                        <h1 className='italic'>TESTIMONIAL CAROUSEL</h1>
                    </div>
                    <TestimonialCaraousel />
                    <div className='bg-orange-500 w-full p-3 mt-[11rem]'>
                        <div className='flex-col md:flex md:flex-row justify-between'>


                            <div className='flex-col '>
                                <div>
                                    <p className='text-2xl text-white text-bold'>OUR TECHNOLOGICAL SERVICES HAS BEEN IMPROVED VASTLY</p>
                                </div>
                                <div>
                                    <p className='font-light text-white'>Come Experience the real life situations of saving life</p>
                                </div>

                            </div>
                            <div >
                                <button className='border-2 border-white inline-block text-centerm mt-3 ml-2 p-2 hover:bg-white hover:border-white ease-in duration-300 hover:text-black '>
                                    PURCHASE NOW
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </Container>


        </>
    )
}

export default Testimonial