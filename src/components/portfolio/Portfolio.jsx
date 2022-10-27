import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""></img>
          </div>
            <h3>Instagram Lite</h3>
            <h5>Technology: React, HTML, CSS, JavaScript</h5>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/filippachucki/instagram-clone' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='https://instagram-clone-e61bd.web.app/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a> 
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""></img>
          </div>
            <h3>Vonage API</h3>
            <h5>Technology: HTML, CSS, API, WebRTC</h5>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            
            <a href='https:://.com' className='btn btn-primary' target='_blank'> Live Demo</a> 
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=""></img>
          </div>
            <h3>Bulky Book MVC</h3>
            <h5>Technology: C#, ASP.NET, HTML, CSS, SQL</h5>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https:://.com' className='btn btn-primary' target='_blank'> Live Demo</a> 
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio