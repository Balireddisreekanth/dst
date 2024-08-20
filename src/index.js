import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './register';
import Login from './login';
import Awards from './scholarship&awards';
import Sidebar from './Admin/Sidebar';
import AdminDashboard from "./Admin/AdminDashboard"; 
import Studentslidebar from './Student/Studentslidebar';
import StudentDashboard from './Student/studentDashboard';
import Studentdetails from './Student/Studentdetails';
import ExamPapper from './Student/ExamPapper';
import SampleQuestion from './samplequestion'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route,Navigate  } from 'react-router-dom';
import Examstructure from './examstructure';


const role = localStorage.getItem('role');
console.log(role)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/admin/:id" element={<Sidebar />} />
      <Route path="/student/:id" element={<Studentslidebar />} />
      <Route path="/studentDashboard" element={<StudentDashboard />}/>
      {/* <Route path="/admin/adminDashboard" element={<AdminDashboard/>} /> */}
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/Studentdetails/:id" element={<Studentdetails />} />
        <Route path ='/awards' element={<Awards/>}></Route>
        <Route path ='/samplequestion' element={<SampleQuestion/>}></Route>
        <Route path ='/examstructure' element={<Examstructure/>}></Route>
        <Route path='Student/ExamPapper' element={<ExamPapper/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
