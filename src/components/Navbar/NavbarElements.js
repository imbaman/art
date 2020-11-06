import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background:${({scrollNav}) => (scrollNav ? '#fff5d2' : '#fff5d7')};
    box-shadow:${({scrollNav}) => (scrollNav ?  '0 1px 1px -1px black' : 'none')} ;
    height:${({scrollNav}) => (scrollNav ?  '50px' : '80px')} ;
    transition:height .2s ease-in-out;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    position:sticky;
    top:0;
    z-index:10;
    opacity:0.96;
    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:70px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`

export const NavLogo = styled(LinkScroll)`
color:#734046;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:768px){
    color:#734046;
    display:flex;
    align-items:center;
    font-size:1.5rem;
    cursor:pointer;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;


@media screen and (max-width:768px){
    display:none;
}
`

export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkScroll)`
 color:#734046;
 display:flex;
 align-items:center;
 text-decoration:none;
 padding: 0 1rem;
 height:100%;
 cursor: pointer;

 &.active{
     border-bottom:3px solid #fff5d7;
 }
 &:hover{
    color:coral;
    transition:.2s ease-in-out;   
}
`
export const NavBtn = styled.nav`
display:flex;
align-items:center;
color:#734046;
@media screen and (max-width:768px){
    display:none;
}
`

export const NavBtnLink = styled(LinkRouter)`
border-radius:5px;
background: #ff5e6c;
white-space:nowrap;
padding:10px 22px;
color:#734046;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all .2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all .2s ease-in-out;
    background: #ffaaab;
    color:white;
}

`