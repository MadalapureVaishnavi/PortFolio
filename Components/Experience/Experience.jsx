import React from 'react'
import './Experience.css';
import Html from '../../img/html.png';
import Css from '../../img/css.png';
import Javascript from '../../img/javaScript.png';
import Reacts from '../../img/react.png';
import Php from '../../img/php.png';
import java from '../../img/java.png';
import Mysql from '../../img/mysql.png';
import Node from '../../img/node.png';
import Cpp from '../../img/c++.png';

function Experience() {
  return (
    <>
     <h1 className='head' id='Skills'>Skills</h1>
    <div className='experience' >
    <div className='achievement'>
    <img src={Html} width='50' height='50'  alt=''/>
    <img src={Css} width='50' height='50'  alt=''/>
    <img src={Javascript} width='55' height='50' alt=''/>
    <img src={Reacts} width='50' height='50' alt=''/>
    <img src={Php} width='50' height='50' alt=''/>
    <img src={java} width='50' height='50' alt=''/>
    <img src={Mysql} width='50' height='50' alt=''/>
    <img src={Node} width='50' height='50' alt=''/>
    <img src={Cpp} width='50' height='50' alt=''/>
    </div>
    <div className="blur" style={{background:"rgba(236 210 255)"}}></div>
    <div className="blur" style={{background:'#C1F5FF',top:'20rem', width:'27rem', height:'17rem', left:'-10rem' }}></div>
    </div>
    </>
  )
}

export default Experience
