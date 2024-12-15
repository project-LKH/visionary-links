export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Visionary Links</h3>
              <p>Where Vision Meets Innovation</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#brochures">Brochures</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="footer-social">
                <a href="#header">Facebook</a>
                <a href="#header">Twitter</a>
                <a href="#header">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Visionary Links. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  