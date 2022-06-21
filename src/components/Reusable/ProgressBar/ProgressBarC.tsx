import React from 'react'
import { ProgressBar } from 'react-bootstrap'

type Props = {
  text: string
  percentage: number
  variant:string
}

const ProgressBarC = (props: Props) => {
  return (
    <div>
      <p className='mb-0 text-white'>{props.text}</p>
      <ProgressBar animated now={props.percentage} variant={props.variant} />

    </div>
  )
}

export default ProgressBarC