import React from 'react'
import ClassBox from './ClassBox'

type Props = {}

const OurClasses = (props: Props) => {
  return (
    <div>

        <div className='text-center'>
            <p className='text-2xl'>OUR CLASSES</p>
            <ClassBox/>

        </div>
    </div>
  )
}

export default OurClasses