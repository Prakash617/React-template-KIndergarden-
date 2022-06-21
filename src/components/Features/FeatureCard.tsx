import React from 'react'
import {AiFillSetting} from 'react-icons/ai'

type Props = {}

const FeatureCard = (props: Props) => {
  return (
    <>
        <div className='flex px-5'>
            {/* <div className=' bg-orange-500 border-2 h-8 w-8 p-4 flex text-black justify-center items-center  hover:text-orange-500 hover:bg-white hover:border-orange-500 ease-in duration-300 '>
                <AiFillSetting className='text-2xl '/>
            </div> */}
            <div className='  border-2 h-12 w-12 p-1 flex  justify-center items-center text-white bg-orange-500 hover:text-orange-500 hover:bg-white  hover:border-orange-500 ease-in duration-300  '>
                <AiFillSetting className=' w-8 h-8  hover:text-orange-500 '/>
            </div>
            <div className='flex-col ml-2'>
                <p className='text-2xl font-bold hover:text-orange-500 ease-in duration-300'>Lots of Features</p>
                <p className='text-sm text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus sollicitudin nunc nec rhoncus.</p>
            </div>

        </div>
    </>
  )
}

export default FeatureCard