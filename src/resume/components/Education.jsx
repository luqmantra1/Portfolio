import { FaGraduationCap, FaAward, FaExternalLinkAlt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of IT (Honours) in Cyber Security',
      major: 'Relevant Coursework: Secure Software Development, IT Infrastructure Monitoring, Network Security, Information Assurance, and SIEM Operations',
      institution: 'Universiti Poly-Tech Malaysia (UPTM)',
      period: '2023 - 2025',
      cgpa: '3.62 CGPA',
      achievements: [
        'Secure Software Development, IT Infrastructure Monitoring, Network Security & SIEM Operations',
        'Secure IT Monitoring Dashboard System with SIEM Integration (Degree Final Project)',
        'TechCrafters SULAM Program - Digital Media Pipeline Lead'
      ]
    },
    {
      degree: 'Diploma in Computer Science',
      major: 'Relevant Coursework: Web Application Development, Database Management (MySQL), Object-Oriented Programming, and E-Commerce Systems',
      institution: 'Kolej University Poly-Tech MARA (KUPTM)',
      period: '2020 - 2022',
      cgpa: '3.59 CGPA',
      achievements: [
        'Web Application Development, Database Management (MySQL) & E-Commerce Systems',
        'E-Commerce Web Platform – TNC.MY (Diploma Final Project)'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Amazon',
      image: '/amazon-fullstack.jpeg',
      verifyUrl: 'https://coursera.org/share/351186393fab306103e71783d48cb980'
    },
    {
      name: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      image: '/ccna.png',
      verifyUrl: 'https://www.credly.com/badges/3b8ce121-300d-46f0-8a51-a8a6b0dde35b/public_url' 
    },
    {
      name: 'CompTIA Cloud+',
      issuer: 'CompTIA',
      image: '/cloud+.png',
      verifyUrl: 'https://www.credly.com/badges/6e91a322-ec84-44b9-a1ed-15d12d0b8ab3/public_url' 
    },
    {
      name: 'ESET Certified Engineer',
      issuer: 'ESET',
      image: '/eset.png',
      verifyUrl: null
    },
    {
      name: 'Credly Profile & Digital Badges',
      issuer: 'Credly Verified',
      image: '/Credly.png',
      verifyUrl: 'https://www.credly.com/users/luqman-tra/badges/credly'
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education & Credentials</h2>
      
      {/* Degrees List */}
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <div className="edu-title-row">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="edu-badges">
                    <span className="edu-cgpa-pill">{edu.cgpa}</span>
                    <span className="edu-period-pill">{edu.period}</span>
                  </div>
                </div>
                {edu.major && <p className="education-major">{edu.major}</p>}
                <div className="education-institution">{edu.institution}</div>

                {edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <strong>Key Achievements:</strong>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className="edu-check" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h3 className="certifications-title">
          <FaAward className="award-icon" /> Industry Certifications
        </h3>
        
        <div className="certifications-grid-resume">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card-resume">
              <div className="cert-card-header">
                <span className="cert-name-text">{cert.name}</span>
                <span className="cert-issuer-text">{cert.issuer}</span>
              </div>

              {cert.image && (
                <div className="cert-image-box">
                  <img
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    className="cert-img-elem"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              )}

              {cert.verifyUrl ? (
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link-btn"
                >
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt />
                </a>
              ) : (
                <div className="cert-verified-label">
                  <FaShieldAlt /> Verified Industry Credential
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education