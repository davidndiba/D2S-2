import React from 'react';
import Sidebar from '../pages/SideView';
import OverviewTitle from '../pages/OverviewTitle'
import NavBar from '../pages/Navbar';
import OverviewContent from '../pages/OverviewContent';
import AdditionalContent from '../pages/AdditionalContent';

const Overview = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <NavBar/>
          <OverviewTitle/>
          <OverviewContent/>
          <AdditionalContent/>
        </div>
      </div>
    </div>
  );
};

export default Overview;
