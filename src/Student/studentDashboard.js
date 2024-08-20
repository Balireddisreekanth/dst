import React from 'react';
import './studentDashboard.css';
import Studentslidebar from '../Student/Studentslidebar';

const StudentDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
    <div className="student-dashboard">
     <Studentslidebar/>
    </div>
  );
};

export default StudentDashboard;
