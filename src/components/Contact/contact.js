import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import LinkedinIcon from '../../assets/linkedin.png'
import GitHubIcon from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ix92ujb', 'template_pth7unh', form.current, 'WhDv4QwSlx6gyK0xH')
        .then((result) => {
            console.log(result.text);
            alert("Email sent")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
  };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p class="clientDesc">
                I have had the oppertunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Clients" className="clientImg"/>
                <img src={Adobe} alt="Clients" className="clientImg"/>
                <img src={Microsoft} alt="Clients" className="clientImg"/>
                <img src={Facebook} alt="Clients" className="clientImg"/>
            </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="conactDesc">Please fill out the form below to discuss any work oppertunities.</span>

          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name'/>
            <input type="email" className="email" placeholder='Your Email'name='from_email'/>
            <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            
            <div className="links">
              <a href='https://www.linkedin.com/in/mohd-haris-ansari-4a20801b9/'><img src={LinkedinIcon} alt="Facebook" class="link"/></a>
              <a href='https://github.com/harisaans/'><img src={GitHubIcon} alt="Facebook" class="link"/></a>
              <a href='https://www.facebook.com/haris.ansari.148/'><img src={FacebookIcon} alt="Facebook" class="link"/></a>
              <a href='https://twitter.com/Harisaans'><img src={TwitterIcon} alt="Twitter" class="link"/></a>
              <a href='https://www.youtube.com/channel/UC5EJ-4BCkNS4II8EsMs_ZCQ'><img src={YoutubeIcon} alt="Youtube" class="link"/></a>
              <a href='https://www.instagram.com/harisaans/'><img src={InstagramIcon} alt="Instagram" class="link"/></a>
            </div>
          </form>
            
        </div>
    </section>
  )
}

export default Contact