
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
      <div className="button-row">
        <button className="btn btn-outline-success">Load</button>
        <button className="btn btn-outline-success">Cancel</button>
        <button className="btn btn-outline-danger">Export</button>
      </div>
    </div>
  );
};

export default NewSessionsContainer;
