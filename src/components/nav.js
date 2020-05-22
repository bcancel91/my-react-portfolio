import React from "react";
import "./nav.css";
import {Link} from "react-router-dom";
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

function Nav(){
    return (
<div className="container-fluid">
   
        <ul className="nav d-flex justify-content-center">
        <LightSpeed left>
                <li className="nav-item" id="nav1">
                  <Link to="/" className="nav-link active">ABOUT</Link>
                </li>
      </LightSpeed>
                
                <Zoom top>
                <li className="nav-item" id="nav2">
                  <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
                </li>
                </Zoom>
                <LightSpeed right>
                <li className="nav-item" id="nav3">
                  <Link to="/contact" className="nav-link">CONTACT</Link>
                </li>
                </LightSpeed>
         </ul>
        
        </div>
    )

}
 

export default Nav;