import { FaGraduationCap, FaAward, FaExternalLinkAlt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
import './PortfolioEducation.css'

const PortfolioEducation = () => {
  const educationList = [
    {
      degree: 'Bachelor of Information Technology (Honours)',
      major: 'Major in Cyber Security',
      institution: 'Universiti Poly-Tech Malaysia (UPTM)',
      period: '2023 - 2025',
      cgpa: '3.62 CGPA (Honours)',
      highlights: [
        'Relevant Coursework: Secure Software Development, IT Infrastructure Monitoring, Network Security, Information Assurance, and SIEM Operations',
        'Degree Final Project: Secure IT Monitoring Dashboard System with SIEM Log Integration',
        'TechCrafters SULAM Program - Digital Media Pipeline Lead & Content Distribution Coordinator'
      ]
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Kolej University Poly-Tech MARA (KUPTM)',
      period: '2020 - 2022',
      cgpa: '3.59 CGPA',
      highlights: [
        'Relevant Coursework: Web Application Development, Database Management (MySQL), Object-Oriented Programming, and E-Commerce Systems',
        'Diploma Final Project: E-Commerce Web Platform (TNC.MY)',
        'Core Foundation in Relational Databases, Algorithms, and Software Engineering'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Amazon',
      image: '/amazon-fullstack.jpeg',
      badgeCategory: 'Cloud & Full-Stack Engineering',
      verifyUrl: 'https://coursera.org/share/351186393fab306103e71783d48cb980',
      description: 'Comprehensive full-stack web architecture, modern frontend frameworks, cloud-native backend services, and scalable web deployment backed by Amazon.'
    },
    {
      name: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      image: '/ccna.png',
      badgeCategory: 'Networking & Infrastructure',
      verifyUrl: 'https://www.credly.com/badges/3b8ce121-300d-46f0-8a51-a8a6b0dde35b/public_url',
      description: 'Enterprise networking architecture, IP addressing, switching protocols, WLAN security, and router configuration.'
    },
    {
      name: 'CompTIA Cloud+',
      issuer: 'CompTIA',
      image: '/cloud+.png',
      badgeCategory: 'Cloud Architecture & DevOps',
      verifyUrl: 'https://www.credly.com/badges/6e91a322-ec84-44b9-a1ed-15d12d0b8ab3/public_url',
      description: 'Vendor-neutral enterprise cloud architecture, automated deployment, cloud security, and infrastructure optimization.'
    },
    {
      name: 'ESET Certified Engineer',
      issuer: 'ESET',
      image: '/eset.png',
      badgeCategory: 'Enterprise Cybersecurity',
      verifyUrl: null,
      description: 'Deployment, policy orchestration, and threat mitigation for ESET Endpoint Protection and Server Security suites.'
    },
    {
      name: 'Credly Certified Professional Profile',
      issuer: 'Credly Verified',
      image: '/Credly.png',
      badgeCategory: 'Digital Badges & Verification',
      verifyUrl: 'https://www.credly.com/users/luqman-tra/badges/credly',
      description: 'Publicly authenticated credentials, digital badge transcripts, and verified industry competencies.'
    }
  ]

  return (
    <section id="education" className="portfolio-education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaGraduationCap />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal Cyber Security & Computer Science education backed by globally recognized industry certifications.
          </p>
        </div>

        {/* Education Degree Grid */}
        <div className="education-grid">
          {educationList.map((edu, index) => (
            <div key={index} className="edu-card glass-panel">
              <div className="edu-card-top">
                <div className="edu-icon-badge">
                  <FaGraduationCap />
                </div>
                <div className="edu-meta-top">
                  <span className="edu-period-pill">{edu.period}</span>
                  <span className="edu-cgpa-pill">{edu.cgpa}</span>
                </div>
              </div>

              <div className="edu-content">
                <h3 className="edu-degree-title">{edu.degree}</h3>
                {edu.major && <div className="edu-major-tag">{edu.major}</div>}
                <div className="edu-institution-name">{edu.institution}</div>

                <div className="edu-highlights-box">
                  <span className="highlights-label">Academic Highlights:</span>
                  <ul className="highlights-list">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Showcase Header */}
        <div className="certs-section-heading">
          <div className="certs-heading-left">
            <div className="certs-icon-box">
              <FaAward />
            </div>
            <div>
              <h3 className="certs-title">Industry Certifications</h3>
              <p className="certs-subtitle">Verified credentials in Networking, Cloud Architecture, and Endpoint Security</p>
            </div>
          </div>
          <a 
            href="https://www.credly.com/users/luqman-tra/badges/credly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-glow view-all-credly-btn"
          >
            <span>View All Badges on Credly</span>
            <FaExternalLinkAlt />
          </a>
        </div>

        {/* Certifications Cards Grid */}
        <div className="certs-grid">
          {certifications.map((cert, cIdx) => (
            <div key={cIdx} className="cert-card glass-panel">
              <div className="cert-top-row">
                <span className="cert-category-badge">{cert.badgeCategory}</span>
                <span className="cert-issuer-badge">{cert.issuer}</span>
              </div>

              {cert.image && (
                <div className="cert-image-frame">
                  <img 
                    src={cert.image} 
                    alt={`${cert.name} certification`}
                    className="cert-badge-img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              )}

              <div className="cert-body">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>

              {cert.verifyUrl ? (
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-btn"
                >
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt className="verify-icon" />
                </a>
              ) : (
                <div className="cert-verified-static">
                  <FaShieldAlt className="shield-check" /> Verified Industry Credential
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioEducation
