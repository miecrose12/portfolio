import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import {motion} from "framer-motion"

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 45,
        damping: 5,
        staggerChildren: 0.1,
      },
    },
  };

const Services = () => {
  return (
    <div>
        <motion.div id='services' className="services" variants={textVariants} initial='initial' whileInView='animate'>
            <motion.div className="services-title" variants={textVariants}>
                <h1>My Experience</h1>
                <img src={theme_pattern} alt="" />
            </motion.div>
            <motion.div className="services-container" variants={textVariants}>
                {Services_Data.map((service,index)=>{
                    return <div key={index} className='services-format'>
                         <h3>{service.s_no}</h3>
                         <h2>{service.s_name}</h2>
                         <p>{service.s_desc}</p>
                         
                    </div>
                })}
            </motion.div>
        </motion.div>
    </div> 
  )
}

export default Services