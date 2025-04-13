// src/Pages/TestPage.jsx
import React, { useState } from 'react';
import questions from "./Questions.json";
import Navbar from './Navbar';
import "../styles/TestPage.css";

const TestPage = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers.hasOwnProperty(index) && userAnswers[index] === q.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };
  

  return (
    <>
      <Navbar />
      {score === null ? (
        <div className="test-wrapper">
          <h1 id="heading">Physics Unit-1 Electrostatics</h1>

          {questions.map((q, index) => (
            <div className="question-container" key={index}>
              <h3 className="question-title">{q.question}</h3>
              {q.options.map((opt, i) => (
                <label key={i} className="option">
                  <input
                    type="radio"
                    name={`q${index}`}
                    value={opt}
                    checked={userAnswers[index] === opt}
                    onChange={() => handleOptionChange(index, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}

          <button className="submit-btn" onClick={handleSubmit}>Submit Test</button>
        </div>
      ) : (
        <div className="score-container">
          <h2 className="score-text">🎯 Your Score: {score} / {questions.length}</h2>
        </div>
      )}
    </>
  );
};

export default TestPage;
