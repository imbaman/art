import React from 'react'
import {ServicesContainer, ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
import Icon1 from '../../images/1.svg'
import Icon2 from '../../images/2.svg'
import Icon3 from '../../images/3.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Lorem ipsum.</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero id deserunt</ServicesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Lorem ipsum.</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero id deserunt</ServicesP>
        </ServicesCard>
        
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Lorem ipsum.</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero id deserunt</ServicesP>
        </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
