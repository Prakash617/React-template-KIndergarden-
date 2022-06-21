import React from 'react'

type Props = {}

const CourseCard = (props: Props) => {
    return (
        <>
            <div className='mx-2'>
                <div className='flex m-2'>
                    <div>
                        <img src="/Image/c1.jpg" className='h-[5rem] w-[5rem]' alt="" />
                    </div>
                    <div className='flex-col ml-3 '>
                        <p className='mb-3 hover:text-orange-500 text-lg  ease-in duration-300'>Glitch Manor</p>
                        <p className='text-orange-500'>Free</p>
                    </div>

                </div>
                <hr />
            </div>

        </>
    )
}

export default CourseCard