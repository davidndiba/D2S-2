// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../assets/image1.png';

// function Register() {
//   return (
//     <div className="login-container d-flex align-items-center justify-content-center vh-10">
//       <div className="row">
//         <div className="col-md-6 image-text-container">
//           <div className="d-flex flex-column align-items-center justify-content-center h-100">
//             <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
//             <div className="text-container">
//               <div>
//                 <h2 className="mb-4-text-primary-font-weight-bold">Welcome to D2S Stream</h2>
//               </div>
//               <div className="text-section">
//                 <Link to="/register" className="section-number">
//                   <span className="section-number">1</span>
//                 </Link>
//                 <Link to="/register" className="section-title">
//                   <span className="section-number-1">User Details</span>
//                 </Link>
//               </div>
//               <div className="text-section">
//                 <Link to="/organizationdetails" className="section-number">
//                   <span className="section-number">2</span>
//                 </Link>
//                 <Link to="/organizationdetails" className="section-title">
//                   <span className="section-number-1">Organization Details</span>
//                 </Link>
//               </div>
//               <div className="text-section">
//                 <Link to="/paymentinformation" className="section-number">
//                   <span className="section-number">3</span>
//                 </Link>
//                 <Link to="/paymentinformation" className="section-title">
//                   <span className="section-number-1">Payment Information</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-5 registration-form-container">
//           <form>
//             <h2 className="mb-5-text-primary-font-weight-bold">Set up your user account</h2>
//             <div className="form-group">
//               <div className="row">
//                 <div className="col">
//                   <label></label>
//                   <input type="text" className="form-control" maxLength="40" placeholder="Your first Name" />
//                 </div>
//                 <div className="col">
//                   <label></label>
//                   <input type="text" className="form-control" maxLength="40" placeholder="Your last Name" />
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className="col">
//                 <label></label>
//                 <input type="email" className="form-control" placeholder="E-mail address" />
//               </div>
//               <div className="col">
//                 <label></label>
//                 <input type="email" className="form-control" placeholder="Phone number placeholder" />
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
//                  <Link to="/organizationdetails" className="text-white text-decoration-none">
//                     Verify your email
//                  </Link>
//              </button>
//             <p className="text-right text-primary font-weight-bold mt-3">
//               <Link to="/login">Already have an account? Sign in</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
// } from 'mdb-react-ui-kit';
// import backgroundImage from '../assets/image1.png';

// const Register = () => {
//   return (
//     <MDBContainer fluid className="d-flex align-items-center justify-content-center vh-1 m-0 p-0">
//       <MDBCard className="w-100">
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <div
//               style={{
//                 backgroundColor: '#001234',
//                 marginBottom: '0px',
//                 paddingBottom: '10px',
//                 height: '100%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <MDBCardImage
//                 src={backgroundImage}
//                 alt="registration form"
//                 className="rounded-start"
//                 style={{ height: '100%', width: '670px' }}
//               />
//             </div>
//           </MDBCol>

//           <MDBCol md="6">
//             <MDBCardBody className="d-flex flex-column align-items-center card-body">
//               <h1
//                 className="fw-normal my-4 pb-3"
//                 style={{ letterSpacing: '0.5px' }}
//               >
//                 Set Up Your Account
//               </h1>

//               <div className="mb-4">
//                 <label htmlFor="firstName" className="form-label">
//                   First Name
//                 </label>
//                 <MDBInput id="firstName" type="text" size="lg" />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="lastName" className="form-label">
//                   Last Name
//                 </label>
//                 <MDBInput id="lastName" type="text" size="lg" />
//               </div>

//               <div className="mb-4 w-90">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label>
//                 <MDBInput id="email" type="email" size="lg" />
//               </div>

//               <div className="mb-4 w-90">
//                 <label htmlFor="phoneNumber" className="form-label">
//                   Phone Number
//                 </label>
//                 <MDBInput id="phoneNumber" type="tel" size="lg" />
//               </div>

//               <div className="mb-4 w-90">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <MDBInput id="password" type="password" size="lg" />
//               </div>

//               <button
//                 className="btn btn-primary mb-3 px-5"
//                 type="button"
//               >
//                 <Link to="/organizationdetails" className="text-white text-decoration-none">
//                   Create Account
//                 </Link>
//               </button>

//               <p className="text-right text-primary font-weight-bold mt-3">
//                 <Link to="/login">Already have an account? Sign in</Link>
//               </p>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default Register;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
// } from 'mdb-react-ui-kit';
// import backgroundImage from '../assets/image1.png';

