// src/components/Navbar.jsx
import { useNavigate,Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // redirect to login
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Rising Star</h1>
      <ul className="nav-links">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/tests">Tests</Link></li>
      <li><Link to="/fee">Fees Managment</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
