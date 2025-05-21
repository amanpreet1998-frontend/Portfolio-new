import React from 'react';
import {Link} from "react-router-dom";
import './styles/About.css';

const About=()=>{
    return(
      <>
       <div className='about'>
<div className='about-1'>
<div data-aos="zoom-out-up" className="card about-card" >
  <h1 className='about-h1'>About me...</h1>
  <div  className="card-body mt-5" >
    <h1 className="card-title">Hi,
I'm Amanpreet Kaur<br/> Front End Developer</h1><br/>
    <p className="card-text mt-4"><i>As a passionate frontend developer with a keen eye for detail,
 I bring creativity and innovation to building visually stunning and user-friendly web applications.
With a solid foundation in HTML, CSS, JavaScript,  and React,
 I'm dedicated to crafting seamless digital experiences that captivate and engage users.</i>
</p>
<br/>
<br/>
    <a href="./assets/Resume Amanpreet kaur 2.pdf" className="download-btn">Download Resume</a>
  </div>
</div>
</div>
<br/>
<br/>
  <center><h1 className='edu-h1'>Education</h1></center>
  <div className='timeline'>
    <div  className='container left-container'>
      <div  data-aos="fade-right" className='text-box'>
        <h2>Frontend Development course</h2>
        <small>May,2025</small>
        <p>From : Excellence Technology Institute,Sec-34-A,Chandigarh</p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className='container right-container'>
      <div data-aos="fade-left" className='text-box'>
        <h2>Masters</h2>
        <small>Dec,2020</small>
        <p>M.Sc.(Mathematics)<br/>From : DAV college,Sector-10,Chandigarh
        </p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className='container left-container'>
      <div data-aos="fade-right" className='text-box'>
        <h2>Graduation</h2>
        <small>July,2018</small>
        <p>B.Sc.(Non-med)<br/>From : Post Graduate Govt. College,sector-11,chandigarh </p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className='container right-container'>
      <div data-aos="fade-left" className='text-box'>
        <h2>12th</h2>
        <small>May,2015</small>
        <p>CBSE Board</p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
  </div>




        {/* <div className='about-2'>
<h1>Hi,
I'm Amanpreet Kaur
WebDeveloper</h1><br/>
<h5>Front End Developer / JavaScript Fan / Bootstrap Expert</h5>

 <div className='div4'> 
  <p className='pt-5'><i>
As a passionate frontend developer with a keen eye for detail,
 I bring creativity and innovation<br/> to building visually stunning and user-friendly web applications.
With a solid foundation in HTML,<br/> CSS, JavaScript,  and React,
 I'm dedicated to crafting seamless digital experiences that captivate and engage users.


</i></p><br/>

</div>

</div>
</div> 
<div className=' edu'>
<center><h1><b>Education</b></h1><br/>
<h5>I have completed my graduation with BSc Non-Medical and post-graduation in MSc Maths.</h5><br/>
<h5>Currently, I have done a frontend development course and I'm excited to start my career in web development.</h5><br/><br/><br/><br/>
<img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?ga=GA1.1.316581448.1737552035&semt=ais_hybrid"></img>

</center> */}
</div>
</>
    )
}

export default About;