import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import img1 from './assets/image.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/Home.css'
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

const Home=()=>{
  useEffect(() => {
    Aos.init();
  }, []);

    return(
       <>
       

  <div class="home flex"> 
    <div class="home-col  mt-2">
      <div className='social-icons-home'>
<Link to="https://instagram.com/amandhaliwal____"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670274.png' alt="Instagram icon"/></Link>
<Link to='https://profile.indeed.com/p/amanpreetk-hkrv8zn'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt="Indeed icon"/></Link>
<Link to='https://github.com/amanpreet1998-frontend'><img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt="GitHub icon"/></Link>
<Link to='tel:9877317153'><img src='https://cdn-icons-png.flaticon.com/128/455/455705.png' alt="Phone icon"/></Link>
<Link to='mailto:amandhaliwal1693@gmail.com'><img src='https://cdn-icons-png.flaticon.com/128/3178/3178158.png' alt="Email icon"/></Link>
</div>
      <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"className='home-img' src='https://img.freepik.com/premium-vector/vector-illustration-programmer-flat-design-style_844724-3931.jpg?ga=GA1.1.316581448.1737552035&semt=ais_hybrid&w=740' alt='Programmer illustration'/>

    </div>
    <div class="homee-col mt-2 ">
      <br/>
      <h3 className='home-h3'>Hii , I'm Amanpreet Kaur</h3>
      <h1 className='home-h1'>Frontend Developer</h1>
      <p className='home-p satisfy-regular'>Resolving design problems, building smart user interfaces<br/> and useful interactions,
     developing rich websites<br/> and seamless web experiences.</p>
     <Link to='/contact'><button data-aos="zoom-in-up" className='home-btn'>Contact</button></Link>
    </div>
    
   </div>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>

      
       
       
       
       
       
       
       
      
</> 

//         <div className='bg'>
//             <div className='div'>
//             <div className='col-5'>
//                   <div data-aos="fade-right"><h1><b>Front-End<br/> Developer</b></h1> </div> 
//             <div data-aos="fade-down-right"> <p><i>Resolving design problems, building smart user interfaces<br/> and useful interactions,
//     developing rich web applications<br/> and seamless web experiences.</i></p></div>
//     <button ><Link to="/about" style={{color:"white",textDecoration:"none"}}><b>About me</b></Link></button>
//     </div>
//     <div className='col-6'>
//     <div data-aos="flip-left"
//      data-aos-easing="ease-out-cubic"
//      data-aos-duration="1000">

// <img  src="https://img.freepik.com/premium-vector/vector-illustration-programmer-flat-design-style_844724-3931.jpg?ga=GA1.1.316581448.1737552035&semt=ais_hybrid&w=740" style={{height:"600px",width:"900px",marginTop:"-150px",marginLeft:"-50px",borderRadius:"250px"}}/></div></div>
// <div className='col-1 mt-2'>
// <ul >
// <li >
// <Link to=""><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" style={{height:"50px",width:"50px"}} /></Link>    
//  </li>
//  <li className='mt-4'>
//  <Link to="https://instagram.com/amandhaliwal____"><img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"style={{height:"50px",width:"50px"}}/></Link>    
//  </li>
//  <li className='mt-4'>
//  <Link to="mailto:amandhaliwal1693@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/732/732200.png"style={{height:"50px",width:"50px"}}/></Link>    
//  </li>
//  <li className='mt-4'>
//  <Link to='tel:9877317153'><img src="https://cdn-icons-png.flaticon.com/128/724/724664.png"style={{height:"50px",width:"50px"}}/></Link>    
//  </li>
//  </ul>
//  </div>
    
//     </div>

//     <Skills/>
//     <Projects/>
//     <Contact/>
//     </div> 
     
    
)
}

export default Home;