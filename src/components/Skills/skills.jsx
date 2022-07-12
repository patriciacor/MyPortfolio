import React, {Fragment} from 'react';
import "./skills.css";

const Skills = () => {
  return (<Fragment>
    <div className="Skills" id="Skills">
        <div className="Skill-title">
            My Tech Stack
        </div>
        <p className="Skill-sub"> Technologies I’ve been working with recently
        </p>
        <div className="skill-card">
        <img src="https://i.ibb.co/VYBmc9Y/html.png" alt="html"/>
        <img src="https://i.ibb.co/JQQ1Qf8/css.png" alt="css" />
        <img src="https://i.ibb.co/sF2tz9Y/logos-bootstrap.jpg" alt="logos-bootstrap" border="0"/>
        <img src="https://i.ibb.co/zr1zrds/vscode-icons-file-type-js-official-1.jpg" alt="vscode-icons-file-type-js-official-1"border="0" />
            <img src="https://i.ibb.co/rvChmS5/sass.png" alt="sass"/>
            <img src="https://i.ibb.co/mcptz66/git.png" alt="git" />
            <img src="https://i.ibb.co/h7hmx8j/github.png" alt="github" />
            <img src="https://i.ibb.co/vwLJ9z9/vscode-icons-file-type-vscode.jpg" alt="vscode-icons-file-type-vscode" />
            <img src="https://i.ibb.co/x84c5wb/react.png" alt="react"/>
        </div>
    </div>
    </Fragment>
  )
}

export default Skills