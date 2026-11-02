import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            IT professional with hands-on experience bridging software development and server infrastructure.
            Skilled in building and supporting data-driven applications using Python and PHP (Laravel), including
            RESTful API integration, with practical experience integrating frontend interfaces with backend logic.
          </p>
          <p>
            Brings a strong foundation in administering enterprise Linux environments, troubleshooting technical escalations,
            deploying system updates, and supporting application releases into production. Brings a foundation in Core Java,
            hands-on Git version control, and ongoing AWS cloud training. A collaborative problem-solver who combines
            networking knowledge with analytical programming to reliably support and maintain core IT operations and software solutions.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">14+</span>
              <span className="highlight-label">Verified Badges</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects & Deployments</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3.62</span>
              <span className="highlight-label">Degree CGPA (Honours)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
