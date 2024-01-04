// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../assets/image1.png';

// function OrganizationDetails() {
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
//         </div>
//         </div>
//   )
// }
// export default OrganizationDetails;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../assets/image1.png';

// function OrganizationDetails() {
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
//         <div className="col-md-6 registration-form-container">
//           <form>
//             <h2 className="mb-3 text-primary font-weight-bold">Set up your organization account</h2>

//             <div className="form-group">
//               <div className="row">
//                 <div className="col">
//                   <input type="text" className="form-control" placeholder="Your field" />
//                 </div>
//                 <div className="col">
//                   <input type="text" className="form-control" placeholder="Your field" />
//                 </div>
//               </div>
//             </div>

//             <div className="form-group">
//               <div className="row">
//                 <div className="col">
//                   <input type='text' className='form-control' placeholder='Choose Country of residence'></input>
//                   <select className="custom-select">
//                     <option selected>Choose...</option>
//                   </select>
//                 </div>
//                 <div className="col">
//                 <input type='text' className='form-control' placeholder='Choose organization industry of operation'></input>
//                   <select className="custom-select">
//                     <option selected>Choose...</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <button type="button" className="btn btn-primary btn-block">
//               Save and continue
//             </button>

//             <p className="text-right text-primary font-weight-bold mt-3">
//               <Link to="/login">Already have an account? Sign in</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrganizationDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';

function OrganizationDetails() {
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
                <Link to="/user-details" className="section-number">
                  <span className="section-number">1</span>
                </Link>
                <Link to="/register" className="section-title">
                  <span className="section-number-1">User Details</span>
                </Link>
              </div>
              <div className="text-section">
                <Link to="/organization-details" className="section-number">
                  <span className="section-number">2</span>
                </Link>
                <Link to="/organization-details" className="section-title">
                  <span className="section-number-2">Organization Details</span>
                </Link>
              </div>
              <div className="text-section">
                <Link to="/payment-information" className="section-number">
                  <span className="section-number">3</span>
                </Link>
                <Link to="/payment-information" className="section-title">
                  <span className="section-number-3">Payment Information</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 registration-form-container">
          <form>
            <h2 className="mb-3 text-primary font-weight-bold">Set up your organization account</h2>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your field" />
                    <div className="input-group-append">
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your field" />
                    <div className="input-group-append">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <div className="input-group">
                    <input type='text' className='form-control' placeholder='Choose Country of residence'></input>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button">▼</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                    <input type='text' className='form-control' placeholder='Choose organization industry of operation'></input>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button">▼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary btn-block">
              Save and continue
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

export default OrganizationDetails;
