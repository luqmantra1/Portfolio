import { useState } from 'react'
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaServer,
  FaShieldAlt,
  FaCode,
  FaLaptopCode
} from 'react-icons/fa'
import './PortfolioExperience.css'

const PortfolioExperience = () => {
  const [filter, setFilter] = useState('all')

  const experiences = [
    {
      id: 'fronix',
      title: 'Technical Support Engineer',
      company: 'Fronix Sdn Bhd',
      location: 'Petaling Jaya, Malaysia',
      period: 'April 2026 - Present',
      type: 'Full-time',
      category: 'enterprise',
      isCurrent: true,
      icon: <FaServer />,
      summary: 'Administering enterprise Linux infrastructure and endpoint threat protection for nationwide national healthcare and public broadcasting institutions.',
      achievements: [
        'Secured critical Linux infrastructure for the national Blood Bank System (BBISv2) via SSH hardening and Checkmk monitoring, while directing nationwide hardware deployments across government hospitals.',
        'Automated enterprise security rollouts for UiTM across offline Linux servers (SLES/AlmaLinux) using custom Bash scripts and MOK kernel module signing to significantly accelerate deployment.',
        'Administered endpoint security operations for national broadcaster RTM, resolving vulnerabilities and configuring strict Kaspersky policies to ensure maximum uptime and compliance.',
        'Collaborated with Project Managers to define maintenance workflows, draft project schedules, and ensure seamless post-deployment system stability.',
        'Managed and resolved complex technical support tickets, providing high-level troubleshooting to maintain strict service-level standards for diverse enterprise client portfolios.'
      ],
      skills: ['Enterprise Linux', 'BBISv2 Blood Bank (KKM)', 'ESET Security', 'Kaspersky', 'Checkmk', 'JumpServer', 'Server Hardening', 'Tier-2 Support']
    },
    {
      id: 'kprog',
      title: 'Co-Founder & Developer',
      company: 'K PROG AI LABS',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Apr 2023 - Present',
      type: 'Independent / Startup',
      category: 'software',
      isCurrent: false,
      icon: <FaLaptopCode />,
      summary: 'Co-founded an independent IT solutions venture delivering bespoke web, mobile, and intelligent data systems.',
      achievements: [
        'Co-founded an independent IT solutions company delivering smart, modern digital products to diverse business clients.',
        'Lead development of custom software, full-stack web applications, database architectures, and data automation systems.',
        'Collaborate directly with cross-industry clients to architect scalable, modern technology solutions that drive tangible business growth.'
      ],
      skills: ['Software Architecture', 'Laravel', 'React.js', 'System Design', 'Client Consultation', 'Full-Stack Delivery']
    },
    {
      id: 'beyond2u',
      title: 'System Engineer (Enterprise Support)',
      company: 'Beyond2u',
      location: 'Cheras, Malaysia',
      period: 'May 2025 - Oct 2025',
      type: 'Internship',
      category: 'enterprise',
      isCurrent: false,
      icon: <FaServer />,
      summary: 'Enterprise field and systems IT support for major commercial accounts including McDonald\'s Malaysia, Tan Chong Motor, and Sunway Construction.',
      achievements: [
        'Executed critical POS migrations and server upgrades for McDonald\'s new store openings.',
        'Performed hardware/software installation and network configuration for major corporate clients.',
        'Conducted system diagnostics and preventive maintenance in high-pressure, client-facing environments.',
        'Collaborated with senior infrastructure engineers on scheduled preventive maintenance and enterprise client coordination.'
      ],
      skills: ['McDonald\'s Malaysia Support', 'POS Systems', 'Network Configuration', 'Hardware Troubleshooting', 'Preventive Maintenance']
    },
    {
      id: 'rsa',
      title: 'Junior Software Engineer',
      company: 'RSA Khidmat & Teknologi',
      location: 'Wangsa Maju, Malaysia',
      period: 'Aug 2022 - Apr 2023',
      type: 'Full-time',
      category: 'software',
      isCurrent: false,
      icon: <FaCode />,
      summary: 'Promoted from intern to junior engineer to engineer government-grade port data management systems.',
      achievements: [
        'Developed the e-Statistik web application using CodeIgniter, automating data generation and reducing reporting time by 40%.',
        'Implemented strict Role-Based Access Control (RBAC) to secure sensitive government port data.',
        'Executed server maintenance and supported User Acceptance Testing (UAT) for clients like DBKL Malaysia.',
        'Promoted from intern to junior software engineer in recognition of high-impact technical performance.'
      ],
      skills: ['CodeIgniter', 'PHP', 'MySQL', 'RBAC Security', 'Port Data Analytics', 'e-Statistik LPKtn']
    },
    {
      id: 'freelance-sepakat',
      title: 'Freelance Full-Stack Developer',
      company: 'Sepakat Berjaya Management (SBM)',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Mar 2026',
      type: 'Freelance Project',
      category: 'freelance',
      isCurrent: false,
      icon: <FaLaptopCode />,
      summary: 'Designed and deployed corporate digital presence for commercial property and business management group.',
      achievements: [
        'Deployed the sepakatgroup.com corporate portal integrating multilingual support and a custom contact management system.',
        'Implemented mobile-first responsive UI/UX and comprehensive multilingual support.',
        'Engineered an integrated client inquiry and lead management system, increasing customer conversion inquiries by 25%.'
      ],
      skills: ['PHP / Laravel', 'Corporate Web Portal', 'UI/UX Design', 'Lead Automation', 'SEO Optimization']
    },
    {
      id: 'freelance-mizuma',
      title: 'Freelance Backend Developer',
      company: 'Mizuma Co. Ltd / HGG Enterprise',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Mar 2026',
      type: 'Freelance Project',
      category: 'freelance',
      isCurrent: false,
      icon: <FaShieldAlt />,
      summary: 'Engineered a secure data management and authenticated client portal for digitized memorial services.',
      achievements: [
        'Built an RBAC enabled data portal using PHP and Laravel to replace manual record-keeping with secure digital access.',
        'Digitized multi-year manual record-keeping processes with structured relational database architecture.',
        'Implemented secure encrypted session logins, role permission checks, and audit trails for confidential records.'
      ],
      skills: ['PHP', 'Laravel', 'MySQL Database Design', 'User Authentication', 'Data Security']
    },
    {
      id: 'freelance-ai',
      title: 'AI Computer Vision Developer',
      company: 'Confidential Client – Aquaculture Industry',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2023 - Mar 2026',
      type: 'Freelance Project',
      category: 'freelance',
      isCurrent: false,
      icon: <FaCode />,
      summary: 'Built production computer vision pipeline for automated aquaculture classification.',
      achievements: [
        'Developed a Python/Streamlit Computer Vision model using YOLOv8 for aquaculture classification, achieving 85% classification accuracy.',
        'Cut manual laboratory inspection labor by approximately 25% through machine learning automation.',
        'Built a lightweight, intuitive interactive dashboard allowing non-technical aquaculture farm operators to run instant batch detections.'
      ],
      skills: ['Python', 'YOLOv8', 'PyTorch', 'Streamlit', 'Computer Vision', 'Automation']
    }
  ]

  const filtered = experiences.filter((item) => {
    if (filter === 'all') return true
    return item.category === filter
  })

  return (
    <section id="experience" className="portfolio-experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaBriefcase />
            <span>Career Track Record</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical roles spanning enterprise systems administration, cyber defense,
            and full-stack software development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="experience-filter-tabs">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Experiences ({experiences.length})
          </button>
          <button
            className={`filter-btn ${filter === 'enterprise' ? 'active' : ''}`}
            onClick={() => setFilter('enterprise')}
          >
            Enterprise & Systems
          </button>
          <button
            className={`filter-btn ${filter === 'software' ? 'active' : ''}`}
            onClick={() => setFilter('software')}
          >
            Software Engineering
          </button>
          <button
            className={`filter-btn ${filter === 'freelance' ? 'active' : ''}`}
            onClick={() => setFilter('freelance')}
          >
            Freelance & AI Solutions
          </button>
        </div>

        {/* Experience Timeline Cards */}
        <div className="experience-timeline-container">
          {filtered.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-card glass-panel ${exp.isCurrent ? 'current-role-highlight' : ''}`}
            >
              {/* Card Header */}
              <div className="exp-card-header">
                <div className="exp-icon-box">
                  {exp.icon}
                </div>
                <div className="exp-headline">
                  <div className="exp-title-row">
                    <h3 className="exp-role-title">{exp.title}</h3>
                    <div className="exp-badges-row">
                      {exp.isCurrent && (
                        <span className="badge badge-emerald">
                          <span className="status-dot"></span> Current Role
                        </span>
                      )}
                      <span className="badge badge-indigo">{exp.type}</span>
                    </div>
                  </div>
                  <div className="exp-company-row">
                    <span className="exp-company-name">{exp.company}</span>
                    <span className="exp-meta-item">
                      <FaMapMarkerAlt className="meta-icon" /> {exp.location}
                    </span>
                    <span className="exp-meta-item">
                      <FaCalendarAlt className="meta-icon" /> {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="exp-summary-text">{exp.summary}</p>

              {/* Key Achievements Bullet Points */}
              <div className="exp-achievements-box">
                <h4 className="achievements-title">Key Responsibilities & Impact:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="achievement-item">
                      <FaCheckCircle className="bullet-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills / Tech Used */}
              <div className="exp-tech-tags">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge badge-cyan">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioExperience
