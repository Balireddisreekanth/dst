import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import { useParams,Link } from 'react-router-dom';

const Studentdetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const [examApproved, setExamApproved] = useState(false);

  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  useEffect(() => {
    const checkExamStatus = async () => {
      try {
        const response = await axios.get(`${api}/exam-status`);
        setExamApproved(response.data.examApproved);
      } catch (error) {
        console.error('Error checking exam status:', error);
      }
    };

    checkExamStatus();
  }, []);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`${api}/student/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
        setError('Failed to fetch student details.');
      }
    };

    if (id) {
      fetchStudentDetails();
    }
  }, [id]);

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      {student ? (
        <div className="card">
          <h1>Student Details</h1>
          <table>
            <tbody>
              <tr>
                <th>Hall Ticket Number</th>
                <td>{student.hall_ticket_number}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{student.first_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{student.email}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{student.phone_number}</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
       {examApproved ? (
        <button className='FOR'><Link to="/Student/ExamPapper" className='toplk'>Start Exam</Link></button>
      ) : (
        <p className='FOR'>Waiting for admin approval to start the exam...</p>
      )}
    </div>
  );
};

export default Studentdetails;
