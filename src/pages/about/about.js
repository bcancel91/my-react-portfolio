import React from "react";
import "./about.css"
import PDF from "./WebDevelopmentResume.pdf";
import Zoom from 'react-reveal/Zoom';


function AboutBox(){
    return (
        <div className="container-fluid">
        <div class="row">
              <div class="col-12">
                <div class="box card-shadow">
                  <h2 class="left" style={{fontSize: "xxx-large"}}> bri-an  can-cel </h2> <br/>
                <h3 class="left">  /brahˈeyein/ /can'zell/ </h3>  <br/>

                 <strong class="left" style={{fontStyle: "oblique", textDecoration: "underline"}}>noun</strong><br/>
                  <p class="left">  1. An ATL based Full-Stack Developer who is front-End driven.<br/>
    2. A person or thing that develops the web.<br/>
                   "a web developer"</p><br/>
                    
                    
                   <div class="item">
                   <text className="resumeText">check<br/> out my <br/>resume</text>
  <i class="fa fa-long-arrow-right fa-3x arrow1 pb-4"  aria-hidden="true"> </i>
  
                    
                   <a href={PDF} target="_blank"><i className="far fa-file fa-5x m-1 icons"></i></a>
                   
                   </div>

                   <div class="left mb-2"> similar:</div>
                   <Zoom top cascade>
                     <div className="" style={{paddingBottom: "50px"}}>
                    
                   <span class="abilities ml-2 mr-2"> React </span>
                   
                   <span class="abilities ml-2 mr-2"> CSS </span> 
                  
                   <span class="abilities ml-2 mr-2"> HTML </span> 
                   <span class="abilities ml-2 mr-2"> JavaScript </span> 
                   <span class="abilities ml-2 mr-2"> Node.js </span> 
                   <span class="abilities ml-2 mr-2"> Express </span> 
                   <span class="abilities ml-2 mr-2"> MongoDB </span> 
                   <span class="abilities ml-2 mr-2"> NoSQL </span> 
                   </div><br/>
                   </Zoom>
                   </div>
                  
                  </div>
                </div>
                     
                



            </div>
           
  
        
    )

}
 

export default AboutBox;
