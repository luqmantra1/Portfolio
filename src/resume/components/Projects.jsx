import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Corporate Website - Sepakat Group',
      description: 'Built and launched the official corporate website for sepakatgroup.com, delivering a fully responsive, multilingual experience with a streamlined contact management system. The redesign helped boost client inquiries by 25%.',
      tech: ['PHP', 'Laravel', 'Responsive Design','HTML5','Corporate Website'],
      type: 'Freelance Project',
      featured: true,
      live: 'https://sepakatgroup.com'
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
      title: 'Freshwater Prawn AI Gender Detection',
      description: 'Built an automated freshwater prawn gender classification system using Python, Streamlit, and a YOLOv8-based computer vision model. Achieved 85% accuracy and reduced manual inspection work by about 25%.',
      tech: ['Python', 'Streamlit', 'Computer Vision', 'Machine Learning'],
      type: 'Freelance Project',
      featured: true,
    },
    {
      title: 'E-Statistik System for LPKtn',
      description: 'Developed a data-driven web application using CodeIgniter to automate port statistics workflows, cutting reporting time by roughly 40 percent. Implemented role-based access control to secure port data and ensure alignment with government requirements.',
      tech: ['PHP', 'CodeIgniter', 'MySQL'],
      type: 'Professional Project',
      featured: true,
      live: 'https://e-statistic.lpktn.gov.my/'
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a responsive and interactive personal portfolio website using React and modern web technologies. Focused on clean design, seamless user experience, and mobile-friendly performance to showcase projects and skills effectively.',
      tech: ['React', 'Javascript', 'HTML5', 'CSS3','Responsive','Interactive'],
      type: 'Personal Portfolio',
      featured: false,
      live: 'https://luqmantra.my',
      github: 'https://github.com/luqmantra1/Portfolio'
    },
    {
      title: 'K Prog AI Labs Website',
      description: 'Implemented the frontend of KPROG AI LABS’ responsive web platform, creating a modern, mobile-friendly interface. Focused on intuitive user experience, performance optimization, and seamless functionality across devices.',
      tech: ['HTML5', 'CSS3', ' Javascript', 'Responsive','Interactive'],
      type: 'Company Website',
      featured: false,
      live: 'https://kprog.app/'
    },
    {
      title: 'Secure IT Monitoring Dashboard System',
      description: 'Designed and built a real-time dashboard system for monitoring IT infrastructure with a focus on cybersecurity metrics. Integrated basic SIEM capabilities to display log events, user access, and security alerts.',
      tech: ['PHP', 'Laravel', 'MySQL', 'SIEM'],
      type: 'Degree Final Project',
      featured: false,
      live: 'https://drive.google.com/file/d/1IfX-frzjOpV9lv2w5eeDu4CjL2Hj28E4/view?usp=sharing'
    },
    {
      title: 'E-Commerce Thrift Shop Platform – TNC.MY',
      description: 'Developed an online thrift store platform focused on user-friendly browsing and purchase of second-hand items. Implemented key e-commerce features such as product listings, shopping cart, and order tracking.',
      tech: ['HTML', 'CSS', 'PHP'],
      type: 'Diploma Final Project',
      featured: false,
    },
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
    </section>
  )
}

export default Projects
