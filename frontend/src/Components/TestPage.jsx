// src/Pages/TestPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const mockQuestions = {
  1: [
    { id: 101, question: "What is Newton's second law?", options: ["F=ma", "E=mc²", "V=IR", "None"], correct: 0 },
    { id: 102, question: "What is the unit of force?", options: ["Watt", "Pascal", "Newton", "Joule"], correct: 2 },
  ],
  2: [
    { id: 201, question: "What is the value of x in 2x + 3 = 7?", options: ["2", "3", "4", "5"], correct: 0 },
  ],
};

const TestPage = () => {
  const { testId } = useParams();
  const questions = mockQuestions[testId] || [];

  return (
    <div className="test-page">
      <h2>📝 Test Questions</h2>
      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        questions.map((q, index) => (
          <div key={q.id} className="question">
            <p><strong>Q{index + 1}:</strong> {q.question}</p>
            {q.options.map((opt, i) => (
              <div key={i}>
                <input type="radio" id={`q${q.id}_${i}`} name={`q${q.id}`} value={i} />
                <label htmlFor={`q${q.id}_${i}`}>{opt}</label>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default TestPage;
