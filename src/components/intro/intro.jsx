import React,{Fragment} from 'react';
import "./intro.css";
import Avatar from "../../assets/myAvatar.png";
import Resume from "../../assets/MyResumePatricia.pdf";

const Intro = () => {
  return (
  <Fragment> 
  
<div className="content-i">
  <header>
            <nav class="navbar">
                <h1 class="logo">Patt<span>Dev</span></h1>

                <ul class="main-menu">
                    <li><a href="#home" class="selected">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#Skills">My Tech Stack</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
</div>
<div className="container">
    <div className="Intro"  id="#home">
        <div className="Intro-wrapper">
            <h2 className="In-greeting"><span>Hi!</span> My name is</h2>
            <div className="In-greetingN" ><h2>Patricia Cor</h2>
            </div>
           
            <div className="In-title">
            <div className="title-wrapper">
            <div className="title-item">Frontend Developer</div>
              </div>
              </div>
              <a download href={Resume}>
              <button className="download-cv" download={Resume}>Download CV</button>   
    </a>
</div>
      
        <div className="In-description">
        
      </div>
    </div>
    <div className="Into-img">
  <img src={Avatar} alt="my avatar" className="In-img"/>
    </div>
    </div>
    </Fragment>
  )
}

export default Intro