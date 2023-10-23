import React, { useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
const form =useRef();

    const [done,setDone] =useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('1', '2', form.current, 'c')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='contact-form' id='Contact'>
      <div className="w-left">
        <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
        </div>
      </div>

    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='from_name' className='user' placeholder='Name'/>
            <input type='email' name='to_name' className='user' placeholder='Email'/>
            <textarea name='message' className='user' placeholder='Message'/>
            <input type='Submit' value='Send' className='button'/>
            <span>{done && "Thanks for conatacting me"}</span>
            <div
            className='blur c-blur'
            style={{background:"var(--purple)"}}>

            </div>
        </form>
    </div>

    </div>
  )
}

export default Contact
