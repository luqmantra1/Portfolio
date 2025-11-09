import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Secure IT Monitoring Dashboard System',
      description: 'Designed and built a real-time dashboard system for monitoring IT infrastructure with a focus on cybersecurity metrics. Integrated basic SIEM capabilities to display log events, user access, and security alerts.',
      tech: ['PHP', 'Laravel', 'MySQL', 'SIEM'],
      type: 'Degree Final Project',
      featured: true
    },
    {
      title: 'E-Commerce Thrift Shop Platform – TNC.MY',
      description: 'Developed an online thrift store platform focused on user-friendly browsing and purchase of second-hand items. Implemented key e-commerce features such as product listings, shopping cart, and order tracking.',
      tech: ['HTML', 'CSS', 'PHP'],
      type: 'Diploma Final Project',
      featured: true
    },
    {
      title: 'E-Statistik System for LPKtn',
      description: 'Built a data-driven web app using CodeIgniter to automate port statistics, reducing reporting time by 40%. Implemented RBAC for secure port data access and compliance with government standards.',
      tech: ['PHP', 'CodeIgniter', 'MySQL'],
      type: 'Professional Project',
      featured: false
    },
    {
      title: 'Corporate Website - Sepakat Group',
      description: 'Designed, developed, and deployed the official corporate website sepakatgroup.com. Implemented responsive UI/UX, multilingual support, and a contact management system. Increased client inquiries by 25%.',
      tech: ['PHP', 'Laravel', 'Responsive Design'],
      type: 'Freelance Project',
      featured: false
    },
    {
      title: 'Computer Vision Prawn Classification',
      description: 'Developed a computer vision model using Python and Streamlit to automate prawn gender classification. Achieved 85% accuracy and reduced manual labor by 25%.',
      tech: ['Python', 'Streamlit', 'Computer Vision', 'ML'],
      type: 'AI/ML Project',
      featured: false
    },
    {
      title: 'Funeral Service Data Portal',
      description: 'Built a secure data upload and management portal using PHP and Laravel for funeral service providers. Digitized record-keeping and enabled controlled data access for families through secure login features.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      type: 'Freelance Project',
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-header">
              <span className="project-type">{project.type}</span>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="#" className="project-link" aria-label="View project">
                <FaExternalLinkAlt /> Live
              </a>
              <a href="#" className="project-link" aria-label="View code">
                <FaGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
