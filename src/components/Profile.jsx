import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'
import avatarImg from '../assets/avatar.jpg'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            <img
              src={avatarImg}
              alt="Luqman TRA"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center 15%'
              }}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/luqman-avatar.jpg'
              }}
            />
          </div>
        </div>
        <h1 className="profile-name">Luqman TRA</h1>
        <p className="profile-title">Cyber Security & Software Developer</p>
        <div className="profile-location">
          <FaMapMarkerAlt />
          <span>Ampang, Selangor, Malaysia</span>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="profile-section-title">Contact</h3>
        <div className="contact-list">
          <a href="mailto:luqmantra1@gmail.com" className="contact-item">
            <FaEnvelope />
            <span>luqmantra1@gmail.com</span>
          </a>
          <a href="tel:+60175337009" className="contact-item">
            <FaPhone />
            <span>+60 17-533-7009</span>
          </a>
          <a
            href="https://www.linkedin.com/in/luqmantra"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <span>linkedin.com/in/luqmantra</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <span>github.com</span>
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

      <div className="profile-section">
        <a
          href="https://drive.google.com/file/d/1cz6mm-ChE5DdqSGheYWEP1LkTwuNu5P4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          <FaFilePdf />
          <span>Download Resume</span>
        </a>
      </div>

    </div>
  )
}

export default Profile

