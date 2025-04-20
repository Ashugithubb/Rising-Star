import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; // Ensure this file exists
import axios from "axios";

const LoginPage = () => {
  const [userId, setUserid] = useState(""); // Fixed: Initialized as an empty string
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try{
      
      const response = await axios.post("http://localhost:3000/login",{ userId,password});
      setMessage(response.data);
      if (response.data === "Login Successfull") {
        navigate("/home"); // Replace with your route
      }
    }
    catch(err){
        console.log(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>User ID</label>
            <input
              type="text" // Fixed: Correct input type
              value={userId}
              onChange={(e) => setUserid(e.target.value)}
              required
              placeholder="UserId"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        {message && (
        <p style={{ marginTop: '1rem', color: message.includes('successful') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      </div>
    </div>
  );
};

export default LoginPage;
