import React from 'react'
import './intro.css'
import bg from "../../assets/image.png"
import {Link} from 'react-scroll';
import btnImg from "../../assets/hireme.png"

const Intro = () => {
  return (
    <section id="intro">
        <div class="introContent">
            <span class="hello">Hello, </span>
            <span class="introText">I'm <span class="introName">Haris</span><br/>Webiste Designer</span>
            <p class="introPara">I am a skilled and passionate web designer with experience in<br/> creating visually appealing and user friendly websites.</p>
            <Link><button class="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me!</button></Link>

        </div>
        <img src={bg} alt="Profile" class="bg"/>
    </section>
  )
}

export default Intro