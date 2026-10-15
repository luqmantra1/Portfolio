import { useState } from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaAward,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt
} from 'react-icons/fa'
import './PortfolioContact.css'

const PortfolioContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Professional (Custom Web App)',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Inquiry from Portfolio: ${formData.service} - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Selected Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    )
    window.location.href = `mailto:luqmantra1@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="portfolio-contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaEnvelope />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="text-gradient">Something Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you need custom web app development, enterprise Linux support, or security consulting,
            I am always ready to collaborate on impactful engineering projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Channels */}
          <div className="contact-channels-card glass-panel">
            <div className="channel-header">
              <h3 className="channels-title">Direct Communication Channels</h3>
              <p className="channels-desc">
                Feel free to email me directly or connect through professional networks.
              </p>
            </div>

            <div className="channels-list">
              <a href="mailto:luqmantra1@gmail.com" className="channel-item">
                <div className="channel-icon-box">
                  <FaEnvelope />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Email Address</span>
                  <span className="channel-value">luqmantra1@gmail.com</span>
                </div>
              </a>

              <a href="tel:+60175337009" className="channel-item">
                <div className="channel-icon-box">
                  <FaPhone />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Phone & WhatsApp</span>
                  <span className="channel-value">+60 17-533-7009</span>
                </div>
              </a>

              <div className="channel-item static-item">
                <div className="channel-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>

            {/* Social Network Badges */}
            <div className="social-profiles-box">
              <span className="profiles-label">Professional Profiles & Verified Badges:</span>
              <div className="profiles-row">
                <a
                  href="https://www.linkedin.com/in/luqmantra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-btn"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/luqmantra1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-btn"
                  title="GitHub Profile"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.credly.com/users/luqman-tra/badges/credly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-btn"
                  title="Credly Verified Credentials"
                >
                  <FaAward /> Credly Badges
                </a>
              </div>
            </div>

            {/* Security Guarantee Pill */}
            <div className="security-notice-pill">
              <FaShieldAlt className="shield-icon" />
              <span>Strict NDA & Data Confidentiality Assured for All Client Engagements</span>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact-form-card glass-panel">
            <h3 className="form-title">Send a Direct Project Inquiry</h3>
            <p className="form-desc">Fill out the quick form below to initiate discussion.</p>

            {submitted ? (
              <div className="form-success-alert">
                <FaCheckCircle className="alert-icon" />
                <div>
                  <h4>Email Client Triggered!</h4>
                  <p>Your default email client has been opened. If it didn't open, please email directly to <strong>luqmantra1@gmail.com</strong>.</p>
                </div>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Your Name / Company</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Corp"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="service">Service Required</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Basic (Digital Presence)">Basic (Digital Presence) - WordPress / Divi Site</option>
                    <option value="Professional (Custom Web App)">Professional (Custom Web App) - React/Astro + Laravel</option>
                    <option value="Premium (Enterprise Solution)">Premium (Enterprise Solution) - Full-Stack + Docker/Linux/Checkmk</option>
                    <option value="Custom Linux Server Support / Hardening">Custom Linux Server Support / Hardening</option>
                    <option value="AI Computer Vision / Python Development">AI Computer Vision / Python Development</option>
                    <option value="General Consultation / Other">General Consultation / Other</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message & Project Scope</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Briefly describe your objectives, key features needed, deadlines, or infrastructure questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <FaPaperPlane />
                  <span>Send Project Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioContact
