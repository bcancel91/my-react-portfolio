import React from "react";
import "./profilePic.css"


import ProfileImage from "./brianPic.JPG";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["WELCOME", "TO", "MY", "WORLD"];

const ProfileBanner = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2500);

    return () => clearInterval(action);
  }, []);

  return  (
    <div className="container-fluid">
    <div className="row">
        <div className="col-4 d-flex align-items-center justify-content-center"> 
        <h1 className="changeText">{result}</h1>
        </div>
        <div className="col-4 mb-4 d-flex justify-content-center">
            <div className="">
          <img src={ProfileImage} alt="profileImage"  className="mb-4" height="500px" width="370px"/>
          </div>
              </div>

              <div className="col-4 d-flex align-items-center justify-content-center">
              <h1 className="changeText" style={{marginLeft: "-10px"}}>{result}</h1>
              </div>
              
        </div>
        </div>

    
)
};





export default ProfileBanner;