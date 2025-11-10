import { useRef, useEffect } from 'react'
import './PortfolioAbout.css'

const PortfolioAbout = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="portfolio-about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-text">
          <p className="about-intro">
              Cybersecurity graduate with expertise in <strong>secure software development</strong> and <strong>IT solutions architecture</strong>. 
              Experienced in building systems such as IT monitoring dashboards and e-commerce platforms using Laravel and PHP.
            </p>
            <p>
              Proficient in <strong>SOC operations</strong>, <strong>SIEM tools</strong>, and <strong>Burp Suite</strong> 
              for security assessments and vulnerability testing. Dedicated to embedding cybersecurity best practices into software development to deliver robust, 
              high-performing applications.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">7+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          <div className="about-right-side">
            <div className="about-image">
              <div className="image-placeholder">
                <img 
                  src="/dp3.jpeg" 
                  alt="Luqman Hakim - Building Secure Solutions"
                  className="profile-image"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder-content" style={{ display: 'none' }}>
                  <span className="placeholder-icon">👨‍💻</span>
                  <span className="placeholder-text">Building Secure Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioAbout

