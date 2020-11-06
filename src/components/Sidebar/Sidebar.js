import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarRoute, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} >
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
             <SidebarMenu>
            <SidebarLink to="home"onClick={toggle}>About</SidebarLink>
            <SidebarLink to="pricing"onClick={toggle}>Pricing</SidebarLink>
            <SidebarLink to="faq"onClick={toggle}>Faq</SidebarLink>
            <SidebarLink to="services"onClick={toggle}>Services</SidebarLink>
             </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to='/'>Sing In</SidebarRoute>
           </SideBtnWrap>
           </SidebarWrapper>
           
       </SidebarContainer>
    )
}

export default Sidebar