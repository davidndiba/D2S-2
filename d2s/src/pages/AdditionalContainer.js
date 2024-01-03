// components/AdditionalContainer.js
import React from 'react';
import './AdditionalContainer.css'; // Import your custom CSS file for styling

const AdditionalContainer = () => {
  return (
    <div className="additional-container">
      <div className="sub-container">
        <p>Source Details</p>
        <p>Server name: DHIS2 Server 1</p>
        <p>URL : http://...</p>
        <p>Last Synced: 13th Jul,2023 13:00</p>
        <p>Active: Yes</p>
        <p>Data Exchange:935 Mb</p>
        <p>Exchange Rate: 256 Mbps</p>
        <hr></hr>
        <p>Destination Details</p>
        <p>Server name: DHIS2 Server 1</p>
        <p>URL : http://...</p>
        <p>Last Synced: 13th Jul,2023 13:00</p>
        <p>Active: Yes</p>
        <p>Data Exchange:935 Mb</p>
        <p>Exchange Rate: 256 Mbps</p>
      </div>
      <div className="sub-container">
        <p>Mapping Stats</p>
        <p>Org-units Mapped -95%</p>
        <p>Dataset Mapped -52%</p>
      </div>
    </div>
  );
};

export default AdditionalContainer;
