import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { MdSchool} from 'react-icons/md'
import {GiBrain} from 'react-icons/gi'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='about IMAGE' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Bachelor's Degree in Software Engineering</h5>
              <small>At Staffordshire University</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Development Life Cycle</h5>
              <small>Experienced in Agile and Scrum</small>
            </article>
            <article className='about__card'>
              <GiBrain className='about__icon'/>
              <h5>Open Mind</h5>
              <small>Intrested in learning in set of skills</small>
            </article>
          </div>
          <p>
          Grounded and solution-oriented recent Software Engineering graduate from Staffordshire University 
with a wide variety of professional experiences. Adept at motivating self and other. Passionate 
about programming is pursuing a vacancy at graduate or junior role.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>

  )
}

export default About