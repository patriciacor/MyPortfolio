import React, {Fragment} from 'react';
import Intro from "../intro/intro";
import "./about.css";
import AboutI from "../../assets/about.jpg";




const About = () => {
  return (
    <Fragment>
        <div className="about" id="about">
        <div className="about-img">
        <div className="about-card bg"></div>
            <div className="about-card">
                <img src={AboutI} alt="about img" className="aboutI"/>
            </div>
        </div>
        <div className="about-me">
        <h1 className="about-title">About me</h1>
          <p className="ab-description">
          I am a web developer a little over a year and a half ago I got to know the world of programming and since then I have been curious about everything related to front-end development, working on my technical skills and my soft skills so that I can improve every day.
          <p>  
        If you are looking for someone creative with the desire to improve and you have a vacancy that fits my profile or you know of someone who does, please contact me.
         </p>
         </p>
        </div>
        <p class="description-my">
         </p>

        </div>
    </Fragment>
  )
}

export default About