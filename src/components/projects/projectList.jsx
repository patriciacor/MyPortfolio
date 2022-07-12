import React,{Fragment} from 'react';
import "./projectList.css";

const ProjectList = ({img,link}) => {
  return (<Fragment>
    <div className="pro">
    <div className="pro-browser">
      <div className="pro-circle"></div>
      <div className="pro-circle"></div>
      <div className="pro-circle"></div>
    </div>
    <a href={link} target="_blank" rel="noreferrer">
 <img src={img} alt="" className="pro-img"/>
    </a>
    </div>

    </Fragment>
  )
}

export default ProjectList