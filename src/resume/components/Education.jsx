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
      issuer: 'Cisco'
    }
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
        <div className="certifications-section">
          <h3 className="certifications-title">
            <FaAward /> Certifications
          </h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Education

