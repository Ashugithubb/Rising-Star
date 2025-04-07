import React from "react";
import "../styles/Tests.css";
import Navbar from "../Components/Navbar"; // ✅ Import Navbar



const testData = [
  { id: 1, name: "Physics Chapter 1", date: "2025-04-07", time: "10:00 AM" },
  { id: 2, name: "Math Algebra", date: "2025-04-08", time: "12:00 PM" },
  { id: 3, name: "Chemistry Organic", date: "2025-04-06", time: "02:00 PM" },
];

const mockRanks = {
  3: [
    { rank: 1, name: "Aryan", score: 95 },
    { rank: 2, name: "Meera", score: 91 },
    { rank: 3, name: "Rohan", score: 89 },
  ],
};

const Tests = () => {
  const today = new Date().toISOString().split("T")[0];

  const todayTests = testData.filter(test => test.date === today);

  const pastTests = testData
    .filter(test => test.date < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const recentTest = pastTests[0];
  const recentTestRanks = recentTest ? mockRanks[recentTest.id] || [] : [];

  return (
    <>
    <Navbar/>
      {/* Today Tests - Top Left */}
      <div className="today-tests-container">
        <h2>📅 Today Tests</h2>
        {todayTests.length > 0 ? (
          <ul>
            {todayTests.map(test => (
              <li key={test.id}>
                <strong>{test.name}</strong> — {test.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tests scheduled for today.</p>
        )}
      </div>

      {/* Recent Test - Center */}
      <div className="recent-test-container">
        <h2>🕒 Recent Test</h2>
        {recentTest ? (
          <p>
            <strong>{recentTest.name}</strong> — {recentTest.date} at {recentTest.time}
          </p>
        ) : (
          <p>No past tests found.</p>
        )}
      </div>

      {/* Last Test Ranks - Bottom Center */}
      <div className="last-test-ranks-container">
        <h2>🏆 Last Test Ranks</h2>
        {recentTestRanks.length > 0 ? (
          <ol>
            {recentTestRanks.map(rank => (
              <li key={rank.rank}>
                #{rank.rank} - {rank.name} ({rank.score}%)
              </li>
            ))}
          </ol>
        ) : (
          <p>No rank data available.</p>
        )}
      </div>
    </>
  );
};

export default Tests;
