import React from "react";
import "./profilePic.css";


import ProfileImage from "./brianPic.JPG";


import Typical from 'react-typical';


 
    
     
  







const ProfileBanner = () => {
    
  return  (
    
    <div className="container-fluid" id="picSec">
    <div className="row">
        
        <div className="mb-4 d-flex justify-content-center col-xs-12col-sm-12 col-md-6 col-lg-4">
            
          <img src={ProfileImage} alt="profileImage"  className="mb-4"/>
       
              </div>

              <div className="d-flex align-items-center justify-content-center  col-sm-12 col-md-6 col-lg-8">
              
              <p className="bioText">
                <Typical
        steps={
            [
                'Hey you!',
                 3000, 
                 'Welcome to my tiny web home', 
                2500,
                "I'm a client side driven developer", 
                2500,
                'Orginally from Puerto Rico', 
                2500,
                'Currently coding away in ATL',
                2500,
                ]
            }
        loop={Infinity}
        wrapper="b"
      />
                </p>
                
                
              </div>
              
        </div>
        </div>
        

    
)
};





export default ProfileBanner;