import React from 'react'
// import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksContainer2,FooterHeading,FooterP,FooterI} from '../Footer/FooterElements'
import {TiSocialFacebook, TiSocialTwitter, TiSocialInstagram} from 'react-icons/ti'

const Footer = () => {

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };

    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterHeading>Contact Us</FooterHeading>
                   <FooterP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, vero?</FooterP>
                   <FooterP>999 999 999</FooterP>
                   <FooterP>mail@gmail.com</FooterP>
                   <FooterLinksContainer2>   
                    <FooterI href="https://www.facebook.com" > 
                    <TiSocialFacebook className="icon"  /></FooterI>
                    <FooterI href="https://www.instagram.com"> 
                    <TiSocialInstagram className="icon"  /></FooterI>   
                    <FooterI href="https://www.twitter.com" > 
                    <TiSocialTwitter className="icon"  /></FooterI>
                    </FooterLinksContainer2>
                    </FooterLinksContainer>
           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
