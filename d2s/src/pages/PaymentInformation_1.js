// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../assets/image1.png';

// function PaymentInformation_1() {
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
//                   <span className="section-number-2">Organization Details</span>
//                 </Link>
//               </div>
//               <div className="text-section">
//                 <Link to="/paymentinformation" className="section-number">
//                   <span className="section-number">3</span>
//                 </Link>
//                 <Link to="/paymentinformation" className="section-title">
//                   <span className="section-number-3">Payment Information</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 registration-form-container">
//           <form>
//             <h2 className="mb-3 text-primary font-weight-bold">Payment Information</h2>
//             <p className="text-right text-primary font-weight-bold mt-3">
//               <Link to="/overview">Proceed to D2S Data Exchange</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentInformation_1;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/image1.png';
import Checkcircleoutline1 from '../assets/Checkcircleoutline1.png'; 

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
                  <span className="section-number-3">Payment Information</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 registration-form-container d-flex flex-column align-items-center justify-content-center">
          <form>
            {/* <h2 className="mb-3 text-primary font-weight-bold">Payment Information</h2> */}
            
            {/* <p className="mb-3 text-center text-primary font-weight-bold">
              Some descriptive text here.
            </p> */}

            <Link to="/overview">
              <img
                src={Checkcircleoutline1}
                alt="Click me"
                className="img-fluid mb-3"
                style={{ cursor: 'pointer' }}
              />
            </Link>
             <p className="mb-3-text-center-text-primary-font-weight-bold-1">
             Your account profile has been created. 
            </p> 

            <p className="mb-3-text-center-text-primary-font-weight-bold">
            Your details are currently under review. You will receive an account verification email once your details have been confirmed. 
            </p>
            
            {/* <p className="text-right text-primary font-weight-bold mt-3">
              <Link to="/overview">Proceed to D2S Data Exchange</Link>
            </p> */}
            <p className="text-right mt-3">
              <Link to="/overview" className="btn btn-primary">
                Proceed to D2S Data Exchange
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentInformation_1;

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
// import computerImage from '../assets/monitor-mobbile.png'; 
// import Checkcircleoutline1 from '../assets/Checkcircleoutline1.png'; 

// const PaymentInformation = () => {
//   return (
//     <MDBContainer fluid className="d-flex align-items-center justify-content-center vh-10 m-0 p-0">
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
//                 <h2 className="text-white-mb-3">Welcome to D2S Server</h2>
//                 <div className="circle-number mb-2">
//                   <Link to="/register" className="text-white text-decoration-none">
//                     <div className="circle-circle-red-border">1. User Details</div> 
//                   </Link>
//                 </div>
//                 <div className="circle-number mb-2">
//                   <Link to="/organizationdetails" className="text-white text-decoration-none">
//                     <div className="circle-circle-red-border">2. Organization Details</div> 
//                   </Link>
//                 </div>
//                 <div className="circle-number">
//                   <Link to="/paymentinformation" className="text-white text-decoration-none">
//                     <div className="circle-circle-red-border">3. Payment Information</div>
//                   </Link>
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
//                 Payment Information
//               </h1>

             
//               <div className="mb-3 d-flex justify-content-between">
//                 <div className="image-container" style={{ backgroundColor: 'blue', padding: '10px', borderRadius: '8px', marginRight: '20px' }}>
//                   <img src={computerImage} alt="Computer" className="img-fluid" />
//                 </div>
//                 <div className="image-container" style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '8px' }}>
//                   <img src={Checkcircleoutline1} alt="Smartphone" className="img-fluid" />
//                 </div>
//               </div>
//                <div className="mb-3 d-flex justify-content-between">
//                 <div className="image-container" style={{ backgroundColor: '#0593B8', padding: '20px', borderRadius: '8px', marginRight: '20px', textAlign: 'center' }}>
//                   <img src={computerImage} alt="Computer" className="img-fluid mb-2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//                   <p className="text-white">Flexible Package</p>
//                 </div>
//                 <div className="image-container" style={{ backgroundColor: '#F0EEEE', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//                   <img src={Checkcircleoutline1} alt="Smartphone" className="img-fluid mb-2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//                   <p className="text-white">Fixed Package</p>
//                 </div>
//               </div>
//               <p className="mb-3-text-center-text-primary-font-weight-bold">
//                 The flexible package is billed based on your usage while the fixed package is billed based on a set limit
//               </p>

//               <div className="mb-3 d-flex">
//                 <MDBCol size="6" className="me-2">
//                   <label htmlFor="field3" className="form-label">
//                   </label>
//                   <MDBInput id="field3" type="text" size="lg" placeholder='Credit/Debit Card Number' />
//                 </MDBCol>

//                 <MDBCol size="6" className="ms-2">
//                   <label htmlFor="field2" className="form-label">
//                   </label>
//                   <MDBInput id="field2" type="text" size="lg" placeholder='Expiry Date' />
//                 </MDBCol>
//               </div>

//               <div className="mb-3 d-flex">
//                 <MDBCol size="9" className="me-2">
//                   <label htmlFor="field1" className="form-label">
//                   </label>
//                   <MDBInput id="field1" type="text" size="lg" placeholder='Card Holders Name' />
//                 </MDBCol>
//               </div>

//               <Link to="/paymentinformation_1" className="btn btn-primary btn-block">
//                 Save and continue
//               </Link>

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

// export default PaymentInformation;
