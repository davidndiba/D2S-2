import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';
import image from '../assets/dhis21.png';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="row">
        {/* Image and Text Container */}
        <div className="col-md-5 image-text-container">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
            <div className="text">
              <p className="body-large">
                The comprehensive and user-friendly platform that facilitates seamless data exchange between DHIS2 instances, as well as other data collection tools like Commcare, Kobo Toolbox, and ODK. Its interface facilitates both one-time and scheduled data exchange.
              </p>
              <div className="display-large">Welcome to D2S Stream.</div>
              <p className="text-wrapper">D2S: Automating Data Exchange for DHIS2 and Beyond</p>
              <div className="div">
                <div className="dhis-wrapper">
                  <img className="dhis dhis-image" alt="Dhis" src={image} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form Container */}
        <div className="col-md-2">
          <div className="form-container">
            <div className="login-form">
              <div className="form-header">
                <h2>Sign In to Your Account</h2>
              </div>
              <div className="form-input">
                <label htmlFor="email">Email Address:</label>
                <input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" placeholder="Enter your password" />
              </div>
              <button type="button" className="sign-in-button">
                Sign In
              </button>
              <div className="form-links">
                <a href="#!" className="forgot-password">
                  Forgot your password?
                </a>
                <span className="divider"> | </span>
                <Link to="/signup" className="create-account">
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
