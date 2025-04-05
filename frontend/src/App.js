import './App.css';
import '../src/assets/css/style.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


//importing Main components
import Header from './components/header';
import Mainpage from './components/main';
import AddItem from './components/dashboard/admin';
import AdminDashboard from './components/dashboard/admin_dashboard';
import DeleteItem from "./components/dashboard/deleteitem";
import ModifyItems from "./components/dashboard/modifyitems";
import CheckOrders from "./components/dashboard/checkorders";
import CheckUsers from "./components/dashboard/checkusers";
import CheckItems from "./components/dashboard/checkitems";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path='/admin/admindashboard' element={<AdminDashboard/>}/>
            <Route path="/admin/additem" element={<AddItem />} />
            <Route path="/admin/delete-item" element={<DeleteItem />} />
            <Route path="/admin/modify-items" element={<ModifyItems />} />
            <Route path="/admin/check-orders" element={<CheckOrders />} />
            <Route path="/admin/check-users" element={<CheckUsers />} />
            <Route path="/admin/check-items" element={<CheckItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
