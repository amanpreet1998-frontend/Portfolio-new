import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/Skills.css';

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return(
    <div className='skill'>
      <center>
        <div className='skill-desc'>
          <div className='text-container-skill'>
            {/* <h5>A problem is a chance for you to do your best.</h5><br/> */}
            <div data-aos="zoom-in" >
              <h1>Skills</h1>
            </div>
            <p>The main area of expertise is front end development.</p><br/>
            <p>HTML, CSS, JS, building small and medium web applications with React,custom<br/>  plugins, features, animations, and coding interactive layouts.
            </p>
          </div>
        </div>
        <div className='skill1'>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript logo"/>
              <h5>Java script</h5>
            </div>
          </div>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <img src="https://cdn-icons-png.flaticon.com/128/10303/10303368.png" alt="React logo"/> 
              <h5>React</h5>
            </div>
          </div>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="HTML5 logo"/>
              <h5>HTML5</h5> 
            </div>
          </div>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">    
              <img src="https://cdn-icons-png.flaticon.com/128/16020/16020753.png" alt="CSS3 logo"/> 
              <h5>CSS3</h5>
            </div>
          </div>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"> 
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="Bootstrap logo"/>  
              <h5>Bootstrap</h5>  
            </div>
          </div>
        </div>
        <div className='skill2'>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"> 
              <img src="https://cdn-icons-png.flaticon.com/128/15713/15713436.png" alt="VS Code logo"/> 
              <h5>VS Code</h5>
            </div>
          </div>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"> 
              <img src="https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" alt="Tailwind logo"/> 
              <h5>Tailwind</h5>
            </div>
          </div>
          <div className='col-2'>
            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"> 
              <img src="https://img.icons8.com/?size=160&id=ROMfFZ1tMhpk&format=png" alt="Firebase logo"/> 
              <h5>Firebase</h5>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Skills;
