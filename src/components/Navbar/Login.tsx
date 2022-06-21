import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
type Props = {}

const Login = (props: Props) => {
  return (
    <>
      <div className='flex hover:text-orange-600 hover:border-orange-600 text-xl'>

        <div className='border-2 border-orange-600 p-2 mr-2 pb-2 hover:text-orange-600 hover:border-orange-600 text-xl inline-block '>

          <BsFillPersonFill className='' />
        </div>
        <div>
          <span className='hover:text-orange-600 text-xl'>Login | Register </span> <span className='mx-2 hover:text-orange-600 text-xl'> </span>
        </div>
        <div>
          <span className='hover:text-orange-600 text-xl'></span>
        </div>
      </div>

    </>
  )
}

export default Login