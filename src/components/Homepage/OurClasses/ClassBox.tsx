import React from 'react'
import { Tab } from '@headlessui/react'
import BoxContainer from './ClassBoxContain/BoxContainer'
import LargeCard from './Card/LargeCard'
import OurClassCarousel from '../../Reusable/Carausal/OurClass carousel/OurClassCarousel'

type Props = {}

const ClassBox = (props: Props) => {
    let feature = ['dance', 'music', 'guitar']
    let button = { name: "Free", color: 'bg-green-500' }
    return (
        <div>
            <Tab.Group>
                <Tab.List className={'space-x-4'}>

                    <Tab className={'p-2 px-3 border-2 rounded-md border-orange-500 bg-orange-500 hover:bg-white '}> All</Tab>
                    <Tab className={'p-2 px-3 border-2 rounded-md border-cyan-500  bg-cyan-500 hover:bg-white '}>Onsite</Tab>
                    <Tab className={'p-2 px-3 border-2 rounded-md border-purple-500 bg-purple-800 hover:bg-white '}>Online</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel >
                        <OurClassCarousel >
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={'Add'} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Registration Closed"} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Add"} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Add"} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Add"} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Add"} />

                        </OurClassCarousel>
                    </Tab.Panel>
                    <Tab.Panel>
                        {/* <BoxContainer>
                        <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Registration Closed"} />

                        <LargeCard photo={'/Image/Card/music-class-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={'Add'} />

                            
                    </BoxContainer> */}
                        <OurClassCarousel>

                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={'Add'} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Registration Closed"} />

                        </OurClassCarousel>
                    </Tab.Panel>
                    <Tab.Panel>
                        <OurClassCarousel>
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={'Add'} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Registration Closed"} />
                            <LargeCard photo={'/Image/Card/learning-to-read-420x295.jpg'} title={'Music Class'} subtitle={'Aliquam condimentum dolor accumsan'} feature_list={feature} button={"Add"} />

                        </OurClassCarousel>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ClassBox