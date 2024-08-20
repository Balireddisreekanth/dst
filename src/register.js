
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './register.css';
import Navbar from './navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    graduation: '',
    branchName: '',
    collegeName: '',
    mode: '',
    examCenter: '',
    gender: '',
    address: '',
    role: 'student',
  });

  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [branches, setBranches] = useState([]);
  const [nearCenters, setNearCenters] = useState([]);
  const [branchManagerEmail, setBranchManagerEmail] = useState('');

  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`${api}/branches`);
        setBranches(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };

    const fetchNearCenters = async () => {
      try {
        const response = await axios.get(`${api}/near-centers`);
        setNearCenters(response.data);
        console.log("nearByCenter",response.data)
      } catch (error) {
        console.error('Error fetching near centers:', error);
      }
    };

    fetchBranches();
    fetchNearCenters();
  }, [api]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      // Validate phone number format
      if (!/^\d{10}$/.test(value) && value !== '') {
        setPhoneError('Phone number must be exactly 10 digits');
      } else {
        setPhoneError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError(''); // Reset password error message
    }

    if (name === 'branchName') {
      fetchBranchManagerEmail(value);
    }
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  const fetchBranchManagerEmail = async (examCenter) => {
    try {
      const response = await axios.get(`${api}/branch-manager-email/${examCenter}`);
      if (response.status === 200) {
        setBranchManagerEmail(response.data.email);
      } else {
        setBranchManagerEmail('');
      }
    } catch (error) {
      console.error('Failed to fetch branch manager email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (phoneError) {
      return; 
    }

    if (!recaptchaToken) {
      alert('Please complete the CAPTCHA');
      return;
    }

    try {
      const response = await axios.post(`${api}/register`, { ...formData, recaptchaToken });
      console.log(response.data);
      alert("Registration is successful");
      navigate(`/login`);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        graduation: '',
        branchName: '',
        collegeName: '',
        mode: '',
        examCenter: '',
        gender: '',
        address: '',
        role: 'student',
      });
      setRecaptchaToken(null);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'There was an error!');
      } else {
        console.error('There was an error!', error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
            maxLength="10"
          />
          {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input 
              type={passwordVisible ? 'text' : 'password'} 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <span className="eye-icon" onClick={handlePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input 
              type={confirmPasswordVisible ? 'text' : 'password'} 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />
            <span className="eye-icon" onClick={handleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
        </div>
        <div className="form-group">
          <label>Graduation</label>
          <select name="graduation" value={formData.graduation} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="bachelors">Bachelor's</option>
            <option value="masters">Master's</option>
          </select>
        </div>
        <div className="form-group">
          <label>Branch Name</label>
          <input type="text" name="branchName" placeholder="ex:- computer science" value={formData.branchName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>College Name</label>
          <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mode</label>
          <select name="mode" value={formData.mode} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="oncampus">OnCampus</option>
          </select>
        </div>
        {formData.mode === 'offline' && (
          <div className="form-group">
            <label>Exam Center</label>
            <select name="examCenter" value={formData.examCenter} onChange={handleChange} required>
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch.branchName}>{branch.branchName}</option>
            ))}
          </select>
          </div>
        )}
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LcXnyYqAAAAAGomGtrZJPXiMW3ekwWJjIRiJSKJ"
            onChange={handleRecaptcha}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
