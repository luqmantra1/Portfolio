import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            IT professional with hands-on experience bridging software development and server infrastructure.
            Skilled in building and supporting data-driven applications using Python and PHP, with practical experience
            integrating frontend interfaces with backend logic.
          </p>
          <p>
            Brings a strong foundation in administering enterprise Linux environments, troubleshooting technical escalations,
            and deploying system updates. A collaborative problem-solver who combines networking knowledge with analytical
            programming to reliably support and maintain core IT operations and software solutions.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">9+</span>
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

