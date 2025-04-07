import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; // Ensure this file exists
const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
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

      {/* WhatsApp Group Join Section */}
      <div className="whatsapp-section">
          <h3>📢 Join Our WhatsApp Group!</h3>
          <p>Stay updated with announcements and important updates.</p>
          <div className="whatsapp-links">
            <a href="https://chat.whatsapp.com/YOUR_LINK_11" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Join Class 11 Group</a>
            <a href="https://chat.whatsapp.com/IWSAPr5gf9GEz57y0KWG2G" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Join Class 12 Group</a>
          </div>
        </div>
      

      {/* Announcement Box */}
      <div className="announcement">
        <h3>📢 Announcements</h3>
        <ul>
          <li>📝 Classes will start from 10th of April</li>
          <li>📅 Tuition Timming 5:00pm evening</li>
          <li>⚠️ Fee payment deadline is approaching.</li>
        </ul>
      </div>

      {/* Contact Section at the bottom */}
      <footer className="contact-section">
        <h3>📞 Contact Us</h3>
        <p>Email: itsray650@gmail.com</p>
        <p>Phone: +91 9878719602</p>
        <p>Address: Phagwara Punjab,India</p>
      </footer>
    </div>
  );
};

export default HomePage;
