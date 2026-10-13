import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaArrowLeft, FaFilePdf, FaHome } from 'react-icons/fa'
import './Navigation.css'

const Navigation = ({ activeSection, onNavigateToPortfolio }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education & Certs' },
    { id: 'projects', label: 'Projects' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav className={`resume-nav-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="resume-nav-wrapper">
          {/* Left: Back to interactive portfolio */}
          <div className="resume-nav-left">
            {onNavigateToPortfolio && (
              <button
                className="resume-back-btn"
                onClick={onNavigateToPortfolio}
                title="Return to Interactive Portfolio"
              >
                <FaArrowLeft />
                <span>Return to Portfolio</span>
              </button>
            )}

            <div className="resume-badge-indicator">
              <span className="doc-type-pill">Curriculum Vitae</span>
              <span className="author-name">Luqman TRA</span>
            </div>
          </div>

          {/* Center/Right Nav Links */}
          <ul className="resume-desktop-nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`resume-menu-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Quick PDF Action */}
          <div className="resume-nav-actions">
            <a
              href="https://drive.google.com/file/d/1cz6mm-ChE5DdqSGheYWEP1LkTwuNu5P4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-glow nav-cv-download-btn"
              title="Download PDF Version"
            >
              <FaFilePdf />
              <span>Download PDF</span>
            </a>

            <button
              className="resume-nav-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle CV navigation"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`resume-mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="resume-mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Resume Navigation</span>
            <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <ul className="resume-mobile-list">
            {onNavigateToPortfolio && (
              <li>
                <button
                  className="mobile-back-action-btn"
                  onClick={() => {
                    setIsOpen(false)
                    onNavigateToPortfolio()
                  }}
                >
                  <FaHome /> Return to Portfolio
                </button>
              </li>
            )}
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`resume-mobile-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com/file/d/1cz6mm-ChE5DdqSGheYWEP1LkTwuNu5P4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mobile-cv-btn"
          >
            <FaFilePdf /> Download Official PDF
          </a>
        </div>
      </div>
    </>
  )
}

export default Navigation
