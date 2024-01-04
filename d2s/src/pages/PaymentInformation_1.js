import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';

function PaymentInformation_1() {
  return (
    <div className="login-container">
      <div className="row">
        <div className="col-md-6 image-text-container">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
            <div className="text-container">
              <div>
                <h2 className="mb-3 text-primary font-weight-bold">Welcome to D2S Stream</h2>
              </div>
              <div className="text-section">
                <Link to="/register" className="section-number">
                  <span className="section-number">1</span>
                </Link>
                <Link to="/register" className="section-title">
                  <span className="section-number-1">User Details</span>
                </Link>
              </div>
              <div className="text-section">
                <Link to="/organizationdetails" className="section-number">
                  <span className="section-number">2</span>
                </Link>
                <Link to="/organizationdetails" className="section-title">
                  <span className="section-number-2">Organization Details</span>
                </Link>
              </div>
              <div className="text-section">
                <Link to="/paymentinformation" className="section-number">
                  <span className="section-number">3</span>
                </Link>
                <Link to="/paymentinformation" className="section-title">
                  <span className="section-number-3">Payment Information</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 registration-form-container">
          <form>
            <h2 className="mb-3 text-primary font-weight-bold">Payment Information</h2>
            <p className="text-right text-primary font-weight-bold mt-3">
              <Link to="/overview">Proceed to D2S Data Exchange</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentInformation_1;
