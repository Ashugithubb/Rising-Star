import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userId, setUserId] = useState('');
  const [name,setUserName] = useState('');
  const [fees, setFees] = useState('800');
  const [grade,setClass] = useState('12');
  const [password, setPassword] = useState('password');
  const [ date,setData] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    console.log("heloo kaha");
    try {
      const response = await axios.post('http://localhost:3000/register', {
        userId,name,fees,grade,password,date
      });
      setMessage(response.data);
    } catch (err) {
      setMessage(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
      <h2>Student Registration</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>User ID:</label><br />
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Class</label><br />
          <input
            type="text"
            value={grade}
            onChange={(e) => setClass(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fees</label><br />
          <input
            type="text"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && (
        <p style={{ marginTop: '1rem', color: message.includes('successful') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
