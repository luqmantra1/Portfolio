import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './PortfolioFooter.css'

const PortfolioFooter = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Let's Build Something Amazing Together</h3>
            <p>I'm always open to discussing new projects and opportunities.</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/luqmantra" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:luqmantra1@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Built with <FaHeart className="heart" /> by <strong>Luqmantra</strong> in Malaysia
          </p>
          <p className="copyright">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default PortfolioFooter

