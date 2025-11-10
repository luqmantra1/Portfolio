import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa'
import './Navigation.css'

const Navigation = ({ activeSection, onNavigateToPortfolio }) => {
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
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
        <div className="nav-logo-section">
  {onNavigateToPortfolio && (
    <button 
      className="back-to-portfolio-btn" 
      onClick={onNavigateToPortfolio}
      title="Back to Portfolio"
    >
      <FaArrowLeft />
    </button>
  )}
  
  {/* <a
    href="#about"
    className="nav-logo"
    onClick={(e) => {
      e.preventDefault()
      scrollToSection('about')
    }}
  >
    <img
      src="/dp3.jpeg" // replace with your image path
      alt="Luqman Hakim"
      className="nav-profile-image"
      onError={(e) => {
        // fallback to initials if image fails
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'inline';
      }}
    />
    <span className="nav-logo-initials">LH</span>
  </a> */}
</div>


          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
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
          </ul>

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
          <ul className="mobile-nav-menu">
            {onNavigateToPortfolio && (
              <li>
                <button className="mobile-back-btn" onClick={onNavigateToPortfolio}>
                  <FaArrowLeft /> Back to Portfolio
                </button>
              </li>
            )}
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
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navigation

