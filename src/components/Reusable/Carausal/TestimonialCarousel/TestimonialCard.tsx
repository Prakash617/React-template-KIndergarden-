import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {}

const TestimonialCard = (props: Props) => {


    return (
        <>
            <div className='flex flex-col justify-end w-full my-8'>

                <div className='flex space-x-2'>
                    <div className='ml-3'>
                        <img src="/Image/person/p1.jpg" className='rounded-full' alt="" />
                    </div>
                    <div className='border-[1px] border-gray-400 w-[35.25rem] p-2'>
                        <p className='text-gray text-sm font-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>
                    </div>
                </div>
                <div className='flex flex-row justify-end w-full'>
                    <div className='space-y-0'>
                        <p className='text-lg text-orange-500 mb-0'>John Doe</p>
                        <p className='text-sm text-gray-400 italic'>Cambridge Telcecom</p>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default TestimonialCard