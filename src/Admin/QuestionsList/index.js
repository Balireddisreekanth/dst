import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const QuestionsList = () => {
  const [questions, setQuestions] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';

  const approveExam = async () => {
    try {
      const response = await axios.post(`${api}/approve-exam`);
      alert(response.data.message);
    } catch (error) {
      console.error('Error approving exam:', error);
    }
  };

  const disableExam = async () => {
    try {
      const response = await axios.post(`${api}/disable-exam`);
      alert(response.data.message);
    } catch (error) {
      console.error('Error disabling exam:', error);
    }
  };

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
  }, [api]);

  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionId]: optionId
    }));
  };

  return (
    <div className="questions-list">
      <h2>Questions List</h2>
      {Object.keys(questions).sort().map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>
          {questions[category] && questions[category].length > 0 ? (
            questions[category].map((q) => (
              <div key={q.question_id} className="question">
                <h4>{q.question_text}</h4>
                <ul>
                  {q.options.map((option) => (
                    <li key={option.id}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${q.question_id}`}
                          value={option.id}
                          checked={selectedOptions[q.question_id] === option.id}
                          onChange={() => handleOptionChange(q.question_id, option.id)}
                        />
                        {option.text}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No questions available in this category.</p>
          )}
        </div>
      ))}
      <div>
        <button onClick={approveExam}>Approve Exam Start</button><br/>
        <button onClick={disableExam} className='disabled'>Disable Exam Start</button>
      </div>
    </div>
  );
};

export default QuestionsList;
