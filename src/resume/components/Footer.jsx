import './Footer.css'

const Footer = () => {
  return (
    <footer className="resume-footer-bar">
      <div className="resume-footer-content">
        <p className="resume-footer-text">
          Curriculum Vitae • <strong>Luqman TRA</strong> • Full-Stack Developer & Cybersecurity Specialist
        </p>
        <p className="resume-footer-copy">
          © {new Date().getFullYear()} Luqman TRA. Verified credentials and production experience.
        </p>
      </div>
    </footer>
  )
}

export default Footer
