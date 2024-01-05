import React from 'react';
import Sidebar from '../pages/SideView';
import Navbar2 from '../pages/Navbar2';
import ExchangeRows from '../pages/ExchangeRows';
import AdditionalContainer from '../pages/AdditionalContainer';
import NewSessionsContainer from '../pages/NewSessionsContainer';
import MappingContainer from '../pages/MappingContainer';
import MappedUnitsTable from '../pages/MappedUnitsTable';

const ExchangeSessions = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" id="content">
          <Navbar2 />
          <ExchangeRows />
          <div className="d-flex">
            <AdditionalContainer />
            <NewSessionsContainer />
          </div>
          <MappingContainer/>
          <MappedUnitsTable />
        </div>
      </div>
    </div>
  );
};

export default ExchangeSessions;
