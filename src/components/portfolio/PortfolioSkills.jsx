import { 
  FaServer, 
  FaShieldAlt, 
  FaCode, 
  FaLaptopCode, 
  FaCloud, 
  FaBrain, 
  FaCogs 
} from 'react-icons/fa'
import { 
  SiPhp, 
  SiLaravel, 
  SiReact, 
  SiAstro, 
  SiPython, 
  SiPytorch, 
  SiDocker, 
  SiTerraform, 
  SiGithubactions, 
  SiLinux, 
  SiMysql, 
  SiWordpress 
} from 'react-icons/si'
import './PortfolioSkills.css'

const PortfolioSkills = () => {
  const skillCategories = [
    {
      id: 'linux-infra',
      title: 'Linux Server Administration',
      icon: <FaServer className="category-icon" />,
      colorClass: 'cyan',
      description: 'Production server operations, healthcare system support, high availability, and command-line mastery.',
      skills: [
        { name: 'Enterprise Linux (RHEL/Ubuntu)', level: 'Advanced' },
        { name: 'JumpServer Bastion Access', level: 'Production' },
        { name: 'Server Hardening & Firewall', level: 'Advanced' },
        { name: 'Bash Scripting & Automation', level: 'Proficient' },
        { name: 'PDN Blood Bank Deployment', level: 'Enterprise' }
      ]
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise Security & Monitoring',
      icon: <FaShieldAlt className="category-icon" />,
      colorClass: 'emerald',
      description: 'Threat mitigation, proactive endpoint defense, continuous monitoring, and security audits.',
      skills: [
        { name: 'ESET Endpoint & Server Security', level: 'Certified' },
        { name: 'Checkmk 24/7 Monitoring', level: 'Advanced' },
        { name: 'Kaspersky Security Ops (RTM)', level: 'Production' },
        { name: 'SIEM Tools & Log Auditing', level: 'Proficient' },
        { name: 'Burp Suite & Vulnerability Tests', level: 'Proficient' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Engineering & APIs',
      icon: <FaCode className="category-icon" />,
      colorClass: 'indigo',
      description: 'Robust server-side logic, secure RESTful APIs, database design, and government-grade RBAC.',
      skills: [
        { name: 'PHP (Laravel & CodeIgniter)', level: 'Advanced' },
        { name: 'C# / ASP.NET', level: 'Proficient' },
        { name: 'MySQL Database Architecture', level: 'Advanced' },
        { name: 'Role-Based Access Control (RBAC)', level: 'Enterprise' },
        { name: 'RESTful API Integration', level: 'Advanced' }
      ]
    },
    {
      id: 'frontend',
      title: 'Modern Frontend & Web',
      icon: <FaLaptopCode className="category-icon" />,
      colorClass: 'cyan',
      description: 'Fast, responsive, accessible web interfaces engineered with modern component frameworks.',
      skills: [
        { name: 'React.js (SPA / Hooks)', level: 'Advanced' },
        { name: 'TypeScript & JavaScript (ES6+)', level: 'Advanced' },
        { name: 'Astro (Fast Static & SSR)', level: 'Proficient' },
        { name: 'Responsive Mobile-First UI/UX', level: 'Advanced' },
        { name: 'Client-Side Algorithms', level: 'Proficient' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud Infrastructure',
      icon: <FaCloud className="category-icon" />,
      colorClass: 'blue',
      description: 'Container orchestration, CI/CD automation pipelines, and infrastructure-as-code.',
      skills: [
        { name: 'Docker Containerization', level: 'Proficient' },
        { name: 'Terraform (IaC)', level: 'Intermediate' },
        { name: 'GitHub Actions CI/CD', level: 'Proficient' },
        { name: 'CompTIA Cloud+ Methodologies', level: 'Certified' },
        { name: 'Git Workflow & Versioning', level: 'Advanced' }
      ]
    },
    {
      id: 'ai-vision',
      title: 'AI & Computer Vision',
      icon: <FaBrain className="category-icon" />,
      colorClass: 'amber',
      description: 'Applied machine learning pipelines, deep learning computer vision models, and rapid interfaces.',
      skills: [
        { name: 'Python Engineering', level: 'Advanced' },
        { name: 'YOLOv8 Object Detection', level: 'Production' },
        { name: 'PyTorch Deep Learning', level: 'Proficient' },
        { name: 'Streamlit Interactive Apps', level: 'Advanced' },
        { name: 'Data Pipeline Automation', level: 'Proficient' }
      ]
    }
  ]

  return (
    <section id="skills" className="portfolio-skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaCogs />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">
            Core <span className="text-gradient">Skills & Capabilities</span>
          </h2>
          <p className="section-subtitle">
            An enterprise-proven blend of systems administration, cybersecurity engineering, 
            and modern full-stack development.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className={`skill-category-card glass-panel category-${cat.colorClass}`}>
              <div className="category-header">
                <div className="category-icon-box">{cat.icon}</div>
                <div className="category-info">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-items-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item-row">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSkills
