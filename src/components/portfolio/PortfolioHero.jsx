import { useState, useEffect } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaFileAlt,
  FaServer,
  FaShieldAlt,
  FaAward,
  FaTerminal,
  FaCheckCircle
} from 'react-icons/fa'
import { SiDocker, SiLinux, SiReact, SiLaravel } from 'react-icons/si'
import avatarImg from '../../assets/avatar.jpg'
import './PortfolioHero.css'

const PortfolioHero = () => {
  const roles = [
    'Full-Stack Developer (Laravel, React, Astro)',
    'Cybersecurity & Systems Specialist',
    'Enterprise Linux Administrator',
    'Independent IT Solutions Specialist'
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = roles[currentRoleIndex]
    let timeout

    if (!isDeleting && charIndex <= currentWord.length) {
      setDisplayedText(currentWord.substring(0, charIndex))
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1)
      }, 45)
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && charIndex > 0) {
      setDisplayedText(currentWord.substring(0, charIndex))
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1)
      }, 25)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      timeout = setTimeout(() => {
        setCharIndex(0)
      }, 350)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentRoleIndex])

  const scrollTo = (id) => {
    const elem = document.getElementById(id)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="portfolio-hero">
      {/* Background ambient lighting */}
      <div className="hero-glow-mesh">
        <div className="glow-orb glow-top-left"></div>
        <div className="glow-orb glow-bottom-right"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content">
            {/* Live Status Pill */}
            <div className="hero-status-badge">
              <span className="status-dot"></span>
              <span className="status-text">
                Available for Freelance Projects & IT Consultation
              </span>
            </div>

            {/* Main Greeting & Identity */}
            <div className="hero-intro">
              <span className="hero-eyebrow">Full-Stack & Systems Engineering</span>
              <h1 className="hero-title">
                Hi, I'm <span className="text-gradient">Luqman TRA</span>
              </h1>
            </div>

            {/* Dynamic Typewriter Role */}
            <div className="hero-role-wrapper">
              <span className="role-prefix">I am a</span>
              <span className="role-typewriter code-font">
                {displayedText}
                <span className="typewriter-cursor">|</span>
              </span>
            </div>

            {/* High-Impact Description (No company mention here, standalone freelance focus) */}
            <p className="hero-description">
              Independent <strong>Full-Stack Developer & Cybersecurity Specialist</strong> with a
              degree in <strong>Cyber Security from UPTM</strong>. I specialize in administering
              mission-critical <strong>Linux server infrastructure</strong> (including hospital blood
              bank system deployments), enterprise endpoint protection (<strong>ESET, Checkmk, JumpServer</strong>),
              and crafting high-performance, secure web applications with <strong>Laravel, React, Astro</strong>, and <strong>Docker</strong>.
            </p>

            {/* Call to Actions */}
            <div className="hero-cta-group">
              <button
                className="btn btn-primary hero-btn"
                onClick={() => scrollTo('pricing')}
              >
                <span>View Services & Pricing (MYR)</span>
                <FaArrowRight />
              </button>

              <button
                className="btn btn-secondary hero-btn"
                onClick={() => scrollTo('projects')}
              >
                <span>Explore Projects</span>
              </button>

              <a
                href="https://drive.google.com/file/d/1cz6mm-ChE5DdqSGheYWEP1LkTwuNu5P4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-glow hero-btn resume-download-link"
              >
                <FaFileAlt />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics-bar">
              <div className="metric-box">
                <span className="metric-number">3+</span>
                <span className="metric-label">Years IT & Dev Experience</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-number">Enterprise</span>
                <span className="metric-label">Linux Server Architecture</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-number">3x</span>
                <span className="metric-label">Certified (CCNA, Cloud+, ESET)</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="hero-social-row">
              <span className="social-label">Connect:</span>
              <div className="social-icons">
                <a
                  href="https://github.com/luqmantra1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/luqmantra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.credly.com/users/luqman-tra/badges/credly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Credly Verified Credentials"
                >
                  <FaAward />
                </a>
                <a
                  href="mailto:luqmantra1@gmail.com"
                  className="social-btn"
                  title="Send Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry & Interactive Profile Card */}
          <div className="hero-visual">
            <div className="profile-telemetry-card glass-panel">
              {/* Card Header with Status Lights */}
              <div className="telemetry-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="telemetry-title code-font">
                  <FaServer className="server-icon" />
                  <span>system.status // active</span>
                </div>
                <div className="telemetry-badge">
                  <FaShieldAlt className="shield-icon" /> Hardened
                </div>
              </div>

              {/* Profile Image & Identification Section */}
              <div className="profile-visual-wrapper">
                <div className="profile-image-frame">
                  <img
                    src={avatarImg}
                    alt="Luqman TRA - Full-Stack Developer"
                    className="hero-avatar-photo"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/luqman-avatar.jpg'
                    }}
                  />
                  <div className="avatar-glowing-ring"></div>
                </div>

                <div className="profile-info-compact">
                  <h3 className="profile-compact-name">Luqman TRA</h3>
                  <p className="profile-compact-role">
                    Full-Stack Developer & Security Engineer <br />
                    <span className="company-tag">Independent IT Consultant</span>
                  </p>
                  <div className="profile-compact-location">
                    <span className="location-dot"></span> Kuala Lumpur, Malaysia
                  </div>
                </div>
              </div>

              {/* Live Infrastructure Metrics Grid */}
              <div className="telemetry-metrics-grid">
                <div className="tele-item primary-stack-item">
                  <span className="tele-label">Primary Stack</span>
                  <div className="tele-stack-badges">
                    <span className="stack-pill pill-linux">
                      <SiLinux className="pill-icon" /> Linux
                    </span>
                    <span className="stack-pill pill-laravel">
                      <SiLaravel className="pill-icon" /> Laravel
                    </span>
                    <span className="stack-pill pill-react">
                      <SiReact className="pill-icon" /> React
                    </span>
                    <span className="stack-pill pill-docker">
                      <SiDocker className="pill-icon" /> Docker
                    </span>
                  </div>
                </div>

                <div className="tele-item">
                  <span className="tele-label">Availability</span>
                  <span className="tele-val status-available">
                    <span className="status-dot"></span> Open for Freelance
                  </span>
                </div>

                <div className="tele-item">
                  <span className="tele-label">Enterprise Focus</span>
                  <span className="tele-val">PDN Blood Bank (KKM)</span>
                </div>

                <div className="tele-item">
                  <span className="tele-label">Security & SIEM</span>
                  <span className="tele-val status-active">ESET + Checkmk</span>
                </div>
              </div>

              {/* Certifications Showcase Badges */}
              <div className="telemetry-cert-row">
                <div className="cert-pill" title="Cisco CCNA">
                  <FaAward className="cert-pill-icon" /> CCNA
                </div>
                <div className="cert-pill" title="CompTIA Cloud+">
                  <FaAward className="cert-pill-icon" /> CompTIA Cloud+
                </div>
                <div className="cert-pill" title="ESET Certified Engineer">
                  <FaShieldAlt className="cert-pill-icon" /> ESET Certified
                </div>
              </div>

              {/* Interactive Terminal Snippet */}
              <div className="telemetry-terminal-box code-font">
                <div className="term-line">
                  <span className="term-user">luqman@cloud-core</span>
                  <span className="term-colon">:</span>
                  <span className="term-path">~</span>
                  <span className="term-dollar">$</span>
                  <span className="term-cmd">systemctl status enterprise-services</span>
                </div>
                <div className="term-line output success">
                  ● enterprise-services.service - Active (running) [99.98% Uptime]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero
