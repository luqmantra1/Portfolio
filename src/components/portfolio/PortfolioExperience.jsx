import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './PortfolioExperience.css'

const PortfolioExperience = () => {
  const experiences = [
    {
      title: 'Junior Web Developer',
      company: 'O2O Ecommerce Sdn Bhd',
      location: 'Petaling Jaya, Malaysia',
      period: 'Dec 2025 - Present',
      type: 'Full-time',
      achievements: [
        'Developed and deployed the official company website (o2o.my) leveraging the Astro framework and JavaScript for optimized frontend performance',
        'Built the BNBC client website from the ground up using WordPress and the Divi Builder, tailoring the design to specific business requirements',
        'Maintained and updated the backend infrastructure for the HQ852 website (Taiwanese client) using the CakePHP framework',
        'Assisted the technical support team by troubleshooting website issues, resolving client tickets, and ensuring smooth daily operations'
      ]
    },
    {
      title: 'Co-Founder & Developer',
      company: 'K PROG AI LABS',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Apr 2023 - Present',
      type: 'Freelance',
      achievements: [
        'Co-founded an independent IT solutions company delivering smart, modern digital products.',
        'Lead development of custom software, web and mobile applications, and data systems.',
        'Collaborate with clients across industries to provide innovative, scalable technology solutions that drive business growth.',
      ]
    },
    {
      title: 'System Engineer (IT Support)',
      company: 'Beyond2u Sdn Bhd',
      location: 'Cheras, Malaysia',
      period: 'May 2025 - Oct 2025',
      type: 'Internship',
      achievements: [
        'Provided IT support for McDonald\'s Malaysia, Tan Chong Motor, and Sunway Construction',
        'Supported major McDonald\'s projects including new store openings and system upgrades',
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
        'Designed and deployed corporate website sepakatgroup.com',
        'Implemented responsive UI/UX and multilingual support',
        'Increased client inquiries by 25%'
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
        'Developed data-driven web app using CodeIgniter, reducing reporting time by 40%',
        'Implemented RBAC for secure port data access',
        'Built e-Statistik System for Lembaga Pelabuhan Kuantan'
      ]
    }
  ]

  return (
    <section id="experience" className="portfolio-experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">
            Professional <span className="highlight">Experience</span>
          </h2>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-type">{exp.type}</span>
                </div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-meta">
                  <span><FaCalendarAlt /> {exp.period}</span>
                  <span><FaMapMarkerAlt /> {exp.location}</span>
                </div>
                <ul className="exp-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioExperience

