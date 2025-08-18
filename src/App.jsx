import React from 'react'
import {BrowserRouter ,HashRouter}from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
     
    
  )
}

export default App
