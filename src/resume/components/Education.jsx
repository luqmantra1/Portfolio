import { FaGraduationCap, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Information Technology (Honours)',
      major: 'Major in Cyber Security',
      institution: 'Universiti Poly-Tech Malaysia (UPTM)',
      period: 'Apr 2023 - Oct 2025',
      cgpa: '3.62',
      achievements: [
        'Secure IT Monitoring Dashboard System (Degree Final Project)',
        'TechCrafters Event (SULAM Program) - Media Team Lead'
      ]
    },
    {
      degree: 'Diploma in Science Computer',
      institution: 'Kolej Universiti Poly-Tech Mara (KUPTM)',
      period: 'July 2020 - Dec 2022',
      cgpa: '3.59',
      achievements: [
        'E-Commerce Thrift Shop Platform – TNC.MY (Diploma Final Project)'
      ]
    }
  ]

  const certifications = [
    {
      name: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      image: '/ccna.png' 
    },
    {
      name: 'CompTIA Cloud+',
      issuer: 'CompTIA',
      image: '/cloud+.png' 
    },
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                {edu.major && <p className="education-major">{edu.major}</p>}
                <div className="education-institution">{edu.institution}</div>
                <div className="education-meta">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-cgpa">CGPA: {edu.cgpa}</span>
                </div>
                {edu.achievements.length > 0 && (
                  <div className="education-achievements">
                    <strong>Key Achievements:</strong>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="certifications-section" style={{ marginTop: '40px' }}>
          <h3 className="certifications-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <FaAward style={{ color: '#ff6b00' }} /> Certifications
          </h3>
          
          <div className="certifications-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item" style={{ 
                flex: '1 1 300px', 
                backgroundColor: '#111', 
                border: '1px solid #333', 
                borderRadius: '8px', 
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                
                {/* 1. Black and Orange Text Header */}
                <div className="cert-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #222', paddingBottom: '15px' }}>
                  <span className="cert-name" style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.1rem', paddingRight: '10px' }}>
                    {cert.name}
                  </span>
                  <span className="cert-issuer" style={{ fontWeight: 'bold', color: '#ff6b00', whiteSpace: 'nowrap' }}>
                    {cert.issuer}
                  </span>
                </div>

                {/* 2. Picture directly underneath inside the same dark card */}
                {cert.image && (
                  <div className="cert-image-container" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0a0a0a', padding: '10px', borderRadius: '4px', border: '1px solid #222' }}>
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        maxHeight: '300px',
                        objectFit: 'contain', 
                        borderRadius: '4px' 
                      }}
                    />
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      )}
    </section>
  )
}

export default Education