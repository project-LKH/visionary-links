import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact({ id }) {
  return (
    <section id={id} className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <Phone size={20} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={20} className="contact-icon" />
                <span>info@visionarylinks.com</span>
              </li>
              <li>
                <MapPin size={20} className="contact-icon" />
                <span>123 Tech Street, Innovation City, ST 12345</span>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <form method="POST" action="https://formsubmit.co/projectlkh63@gmail.com">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

