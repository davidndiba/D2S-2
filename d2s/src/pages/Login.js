import React from 'react';
import { Link } from "react-router-dom";
import  PrimaryButton  from './PrimaryButton';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';
import image from "../assets/dhis21.png";
// import image21 from "../assets/image21.png";
// import image22 from "../assets/image22.png";
// import image23 from "../assets/image23.png";
import "./Login.css"

function Login  () {
  return (
    <div className="login-container">
      <div className="row">
        {/* Image and Text Container */}
        <div className="col-md-5 image-text-container">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
            
            <div className="text">
              <p className="body-large">
                The comprehensive and user-friendly platform that facilitates seamless data exchange between DHIS2
                instances, as well as other data collection tools like Commcare, Kobo Toolbox, and ODK. Its interface
                facilitates both one-time and scheduled data exchange.
              </p>
              <div className="display-large">Welcome to D2S Stream.</div>
              <p className="text-wrapper">D2S: Automating Data Exchange for DHIS2 and Beyond</p>
              <div className="div">
                <div className="dhis-wrapper">
                  <img className="dhis dhis-image" alt="Dhis" src={image} />
                  {/* <img className="dhis dhis-image1" alt="Dhis" src={image21} /> */}
                </div>
                {/* <img className="dhis dhis-image2" alt="Dhis" src={image22} /> */}
                {/* <img className="dhis dhis-image3" alt="Dhis" src={image23} /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Login Form Container */}
        <div className="col-md-6 form-container">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="login-form">
              {/* Integration of Frame component */}
              <div className="frame">
                <p className="div">Sign In to Your Account</p>
                <div className="div-2">
                  <input className="password" id="input-1" placeholder="Email Address" type="email" />
                  <div className="div-wrapper">
                    <label className="label" htmlFor="input-1">
                      Password
                    </label>
                  </div>
                </div>
                <Link to="/overview"  className="outline-fill-default-instance" text="Sign In" />
                <a href="#!" className="forgot-pass">Forgot password?</a>
                <PrimaryButton
                  className="primary-button-instance"
                  text="Don’t have an account? Create one"
                  textClassName="design-component-instance-node"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
