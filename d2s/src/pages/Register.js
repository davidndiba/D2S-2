// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../assets/image1.png';

// function Register() {
//   return (
//     <div className="login-container">
//       <div className="row">
//         <div className="col-md-6 image-text-container">
//           <div className="d-flex flex-column align-items-center justify-content-center h-100">
//             <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
//             <div className="text-container">
//               <div>
//                 <h2 className="mb-3 text-primary font-weight-bold">Welcome to D2S Stream</h2>
//               </div>
//               <div className="text-section">
//                 <Link to="/user-details" className="section-number">
//                   <span className="section-number">1</span>
//                 </Link>
//                 <Link to="/register" className="section-title">
//                   <span className="section-number-1">User Details</span>
//                 </Link>
//               </div>
//               <div className="text-section">
//                 <Link to="/organization-details" className="section-number">
//                   <span className="section-number">2</span>
//                 </Link>
//                 <Link to="/organization-details" className="section-title">
//                   <span className="section-number-2">Organization Details</span>
//                 </Link>
//               </div>
//               <div className="text-section">
//                 <Link to="/payment-information" className="section-number">
//                   <span className="section-number">3</span>
//                 </Link>
//                 <Link to="/payment-information" className="section-title">
//                   <span className="section-number-3">Payment Information</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Registration Form */}
//         <div className="col-md-6 registration-form-container">
//           <form>
//             <h2 className="mb-3 text-primary font-weight-bold">Set up your user account</h2>
            
//             <div className="form-group">
//               <div className="row">
//                 <div className="col">
//                   <label>Your first name</label>
//                   <input type="text" className="form-control" maxLength="40" />
//                 </div>
//                 <div className="col">
//                   <label>Your last name</label>
//                   <input type="text" className="form-control" maxLength="40" />
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
 
//             <div className="col">
//               <label>Your email address</label>
//               <input type="email" className="form-control" />
//             </div>

//              <div className="col">
//               <label>Your phone number</label>
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <select className="custom-select">
//                     <option selected>Choose...</option>
//                   </select>
//                   </div>
//                 </div>
//               </div>
//             </div> 
          

//             <div className="form-group">
//               <label>Password</label>
//               <div className="input-group">
//                 <input type="password" className="form-control" />
//                 <div className="input-group-append">
//                   <span className="input-group-text">
//                     <i className="fa fa-eye"></i>
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button type="button" className="btn btn-primary btn-block">
//               Verify your email
//             </button>

//             <p className="text-right text-primary font-weight-bold mt-3">
//                <Link to="/login">Already have an account? Sign in</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';

function Register() {
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
            <h2 className="mb-3 text-primary font-weight-bold">Set up your user account</h2>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label></label>
                  <input type="text" className="form-control" maxLength="40" placeholder="Your first Name" />
                </div>
                <div className="col">
                  <label></label>
                  <input type="text" className="form-control" maxLength="40" placeholder="Your last Name" />
                </div>
              </div>
            </div>
            <div className='row'>

              <div className="col">
                <label></label>
                <input type="email" className="form-control" placeholder="E-mail address" />
              </div>

              <div className="col">
                <label></label>
                <input type="email" className="form-control" placeholder="Phone number placeholder" />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-group">
                <input type="password" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-eye"></i>
                  </span>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary btn-block">
              Verify your email
            </button>

            <p className="text-right text-primary font-weight-bold mt-3">
              <Link to="/login">Already have an account? Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
