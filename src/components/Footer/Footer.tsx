import React from 'react'
import { Container } from 'react-bootstrap'
import { FaDiscord, FaFacebook, FaFax, FaGoogle, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdMail } from 'react-icons/md'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="border-t-2 border-gray-400 pt-5 mt-[6rem] relative bg-[url('https://lmstheme.wpengine.com/kids/wp-content/uploads/sites/6/2016/09/footer-bg.jpg')] ">

      <div className='absolute top-[-3rem] bg-white left-1/2'>
        <img src="https://lmstheme.wpengine.com/kids/wp-content/themes/lms/images/footer-logo.png" className='rounded-full' alt="" />
      </div>
      <div>

        <Container>
          <div className='grid grid-cols-4 gap-x-1'>
            <div className='flex-col py-10 px-2'>
              <div>
                <p className='text-lg'>About us</p>
              </div>
              <div>
                <p className='text-sm font-light text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lobortis diam.</p>
              </div>
              <div>
                <p className='text-sm font-light text-gray-500'>Duis tellus enim, vestibulum eget varius id, vulputate et mi. Nullam feugiat, diam quis interdum varius</p>
              </div>
              <div className='mt-[3rem]'>
                <button className='border-2 border-black inline-block text-center hover:bg-orange-500 hover:border-orange-500 ease-in duration-300 hover:text-white '>
                  <p className='text-sm font-bold  m-2 hover:text-white '>START LEARNING NOW</p>

                </button>
              </div>
            </div>

            <div className='flex-col py-8 px-2'>
              <div>
                <p className='text-lg'>Popular Course</p>
              </div>

              <span></span>

              <div>
                <p className='hover:text-orange-500'>Glitch Manor</p>
                <p className='text-orange-500'>Free</p>
              </div>
              <hr />
              <div>
                <p className='hover:text-orange-500'>Glitch Manor</p>
                <p className='text-orange-500'>Free</p>
              </div>
              <hr />
              <div>
                <p className='hover:text-orange-500'>Glitch Manor</p>
                <p className='text-orange-500'>Free</p>
              </div>

            </div>

            {/* Quick Links */}

            <div className='flex-col py-8 px-2'>
              <div>
                <p className='text-lg'>Quick Links</p>
              </div>
              <div className='flex-col'>
                <div className='mb-1'> <MdKeyboardArrowRight className='inline-block' />  <span className='text-gray-400  hover:text-orange-500 ease-in duration-300'>All Courses</span></div>
                <hr />
                <div className='mb-1'> <MdKeyboardArrowRight className='inline-block' />  <span className='text-gray-400 hover:text-orange-500 ease-in duration-300 '>Summer Sessions</span></div>
                <hr />
                <div className='mb-1'> <MdKeyboardArrowRight className='inline-block' />  <span className='text-gray-400 hover:text-orange-500 ease-in duration-300 '>Professional Courses</span></div>
                <hr />
                <div className='mb-1'> <MdKeyboardArrowRight className='inline-block' />  <span className='text-gray-400 hover:text-orange-500 ease-in duration-300 '>Privacy Policy</span></div>
                <hr />
                <div className='mb-1'> <MdKeyboardArrowRight className='inline-block' />  <span className='text-gray-400 hover:text-orange-500 ease-in duration-300 '>Terms of Use</span></div>

              </div>
            </div>


            {/* Contact us */}

            <div className='flex-col py-8 px-2'>
              <div>
                <p className='text-lg'>Contact Us </p>
              </div>
              <div className='flex-col'>
                <div className='flex '>
                  <div>
                    <FaLocationArrow className='inline-block ' />
                  </div>
                  <div className='mb-1 ml-2 pr-20'>

                    <span className='text-gray-400  hover:text-orange-500 ease-in duration-300 '>
                      The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                    </span>
                  </div>
                </div>
                <hr className='mt-[1.3rem]'/>
                <div className='flex'>
                  <div>
                    <FaPhoneAlt className='inline-block ' />
                  </div>
                  <div className='mb-1 ml-2'>

                    <span className='text-gray-400  hover:text-orange-500 ease-in duration-300'>
                    +11 (2) 7654 2233
                    </span>
                  </div>
                </div>
                <hr />
                <div className='flex'>
                  <div>
                    <FaFax className='inline-block ' />
                  </div>
                  <div className='mb-1 ml-2'>

                    <span className='text-gray-400  hover:text-orange-500 ease-in duration-300'>
                    +11 (5) 7654 2244
                    </span>
                  </div>
                </div>
                <hr />
                <div className='flex'>
                  <div>
                    <MdMail className='inline-block ' />
                  </div>
                  <div className='mb-1 ml-2'>

                    <span className='text-gray-400  hover:text-orange-500 ease-in duration-300'>
                      ims@gmail.com
                    </span>
                  </div>
                </div>
              


              </div>
            </div>




          </div>


        </Container>
      </div>


      <div className='bg-orange-500 w-full h-[4rem] flex items-center'>
        <Container className='' >
          <div className='flex justify-between '>
            <div className='my-auto'>
              Copyright © 2014 LMS Theme All Rights Reserved | <span className='underline'> Design Themes </span>
            </div>
            <div className='flex space-x-4 '>
              <FaDiscord className='text-white text-lg' />
              <FaFacebook className='text-white text-lg' />
              <FaGoogle className='text-white text-lg' />
            </div>
          </div>

        </Container>

      </div>

    </div>
  )
}

export default Footer