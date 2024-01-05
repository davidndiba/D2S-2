import React from 'react';
import './MappedUnitsTable.css';

const MappedUnitsTable = () => {
  return (
    <div className="mapped-units-table">
      {/* <h4>Mapped Units</h4> */}
      <table className="table">
        <thead>
          <tr>
            <th className="gray-background">Source</th>
            <th className="gray-background">Destination</th>
            <th className="gray-background"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tb-2'>Org-unit 1 Server 1</td>
            <td className='tb-2'>Org-unit 1 Server 2</td>
            <td className='tb-3'>Unmap</td>
          </tr>
          <tr>
            <td className='tb-2'>Org-unit 2 Server 1</td>
            <td className='tb-2'>Org-unit 2 Server 2</td>
            <td className='tb-3'>Unmap</td>
          </tr>
          <tr>
            <td className='tb-2'>Org-unit 3 Server 1</td>
            <td className='tb-2'>Org-unit 3 Server 2</td>
            <td className='tb-3'>Unmap</td>
          </tr>
          <tr>
            <td className='tb-2'>Org-unit 4 Server 1</td>
            <td className='tb-2'>Org-unit 4 Server 2</td>
            <td className='tb-3'>Unmap</td>
          </tr>
          <tr>
            <td className='tb-2'>Org-unit 5 Server 1</td>
            <td className='tb-2'>Org-unit 5 Server 2</td>
            <td className='tb-3'>Unmap</td>
          </tr>
        </tbody>
      </table>
      <div className="button-row-1">
        <button className="btn btn-save">Save</button>
        <button className="btn btn-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default MappedUnitsTable;
