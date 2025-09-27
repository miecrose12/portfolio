import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resumejpeg from '../../assets/resume..jpeg';

const handleResumeClick = () => {
  const link = document.createElement('a');
  link.href = resumejpeg;
  link.setAttribute('download', 'resume.jpeg');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      
      <h1>
        <span>I'm Itobiye Blossom</span>, frontend developer based in Nigeria
      </h1>
      
      <p>
        I am a front end developer from Edo state, Nigeria with 3+ years experience in user interface design and implementation.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;