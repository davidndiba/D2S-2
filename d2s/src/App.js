// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './components/Overview';
import Servers from './components/Servers';
import ExchangeSessions from './components/ExchangeSessions';
import Mapping from './components/Mapping';
import Register from './pages/Register';
import OrganizationDetails from './pages/OrganizationDetails';
import PaymentInformation from './pages/PaymentInformation';
import PaymentInformation_1 from './pages/PaymentInformation_1';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/organizationdetails' element={<OrganizationDetails/>} />
          <Route path='/paymentinformation' element={<PaymentInformation/>} />
          <Route path='/paymentinformation_1' element={<PaymentInformation_1/>} />
          <Route path="/" element={<Login />}>
            <Route index element={<Servers />} />
            <Route path="servers/*" element={<Servers />} />
            <Route path="exchangesessions/*" element={<ExchangeSessions />} />
            <Route path="mapping/*" element={<Mapping />} />
          </Route>
          <Route path='overview' element={<Overview/>} />
          <Route path="servers/:id?" element={<Servers />} />
          <Route path='exchangesessions' element={<ExchangeSessions/>}/>
          <Route path="mapping" element={<Mapping />} />
        </Routes>
    </Router>
  );
};

export default App;
