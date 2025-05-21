import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/Contact.css';

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return(
    <>
    <div className='contact'>
            <img data-aos="zoom-in-up" className='contact-container-img'   src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?ga=GA1.1.316581448.1737552035&semt=ais_hybrid&w=740" alt="Cartoon of girl with laptop"></img>
<div className='contact-container'>
    <h2>Let's connect<br/>&<br/> explore how we can work together.</h2><br/>
    <h4>Pop me an email at amandhaliwal1693@gmail.com<br/>
or give me a shout on social media.</h4>
<div className='social-icons-contact'>
<Link to="https://instagram.com/amandhaliwal____"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670274.png' alt="Instagram icon"/></Link>
<Link to='https://profile.indeed.com/p/amanpreetk-hkrv8zn'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt="Indeed icon"/></Link>
<Link to='https://github.com/amanpreet1998-frontend'><img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt="GitHub icon"/></Link>
<Link to='tel:9877317153'><img src='https://cdn-icons-png.flaticon.com/128/455/455705.png' alt="Phone icon"/></Link>
<Link to='mailto:amandhaliwal1693@gmail.com'><img src='https://cdn-icons-png.flaticon.com/128/3178/3178158.png' alt="Email icon"/></Link>
</div>
          <h1 className='contact-container-h1'>Contact me ...</h1> 
               
            </div>
    </div>
    {/* <div className='contact'>
            <div className='contact-container mt-20'>
<img width="500" height="500"  src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148903318.jpg?ga=GA1.1.316581448.1737552035&semt=ais_hybrid" style={{borderRadius:"1000px",marginTop:"-60px"}}></img>
</div>
<div className='contact2'>
<h1 style={{color:"black",marginTop:"100px",fontSize:"80px"}}>Contact me...</h1><br/><br/>
<h5 style={{color:"black"}} >Let's connect and explore how we can work together.
</h5><br/><br/>
<div className='contact3'>
<Link to=""><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" style={{height:"100px",width:"100px"}} /></Link>    
 
 
 <Link to="https://instagram.com/amandhaliwal____"><img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"style={{height:"100px",width:"100px",marginLeft:"100px"}}/></Link>    
 
 
 <Link to="mailto:amandhaliwal1693@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/732/732200.png"style={{height:"100px",width:"100px",marginLeft:"100px"}}/></Link>    
 
 
 <Link to='tel:9877317153'><img src="https://cdn-icons-png.flaticon.com/128/724/724664.png"style={{height:"100px",width:"100px",marginLeft:"100px"}}/></Link>    
 </div>
 
</div>
</div> */}
    </>
    )
}

export default Contact;