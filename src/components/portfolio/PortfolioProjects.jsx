import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './PortfolioProjects.css'

const PortfolioProjects = () => {
  const projects = [
    {
      title: 'Freshwater Prawn AI Gender Detection',
      description: 'Built an automated freshwater prawn gender classification system using Python, Streamlit, and a YOLOv8-based computer vision model. Achieved 85% accuracy and reduced manual inspection work by about 25%.',
      tech: ['Python', 'Streamlit', 'Computer Vision', 'Machine Learning'],
      type: 'Freelance Project',
      featured: true,
    },
    {
      title: 'Funeral Service Data Portal',
      description: 'Developed a secure data upload and management portal for funeral service providers using PHP and Laravel. The platform modernizes record-keeping and allows families to safely access relevant information through authenticated logins.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      type: 'Freelance Project',
      featured: true,
      live: 'https://mz-dus.com/'
    },
    {
      title: 'E-Statistik System for LPKtn',
      description: 'Developed a data-driven web application using CodeIgniter to automate port statistics workflows, cutting reporting time by roughly 40 percent. Implemented role-based access control to secure port data and ensure alignment with government requirements.',
      tech: ['PHP', 'CodeIgniter', 'MySQL'],
      type: 'Professional Project',
      featured: true,
      live: 'https://e-statistic.lpktn.gov.my/'
    }
  ]

  return (
    <section id="projects" className="portfolio-projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-badge">
                {project.featured ? '⭐ Featured' : 'Project'}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
              <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="View project">
                <FaExternalLinkAlt /> Live
              </a>
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="View code">
                <FaGithub /> Code
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioProjects

