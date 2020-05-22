import React from "react";

import "./footer.css";

function Footer (){

    return (

              <footer className="container-fluid padding">
                  <div className="row text-center">
                      <div className="col-md-4">
                              <h4  className="foot1">Follow</h4>
                              <hr className="light style-five"/>
                              
                              <a href="https://github.com/bcancel91" target="_blank"><i className="fab fa-github fa-3x m-3 icons"></i></a>
                              <a href="https://www.linkedin.com/in/bcancel91/" target="_blank"><i className="fab fa-linkedin-in fa-3x m-3 icons"></i></a>
                           
                      </div>
                      <div className="col-md-4">
                              <h4  className="foot2">Location</h4>
                              <hr className="light style-five"/>
                            
                              <p className="location">Atlanta, GA</p>
                              
                      </div>
                      <div className="col-md-4">
                              <h4  className="foot3">Reach out</h4>
                              <hr className="light style-five"/>
                              <p><a href="mailto:brian.e.cancel@gmail.com" className="changeText email">Email Me</a></p>
                      </div>
                      
                  </div>
                
              </footer>
           

            )
  }

  export default Footer;