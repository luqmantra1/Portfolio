import { FaCode, FaLaptopCode, FaServer, FaShieldAlt, FaCloud, FaRobot } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Python', 'PHP', 'Java (foundational)', 'C#', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frameworks & Libraries',
      icon: <FaLaptopCode />,
      skills: ['React.js', 'Next.js', 'Astro', 'Laravel', 'ASP.NET', 'Streamlit', 'YOLOv8', 'PyTorch']
    },
    {
      category: 'Database & Infrastructure',
      icon: <FaServer />,
      skills: ['MySQL', 'PostgreSQL (Neon)', 'Linux (Ubuntu/SLES/AlmaLinux)', 'Git', 'AWS (Cloud Practitioner completed)', 'RESTful API Integration']
    },
    {
      category: 'Cloud, Containers & DevOps',
      icon: <FaCloud />,
      skills: ['Kubernetes (LFS158/LFS157)', 'Docker Containerization', 'CompTIA Cloud+', 'Serverless', 'Terraform (IaC)', 'GitHub Actions']
    },
    {
      category: 'Concepts & Security',
      icon: <FaShieldAlt />,
      skills: [
        'Secure Software Development',
        'Role-Based Access Control (RBAC)',
        'Authentication & Authorization (OAuth 2.0 / OIDC)',
        'Active Directory & LDAP (Okta)',
        'Single Page Applications (SPA)',
        'Object-Oriented Programming (OOP)',
        'Client-Side Algorithms'
      ]
    },
    {
      category: 'Enterprise Security & Monitoring',
      icon: <FaRobot />,
      skills: [
        'Checkmk 24/7 Monitoring',
        'ESET Endpoint & Server Security',
        'Kaspersky Security Operations (RTM)',
        'SSH Hardening & MOK Kernel Signing',
        'SIEM Operations',
        'Computer Vision & Data Pipelines'
      ]
    }
  ]

  return (
    <section id="skills" className="resume-skills-section">
      <h2 className="section-title">Core Competencies & Technical Skills</h2>
      <div className="skills-grid-resume">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-domain-card glass-panel">
            <div className="skill-domain-header">
              <div className="skill-domain-icon">{category.icon}</div>
              <h3 className="skill-domain-title">{category.category}</h3>
            </div>
            <div className="skill-tags-flow">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
