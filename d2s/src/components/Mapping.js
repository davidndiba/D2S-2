import React from 'react';
import Sidebar from '../pages/SideView';
import Navbar1 from '../pages/Navbar1';
import ExchangeRow from '../pages/ExchangeRows';
import AdditionalContainer from '../pages/AdditionalContainer';
import MappingNewSessionsContainer from '../pages/MappingNewSessionsContainer';
import MappedUnitsTable from '../pages/MappedUnitsTable';
import MappingContainer from '../pages/MappingContainer';

const Mapping =() => {
    return(
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" id="content">
            <Navbar1/>
            <ExchangeRow/>
            <div className="d-flex">
            <AdditionalContainer />
            <MappingNewSessionsContainer />
          </div>
          <MappedUnitsTable/>
          <MappingContainer />
            </div>
            </div>
            </div>

    )
}
export default Mapping;