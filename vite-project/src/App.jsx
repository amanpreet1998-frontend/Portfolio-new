import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from'./Home'
import About from'./About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from './Navbar'
//import Project1 from './Project1'
//import { AnimatedBackground } from 'animated-backgrounds';



function App() {
 return (
    <>
      <HashRouter>
      <Navbar/>
        <Routes>
        
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/skills"element={<Skills/>}/>
          <Route path="/projects"element={<Projects/>}/>
          <Route path="/contact"element={<Contact/>}/>
        </Routes>
        
        
      </HashRouter>
       
    </>
  );
};

export default App
