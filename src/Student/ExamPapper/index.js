import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const ExamPapper = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [studentId, setStudentId] = useState(null);
  const examId = 1; // Example exam ID, update as necessary
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  useEffect(() => {
    const storedStudentId = localStorage.getItem('id');
    if (storedStudentId) {
      setStudentId(storedStudentId);
    }
  }, []);

  useEffect(() => {
    axios.get(`${api}/questions`)
      .then(response => {
        const groupedQuestions = response.data.reduce((acc, question) => {
          if (!acc[question.category]) {
            acc[question.category] = [];
          }
          acc[question.category].push(question);
          return acc;
        }, {});
        setQuestions(groupedQuestions);
      })
      .catch(error => {
        console.error('There was an error fetching the questions!', error);
      });
  }, []);

  const handleOptionChange = (questionId, optionText) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionText
    });
  };

  const submitResponse = async () => {
    if (!studentId) {
      alert('Student ID is not available');
      return;
    }

    const payload = {
      id: studentId,
      exam_id: examId,
      responses: JSON.stringify(selectedOptions) // Ensure responses are in JSON format
    };

    console.log('Submitting payload:', payload);

    try {
      const response = await axios.post(`${api}/submit-exam`, payload);
      console.log('Response data:', response.data);

      if (response.data.score !== undefined) {
        alert(`Exam responses submitted successfully.`);
      } else {
        alert('Exam responses submitted successfully. However, the score is undefined.');
      }
    } catch (error) {
      console.error('Error submitting response:', error.response ? error.response.data : error.message);
      alert(`Error submitting response: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="questions-list" id="list">
      <h2>Questions List</h2>
      {Object.keys(questions).sort().map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>
          {questions[category].map((q) => (
            <div key={q.question_id} className="question">
              <h4>{q.question_text}</h4>
              <ul>
                {q.options.map((option) => (
                  <li key={option.id}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${q.question_id}`}
                        value={option.text}
                        checked={selectedOptions[q.question_id] === option.text}
                        onChange={() => handleOptionChange(q.question_id, option.text)}
                      />
                      {option.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <button onClick={submitResponse}>Submit Answers</button>
    </div>
  );
};

export default ExamPapper;
