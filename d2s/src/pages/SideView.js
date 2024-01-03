// // Sidebar.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faServer, faExchangeAlt, faProjectDiagram, faEnvelope, faBell, faClipboard, faCog } from '@fortawesome/free-solid-svg-icons';
// import './SideBar.css'; 

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h3>D2S Data Exchange</h3>
//       </div>
//       <ul className="list-unstyled components">
//         <li>
//           <FontAwesomeIcon icon={faHome} />
//           Dashboard
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faServer} />
//           Servers
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faExchangeAlt} />
//           Exchange Sessions
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faProjectDiagram} />
//           Mapping
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faEnvelope} />
//           Messages
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faBell} />
//           Notifications
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faClipboard} />
//           Reports
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faCog} />
//           User Settings
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faServer, faExchangeAlt, faProjectDiagram, faEnvelope, faBell, faClipboard, faCog } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>D2S Data Exchange</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <a href="/overview">
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/servers">
            <FontAwesomeIcon icon={faServer} />
            Servers
          </a>
        </li>
        <li>
          <a href="/exchangesessions">
            <FontAwesomeIcon icon={faExchangeAlt} />
            Exchange Sessions
          </a>
        </li>
        <li>
          <a href="/mapping">
            <FontAwesomeIcon icon={faProjectDiagram} />
            Mapping
          </a>
        </li>
        <li>
          <a href="/messages">
            <FontAwesomeIcon icon={faEnvelope} />
            Messages
          </a>
        </li>
        <li>
          <a href="/notifications">
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </a>
        </li>
        <li>
          <a href="/reports">
            <FontAwesomeIcon icon={faClipboard} />
            Reports
          </a>
        </li>
        <li>
          <a href="/user-settings">
            <FontAwesomeIcon icon={faCog} />
            User Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
