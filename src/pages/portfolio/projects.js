import React from "react";
import Project from "./project";



function Projects (){
   
    return (
<div className="conatiner-fluid">
    <div className="row">
        <div className="col-4">
 <Project
  title="tutorMe"
  info="An online tutoring service that is available to you from anywhere."
  appLink="https://tutor-me-gq.herokuapp.com/"
  repoLink="https://github.com/bcancel91/Project_2.git">
      <div className="row">
          <div className="col-6">
      <div><i class="devicon-javascript-plain colored devIcon"></i></div>
      <div><i class="devicon-express-original colored devIcon"></i></div> 
      </div>
      <div className="col-6">
      <div><i class="devicon-bootstrap-plain-wordmark colored devIcon"></i></div>
      <div><i class="devicon-bootstrap-plain-wordmark colored devIcon"></i></div>
      </div>
      </div>
  </Project>
  </div>
  <div className="col-4">
  <Project
  title="Password Generator"
  info="blah blah blh and blah fgdfgwergqe"
  appLink="https://bcancel91.github.io/weather-dashboard/"
  repoLink="https://github.com/bcancel91/weather-dashboard.git">
      <div><i class="devicon-javascript-plain colored" style={{fontSize: "3em"}}></i></div>
      <div>icon2</div> 
      <div>icon3</div>
  </Project>
  </div>
  <div className="col-4">
  <Project
  title="Weather DashBoard"
  info="blah blah blh and blah fgdfgwergqe"
  appLink="https://bcancel91.github.io/weather-dashboard/"
  repoLink="https://github.com/bcancel91/weather-dashboard.git">
      <div><i class="devicon-javascript-plain colored" style={{fontSize: "3em"}}></i></div>
      <div>icon2</div> 
      <div>icon3</div>
  </Project>
  </div>
  </div>

  <div className="row">
        <div className="col-4">
 <Project
  title="Google Books Search"
  info="blah blah blh and blah fgdfgwergqe"
  appLink="https://bcancel91.github.io/weather-dashboard/"
  repoLink="https://github.com/bcancel91/weather-dashboard.git">
      <div><i class="devicon-javascript-plain colored" style={{fontSize: "3em"}}></i></div>
      <div>icon2</div> 
      <div>icon3</div>
  </Project>
  </div>
  <div className="col-4">
  <Project
  title="Fitness Tracker"
  info="blah blah blh and blah fgdfgwergqe"
  appLink="https://bcancel91.github.io/weather-dashboard/"
  repoLink="https://github.com/bcancel91/weather-dashboard.git">
      <div><i class="devicon-javascript-plain colored" style={{fontSize: "3em"}}></i></div>
      <div>icon2</div> 
      <div>icon3</div>
  </Project>
  </div>
  <div className="col-4">
  <Project
  title="Profiler Generator"
  info="blah blah blh and blah fgdfgwergqe"
  appLink="https://bcancel91.github.io/weather-dashboard/"
  repoLink="https://github.com/bcancel91/weather-dashboard.git">
      <div><i class="devicon-javascript-plain colored" style={{fontSize: "3em"}}></i></div>
      <div>icon2</div> 
      <div>icon3</div>
  </Project>
  </div>
  </div>
</div>

    )
};

export default Projects;