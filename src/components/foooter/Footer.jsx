import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Filip Pachucki</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100007308649333' target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
        <a href='https://www.instagram.com/filippachuckii/?hl=en' target="_blank" rel="noopener noreferrer"><GrInstagram/></a>        
      </div>

      <div className='footer__copyright'>
        <small>&copy; Filip Pachucki. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer