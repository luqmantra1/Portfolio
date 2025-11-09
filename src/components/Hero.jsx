import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const wordsRef = useRef(['CYBER SECURITY', 'DEVELOPER'])
  const timeoutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const words = wordsRef.current
    const currentWord = words[currentIndex]
    
    if (!currentWord) return

    // Determine timing based on state
    let delay = 100
    if (!isDeleting && charIndex === currentWord.length) {
      // Just finished typing, pause before deleting
      delay = 2000
    } else if (isDeleting && charIndex === 0) {
      // Just finished deleting, pause before next word
      delay = 500
    } else if (isDeleting) {
      // Currently deleting
      delay = 50
    }

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Continue typing
        const newCharIndex = charIndex + 1
        setDisplayedText(currentWord.substring(0, newCharIndex))
        setCharIndex(newCharIndex)
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Finished typing, start deleting
        setIsDeleting(true)
      } else if (isDeleting && charIndex > 0) {
        // Continue deleting
        const newCharIndex = charIndex - 1
        setDisplayedText(currentWord.substring(0, newCharIndex))
        setCharIndex(newCharIndex)
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next word
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

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line typewriter-text">
              {displayedText}
              <span className="typewriter-cursor">|</span>
            </span>
          </h1>
          <p className="hero-description">
            Hi! I'm <strong>Luqmantra</strong>. A Cyber Security graduate specializing in secure software development 
            and IT solutions architecture. Experienced in developing systems such as IT monitoring dashboards and 
            e-commerce platforms using Laravel and PHP. Passionate about integrating cybersecurity principles into 
            software development to create resilient, high-performing applications.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-resume">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

