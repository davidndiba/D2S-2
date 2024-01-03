// components/SearchBar.js
import React from 'react';
import './SearchBar.css'; 

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
      <div className="add-new-server-button">
        <button className="btn btn-primary">+ Add New Server</button>
      </div>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchBar;
