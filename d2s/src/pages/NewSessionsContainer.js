import React from 'react';
import './NewSessionsContainer.css';

const NewSessionsContainer = () => {
  return (
    // <div className="container bigger-container mt-2 mr-auto"> 
     <div className="container bigger-container mt-2 mr-auto">
      <div className="row mb-3">
        <div className="col-3">
          <button className="btn-btn-info-btn-block btn-hover-blue">Sessions</button>
        </div>
        <div className="col-3">
          <button className="btn-btn-info-btn-block btn-hover-blue">Activity Log</button>
        </div>
        <div className="col-3">
          <button className="btn-btn-info-btn-block btn-hover-blue">Mapping</button>
        </div>
        <div className="col-3">
          <button className="btn-btn-info-btn-block btn-hover-blue">Scheduler</button>
        </div>
      </div>
    <h1 className='title-1'>New Session</h1>
      <div className="input-section">
        <h3 className='input-section-1'>Servers</h3>
        <div className="input-container">
          <input type="text" placeholder="KHIS Server (source)" />
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="input-section">
        <h3 className='input-section-1'></h3>
        <div className="input-container">
          <input type="text" placeholder="3PM Server (Destination)" />
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="input-section">
        <h3 className='input-section-1'>Session Type</h3>
        <div className="input-container">
          <input type="text" placeholder="Program Indicators" />
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <div className="input-section">
        <h3 className='input-section-1'></h3>
        <div className="input-container">
          <input type="text" placeholder="Data Elements" />
          <div className="dropdown-arrow">&#9662;</div>
        </div>
      </div>
      <button className="btn btn-success">Load</button>
      <button className="btn btn-success-1">Cancel</button>
    </div>
    // </div>
  );
};

export default NewSessionsContainer;
