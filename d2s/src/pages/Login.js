// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../assets/image1.png';
// import image from '../assets/dhis21.png';
// import image1 from '../assets/image 21.png';
// import image2 from '../assets/image 22.png';
// import image3 from '../assets/image 23.png';
// import './Login.css';

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="row">
//         <div className="col-md-5 image-text-container">
//           <div className="d-flex flex-column align-items-center justify-content-center h-100">
//             <img src={backgroundImage} alt="Background" className="img-fluid mb-6" />
//             <div className="text">
//               <p className="body-large">
//                 The comprehensive and user-friendly platform that facilitates seamless data exchange between DHIS2 instances, as well as other data collection tools like Commcare, Kobo Toolbox, and ODK. Its interface facilitates both one-time and scheduled data exchange.
//               </p>
//               <div className="display-large">Welcome to D2S Stream.</div>
//               <p className="text-wrapper">D2S: Automating Data Exchange for DHIS2 and Beyond</p>
//               <div className="div dhis-wrapper">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <img className="dhis dhis-image" alt="Dhis" src={image} />
//                     <img className="dhis dhis-image-1" alt="Dhis" src={image1} />
//                   </div>
//                   <div className="col-md-6">
//                     <img className="dhis dhis-image-2" alt="Dhis" src={image2} />
//                     <img className="dhis dhis-image-3" alt="Dhis" src={image3} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-2">
//           <div className="form-container">
//             <div className="login-form">
//               <div className="form-header">
//                 <h2>Sign In to Your Account</h2>
//               </div>
//               <div className="form-input">
//                 <label htmlFor="email">Email Address:</label>
//                 <input id="email" type="email" className="form-control" placeholder="Enter your email" />
//               </div>
//               <div className="form-input">
//                 <label htmlFor="password">Password:</label>
//                 <input id="password" type="password" className="form-control" placeholder="Enter your password" />
//               </div>
//               <Link to="/overview" className="btn btn-primary sign-in-button">
//                 Sign In
//               </Link>
//               <div className="form-links">
//                 <a href="#!" className="forgot-password text-orange">
//                   Forgot your password?
//                 </a>
//                 <span className="divider"> | </span>
//                 <Link to="/register" className="create-account">
//                   Don't have an account? Create one
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React from "react";
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Image from "../assets/image1.png";

// logos
import Logo1 from "../assets/dhis21.png";
import Logo2 from "../assets/image 21.png";
import Logo3 from "../assets/image 22.png";
import Logo4 from "../assets/image 23.png";

const Login = () => {
  return (
    <MDBContainer className="my-5 d-flex align-items-center">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div
              style={{
                backgroundColor: "#001234",
                marginBottom: "-20px",
                paddingBottom: "100px",
              }}
            >
              <MDBCardImage
                src={Image}
                alt="login form"
                className="rounded-start w-100"
              />
            </div>
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column align-items-center card-body">
              <h1
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "0.5px" }}
              >
                Sign In to Your Account
              </h1>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <MDBInput id="email" type="email" size="lg" />
              </div>

              <div className="mb-4 w-90">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <MDBInput id="password" type="password" size="lg" />
              </div>
              <Link to="/overview">
              <button className="btn btn-primary mb-4 px-5" type="button">
                Sign In
              </button>
              </Link>

              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <Link to="/register">
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Create one
                </a>
              </p>
              </Link>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div
              style={{
                backgroundColor: "#001234",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <p style={{ color: "#fff", margin: "0" }}>
                The comprehensive and user-friendly platform that facilitates
                seamless data exchange between DHIS2 instances, as well as other
                data collection tools like Commcare, Kobo Toolbox, and ODK. Its
                interface facilitates both one-time and scheduled data exchange.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div
              style={{
                margin: "0",
                backgroundColor: "#001234",
                textAlign: "left",
                padding: "20px",
              }}
            >
              <h1 style={{ color: "#fff", fontSize: "2rem" }}>
                Welcome to D2S Stream
              </h1>
              <p style={{ color: "#fff", fontSize: "" }}>
                {" "}
                D2S: Automating Data Exchange for DHIS2 and Beyond
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#001234",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={Logo1}
                    alt="Logo 1"
                    style={{ marginBottom: "10px" }}
                  />
                  <img src={Logo2} alt="Logo 2" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={Logo3}
                    alt="Logo 3"
                    style={{ marginBottom: "10px" }}
                  />
                  <img src={Logo4} alt="Logo 4" />
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;