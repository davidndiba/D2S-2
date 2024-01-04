// components/AdditionalContent.js
import React from 'react';
import './AdditionalContent.css'; 

const AdditionalContent = () => {
  return (
    <div className="additional-content-container">
      <h3 className='additional-content-container-1'>Performance</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="additional-item">
          <p className='additional-item-1'>Active Servers</p>
            <p className='additional-item-2'>6</p>
            <p className='additional-item-3'>KHIS - 257 Mbps</p>
            <p className='additional-item-4'>DATIM - 256 Mbps</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="additional-item">
            <p></p>
            <p className='additional-item-1'>Data Mapping</p>
            <p className='additional-item-2'>3,500</p>
            <p className='additional-item-3'>KHIS / DHIS - 256</p>
            <p className='additional-item-4'>DATIM / 3PM - 158</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="additional-item">
            <p className='additional-item-1'>Data Migrated</p>
            <p className='additional-item-2'>1.4 Gb</p>
            <p className='additional-item-3'>KHIS Server - 847 Mb</p>
            <p className='additional-item-4'>DATIM Server - 746 Mb</p>
          </div>
        </div>
      </div>
      <table className="table additional-table">
        <thead>
          <tr>
            <th className='additional-table'>Service Sessions</th>
            <th className='additional-table'>Level</th>
            <th className='additional-table'>Periods</th>
            <th className='additional-table'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='additional-table-1'>KHIS / DATIM</td>
            <td className='additional-table-1'>Nairobi County Facilities</td>
            <td>
              <div className="period-content">
                <p className='additional-table-1'>Monthly</p>
                <div className="rectangular-bar-green-1">
                <p className="button-text-1"></p>
               </div>
                <p className='additional-table-1'>17/34</p>
              </div>
            </td>
            <td>
              <div className="button-container">
              <div className="rectangular-bar-green">
                <p className="button-text">View more</p>
               </div>
                <span>▶</span>
              </div>

            </td>
          </tr>
          <tr>
            <td className='additional-table-1'>KHIS / DATIM</td>
            <td className='additional-table-1'>All Counties</td>
            <td>
              <div className="period-content">
                <p className='additional-table-1'>Daily</p>
                <div className="rectangular-bar-green-1">
                <p className="button-text-1"></p>
               </div>
                <p className='additional-table-1'>123/220</p>
              </div>
            </td>
            <td>
              <div className="button-container">
              <div className="rectangular-bar-green">
                <p className="button-text">View more</p>
               </div>
             <span>▶</span>
            </div>

            </td>
          </tr>
          <tr>
            <td className='additional-table-1'>DHIS2 Server 2 / DHIS2 Server 3</td>
            <td className='additional-table-1'>Sub-county Level</td>
            <td>
              <div className="period-content">
                <p className='additional-table-1'>Monthly</p>
                <div className="rectangular-bar-green-4">
                <p className="button-text-1"></p>
               </div>
                <p className='additional-table-1'>7/10</p>
              </div>
            </td>
            <td>
               <div className="button-container">
               <div className="rectangular-bar-green">
                 <p className="button-text">View more</p>
                </div>
                 <span>▶</span>
               </div>
            </td>
          </tr>
          <tr>
            <td className='additional-table-1'>DHIS2 Server 1 / DHIS Server 3</td>
            <td className='additional-table-1'>National Level</td>
            <td>
              <div className="period-content">
                <p className='additional-table-1'>Annually</p>
                <div className="rectangular-bar-green-3">
                <p className="button-text-1"></p>
               </div>
                <p className='additional-table-1'>3/4</p>
              </div>
            </td>
            <td>
              <div className="button-container">
               <div className="rectangular-bar-green">
                 <p className="button-text">View more</p>
               </div>
                <span>▶</span>
               </div> 
            </td>
          </tr>
          <tr>
            <td className='additional-table-1'>DHIS2 Server 4 / DHIS2 Server 5</td>
            <td className='additional-table-1'>CDC Program Facilities</td>
            <td>
              <div className="period-content">
                <p className='additional-table-1'>Weekly</p>
                <div className="rectangular-bar-green-2">
                <p className="button-text-1"></p>
               </div>
                <p className='additional-table-1'>12/12</p>
              </div>
            </td>
            <td>
             <div className="button-container">
               <div className="rectangular-bar-green">
                 <p className="button-text">View more</p>
               </div>
                <span>▶</span>
               </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalContent;
