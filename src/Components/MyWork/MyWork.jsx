import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import {motion} from "framer-motion"

const textVariants = {
    initial: {
      y: -20,
      opacity: 0,
      scaleY: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut", 
        type: "spring",
        stiffness: 40,
        damping: 10,
      },
    },
  };

const MyWork = () => {
  return (
    <motion.div id='work' className='mywork' variants={textVariants} initial='initial' whileInView='animate'>
        <motion.div className="mywork-title" variants={textVariants}>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </motion.div>
        <motion.div className="mywork-container" variants={textVariants}>
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </motion.div>
        <motion.div className="mywork-showmore" variants={textVariants}>
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default MyWork