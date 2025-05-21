import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/Projects.css';

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return(
    <>
      <div className='project'>
        <div className='project-title'>
          <center>
            <h1 className='p-5'>Projects</h1>
          </center>
        </div>
        <div className='project-container'>
          <div className='project-container-1'>
            <img 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" 
              className='project1' 
              src={project1} 
              alt='Urban Food project screenshot'
            />
            <h2 className='desc-1'>Urban Food - food ordering website</h2>
          </div>
          <div className='project-container-1'>
            <img 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" 
              className='project2' 
              src={project2} 
              alt='Portfolio project screenshot'
            />
            <h2 className='desc-2'>Portfolio</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;