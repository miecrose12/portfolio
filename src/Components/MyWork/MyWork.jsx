import React, { useState } from 'react'
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
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [copiedField, setCopiedField] = useState(null);

  const handleImageClick = (work) => {
    console.log('Clicked work:', work); // Debug log
    
    if (work.w_link === "https://automart-kappa.vercel.app") {
      setPopupData({
        title: "AutoMart Login Credentials",
        username: "blossyblossy",
        password: "080371Blo",
        link: work.w_link
      });
      setShowPopup(true);
    } else if (work.w_link === "https://chowtap.com") {
      setPopupData({
        title: "ChowTap Login Credentials",
        email: "inioluwaraheem@gmail.com",
        password: "Chisom@25",
        link: work.w_link
      });
      setShowPopup(true);
    } else {
      window.open(work.w_link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleProceed = () => {
    window.open(popupData.link, '_blank', 'noopener,noreferrer');
    setShowPopup(false);
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <motion.div id='work' className='mywork' variants={textVariants} initial='initial' whileInView='animate'>
        <motion.div className="mywork-title" variants={textVariants}>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </motion.div>
        <motion.div className="mywork-container" variants={textVariants}>
            {mywork_data.map((work, index) => {
                return (
                    <div key={index} onClick={() => handleImageClick(work)} style={{cursor: 'pointer'}}>
                        <img src={work.w_img} alt={work.w_name} />
                    </div>
                )
            })}
        </motion.div>
      
        
        {/* Login Credentials Popup */}
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h3>{popupData.title}</h3>
              <div className="credentials">
                {popupData.username && (
                  <div className="credential-item">
                    <label>Username:</label>
                    <div className="credential-copy">
                      <span>{popupData.username}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => handleCopy(popupData.username, 'username')}
                      >
                        {copiedField === 'username' ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                )}
                {popupData.email && (
                  <div className="credential-item">
                    <label>Email:</label>
                    <div className="credential-copy">
                      <span>{popupData.email}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => handleCopy(popupData.email, 'email')}
                      >
                        {copiedField === 'email' ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                )}
                <div className="credential-item">
                  <label>Password:</label>
                  <div className="credential-copy">
                    <span>{popupData.password}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => handleCopy(popupData.password, 'password')}
                    >
                      {copiedField === 'password' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="popup-buttons">
                <button onClick={() => setShowPopup(false)} className="cancel-btn">Cancel</button>
                <button onClick={handleProceed} className="proceed-btn">Proceed to Site</button>
              </div>
            </div>
          </div>
        )}
    </motion.div>
  )
}

export default MyWork