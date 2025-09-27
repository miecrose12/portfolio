import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { motion } from "framer-motion"

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
  const handleImageClick = (work) => {
    window.open(work.w_link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      id='work' 
      className='mywork' 
      variants={textVariants} 
      initial='initial' 
      whileInView='animate'
    >
      <motion.div className="mywork-title" variants={textVariants}>
        <h1>My Latest Work</h1>
       
      </motion.div>

      <motion.div className="mywork-container" variants={textVariants}>
        {mywork_data.map((work, index) => (
          <div 
            key={index} 
            onClick={() => handleImageClick(work)} 
            style={{ cursor: 'pointer' }}
          >
            <img src={work.w_img} alt={work.w_name} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default MyWork