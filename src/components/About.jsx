import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            Cyber Security graduate specializing in secure software development and IT solutions architecture. 
            Experienced in developing systems such as IT monitoring dashboards and e-commerce platforms using 
            Laravel and PHP. Skilled in SOC operations, SIEM tools, and Burp Suite for security assessment 
            and vulnerability testing.
          </p>
          <p>
            Passionate about integrating cybersecurity principles into software development to create resilient, 
            high-performing applications. Brings an entrepreneurial mindset with experience in Agile project 
            management, digital marketing, and user-centered design.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">4+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
