// src/components/Sidebar.js
import React from 'react';
import { NavLink ,useParams} from 'react-router-dom';
import './index.css';
import Test from '../Test';
import Result from '../Result';
// import AddQuestion from '../AddQuestion';
// import QuestionsList from '../QuestionsList';

const Sidebar = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div style={{display:"flex",justifyContent:'space-between',width:"100vw"}}>
    <div className="sidebar">
      <h2>Student Portal</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="" activeClassName="active-link">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/student/Result" activeClassName="active-link">Result</NavLink>
          </li>
          <li>
            <NavLink to="/student/Test" activeClassName="active-link">Test</NavLink>
          </li>
          <li className='click'>
            <button onClick={() => {
              localStorage.removeItem('role');
              window.location.href = '/login';
            }}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
     
    </div>
    <div  style={{height:"100vh"}}>
                 {id === 'Test' && <Test/>}
                 {id === 'Result' && <Result/>}
                 {/* {id === 'questions' && <QuestionsList/>}  */}
                 
                </div>
    </div>
  );
};

export default Sidebar;
