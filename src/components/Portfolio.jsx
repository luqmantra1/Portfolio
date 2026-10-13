import { useState, useEffect } from 'react'
import PortfolioNav from './portfolio/PortfolioNav'
import PortfolioHero from './portfolio/PortfolioHero'
import PortfolioAbout from './portfolio/PortfolioAbout'
import PortfolioExperience from './portfolio/PortfolioExperience'
import PortfolioEducation from './portfolio/PortfolioEducation'
import PortfolioProjects from './portfolio/PortfolioProjects'
import PortfolioSkills from './portfolio/PortfolioSkills'
import PortfolioServicesPricing from './portfolio/PortfolioServicesPricing'
import PortfolioVolunteering from './portfolio/PortfolioVolunteering'
import PortfolioContact from './portfolio/PortfolioContact'
import PortfolioFooter from './portfolio/PortfolioFooter'
import './Portfolio.css'

const Portfolio = ({ onNavigateToResume }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 
        'about', 
        'experience', 
        'education', 
        'projects', 
        'skills', 
        'pricing', 
        'volunteering', 
        'contact'
      ]
      const scrollPosition = window.scrollY + 220

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-container">
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="cursor-glow" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Navigation Bar */}
      <PortfolioNav 
        activeSection={activeSection} 
        onNavigateToResume={onNavigateToResume} 
      />

      {/* Page Sections */}
      <main className="portfolio-main-content">
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioExperience />
        <PortfolioEducation />
        <PortfolioProjects />
        <PortfolioSkills />
        <PortfolioServicesPricing />
        <PortfolioVolunteering />
        <PortfolioContact />
      </main>

      {/* Footer */}
      <PortfolioFooter />
    </div>
  )
}

export default Portfolio
