import { FaHeart, FaGithub, FaLinkedin, FaAward, FaEnvelope, FaArrowUp, FaShieldAlt } from 'react-icons/fa'
import './PortfolioFooter.css'

const PortfolioFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="portfolio-footer">
      <div className="container">
        {/* Top status bar */}
        <div className="footer-status-bar">
          <div className="status-indicator-box">
            <span className="status-dot"></span>
            <span className="status-label">Enterprise Server Infrastructure Status:</span>
            <span className="status-state">All Systems Operational</span>
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} title="Scroll to top of page">
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>

        {/* Footer Main Content Grid */}
        <div className="footer-content-grid">
          <div className="footer-brand-column">
            <div className="footer-brand-title">
              <span className="brand-name">Luqman TRA</span>
              <span className="brand-dot">•</span>
              <span className="brand-role">Full-Stack & Security Specialist</span>
            </div>
            <p className="footer-bio-summary">
              Specializing in enterprise Linux server infrastructure supporting the Pusat Darah Negara (PDN)
              Blood Bank System, endpoint threat defense, and high-performance full-stack web development.
            </p>
            <div className="footer-security-pill">
              <FaShieldAlt className="shield-icon" />
              <span>Certified in CCNA, CompTIA Cloud+ & ESET Engineering</span>
            </div>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education & Certs</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#skills">Core Skills</a></li>
              <li><a href="#pricing">Services & Pricing</a></li>
              <li><a href="#volunteering">Volunteering</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-connect-column">
            <h4 className="footer-col-title">Connect & Verify</h4>
            <div className="footer-social-links">
              <a
                href="https://github.com/luqmantra1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/luqmantra"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a
                href="https://www.credly.com/users/luqman-tra/badges/credly"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Credly"
              >
                <FaAward /> <span>Credly Badges</span>
              </a>
              <a
                href="mailto:luqmantra1@gmail.com"
                className="footer-social-btn"
                title="Email"
              >
                <FaEnvelope /> <span>Email Luqman</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>Luqman TRA</strong>. Engineered with modern React & CSS in Petaling Jaya, Malaysia.
          </p>
          <p className="footer-compliance-text">
            All facts verified. Available for freelance contracts & IT consultation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default PortfolioFooter
