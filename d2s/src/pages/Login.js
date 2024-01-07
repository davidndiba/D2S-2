// import React from "react";
// import { Link } from 'react-router-dom';
// import {
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
// } from "mdb-react-ui-kit";
// import Image from "../assets/image1.png";

// // logos
// import Logo1 from "../assets/dhis21.png";
// import Logo2 from "../assets/image 21.png";
// import Logo3 from "../assets/image 22.png";
// import Logo4 from "../assets/image 23.png";

// const Login = () => {
//   return (
//     <MDBContainer fluid className="vh-10 d-flex align-items-center justify-content-center">
//       <MDBCard>
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <div
//               style={{
//                 backgroundColor: "#001234",
//                 marginBottom: "0px",
//                 paddingBottom: "10px",
//                 // height:"6px", 
//               }}
//             >
//               <MDBCardImage
//                 src={Image}
//                 alt="login form"
//                 className="rounded-start w-100"
//                 style={{ height: '450px' , width:'100px'}}
//               />
//             </div>
//           </MDBCol>

//           <MDBCol md="6">
//             <MDBCardBody className="d-flex flex-column align-items-center card-body">
//               <h1
//                 className="fw-normal my-4 pb-3"
//                 style={{ letterSpacing: "0.5px" }}
//               >
//                 Sign In to Your Account
//               </h1>

//               <div className="mb-4">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label>
//                 <MDBInput id="email" type="email" size="lg" />
//               </div>

//               <div className="mb-4 w-90">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <MDBInput id="password" type="password" size="lg" />
//               </div>
//               <Link to="/overview">
//               <button className="btn btn-primary mb-4 px-5" type="button">
//                 Sign In
//               </button>
//               </Link>

//               <a className="small text-muted" href="#!">
//                 Forgot password?
//               </a>
//               <Link to="/register">
//               <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                 Don't have an account?{" "}
//                 <a href="#!" style={{ color: "#393f81" }}>
//                   Create one
//                 </a>
//               </p>
//               </Link>

//               <div className="d-flex flex-row justify-content-start">
//                 <a href="#!" className="small text-muted me-1">
//                   Terms of use.
//                 </a>
//                 <a href="#!" className="small text-muted">
//                   Privacy policy
//                 </a>
//               </div>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <div
//               style={{
//                 backgroundColor: "#001234",
//                 padding: "70px",
//                 textAlign: "left",
//                 paddingTop:"18px",
//                 width:'717px',
//                 height:'200px',
//                 font:'inter',
//                 fontWeight:'400',
//                 fontSize:'16px',
//                 lineHeight:'24px',
//                 letterSpacing:'0.5px'
//               }}
//             >
//               <p style={{ color: "#fff", margin: "0",  }}>
//                 The comprehensive and user-friendly platform that facilitates
//                 seamless data exchange between DHIS2 instances, as well as other
//                 data collection tools like Commcare, Kobo Toolbox, and ODK. Its
//                 interface facilitates both one-time and scheduled data exchange.
//               </p>
//             </div>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <div
//               style={{
//                 margin: "0",
//                 backgroundColor: "#001234",
//                 textAlign: "left",
//                 padding: "70px",
//                 width: '717px',
//                 height:'111px',
//                 font:'inter',
//                 fontWeight:'400',
//                 fontSize:'16px',
//                 lineHeight:'24px',
//                 letterSpacing:'0.5px'

//               }}
//             >
//               <h1 style={{ color: "#fff", fontSize: "2rem" }}>
//                 Welcome to D2S Stream
//               </h1>
//               <p style={{ color: "#fff", fontSize: "" }}>
//                 {" "}
//                 D2S: Automating Data Exchange for DHIS2 and Beyond
//               </p>
//             </div>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#001234",
//                 padding: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "space-around",
//                   width: "100%",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={Logo1}
//                     alt="Logo 1"
//                     style={{ marginBottom: "10px" }}
//                   />
//                   <img src={Logo2} alt="Logo 2" />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src={Logo3}
//                     alt="Logo 3"
//                     style={{ marginBottom: "10px" }}
//                   />
//                   <img src={Logo4} alt="Logo 4" />
//                 </div>
//               </div>
//             </div>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

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
    <MDBContainer fluid className="d-flex align-items-center justify-content-center vh-10 m-0 p-0">
      <MDBCard className="w-100">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div
              style={{
                backgroundColor: "#001234",
                marginBottom: "0px",
                paddingBottom: "10px",
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MDBCardImage
                src={Image}
                alt="login form"
                className="rounded-start"
                style={{ height: '100%', width: '670px' }}
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
                <button className="btn btn-primary mb-3 px-5" type="button">
                  Sign In
                </button>
              </Link>

              <a className="small text-muted" href="#!" style={{ color: "#EF6C00" }}>
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
                padding: "70px",
                textAlign: "left",
                paddingTop: "18px",
                width: '100%',
                height: '200px',
                font: 'inter',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.5px',
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
                padding: "70px",
                width: '100%',
                height: '111px',
                font: 'inter',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.5px',
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
