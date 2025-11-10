import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa'
import './PortfolioNav.css'

const PortfolioNav = ({ activeSection, onNavigateToResume }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'volunteering', label: 'Volunteer' },
    // { id: 'skills', label: 'Skills' },
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
      <nav className={`portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrapper">
        <a 
  href="#home" 
  className="nav-logo" 
  onClick={(e) => {
    e.preventDefault()
    scrollToSection('home')
  }}
  data-tooltip="Go to Home"
>
  {/* <div className="nav-avatar">
    <img
      src="/dp3.jpeg" // replace with your image path
      alt="Luqman Hakim"
      className="avatar-image"
      onError={(e) => {
        // fallback to initials if image fails
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'flex';
      }}
    />
    <span className="avatar-initials">LH</span>
  </div> */}
</a>


          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {/* <span className="nav-number">0{navItems.indexOf(item) + 1}</span> */}
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="resume-btn"
            onClick={onNavigateToResume}
            title="View Resume"
          >
            <FaFileAlt />
            <span>Resume</span>
          </button>

          <button 
            className={`nav-toggle ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="mobile-resume-btn" onClick={onNavigateToResume}>
                <FaFileAlt /> Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PortfolioNav

