import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Support Engineer',
      company: 'Fronix Sdn Bhd',
      location: 'Petaling Jaya, Malaysia',
      period: 'Apr 2026 - Present',
      type: 'Full-time',
      achievements: [
        'Secured critical Linux infrastructure for the national Blood Bank System (BBISv2) via SSH hardening and Checkmk monitoring, while directing nationwide hardware deployments across government hospitals.',
        'Automated enterprise security rollouts for UiTM across offline Linux servers (SLES/AlmaLinux) using custom Bash scripts and MOK kernel module signing to significantly accelerate deployment.',
        'Administered endpoint security operations for national broadcaster RTM, resolving vulnerabilities and configuring strict Kaspersky policies to ensure maximum uptime and compliance.'
      ]
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Various Clients (SBM, Mizuma Co.Ltd, HGG Enterprise)',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Mar 2026',
      type: 'Freelance',
      achievements: [
        'Developed a Python/Streamlit Computer Vision model for aquaculture, achieving 85% classification accuracy.',
        'Built an RBAC enabled data portal using PHP and Laravel to replace manual record-keeping with secure digital access.',
        'Deployed the sepakatgroup.com corporate portal integrating multilingual support and a custom contact management system.'
      ]
    },
    {
      title: 'Co-Founder & Developer',
      company: 'K PROG AI LABS',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Apr 2023 - Present',
      type: 'Freelance / Venture',
      achievements: [
        'Co-founded an independent IT solutions company delivering smart, modern digital products.',
        'Lead development of custom software, web and mobile applications, and data systems.',
        'Collaborate with clients across industries to provide innovative, scalable technology solutions that drive business growth.'
      ]
    },
    {
      title: 'System Engineer Intern (Enterprise Support)',
      company: 'Beyond2u',
      location: 'Cheras, Malaysia',
      period: 'May 2025 - Oct 2025',
      type: 'Internship',
      achievements: [
        'Executed critical POS migrations and server upgrades for McDonald\'s new store openings.',
        'Performed hardware/software installation and network configuration for major corporate clients.',
        'Conducted system diagnostics and preventive maintenance in high-pressure, client-facing environments.'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'RSA Khidmat & Teknologi',
      location: 'Wangsa Maju, Malaysia',
      period: 'Aug 2022 - Apr 2023',
      type: 'Full-time',
      achievements: [
        'Developed the e-Statistik web application using CodeIgniter, automating data generation and reducing reporting time by 40%.',
        'Implemented strict Role-Based Access Control (RBAC) to secure sensitive government port data.',
        'Executed server maintenance and supported User Acceptance Testing (UAT) for clients like DBKL Malaysia.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
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
