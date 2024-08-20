// src/components/Sidebar.js
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './index.css';
import AddQuestion from '../AddQuestion';
import QuestionsList from '../QuestionsList';
import Evalution from '../Evalution';
import AdminDashboard from '../AdminDashboard';
import BranchNames from '../BranchNames';

const Sidebar = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div style={{ display: "flex", justifyContent: 'space-between', width: "100vw" }}>
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/admin_Dashboard" activeClassName="active-link">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/admin/add-question" activeClassName="active-link">Add Question</NavLink>
            </li>
            <li>
              <NavLink to="/admin/questions" activeClassName="active-link">Questions List</NavLink>
            </li>
            <li>
              <NavLink to="/admin/evalution" activeClassName="active-link">Evalution</NavLink>
            </li>
            <li>
              <NavLink to="/admin/branch_names" activeClassName="active-link">BranchNames</NavLink>
            </li>
            <li className='click'>
              <button className='click'onClick={() => {
                localStorage.removeItem('role');
                window.location.href = '/login';
              }}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ height: "100vh" }}>
        {id === 'add-question' && <AddQuestion />}
        {id === 'questions' && <QuestionsList />}
        {id === 'evalution' && <Evalution />}
        {id === 'admin_Dashboard' && <AdminDashboard />}
        {id === 'branch_names' && <BranchNames />}
      </div>
    </div>
  );
};

export default Sidebar;
