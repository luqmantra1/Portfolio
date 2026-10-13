import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaFileAlt, FaShieldAlt, FaRocket, FaEnvelope } from 'react-icons/fa'
import avatarImg from '../../assets/avatar.jpg'
import './PortfolioNav.css'

const PortfolioNav = ({ activeSection, onNavigateToResume }) => {
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'pricing', label: 'Services' },
    { id: 'contact', label: 'Contact' }
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
      <header className={`portfolio-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo / Brand Identity */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            <div className="brand-avatar-box">
              <img
                src={avatarImg}
                alt="Luqman TRA"
                className="brand-avatar-img"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/luqman-avatar.jpg'
                }}
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">
                Luqman <span className="brand-name-accent">TRA</span>
              </span>
              <div className="brand-status">
                <span className="status-pulse-dot"></span>
                <span className="status-label">Available for Hire</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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
          </nav>

          {/* Actions: Resume Switch & Hire Me */}
          <div className="nav-actions">
            <button
              className="action-btn resume-toggle-btn"
              onClick={onNavigateToResume}
              title="Switch to Full Resume Document View"
            >
              <FaFileAlt className="btn-icon" />
              <span>Resume</span>
            </button>

            <button
              className="action-btn hire-cta-btn"
              onClick={() => scrollToSection('pricing')}
              title="View Freelance Services & Quotation"
            >
              <FaRocket className="btn-icon" />
              <span>Hire Me</span>
            </button>

            {/* Mobile Toggle Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <div className="drawer-brand-info">
              <span className="drawer-name">Luqman TRA</span>
              <span className="drawer-role">● Available for Freelance & IT</span>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
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

          <div className="mobile-drawer-actions">
            <button
              className="btn btn-secondary mobile-action-btn"
              onClick={() => {
                setIsOpen(false)
                onNavigateToResume()
              }}
            >
              <FaFileAlt /> View Detailed Resume
            </button>
            <button
              className="btn btn-primary mobile-action-btn"
              onClick={() => {
                setIsOpen(false)
                scrollToSection('pricing')
              }}
            >
              <FaRocket /> Services & Pricing
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioNav
