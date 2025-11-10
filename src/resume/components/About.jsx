import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
        <p className="about-intro">
              Cybersecurity graduate specializing in secure software development and IT solutions architecture. 
              Experienced with Laravel/PHP, IT monitoring dashboards, and e-commerce platforms. Skilled in SOC operations, 
              SIEM tools, and Burp Suite for security assessments.
            </p>
            <p>
              Passionate about applying cybersecurity best practices in software development. Strong background in Agile project management, 
              digital marketing, and user-centered design.
            </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">8+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">7+</span>
              <span className="highlight-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

