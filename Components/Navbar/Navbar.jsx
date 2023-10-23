import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className='n-name'>Vaishnavi</div>
        
      </div>
      <div className="n-right">
      <div className="n-list">
        <ul style={{listStyleType:'none'}}>

            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
            <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
            <li>Services</li>
            </Link>
            <Link spy={true} to='Skills' smooth={true}>
            <li>Skills</li>
            </Link>
            <Link spy={true} to='Projects' smooth={true} >
            <li>Projects</li>
            </Link>
          
        </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true} >
        <button className='button n-button'>Contact</button>
        </Link>
     </div>
     </div>
  )
}

export default Navbar
