import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; // Ensure this file exists

const LoginPage = () => {
  const [userid, setUserid] = useState(""); // Fixed: Initialized as an empty string
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserId:", userid, "Password:", password);

    // Perform authentication here (dummy authentication for now)
    if (userid === "12207196" && password === "password") {
      navigate("/home"); // Redirect to Home Page after login
    } else {
      alert("Invalid credentials!");
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
              type="number" // Fixed: Correct input type
              value={userid}
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
      </div>
    </div>
  );
};

export default LoginPage;
