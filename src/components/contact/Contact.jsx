import React, {useRef} from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fd4s51s', 'template_oorr4k4', form.current, 'ktmt-xBGQoYX9uaXC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>filippachucki2000@icloud.com</h5>
            <a href='mailto:filippachucki2000@icloud.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Filip Pachucki</h5>
            <a href="https://m.me/100007308649333" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+447885990268</h5>
            <a href="https://api.whatsapp.com/send?phone=447885990268" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact