import React from 'react'
import { Container } from 'react-bootstrap'
import CourseCard from './CourseCard'

type Props = {}

const Courses = (props: Props) => {
    return (
        <>
        <div className='bg-gray-100  py-8 '>

        
            <Container className='flex-col md:flex md:flex-row '>
                <div className='flex-col w-full md:w-1/3 p-8'>
                    <div className='text-3xl font-extrabold mb-4'>COURSES</div>
                    <div className='text-2xl mb-4'>About Courses</div>
                    <div>
                        <p className='text-gray-500 font-thin'>Student Registration and Administration Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit, sed quia consequuntur magni res eos qui ratione voluptatem sequi nesciunt.</p>
                        <p className='text-gray-500 font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable.</p>
                    </div>
                    <button className='border-2 border-black inline-block text-center hover:bg-orange-500 hover:border-orange-500 ease-in duration-300 hover:text-white mt-[3rem]'>
                        <p className='text-sm font-bold  m-2 hover:text-white '>VIEW ALL COURSES</p>

                    </button>
 
                </div>
                <div className='w-full md:w-2/3 ml-2 grid grid-cols-2 grid-rows-4'>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </Container>
            </div>
        </>
    )
}

export default Courses