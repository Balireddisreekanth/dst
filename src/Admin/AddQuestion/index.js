import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  const api = process.env.REACT_APP_API || 'http://184.72.181.95:8000';
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${api}/add-question`, { question, options, answer, category })
      .then(response => {
        alert('Question, options, answer, and category added successfully!');
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
        setCategory('');
      })
      .catch(error => {
        console.error('There was an error adding the question!', error);
      });
  };

  return (
    <div className='into'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question</label>
          <input type="text" value={question} onChange={handleQuestionChange} required />
        </div>
        <div>
          {options.map((option, index) => (
            <div key={index}>
              <label>Option {index + 1}</label>
              <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} required />
            </div>
          ))}
        </div>
        <div>
          <label>Answer</label>
          <input type="text" value={answer} onChange={handleAnswerChange} required />
        </div>
        <div>
          <label>Category</label>
          <select value={category} onChange={handleCategoryChange} required>
          <option>Select</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Reasoning">Reasoning</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
          </select>
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
