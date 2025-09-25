import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";
import resumejpeg from '../../assets/resume..jpeg';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const handleResumeClick = () => {
  const link = document.createElement('a');
  link.href = resumejpeg;
  link.setAttribute('download', 'resume.jpeg');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const Hero = () => {
  return (
    <motion.div id='home' className='hero' variants={textVariants} initial='initial' whileInView='animate'>
        <motion.img variants={textVariants} src={profile_img} alt="" />
        <motion.h1 variants={textVariants}><span>I'm Itobiye Blossom</span>,frontend developer based in Nigeria</motion.h1>
        <motion.p variants={textVariants}>I am a front end developer from Edo state, Nigeria with 3+ years level experience in user/interface design and implementation</motion.p>
        <motion.div className="hero-action" variants={textVariants}>
            <motion.div className="hero-connect" variants={textVariants}><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></motion.div>
           
        </motion.div>
    </motion.div>
  );
};

export default Hero;
