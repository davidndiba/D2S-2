// // components/SearchBar.js
// import React from 'react';
// import './SearchBar.css'; 

// const SearchBar = () => {
//   return (
//     <div className="search-bar-container">
//       <div className="search-bar">
//       <div className="add-new-server-button">
//         <button className="btn btn-primary">+ Add New Server</button>
//       </div>
//         <input type="text" placeholder="Search..." />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
// import React from 'react';
// import './SearchBar.css'; 

// const SearchBar = () => {
//   return (
//     <div className="search-bar-container">
//       <div className="add-new-server-button">
//         <button className="btn btn-primary">+ Add New Server</button>
//       </div>
//       <div className="search-bar">
//         <span className="material-symbols-outlined">&#xe8b6;</span> {/* Google Fonts Icon */}
//         <input type="text" placeholder="Search..." />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React from 'react';
import './SearchBar.css'; 

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <span className="material-symbols-outlined">&#xe8b6;</span> 
        <input type="text" placeholder="Search..." />
        <span className="search-label"></span>
      </div>
      <div className="add-new-server-button">
        <button className="btn-btn-primary">+ Add New Server</button>
      </div>
    </div>
  );
};

export default SearchBar;
