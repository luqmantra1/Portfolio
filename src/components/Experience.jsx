import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'System Engineer (IT Support)',
      company: 'Beyond2u Sdn Bhd',
      location: 'Cheras, Malaysia',
      period: 'May 2025 - Oct 2025',
      type: 'Internship',
      achievements: [
        'Provided IT support and system maintenance for clients including McDonald\'s Malaysia, Tan Chong Motor, and Sunway Construction',
        'Assisted in hardware/software installation, network configuration, and on-site troubleshooting',
        'Supported major McDonald\'s projects such as new store openings, POS and server replacements',
        'Collaborated with senior engineers on preventive maintenance and client coordination'
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Sepakat Berjaya Management (SBM)',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Feb 2025',
      type: 'Freelance',
      achievements: [
        'Designed, developed, and deployed the official corporate website sepakatgroup.com',
        'Implemented responsive UI/UX and multilingual support',
        'Built contact management system, increasing client inquiries by 25%'
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Mizuma Co. Ltd / HGG Enterprise Sdn Bhd',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Feb 2025',
      type: 'Freelance',
      achievements: [
        'Built secure data upload and management portal using PHP and Laravel',
        'Digitized record-keeping for funeral service providers',
        'Enabled controlled data access through secure login features'
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Confidential Client – Aquaculture Industry',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Feb 2025',
      type: 'Freelance',
      achievements: [
        'Developed computer vision model using Python and Streamlit for prawn gender classification',
        'Achieved 85% accuracy and reduced manual labor by 25%',
        'Improved operational efficiency through automation'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'RSA Khidmat & Teknologi Sdn Bhd',
      location: 'Wangsa Maju, Malaysia',
      period: 'Aug 2022 - Apr 2023',
      type: 'Full-time',
      achievements: [
        'Promoted from intern to junior engineer for strong technical contributions',
        'Developed data-driven web app using CodeIgniter, reducing reporting time by 40%',
        'Implemented RBAC for secure port data access and compliance',
        'Built e-Statistik System for Lembaga Pelabuhan Kuantan (LPKtn)'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-title-section">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-meta">
                  <span className="meta-item">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                  <span className="experience-type">{exp.type}</span>
                </div>
              </div>
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
