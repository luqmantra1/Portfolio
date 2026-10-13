import { FaServer, FaShieldAlt, FaDatabase, FaCode, FaCloud, FaRobot } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Linux & Infrastructure',
      icon: <FaServer />,
      skills: ['Linux Server Administration', 'JumpServer', 'Server Hardening', 'Bash Scripting', 'PDN Healthcare Deployments']
    },
    {
      category: 'Enterprise Security & Monitoring',
      icon: <FaShieldAlt />,
      skills: ['ESET Endpoint & Server Security', 'Checkmk Monitoring', 'Kaspersky Operations (RTM)', 'SIEM Tools', 'Burp Suite', 'Secure Software Development']
    },
    {
      category: 'Backend Engineering',
      icon: <FaDatabase />,
      skills: ['PHP', 'Laravel', 'CodeIgniter', 'C#', 'ASP.NET', 'MySQL', 'RESTful APIs', 'Role-Based Access Control (RBAC)']
    },
    {
      category: 'Frontend & Web Development',
      icon: <FaCode />,
      skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Astro', 'Single Page Applications (SPA)', 'HTML5 & CSS3', 'Responsive UI/UX', 'Client-Side Algorithms']
    },
    {
      category: 'DevOps & Cloud',
      icon: <FaCloud />,
      skills: ['Docker', 'Terraform (IaC)', 'GitHub Actions CI/CD', 'CompTIA Cloud+', 'Git']
    },
    {
      category: 'AI / Machine Learning',
      icon: <FaRobot />,
      skills: ['Python', 'YOLOv8 Object Detection', 'PyTorch', 'Streamlit', 'Computer Vision']
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
