import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Test = () => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${api}/check-hallticket`, {
        hallticketNumber: value,
      });

      if (response.data.valid) {
        const studentId = response.data.student.id;
        navigate(`/Studentdetails/${studentId}`);
      } else {
        setErrorMessage('Invalid Hallticket Number.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setErrorMessage('Server error, please try again later.');
    }
  };

  return (
    <div className='enter'>
      <input
        type="text"
        placeholder="Enter your Hallticket Number"
        maxLength="11"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Test;
