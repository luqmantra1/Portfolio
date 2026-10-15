import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaAward, FaFilePdf, FaGlobe } from 'react-icons/fa'
import avatarImg from '../../assets/avatar.jpg'
import './Profile.css'

const Profile = () => {
  return (
    <div className="resume-executive-header glass-panel">
      <div className="resume-header-main">
        {/* Avatar */}
        <div className="profile-avatar-wrapper">
          <div className="avatar-ring">
            <img
              src={avatarImg}
              alt="Luqman Hakim"
              className="avatar-photo"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/luqman-avatar.jpg'
              }}
            />
          </div>
          <span className="profile-active-dot" title="Available for Freelance & Contract"></span>
        </div>

        {/* Identity & Bio */}
        <div className="profile-identity">
          <div className="profile-status-pill">
            <span className="status-indicator-dot"></span>
            <span>Available for Freelance & Full-Stack Projects</span>
          </div>

          <h1 className="resume-name">Luqman Hakim</h1>
          <p className="resume-role-tag">Full-Stack Web Developer & Cybersecurity Specialist</p>

          <div className="resume-location-badge">
            <FaMapMarkerAlt className="loc-icon" />
            <span>Kuala Lumpur, Malaysia</span>
          </div>

          {/* Languages Row */}
          <div className="profile-languages-bar">
            <span className="lang-label">
              <FaGlobe className="globe-icon" /> Languages:
            </span>
            <div className="lang-pills">
              <span className="lang-pill"><strong>Malay</strong> (Native)</span>
              <span className="lang-pill"><strong>English</strong> (Professional)</span>
              <span className="lang-pill"><strong>Mandarin</strong> (Basic)</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="profile-header-actions">
          <a
            href="https://drive.google.com/file/d/1cz6mm-ChE5DdqSGheYWEP1LkTwuNu5P4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary resume-download-cta"
            title="Download Official Curriculum Vitae PDF"
          >
            <FaFilePdf />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>
      </div>

      {/* Contact & Social Bar */}
      <div className="profile-contact-bar">
        <a
          href="mailto:luqmantra1@gmail.com"
          className="contact-card-item"
          title="Send email to Luqman"
        >
          <div className="contact-icon-box"><FaEnvelope /></div>
          <div className="contact-meta">
            <span className="contact-label">Email</span>
            <span className="contact-value">luqmantra1@gmail.com</span>
          </div>
        </a>

        <a
          href="tel:+60175337009"
          className="contact-card-item"
          title="Direct Phone / WhatsApp"
        >
          <div className="contact-icon-box"><FaPhone /></div>
          <div className="contact-meta">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+60 17-533-7009</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/luqmantra"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-item"
          title="LinkedIn Profile"
        >
          <div className="contact-icon-box"><FaLinkedin /></div>
          <div className="contact-meta">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">in/luqmantra</span>
          </div>
        </a>

        <a
          href="https://github.com/luqmantra1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-item"
          title="GitHub Profile"
        >
          <div className="contact-icon-box"><FaGithub /></div>
          <div className="contact-meta">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">luqmantra1</span>
          </div>
        </a>

        <a
          href="https://www.credly.com/users/luqman-tra/badges/credly"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-item"
          title="Credly Verified Digital Badges"
        >
          <div className="contact-icon-box"><FaAward /></div>
          <div className="contact-meta">
            <span className="contact-label">Credly</span>
            <span className="contact-value">Verified Badges</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Profile
