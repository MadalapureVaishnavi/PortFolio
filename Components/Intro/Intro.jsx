import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/LinkedIn.png';
import Instagram from '../../img/instagram.png';
import Boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
    <div className="i-left">
    <div className="i-name">
        <span>Hi! I Am </span>
        <span>Vaishnavi Madalapure </span>
        <span>I'm currently a student pursuing a degree 
              in Information Technology at Sinhgad College Of Engineering. 
              I'm a passionate and dedicated student pursuing a career as 
              a full stack developer and specializing in Java development.
        </span>
    </div>
    <button className="button i-button">Hire me</button>
    <div className="i-icons">
      <a href='https://github.com/MadalapureVaishnavi'>
      <img src={Github} alt=""/>
      </a>
      <a href="https://www.linkedin.com/in/vaishnavi-madalapure-500829269/">
     
      <img src={LinkedIn} alt=""/>
      </a>
      <a href='https://www.instagram.com/vaish_na_vi_03/'>
      <img src={Instagram} alt=""/>
      </a>
    </div>
    </div>
    <div className="i-right">
        <img src={Vector1} alt=''/>
        <img src={Vector2} alt=''/>
        <img src={Boy} alt=''/>
        <img src={glassesimoji} alt=''/>

        <div style={{top:'-4%', left:'60%'}}
        className='floating-div'
        >

          <FloatingDiv image={Crown} txt1='Full Stack' txt2='Developer'/>
        </div>

        <div style={{top:'20rem', left:'-2rem'}}
        className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1='Java' txt2='Developer'/>
        </div>
    <div className="blur" style={{background:"rgba(236 210 255)"}}></div>
    <div className="blur" style={{background:'#C1F5FF',top:'20rem', width:'27rem', height:'17rem', left:'-10rem' }}></div>
    </div>
    </div>
  )
}

export default Intro
