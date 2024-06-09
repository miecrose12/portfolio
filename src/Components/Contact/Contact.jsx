import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import {motion} from "framer-motion"

const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "63031018-92ba-48e7-b65a-5a850af16113");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    


  return (
    <motion.div id='contact' className='contact' variants={textVariants} initial='initial' whileInView='animate'>
        <motion.div className="contact-title" variants={textVariants}>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </motion.div>
        <motion.div className="contact-section" variants={textVariants}>
            <motion.div className="contact-left" variants={textVariants}>
                <h1>Let's talk</h1>
                <p>i'm currently available to take on new projects, so feel free to holla at your boy.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>itobiyeblossom75@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>07059036337</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Lagos,Nigeria</p>
                    </div>
                </div>
            </motion.div>
            <motion.form onSubmit={onSubmit} className="contact-right" variants={textVariants}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="Your Email"></label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Contact