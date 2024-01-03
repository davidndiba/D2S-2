// // components/NewSessionsContainer.js
// import React from 'react';
// import './NewSessionsContainer.css'; // Import your custom CSS file for styling

// const NewSessionsContainer = () => {
//   return (
//     <div className="new-sessions-container">
//       <div className="button-row">
//         <button className="btn btn-outline-primary">Button 1</button>
//         <button className="btn btn-outline-primary">Button 2</button>
//         <button className="btn btn-outline-primary">Button 3</button>
//         <button className="btn btn-outline-primary">Button 4</button>
//       </div>
//       <div className="section-title">
//         <h4>New Sessions</h4>
//         <p>Servers</p>
//       </div>
//       <div className="button-like-container-row">
//         <div className="button-like-container">
//           <p>Text 1</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//         <div className="button-like-container">
//           <p>Text 2</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//       </div>
//       <div className="button-like-container-row">
//         <div className="button-like-container">
//           <p>Text 3</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//         <div className="button-like-container">
//           <p>Text 4</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewSessionsContainer;
// components/NewSessionsContainer.js
// import React from 'react';
// import './NewSessionsContainer.css'; 

// const NewSessionsContainer = () => {
//   return (
//     <div className="new-sessions-container">
//       <div className="button-row">
//         <button className="btn btn-outline-primary">Button 1</button>
//         <button className="btn btn-outline-primary">Button 2</button>
//         <button className="btn btn-outline-primary">Button 3</button>
//         <button className="btn btn-outline-primary">Button 4</button>
//       </div>
//       <div className="section-title">
//         <h4>New Sessions</h4>
//         <p>Servers</p>
//       </div>
//       <div className="button-like-container-row">
//         <div className="button-like-container">
//           <p>Text 1</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//         <div className="button-like-container">
//           <p>Text 2</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//       </div>
//       <div className="button-like-container-row">
//         <div className="button-like-container">
//           <p>Text 3</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//         <div className="button-like-container">
//           <p>Text 4</p>
//           <div className="dropdown-arrow">&#9662;</div>
//         </div>
//         <button className="btn btn-outline-success">Load</button>
//         <button className="btn btn-outline-danger">Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default NewSessionsContainer;
// components/NewSessionsContainer.js
import React from 'react';
import './NewSessionsContainer.css';

const NewSessionsContainer = () => {
  return (
    <div className="new-sessions-container">
      <div className="button-row">
        <button className="btn btn-outline-primary">Sessions</button>
        <button className="btn btn-outline-primary">Activity Log</button>
        <button className="btn btn-outline-primary">Mapping</button>
        <button className="btn btn-outline-primary">Scheduler</button>
      </div>
      <div className="section-title">
        <h4>New Sessions</h4>
        <p>Servers</p>
      </div>
      <div className="button-like-container-row">
        <div className="button-like-container">
          <p>KHIS Server (Source)</p>
          <div className="dropdown-arrow">&#9662;</div>
        </div>
        <div className="button-like-container">
          <p>3PM Server (Destination)</p>
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="section-title">
        <p>Session Type</p>
      </div>
      <div className="button-like-container-row">
        <div className="button-like-container">
          <p>Program Indicators</p>
          <div className="dropdown-arrow">&#9662;</div>
        </div>
        <div className="button-like-container">
          <p>Data Elements</p>
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="button-row">
        <button className="btn btn-outline-success">Load</button>
        <button className="btn btn-outline-danger">Cancel</button>
      </div>
    </div>
  );
};

export default NewSessionsContainer;
