import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function ResumeApp({ onNavigateToPortfolio }) {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'projects']
      const scrollPosition = window.scrollY + 160

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
    <div className="App">
      <Navigation activeSection={activeSection} onNavigateToPortfolio={onNavigateToPortfolio} />
      <div className="resume-container">
        <main className="resume-main">
          <Profile />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ResumeApp
