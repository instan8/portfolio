import React from 'react'
import {BrowserRouter }from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

function App() {
  return (
    <BrowserRouter>
    <div className="">
    
   
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
   
    <Tech/>
    
    <div>
      <Contact/>  
    
    </div>
    </div>
    </BrowserRouter>
     
    
  )
}

export default App
