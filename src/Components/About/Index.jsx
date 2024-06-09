import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import prof from '../../assets/prof.svg'
import {motion} from "framer-motion"

const variants = {
    initial: {
        x: -100,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1.5,
            staggerChildren: 0.1
        },
    }
}

const About = () => {
  return (
    <motion.div id='about' className='about' variants={ variants} initial="initial" whileInView="animate">
        <motion.div className="about-title" variants={ variants}>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </motion.div>
        <motion.div className="about-sections" variants={ variants}>
            <div className="about-left">
                <img src={prof} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Blossom, an enthusiastic intern and aspiring frontend developer. I'm passionate about building responsive and user-friendly web applications. Currently, I'm enhancing my skills in HTML, CSS, JavaScript, and React. I enjoy solving problems, learning new technologies, and collaborating on exciting projects.</p>
                    <p>I'm currently honing my skills in HTML, CSS, JavaScript, and React. I enjoy the challenge of solving problems and finding elegant solutions through code. The dynamic nature of web development excites me because there is always something new to learn and explore.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"30%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>FIGMA UI</p><hr style={{width:"65%"}} /></div>
                </div>
            </div>
        </motion.div>
        <motion.div className="about-achievements" variants={ variants}>
            <div className="about-achievement">
                <h1>1½</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1></h1>
                <p></p>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default  About