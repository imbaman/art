import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import  Navbar from '../components/Navbar/Navbar'
import InfoSection from '../components/InfoSection/InfoSection';
import Services from '../components/Services/Services'
import {homeObjOne, homeObjTwo} from '../components/InfoSection/Data'
import About from '../components/AboutSection/About'
import Footer from '../components/Footer/Footer'

 const Home = () => {
     const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
            <InfoSection {...homeObjOne}/>
            <About/>
            <Services/>
            <InfoSection {...homeObjTwo}/>
            <Footer/>
        </>
    )
}

export default Home