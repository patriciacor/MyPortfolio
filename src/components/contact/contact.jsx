import React,{Fragment}from 'react';
import Intro from "../intro/intro";
import "./contact.css";
import {useRef,useState} from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
      const formRef = useRef();
      const [done, setDone]= useState(false); 

      const sendEmail = (e) => {
        e.preventDefault();
       
    
        emailjs.sendForm('service_wgu6zi6', 'template_9fu4tz8', formRef.current, '4k1KKHY5akEKYMmHq')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
      
            });
            e.target.reset();
        };
      

return (
    <Fragment>
        <div className="contact" id="contact">
        
        <div className="contact-wrapper">
        <h2 className='contact-t'>Contact Me</h2>
            <form ref={formRef} onSubmit={sendEmail} netlify>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder='Subject' name="user_subjet"/>
                <input type="email" placeholder='Email' name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"/>
            <button className="btn-submit"value="Send" >Submit your message</button>
            <p> {done && "Your message was sent !"}</p>
            </form>
            </div>
          
        </div>
    </Fragment>
  )
}

export default Contact