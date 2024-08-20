import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentResults = ({ email }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`${api}/exam-responses/student/${email}`);
        setResults(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching results:', err);
        setError('Failed to fetch results.');
        setLoading(false);
      }
    };

    fetchResults();
  }, [email]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Your Exam Results</h1>
      {results.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Response ID</th>
              <th>Score</th>
              <th>Exam ID</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
              <tr key={result.response_id}>
                <td>{result.response_id}</td>
                <td>{result.score}</td>
                <td>{result.exam_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No results available.</div>
      )}
    </div>
  );
};

export default StudentResults;
