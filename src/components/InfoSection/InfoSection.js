import React from 'react'
import {Button } from '../ButtonElement'
import {InfoContainer, InfoWrapper, InfoRow,Column1,Column2,TextWrapper,
        Heading,Subtitle,BtnWrap, Img, ImgWrap} from './InfoElements'

const InfoSection = ({imgStart, headline, img, alt,buttonLabel, description, lightBg, id, to}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Heading>{headline}</Heading>
                            <Subtitle> {description}</Subtitle>
                            <BtnWrap>
                                <Button to={to} smooth={true} duration={400} offset={-50}>{buttonLabel}</Button>
                            </BtnWrap>
                            {/* <Social>wwwwwwwwwww</Social> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
