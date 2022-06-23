import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {MdGroup, MdSchool} from 'react-icons/md'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container container__about'>
        <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About Image' />
        </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Bachelor's Degree in Software Engineering</h5>
              <small>At Staffordshire University</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 years experience</small>
            </article>
            <article className='about__card'>
              <MdGroup className='about__icon'/>
              <h5>Collaboration</h5>
              <small>Previous positions develope</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About