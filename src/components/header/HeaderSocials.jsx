import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './header.css'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://github.com/filippachucki' target="_blank" rel="noopener noreferrer"><BsLinkedin size={35}/></a> 
        <a href='https://www.linkedin.com/in/filip-pachucki-97a4101b5/' target="_blank" rel="noopener noreferrer"><BsGithub size={35}/></a>    
    </div>
  )
}

export default HeaderSocials