import React, { Children } from 'react'
import { Container } from 'react-bootstrap'
import LargeCard from '../Card/LargeCard'

type Props = {
   children:any
}

const BoxContainer = (props: Props) => {
  return (
    <>
    <Container className='grid grid-cols-3 gap-x-12 p-2'>
        {props.children}
    </Container>

    </>
  )
}

export default BoxContainer