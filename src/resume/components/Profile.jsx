import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
  <div className="profile-avatar">
    <a 
      href="https://drive.google.com/file/d/1-aH57rqYrsqqyGrCve5pwkkgZZdayMzv/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
      className="avatar-circle"
      data-tooltip="Download Resume"
    >
      {/* Replace LH with profile picture if available */}
      <img 
        src="/dp6.jpeg" 
        alt="Luqman Hakim" 
        className="avatar-image"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.textContent = 'LH';
        }}
      />
      <span></span>
    </a>
  </div>
  <h1 className="profile-name">Luqman Hakim</h1>
  <p className="profile-title">Cyber Security & Software Developer</p>
  <div className="profile-location">
    <FaMapMarkerAlt />
    <span>Ampang, Selangor, Malaysia</span>
  </div>
</div>


      <div className="profile-section">
        <h3 className="profile-section-title">Contact</h3>
        <div className="contact-list">
          <a 
            href="mailto:luqmantra1@gmail.com" 
            className="contact-item"
            data-tooltip="luqmantra1@gmail.com"
          >
            <FaEnvelope />
          </a>
          <a 
            href="tel:+60175337009" 
            className="contact-item"
            data-tooltip="+60 17-533-7009"
          >
            <FaPhone />
          </a>
          <a 
            href="https://www.linkedin.com/in/luqmantra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
            data-tooltip="linkedin.com/in/luqmantra"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
            data-tooltip="github.com"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="profile-section-title">Languages</h3>
        <div className="languages-list">
          <div className="language-item">
            <span className="language-name">Malay</span>
            <span className="language-level">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Professional</span>
          </div>
          <div className="language-item">
            <span className="language-name">Mandarin</span>
            <span className="language-level">Basic</span>
          </div>
        </div>
      </div>

      <a 
    href="https://drive.google.com/file/d/1-aH57rqYrsqqyGrCve5pwkkgZZdayMzv/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn-resume"
  >
    <FaFilePdf />
    <span>Download Resume</span>
  </a>
    </div>
  )
}

export default Profile

