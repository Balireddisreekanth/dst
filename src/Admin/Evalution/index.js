import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Evaluation = () => {
  const [examResponses, setExamResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    collegeName: '',
    email: '',
    score: ''
  });
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  useEffect(() => {
    const fetchExamResponses = async () => {
      try {
        const response = await axios.get(`${api}/exam-responses`);
        setExamResponses(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching exam responses:', err);
        setError('Failed to fetch exam responses.');
        setLoading(false);
      }
    };

    fetchExamResponses();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleApproveAll = async () => {
    try {
      // Filter unapproved responses
      const unapprovedResponses = examResponses.filter(response => !response.is_approved);

      // Extract hall ticket numbers for unapproved responses
      const hallTicketNumbers = unapprovedResponses.map(response => response.hall_ticket_number);

      // Send a single request to approve all unapproved responses
      await axios.post(`${api}/exam-responses/approve-all`, { hallTicketNumbers });
      alert('All results approved and emails sent.');

      // Refresh the list of responses
      const response = await axios.get(`${api}/exam-responses`);
      setExamResponses(response.data);
    } catch (err) {
      console.error('Error approving results:', err);
      setError('Failed to approve results.');
    }
  };

  const filteredResponses = examResponses.filter((response) => {
    return (
      response.college_name.toLowerCase().includes(filters.collegeName.toLowerCase()) &&
      response.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      (filters.score === '' || response.score === parseInt(filters.score))
    );
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Exam Responses</h1>

      <div className="filters">
        <input
          type="text"
          name="collegeName"
          placeholder="Filter by College Name"
          value={filters.collegeName}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Filter by Email"
          value={filters.email}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="score"
          placeholder="Filter by Score"
          value={filters.score}
          onChange={handleFilterChange}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Response ID</th>
            <th>Student Name</th>
            <th>College Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Hall Ticket Number</th>
            <th>Score</th>
            <th>Exam ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredResponses.map((response) => (
            <tr key={response.response_id}>
              <td>{response.response_id}</td>
              <td>{response.first_name}</td>
              <td>{response.college_name}</td>
              <td>{response.email}</td>
              <td>{response.phone_number}</td>
              <td>{response.hall_ticket_number}</td>
              <td>{response.score}</td>
              <td>{response.exam_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="approve-all-btn" onClick={handleApproveAll}>
        Approve All
      </button>
    </div>
  );
};

export default Evaluation;
