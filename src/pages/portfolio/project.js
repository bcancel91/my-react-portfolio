import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import "./project.css"




function Project (props){
    return (
      <LightSpeed top>
<div className="card card-shadow" style={{width: "300px"}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text description">{props.info}</p>
    <div className="tech"><h6 className="mb-2">Primary technologies used:</h6>{props.children}</div>
    <hr></hr>
    <a href={props.appLink} className="card-link hoverLinks">Check it</a>
    <a href={props.repoLink} className="card-link hoverLinks">GitHub Repo</a>
  </div>
</div>
</LightSpeed>
    )
};

export default Project;