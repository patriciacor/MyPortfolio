import React,{Fragment} from 'react';
import Intro from "../intro/intro";
import "./projects.css";
import ProjectList from "./projectList";
import {proje} from "../../data"
const Projects = () => {
  return (<Fragment>
    <div className="projects" id="projects">
    <div className="proj-1">
     <h1 className="proj-1-title">
      Projects
     </h1>
     <p className="proj-1-desc">

     </p>

    <img src="" alt=""/>
    </div>
    <div className="project-List">
    {proje.map(item=>(
      <ProjectList key={item.id}img={item.img} link={item.link}/>
    ))}
    
    </div>
</div>



    </Fragment>
  )
}

export default Projects