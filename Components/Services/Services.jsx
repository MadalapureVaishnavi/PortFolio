import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
function Services() {
  return (
    <div className='services' id='Services'>
      <div className="awesome">
    <span>
        My Awesome
    </span>
    <span>
        Sevices
    </span>
    <span>
    Transform your ideas into fully functional web applications. From concept to deployment, 
    <br/>I handle every aspect of development, 
    ensuring a seamless and efficient user experience.
        <br/>
        Harness the power of Java to build robust, scalable, and high-performance software solutions.
    </span>

    <a href={Resume} download>
    <button className='button s-button'>Download CV</button></a>
    <div className='blur s-blurl' style={{background:"#ABF1FF94"}}>
    </div>
      </div>
      <div className="cards">
     <div style={{left:'25rem'}}>
     <Card
      emoji={HeartEmoji}
      heading={'Back-End'}
      detail={"Mysql,sql,Node.js"}
     />
     </div>


     <div style={{top:'12rem', left:'8rem'}}>
     <Card
      emoji={Glasses}
      heading={'Developer'}
      detail={"Html,css,Javascript,React,Php"}
     />
     </div>

     <div style={{top:'19rem', left:'25rem'}}>
     <Card
      emoji={Humble}
      heading={'Java'}
      detail={"core java,advanced java,Hadoop"}
     />
     </div>
     <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
      </div>
      </div> 
  )
}

export default Services
