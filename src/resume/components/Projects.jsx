import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Soluna Ent Corporate Website',
      description: 'Directed the technical strategy and development for a startup venture, engineering a highly optimized, mobile-first company portal focused on cross-browser compatibility and rapid load times for maximum user engagement.',
      tech: ['Modern Web Frameworks', 'Frontend Optimization', 'HTML5 & CSS3', 'Mobile-First UI/UX'],
      type: 'Startup Venture',
      featured: true,
      live: null,
      image: '/soluna.png'
    },
    {
      title: 'Professional Portfolio (Luqmantra.my)',
      description: 'Architected and deployed a mobile-first web portal, focusing on responsive CSS frameworks, cross-browser compatibility, and frontend performance optimization for rapid load times.',
      tech: ['React.js', 'UI/UX Optimization', 'CSS3', 'Vite', 'Production Deployment'],
      type: 'Personal Portfolio',
      featured: true,
      live: 'https://luqmantra.my',
      github: null,
      image: '/portfoliolatest.png'
    },
    {
      title: 'Freshwater Prawn AI Gender Detection',
      description: 'Developed a Python/Streamlit Computer Vision model using YOLOv8 for aquaculture classification, achieving 85% classification accuracy and cutting manual inspection work by roughly 25%.',
      tech: ['Python', 'Streamlit', 'YOLOv8', 'PyTorch', 'Computer Vision'],
      type: 'Freelance AI Project',
      featured: true,
      live: null,
      image: '/prawn1.jpeg'
    },
    {
      title: 'Funeral Service Data Portal',
      description: 'Built an RBAC enabled data portal using PHP and Laravel to replace manual record-keeping with secure digital access, authenticated logins, and structured database storage.',
      tech: ['PHP', 'Laravel', 'MySQL', 'RBAC', 'Data Security'],
      type: 'Freelance Enterprise Project',
      featured: true,
      live: 'https://mz-dus.com/',
      image: '/dataupload1.png'
    },
    {
      title: 'Corporate Website - Sepakat Group',
      description: 'Deployed the sepakatgroup.com corporate portal integrating multilingual support and a custom contact management system, boosting client conversion inquiries by 25%.',
      tech: ['PHP', 'Laravel', 'Responsive Design', 'HTML5', 'Corporate Website'],
      type: 'Freelance Project',
      featured: false,
      live: 'https://sepakatgroup.com',
      image: '/sepakat.png'
    },
    {
      title: 'e-Statistik System for LPKtn',
      description: 'Developed the e-Statistik web application using CodeIgniter, automating data generation and reducing reporting time by 40%. Implemented strict Role-Based Access Control (RBAC) to secure sensitive government port data.',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'RBAC', 'Port Analytics'],
      type: 'Professional Government Project',
      featured: false,
      live: 'https://e-statistic.lpktn.gov.my/',
      image: '/lpktn.png'
    },
    {
      title: 'TechCrafters SULAM Program',
      description: 'Managed the digital media pipeline and digital content distribution for promotional campaigns, coordinating digital asset creation and deployment to ensure high-engagement operational flow.',
      tech: ['Digital Media Pipeline', 'Asset Management', 'Campaign Operations', 'Media Team Lead'],
      type: 'Digital Asset Initiative',
      featured: false,
      live: null,
      image: '/sulam1.jpeg'
    },
    {
      title: 'Anime Search Application',
      description: 'Engineered a dynamic Single Page Application (SPA) using React.js to asynchronously consume the YouTube Data API, implementing real-time data fetching, state management, and optimized DOM rendering for video metadata.',
      tech: ['React.js', 'RESTful API', 'YouTube Data API', 'State Management', 'SPA'],
      type: 'Single Page Application (SPA)',
      featured: true,
      live: null,
      image: null
    },
    {
      title: 'Paws & Preferences (Adoption Matcher)',
      description: 'Developed a data-driven matching engine utilizing modular React Component Architecture; implemented client-side filtering algorithms and efficient state management to process and render datasets without server-side page reloads.',
      tech: ['React.js', 'Client-Side Algorithms', 'Component Architecture', 'State Management'],
      type: 'Web Application',
      featured: true,
      live: null,
      image: null
    },
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects & Involvement</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
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
              {project.live && (
                <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
