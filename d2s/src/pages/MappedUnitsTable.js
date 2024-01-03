// components/MappedUnitsTable.js
import React from 'react';
import './MappedUnitsTable.css';

const MappedUnitsTable = () => {
  return (
    <div className="mapped-units-table">
      <h4>Mapped Units</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Org-unit 1 Server 1</td>
            <td>Org-unit 1 Server 2</td>
            <td>Unmap</td>
          </tr>
          <tr>
            <td>Source Unit 2</td>
            <td>Org-unit 2 Server 2</td>
            <td>Unmap</td>
          </tr>
          <tr>
            <td>Source Unit 1</td>
            <td>Org-unit 3 Server 2</td>
            <td>Unmap</td>
          </tr>
          <tr>
            <td>Source Unit 1</td>
            <td>Org-unit 4 Server 2</td>
            <td>Unmap</td>
          </tr>
          <tr>
            <td>Source Unit 1</td>
            <td>Org-unit 5 Server 2</td>
            <td>Unmap</td>
          </tr>
        </tbody>
      </table>
      <div className="button-row">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default MappedUnitsTable;
