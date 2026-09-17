import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { FiLinkedin, FiGithub, FiMail, FiSend } from 'react-icons/fi'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ix92ujb', 'template_pth7unh', form.current, 'WhDv4QwSlx6gyK0xH')
        .then((result) => {
            console.log(result.text);
            alert("Message sent — thanks for reaching out!")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
  };
  return (
    <section id="contactPage">
        <div id="contact">
          <span className="sectionTag mono">{'// get in touch'}</span>
          <h1 className="contactPageTitle">Let's Build Something Reliable</h1>
          <span className="contactDesc">
              Open to DevOps, SRE and MLOps roles — or just want to talk infrastructure? Send a message.
          </span>

          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name' required/>
            <input type="email" className="email" placeholder='Your Email' name='from_email' required/>
            <textarea name="message" className="msg" rows="5" placeholder='Your Message' required></textarea>
            <button type='submit' className="submitBtn">Send Message <FiSend/></button>

            <div className="links">
              <a href='https://www.linkedin.com/in/mohd-haris-ansari-4a20801b9/' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin/></a>
              <a href='https://github.com/harisaans/' target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub/></a>
              <a href='mailto:harisaans@gmail.com' aria-label="Email"><FiMail/></a>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact
