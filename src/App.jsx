import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Cruiser from './Components/Cruiser'
import Explore from './Components/Explore'
import CrossST from './Components/CrossST '
import Cross from './Components/Cross'
import Classic from './Components/Classic'
import World from './Components/World'
import Services from './Components/Services'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Footer'



const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (  
    <div className=' '>
       <Navbar/>
       <Hero/>
       <Cruiser/>
       <Explore/>
       <CrossST/>
       <Cross/>
       <Classic/>
       <World/>
       <Services/>
       <Footer/>

    </div>
  )
}

export default App