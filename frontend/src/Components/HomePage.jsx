import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; // Ensure this file exists
import "../styles/HomePage.css";
import Navbar from "../Components/Navbar"; // Make sure the path is correct

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />

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

      {/* Contact Section */}
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

