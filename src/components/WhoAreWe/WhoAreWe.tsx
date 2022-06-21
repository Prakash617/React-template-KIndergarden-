import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Btn from '../Reusable/Button/Btn'
import Button1 from '../Reusable/Button/Button1'
import ProgressBarC from '../Reusable/ProgressBar/ProgressBarC'

type Props = {}

const WhoAreWe = (props: Props) => {
    return (
        <>
            <div className='bg-black'>
                <Container>
                    <div className='flex mt-10'>
                        <div className='flex-col w-1/2 p-10'>
                            <p className='text-white text-2xl text-bold'>WHO WE ARE</p>
                            <p className='text-gray-400 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem Ipsum available, but the majority have suffered alteration in some form. Vivamus adipiscing lobortis sagittis. Nullam tempus mauris dolor, ac malesuada arcu. Praesent dolor quam, tincidunt in sollicitudin sit amet, volutpat sed velit. Nullam non neque ipsum.</p>
                            <Button1 Ibg={''} Fbg={'hover:bg-gray-400'} IborderC={'border-gray-400'} FborderC={'border-gray-400'} ItextC={'text-gray-400'} FtextC={'text-white'} text={'PURCHASE NOW'}/>
                        </div>
                        <div className='w-1/2 p-10 space-y-4'>
                            <div className='space-y-2'>

                            <ProgressBarC text={'Print Design - 50%'} percentage={50} variant={'success'}/>
                            <ProgressBarC text={'Print Design - 70%'} percentage={70} variant={'warning'}/>
                            <ProgressBarC text={'Print Design - 35%'} percentage={35} variant={'danger'}/>
                            <ProgressBarC text={'Print Design - 40%'} percentage={40} variant={'primary'}/>
                            <ProgressBarC text={'Print Design - 80%'} percentage={80} variant={'text-info'}/>
                            <ProgressBarC text={'Print Design - 60%'} percentage={60} variant={'text-secondary'}/>
                            </div>
                           
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default WhoAreWe