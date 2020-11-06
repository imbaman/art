import React, {useState, useEffect} from 'react'
import { FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
// import {animatedScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () =>{
        if(window.scrollY>= 150){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    }, [])

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="home"
                smooth={true} duration={200} 
                >logo</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={400} offset={-30} >About</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to="about" smooth={true} duration={400} offset={-30} >Pricing</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to="faq" smooth={true} duration={400} offset={-30}>Faq</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to="services" smooth={true} duration={400} offset={-30} >Services</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
