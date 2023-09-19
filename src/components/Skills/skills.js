import React from 'react'
import './skills.css'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding Of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I create intuitive and visually engaging user interfaces to enhance the overall user experience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>I craft compelling and user-friendly websites that captivate and engage online audiences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I design user-centric mobile and web applications for seamless digital experiences.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;