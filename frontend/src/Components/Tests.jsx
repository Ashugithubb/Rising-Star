import React from "react";
import "../styles/Tests.css";

const Tests = () => {
  const todayTests = [
    { subject: "Physics", time: "10:00 AM" },
    { subject: "Maths", time: "12:00 PM" },
  ];

  const recentTests = [
    { subject: "Chemistry", date: "6 April" },
    { subject: "Biology", date: "4 April" },
  ];

  const lastRank = {
    studentName: "Rohan Sharma",
    rank: 2,
    score: "18 / 20",
    subject: "Physics",
  };

  return (
    <div className="horizontal-container">
      {/* Section 1: Today’s Tests */}
      <section className="section today-tests">
        <h2>📅 Today's Tests</h2>
        <ul>
          {todayTests.map((test, index) => (
            <li key={index}>
              <strong>{test.subject}</strong> at {test.time}
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2: Recent Tests */}
      <section className="section recent-tests">
        <h2>🕒 Recent Tests</h2>
        <ul>
          {recentTests.map((test, index) => (
            <li key={index}>
              <strong>{test.subject}</strong> - {test.date}
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3: Last Test Rank */}
      <section className="section last-rank">
        <h2>🏆 Last Test Rank</h2>
        <p><strong>Student:</strong> {lastRank.studentName}</p>
        <p><strong>Rank:</strong> #{lastRank.rank}</p>
        <p><strong>Score:</strong> {lastRank.score}</p>
        <p><strong>Subject:</strong> {lastRank.subject}</p>
      </section>
    </div>
  );
};

export default Tests;
