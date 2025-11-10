import { useState, useEffect, useRef } from 'react'
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './PortfolioHero.css'

const PortfolioHero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const wordsRef = useRef(['CYBER SECURITY', 'DEVELOPER', 'CREATIVE'])
  const timeoutRef = useRef(null)

  useEffect(() => {
    const words = wordsRef.current
    const currentWord = words[currentIndex]
    
    if (!currentWord) return

    let delay = 100
    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000
    } else if (isDeleting && charIndex === 0) {
      delay = 500
    } else if (isDeleting) {
      delay = 50
    }

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        const newCharIndex = charIndex + 1
        setDisplayedText(currentWord.substring(0, newCharIndex))
        setCharIndex(newCharIndex)
      } else if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true)
      } else if (isDeleting && charIndex > 0) {
        const newCharIndex = charIndex - 1
        setDisplayedText(currentWord.substring(0, newCharIndex))
        setCharIndex(newCharIndex)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setCharIndex(0)
      }
    }, delay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [charIndex, isDeleting, currentIndex])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="portfolio-hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-greeting">
          <span className="wave">👋</span> Hi, I'm
        </div>
        <h1 className="hero-name">
          <span className="name-first">Luqmantra</span>
          {/* <span className="name-last"></span> */}
        </h1>
        <div className="hero-title">
          <span className="title-prefix">I'm a </span>
          <span className="title-typewriter">
            {displayedText}
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
        {/* <p className="hero-description">
          Cyber Security graduate specializing in secure software development and IT solutions architecture. 
          Passionate about creating resilient, high-performing applications with a focus on security and innovation.
        </p> */}
        <div className="hero-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/luqmantra" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:luqmantra1@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        <div className="hero-cta">
          <button className="btn-primary" onClick={scrollToAbout}>
            Explore My Work
            <FaArrowDown />
          </button>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero

