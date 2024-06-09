import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import {animate, motion} from "framer-motion"

const textVariants = {
  initial: { 
    scale: 0.6, 
    opacity: 0,
    rotate: -10 
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0,
      type: 'spring',
      stiffness: 80,
      damping: 19,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <motion.div className='navbar' variants={textVariants} initial='initial' animate='animate'>
        <motion.img variants={textVariants}  className='logo' src={logo} alt="" />
        <motion.img variants={textVariants} src={menu_open} onClick={openMenu} alt="" className='nav-mob-open hamburger'  />
        <motion.ul variants={textVariants} ref={menuRef} className="nav-menu">
          <motion.img variants={textVariants} src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
          <motion.li variants={textVariants}><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</motion.li>
          <motion.li variants={textVariants}><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</motion.li>
          <motion.li variants={textVariants}><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</motion.li>
          <motion.li variants={textVariants}><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</motion.li>
          <motion.li variants={textVariants}><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</motion.li>
        </motion.ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </motion.div>
  )
}

export default Navbar