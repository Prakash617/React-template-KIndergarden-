import React from 'react'
import { Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import BoxContainer from '../ClassBoxContain/BoxContainer'


type Props = {
  photo:any,
  title:string,
  subtitle:string,
  feature_list:any,
  button:any
}

const LargeCard = (props: Props) => {
  const CardDetail = [
    {"all":{
      date:"this is date",
      title:'this is title',
      subtitle:'this is sub',
      free:{
        name:"free",
        free:true
      }

    }},
    {"onsite":{name:"prakash"}},
    {"online":{name:"prakash"}},
    
  ]
  return (
    <div>


      <div className='w-[27rem] h-auto   my-4 border-2 hover:border-orange-500 '>
        <div className='w-full text-center  '>
          <div className='w-full'>

          <img src={props.photo} className='w-full' alt="" />
          </div>
          <div className='p-2'>
          <div >

            <p className='text-left my-2 text-2xl'>{props.title}</p>
          </div>
          <div className='flex'>
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
          </div>
          <div>
            <p className='text-left text-sm my-2'>{props.subtitle}</p>
          </div>
          <div className='flex my-2'>
            <div className='p-2 rounded-md bg-blue-500'>{props.button}</div>
            <div className='p-2 rounded-md bg-gray-400 ml-1'>3 Courses</div>
          </div>

          <div>
            
            <ul className='text-left list-disc'>
                {props.feature_list.map((feature:any)=><li className='text-orange-500'>{feature}</li>)}
              
           

            </ul>
          </div>
          <div className='p-2 rounded-md border-2 border-black inline-block mb-4  '>View Class</div>


        </div>
        </div>


      </div>


    </div>
  )
}

export default LargeCard