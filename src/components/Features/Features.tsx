import React from 'react'
import { Container } from 'react-bootstrap'
import FeatureCard from './FeatureCard'

type Props = {}

const Features = (props: Props) => {
    return (
        <>
            <Container className='my-4 py-6'>
                <div className='grid grid-cols-2 gap-y-6'>
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    
                   

                </div>
            </Container>
        </>
    )
}

export default Features