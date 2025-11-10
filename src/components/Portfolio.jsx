import { useState, useEffect } from 'react'
import PortfolioNav from './portfolio/PortfolioNav'
import PortfolioHero from './portfolio/PortfolioHero'
import PortfolioAbout from './portfolio/PortfolioAbout'
import PortfolioExperience from './portfolio/PortfolioExperience'
import PortfolioProjects from './portfolio/PortfolioProjects'
import PortfolioSkills from './portfolio/PortfolioSkills'
import PortfolioFooter from './portfolio/PortfolioFooter'
import './Portfolio.css'
import PortfolioVolunteering from './portfolio/PortfolioVolunteering'

const Portfolio = ({ onNavigateToResume }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills','volunteering']
      const scrollPosition = window.scrollY + 200

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-container">
      <div 
        className="cursor-glow" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      <PortfolioNav activeSection={activeSection} onNavigateToResume={onNavigateToResume} />
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioProjects />
      <PortfolioVolunteering />
      <PortfolioSkills />
      <PortfolioFooter />
    </div>
  )
}

export default Portfolio

