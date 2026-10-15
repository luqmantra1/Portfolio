import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaLaptopCode, FaCheckCircle, FaStar } from 'react-icons/fa'
import './PortfolioProjects.css'

const PortfolioProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 'soluna-ent',
      title: 'Soluna Ent Corporate Website',
      category: 'web',
      tag: 'Modern Web Frameworks',
      client: 'Startup Venture',
      description: 'Directed the technical strategy and development for a startup venture, engineering a highly optimized, mobile-first company portal focused on cross-browser compatibility and rapid load times for maximum user engagement.',
      image: '/soluna.png',
      tech: ['Modern Web Frameworks', 'Frontend Optimization', 'HTML5 & CSS3', 'Responsive UI/UX'],
      featured: true,
      github: null,
      live: 'https://soluna.my/'
    },
    {
      id: 'portfolio-web',
      title: 'Professional Portfolio (Luqmantra.my)',
      category: 'web',
      tag: 'Executive CV & Web Portal',
      client: 'Independent Freelance Brand',
      description: 'Architected and deployed a mobile-first web portal, focusing on responsive CSS frameworks, cross-browser compatibility, and frontend performance optimization for rapid load times.',
      image: '/portfoliolatest.png',
      tech: ['React.js', 'UI/UX Optimization', 'CSS3', 'Vite', 'Production Deployment'],
      featured: true,
      github: null,
      live: 'https://luqmantra.my/'
    },
    {
      id: 'sepakat-group',
      title: 'Sepakat Group Corporate Platform',
      category: 'web',
      tag: 'Corporate Digital Platform',
      client: 'Sepakat Berjaya Management (SBM)',
      description: 'Deployed the sepakatgroup.com corporate portal integrating multilingual support and a custom contact management system, driving a 25% increase in client inquiries.',
      image: '/sepakat.png',
      tech: ['PHP', 'Laravel', 'Multilingual UI/UX', 'SEO', 'Lead Automation'],
      featured: false,
      github: null,
      live: 'https://sepakatgroup.com/'
    },
    {
      id: 'prawn-ai',
      title: 'Freshwater Prawn AI Gender Detection',
      category: 'ai',
      tag: 'AI & Computer Vision',
      client: 'Aquaculture Industry Client',
      description: 'Developed a Python/Streamlit Computer Vision model using YOLOv8 for aquaculture classification, achieving 85% classification accuracy and cutting manual inspection by 25%.',
      image: '/prawn1.jpeg',
      tech: ['Python', 'Streamlit', 'YOLOv8', 'PyTorch', 'Computer Vision'],
      featured: true,
      github: null,
      live: null
    },
    {
      id: 'mizuma-portal',
      title: 'Funeral Service Data Portal',
      category: 'enterprise',
      tag: 'Secure Enterprise Portal',
      client: 'Mizuma Co. Ltd / HGG Enterprise',
      description: 'Built an RBAC enabled data portal using PHP and Laravel to replace manual record-keeping with secure digital access, authenticated logins, and structured database storage.',
      image: '/dataupload1.png',
      tech: ['PHP', 'Laravel', 'MySQL', 'RBAC', 'Data Security'],
      featured: true,
      github: null,
      live: null
    },
    {
      id: 'lpktn-estatistik',
      title: 'e-Statistik System for LPKtn',
      category: 'enterprise',
      tag: 'Port Authority Analytics',
      client: 'Lembaga Pelabuhan Kuantan (LPKtn)',
      description: 'Developed the e-Statistik web application using CodeIgniter, automating data generation and reducing reporting time by 40%. Implemented strict Role-Based Access Control (RBAC) to secure sensitive government port data.',
      image: '/lpktn.png',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'RBAC', 'Government Compliance'],
      featured: false,
      github: null,
      live: null
    },
    {
      id: 'sulam-techcrafters',
      title: 'TechCrafters SULAM Program',
      category: 'involvement',
      tag: 'Digital Asset Management',
      client: 'UPTM Community Initiative',
      description: 'Managed the digital media pipeline and digital content distribution for promotional campaigns, coordinating digital asset creation and deployment to ensure high-engagement operational flow.',
      image: '/sulam1.jpeg',
      tech: ['Digital Media Pipeline', 'Asset Management', 'Campaign Operations', 'Media Team Lead'],
      featured: false,
      github: null,
      live: null
    },
    {
      id: 'anime-search',
      title: 'Anime Search Application',
      category: 'web',
      tag: 'React.js Single Page App (SPA)',
      client: 'API Integration Project',
      description: 'Engineered a dynamic Single Page Application (SPA) using React.js to asynchronously consume the YouTube Data API, implementing real-time data fetching, state management, and optimized DOM rendering for video metadata.',
      image: null,
      tech: ['React.js', 'RESTful API', 'YouTube Data API', 'State Management', 'SPA'],
      featured: true,
      github: null,
      live: null
    },
    {
      id: 'paws-preferences',
      title: 'Paws & Preferences (Adoption Matcher)',
      category: 'web',
      tag: 'Client-Side Matching Engine',
      client: 'React Component Architecture',
      description: 'Developed a data-driven matching engine utilizing modular React Component Architecture; implemented client-side filtering algorithms and efficient state management to process and render datasets without server-side page reloads.',
      image: null,
      tech: ['React.js', 'Client-Side Algorithms', 'Component Architecture', 'State Management'],
      featured: true,
      github: null,
      live: null
    },
  ]

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true
    return p.category === activeCategory
  })

  return (
    <section id="projects" className="portfolio-projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaLaptopCode />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects & Deployments</span>
          </h2>
          <p className="section-subtitle">
            A proven track record spanning startup engineering, interactive Single Page Applications,
            enterprise government platforms, and AI computer vision pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar">
          <button
            className={`proj-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`proj-filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Web & React SPAs
          </button>
          <button
            className={`proj-filter-btn ${activeCategory === 'enterprise' ? 'active' : ''}`}
            onClick={() => setActiveCategory('enterprise')}
          >
            Enterprise & Port Systems
          </button>
          <button
            className={`proj-filter-btn ${activeCategory === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ai')}
          >
            AI & Computer Vision
          </button>
          <button
            className={`proj-filter-btn ${activeCategory === 'involvement' ? 'active' : ''}`}
            onClick={() => setActiveCategory('involvement')}
          >
            Digital Asset Initiatives
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card glass-panel ${project.featured ? 'project-card-featured' : ''}`}
            >
              {/* Media Preview Frame */}
              <div className="project-image-box">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-cover-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'flex'
                      }
                    }}
                  />
                ) : null}
                <div className="project-image-fallback" style={{ display: project.image ? 'none' : 'flex' }}>
                  <FaLaptopCode className="fallback-icon" />
                  <span>{project.title}</span>
                </div>

                <div className="project-overlay-badge">
                  {project.featured && (
                    <span className="badge badge-featured">
                      <FaStar className="star-icon" /> Featured
                    </span>
                  )}
                  <span className="badge badge-tag">{project.tag}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content-body">
                <div className="project-client-name">{project.client}</div>
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tech-pills">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Row */}
                <div className="project-links-row">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link live-link"
                    >
                      <FaExternalLinkAlt /> Live Deployment
                    </a>
                  ) : (
                    <span className="project-action-static">
                      <FaCheckCircle className="check-icon" /> Verified Project
                    </span>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link code-link"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioProjects
