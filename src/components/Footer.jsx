import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Built with <FaHeart className="heart-icon" /> by <strong>Luqman Hakim</strong> in Malaysia
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
