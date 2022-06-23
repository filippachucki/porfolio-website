import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './header.css'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://github.com/filippachucki' taget='_blank'><BsLinkedin size={35}/></a> 
        <a href='https://www.linkedin.com/in/filip-pachucki-97a4101b5/' taget='_blank'><BsGithub size={35}/></a>    
    </div>
  )
}

export default HeaderSocials