// const Register = () => {
//   return (
//     <MDBContainer fluid className="d-flex align-items-center justify-content-center vh-100 m-0 p-0">
//       <MDBCard className="w-100">
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <div
//               style={{
//                 backgroundColor: '#001234',
//                 marginBottom: '0px',
//                 paddingBottom: '10px',
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <MDBCardImage
//                 src={backgroundImage}
//                 alt="registration form"
//                 className="rounded-start"
//                 style={{ height: '100%', width: '670px' }}
//               />
//               <div className="text-container mt-4">
//                 <h2 className="text-white mb-3">Welcome to D2S Server</h2>
//                 <div className="d-flex justify-content-between w-75 mb-3">
//                   <div className="circle-number">
//                     <Link to="/link1" className="text-white text-decoration-none">
//                       <div className="circle">1 Link 1</div> 
//                     </Link>
//                   </div>
//                   <div className="circle-number">
//                     <Link to="/link2" className="text-white text-decoration-none">
//                       <div className="circle">2 Link 2</div>
//                     </Link>
//                   </div>
//                   <div className="circle-number">
//                     <Link to="/link3" className="text-white text-decoration-none">
//                       <div className="circle">3 Link</div> 
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </MDBCol>

//           <MDBCol md="6">
//             <MDBCardBody className="d-flex flex-column align-items-center card-body">
//               <h1
//                 className="fw-normal my-4 pb-3"
//                 style={{ letterSpacing: '0.5px' }}
//               >
//                 Set Up Your Account
//               </h1>

//               <div className="mb-4 d-flex">
//                 <div className="col me-2">
//                   <label htmlFor="firstName" className="form-label">
//                     First Name
//                   </label>
//                   <MDBInput id="firstName" type="text" size="lg" />
//                 </div>

//                 <div className="col ms-2">
//                   <label htmlFor="lastName" className="form-label">
//                     Last Name
//                   </label>
//                   <MDBInput id="lastName" type="text" size="lg" />
//                 </div>
//               </div>

//               <div className="mb-4 d-flex">
//                 <div className="col me-2">
//                   <label htmlFor="email" className="form-label">
//                     Email address
//                   </label>
//                   <MDBInput id="email" type="email" size="lg" />
//                 </div>

//                 <div className="col ms-2">
//                   <label htmlFor="phoneNumber" className="form-label">
//                     Phone Number
//                   </label>
//                   <MDBInput id="phoneNumber" type="tel" size="lg" />
//                 </div>
//               </div>

//               <div className="mb-4 w-90">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <MDBInput id="password" type="password" size="lg" />
//               </div>

//               <button
//                 className="btn btn-primary mb-3 px-5"
//                 type="button"
//               >
//                 <Link to="/organizationdetails" className="text-white text-decoration-none">
//                   Create Account
//                 </Link>
//               </button>

//               <p className="text-right text-primary font-weight-bold mt-3">
//                 <Link to="/login">Already have an account? Sign in</Link>
//               </p>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default Register;
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import backgroundImage from '../assets/image1.png';

const Register = () => {
  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center vh-30 m-0 p-0">
      <MDBCard className="w-100">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div
              style={{
                backgroundColor: '#001234',
                marginBottom: '0px',
                paddingBottom: '10px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MDBCardImage
                src={backgroundImage}
                alt="registration form"
                className="rounded-start"
                style={{ height: '100%', width: '670px' }}
              />
              <div className="text-container mt-4">
                <h2 className="text-white-mb-3">Welcome to D2S Server</h2>
                {/* <div className="d-flex flex-column align-items-center mb-3"> */}
                  <div className="circle-number-mb-2">
                    <Link to="/register" className="text-white text-decoration-none">
                      <div className="circle-circle-red-border">1. User Details</div> 
                    </Link>
                  </div>
                  <div className="circle-number-mb-2">
                    <Link to="/organizationdetails" className="text-white text-decoration-none">
                      <div className="circle-circle-red-border">2. Organization Details</div> 
                    </Link>
                  </div>
                  <div className="circle-number-mb-2">
                    <Link to="/paymentinformation" className="text-white text-decoration-none">
                      <div className="circle-circle-red-border">3. Payment Information</div> 
                    </Link>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column align-items-center card-body">
              <h1
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '0.5px' }}
              >
                Set Up Your Account
              </h1>

              <div className="mb-4 d-flex">
                <div className="col me-2">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <MDBInput id="firstName" type="text" size="lg" />
                </div>

                <div className="col ms-2">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <MDBInput id="lastName" type="text" size="lg" />
                </div>
              </div>

              <div className="mb-4 d-flex">
                <div className="col me-2">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <MDBInput id="email" type="email" size="lg" />
                </div>

                <div className="col ms-2">
                  <label htmlFor="phoneNumber" className="form-label">
                     + 254 Phone Number
                  </label>
                  <MDBInput id="phoneNumber" type="tel" size="lg" />
                </div>
              </div>

              <div className="mb-4 w-90">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <MDBInput id="password" type="password" size="lg" />
              </div>

              <button
                className="btn btn-primary mb-3 px-5"
                type="button"
              >
                <Link to="/organizationdetails" className="text-white text-decoration-none">
                  Create Account
                </Link>
              </button>

              <p className="text-right text-primary font-weight-bold mt-3">
                <Link to="/login">Already have an account? Sign in</Link>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};


export default Register;
