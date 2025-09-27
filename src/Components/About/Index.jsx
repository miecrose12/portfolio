import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import prof from '../../assets/prof.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={prof} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Frontend Developer with over 3 years of professional experience building modern, scalable, and user-friendly web applications. My expertise lies in React and Next.js, complemented by strong skills in Tailwind CSS, API integration, and performance optimization. I have worked on and successfully delivered diverse projects, from responsive business websites to dynamic platforms, ensuring seamless user experience across devices.</p>
                    <p>Beyond coding, I focus on clean architecture, reusability, and scalability writing maintainable code that grows with the project. I thrive in collaborative teams, enjoy solving complex frontend challenges, and continuously keep up with the latest technologies to deliver innovative solutions. My goal is always to bridge design and functionality, turning ideas into polished, production-ready digital products.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Next.js</p><hr style={{width:"76%"}} /></div>
                    <div className="about-skill"><p>REACT.JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Ui/Ux</p><hr style={{width:"65%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10</h1>
                <p>PROJECS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1></h1>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default About