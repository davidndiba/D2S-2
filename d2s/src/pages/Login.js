import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';
import image from '../assets/dhis21.png';
import image1 from '../assets/image 21.png';
import image2 from '../assets/image 22.png';
import image3 from '../assets/image 23.png';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="row">
        <div className="col-md-5 image-text-container">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
            <div className="text">
              <p className="body-large">
                The comprehensive and user-friendly platform that facilitates seamless data exchange between DHIS2 instances, as well as other data collection tools like Commcare, Kobo Toolbox, and ODK. Its interface facilitates both one-time and scheduled data exchange.
              </p>
              <div className="display-large">Welcome to D2S Stream.</div>
              <p className="text-wrapper">D2S: Automating Data Exchange for DHIS2 and Beyond</p>
              <div className="div dhis-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <img className="dhis dhis-image" alt="Dhis" src={image} />
                    <img className="dhis dhis-image-1" alt="Dhis" src={image1} />
                  </div>
                  <div className="col-md-6">
                    <img className="dhis dhis-image-2" alt="Dhis" src={image2} />
                    <img className="dhis dhis-image-3" alt="Dhis" src={image3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-container">
            <div className="login-form">
              <div className="form-header">
                <h2>Sign In to Your Account</h2>
              </div>
              <div className="form-input">
                <label htmlFor="email">Email Address:</label>
                <input id="email" type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" className="form-control" placeholder="Enter your password" />
              </div>
              <Link to="/overview" className="btn btn-primary sign-in-button">
                Sign In
              </Link>
              <div className="form-links">
                <a href="#!" className="forgot-password text-orange">
                  Forgot your password?
                </a>
                <span className="divider"> | </span>
                <Link to="/register" className="create-account">
                  Don't have an account? Create one
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
