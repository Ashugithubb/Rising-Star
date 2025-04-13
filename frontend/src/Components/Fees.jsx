// src/Pages/StudentList.jsx
import React from 'react';
import "../styles/Fee.css";
import Navbar from './Navbar';

const Fees = () => {
  // Example student data; you can replace this with data fetched from an API
  const students = [
    { id: 1, name: "John Doe", monthlyFee: 800, pendingFee: 400 },
    { id: 2, name: "Jane Smith", monthlyFee: 800, pendingFee: 0 },
    { id: 3, name: "Michael Brown", monthlyFee: 800, pendingFee: 200 },
    { id: 4, name: "Emily Davis", monthlyFee: 800, pendingFee: 100 },
    { id: 5, name: "David Wilson", monthlyFee: 800, pendingFee: 0 }
  ];

  return (
    <>
    <Navbar/>
    <div className="student-list-container">
      <h1>Student Fee List</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Monthly Fee</th>
            <th>Pending Fee</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>₹{student.monthlyFee}</td>
              <td>₹{student.pendingFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Fees;
