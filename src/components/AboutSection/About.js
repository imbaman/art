import React from 'react'
import img1 from '../../images/about2.png'
import {AboutContainer, TextWrapper, Heading, Subtitle, Text, ImgWrap, Img} from './AboutElements'

const About = () => {
    return (
        <AboutContainer id="about">
            <TextWrapper>
                <Heading>About Us</Heading>
                <Subtitle>Lorem ipsum dolor sit amet consectetur offdiciis?</Subtitle>
                <Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae, temporibus quos quisquam voluptatibus tempora esse ex, ipsam ab nam velit praesentium nostrum, possimus tenetur reprehenderit neque vero? Cupiditate commodi delectus accusamus animi, expedita suscipit qui eos temporibus odit dignissimos laudantium porro, nemo optio beatae. Amet asperiores, dolore eum facere, in exercitationem porro, quae expedita magni perferendis quasi nihil. Eos labore quod itaque nisi eum obcaecati incidunt doloribus quae vitae nesciunt eius hic perspiciatis reprehenderit cupiditate amet iusto dolor, vero quibusdam blanditiis. Ipsam deleniti aliquam obcaecati et saepe sint consequuntur sequi hic, a soluta assumenda. Nobis optio natus quia magni.
                </Text>
                <ImgWrap>
                    <Img src={img1}></Img>
                </ImgWrap>
            </TextWrapper>
        </AboutContainer>
    )
}

export default About
