import React from "react";
import {Link} from "react-router-dom";
import Home from "./Home";

const Navbar =()=>{
 
    return(
     <>
      {/* <Home/> */}
     <nav class="navbar  navbar-expand-sm fixed-top ">
  <div class="container-fluid">
    <Link class="navbar-brand " to="/">Aman...</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fs-1" id="offcanvasNavbarLabel">Aman</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 gap-5">
          <li class="nav-item">
            <Link class="nav-link active " aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
           <li class="nav-item">
            <Link class="nav-link" to="/skills">Skills</Link>
          </li>
           <li class="nav-item">
            <Link class="nav-link" to="/projects">Projects</Link>
          </li>
           <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          </ul>
      </div>
    </div>
  </div>
  </nav>
  

     
{/* <div className="nav p-5">
    <Link  to="/about"><img src="https://cdn-icons-png.flaticon.com/128/3665/3665909.png" alt="logo" style={{height:"100px"}}/></Link>
   
        <ul  className="flex  ms-230 gap-20" >
          <li>
          <Link  to="/"  style={{textDecoration:"none"}}>Home</Link>
          </li>
          <li >
          <Link to="/skills"  style={{textDecoration:"none"}}>Skills</Link>
          </li>
          <li >
          <Link to="/projects"  style={{textDecoration:"none"}}>Projects</Link>
          </li>
          <li >
          <Link  to="/contact"  style={{textDecoration:"none"}}>Contact</Link>
          </li>
        </ul>
        </div> */}
       
    
   </> 
 )
}
export default Navbar;