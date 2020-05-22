import React from "react";

import "./project.css"




function Project (props){
    return (
      
<div className="card card-shadow m-1" style={{width: "300px"}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.info}</p>
    <div>Tech:{props.children}</div>
    <a href={props.appLink} className="card-link hoverLinks">try it</a>
    <a href={props.repoLink} className="card-link hoverLinks">GitHub Repo</a>
  </div>
</div>
    )
};

export default Project;