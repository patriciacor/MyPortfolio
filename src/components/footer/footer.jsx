import React,{Fragment} from 'react';
import "./footer.css";
import Link from "../../assets/link-ico.png";

const Footer = () => {
  return (<Fragment>
  <div className="footer">
    
            <div className="footer-content">
               
                <h5>Frontend Developer</h5>
            </div>
            <div className="social-network">
                <a href="https://www.linkedin.com/in/patricia-cor-dw/"target="_blank" rel="noreferrer">
                    <img src={Link} alt="linkedin" className="link"/>
                </a>
               
            </div>
        </div>
   
    </Fragment>
  
  )
}

export default Footer