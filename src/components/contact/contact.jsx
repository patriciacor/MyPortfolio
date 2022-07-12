import React,{Fragment}from 'react';
import Intro from "../intro/intro";
import "./contact.css";



const Contact = () => {
     
return (
    <Fragment>
        <div className="contact" id="contact">
        
        <div className="contact-wrapper">
        <h2 className='contact-t'>Contact Me</h2>
            <form netlify>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder='Subject' name="user_subjet"/>
                <input type="email" placeholder='Email' name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"/>
            <button className="btn-submit"value="Send" >Submit your message</button>
           
            </form>
            </div>
          
        </div>
    </Fragment>
  )
}

export default Contact