// // components/NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           Your App
//         </Link>
//         {/* Add more navigation links as needed */}
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/page1">
//                 Page 1
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/page2">
//                 Page 2
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
// Overview.js
import React from 'react';
import Sidebar from '../pages/SideView';

const Overview = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          {/* Your main content goes here */}
          <h2>Main Content</h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
