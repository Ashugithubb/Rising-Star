// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
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
        <li><button onClick={() => navigate("/home")}>Home</button></li>
        <li><button onClick={() => navigate("/tests")}>Tests</button></li>
        <li><button onClick={() => navigate("/fee-management")}>Fee Management</button></li>
        <li><button onClick={() => navigate("/about")}>About</button></li>
        <li><button onClick={() => navigate("/contact")}>Contact</button></li>
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
