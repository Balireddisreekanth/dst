import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${api}/login`, formData);
      const { role, token, id } = response.data;
  
      localStorage.setItem('role', role);
      localStorage.setItem('id', id);
      localStorage.setItem('token', token); 
  
      if (role === 'admin') {
        alert('Admin login successful');
        navigate('/admin/admin_Dashboard');
      } else if (role === 'student') {
        alert('Student login successful');
        navigate('/studentDashboard');
      } else {
        alert('Unknown role, please contact support.');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      alert('Login failed, please try again.');
    }
  };

  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get(`${api}/protected`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching protected data:', error.response ? error.response.data : error.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" id="showes">
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={toggleShowPassword}
  />
  <label htmlFor="showPassword">
    Show Password
  </label>
</div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
