import {
  FaServer,
  FaShieldAlt,
  FaCode,
  FaBrain,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle,
  FaTerminal
} from 'react-icons/fa'
import './PortfolioAbout.css'

const PortfolioAbout = () => {
  const pillars = [
    {
      icon: <FaServer className="pillar-icon" />,
      title: 'Enterprise Linux Administration',
      desc: 'Expertise in administering production Linux servers. Currently supporting the Pusat Darah Negara (PDN) Blood Bank System across Ministry of Health (KKM) hospital departments nationwide.',
      tags: ['RHEL / Ubuntu / Rocky', 'JumpServer', 'Server Hardening', 'High Availability']
    },
    {
      icon: <FaShieldAlt className="pillar-icon" />,
      title: 'Enterprise Security & Monitoring',
      desc: 'Deploying ESET Endpoint & Server Security solutions (UiTM) and managing Kaspersky Anti-Virus operations (RTM). Deep proficiency in Checkmk automated monitoring, SIEM, and SOC readiness.',
      tags: ['ESET Certified', 'Checkmk', 'Kaspersky', 'SIEM / SOC']
    },
    {
      icon: <FaCode className="pillar-icon" />,
      title: 'Full-Stack Web Engineering',
      desc: 'Developing high-speed, secure web systems using PHP (Laravel, CodeIgniter) and modern frontend architectures (React.js, Astro). Built the e-Statistik System for Lembaga Pelabuhan Kuantan.',
      tags: ['PHP / Laravel', 'CodeIgniter', 'React.js', 'Astro', 'MySQL']
    },
    {
      icon: <FaBrain className="pillar-icon" />,
      title: 'DevOps & Applied AI',
      desc: 'Automating deployments with Docker, Terraform, and GitHub Actions CI/CD. Built computer vision solutions with Python, YOLOv8, and Streamlit achieving 85% accuracy in production.',
      tags: ['Docker', 'Terraform', 'GitHub Actions', 'Python / YOLOv8']
    }
  ]

  return (
    <section id="about" className="portfolio-about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaTerminal />
            <span>Engineering Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Luqman TRA</span>
          </h2>
          <p className="section-subtitle">
            Full-Stack Developer & Cybersecurity Specialist holding a Bachelor of IT in
            <strong> Cyber Security from UPTM</strong> and Diploma in Computer Science from <strong>KUPTM</strong>.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="about-overview-grid">
          <div className="about-bio-card glass-panel">
            <h3 className="bio-heading">
              Bridging Mission-Critical Systems Support with Modern Full-Stack Development
            </h3>
            <p className="bio-text">
              I am a results-oriented Full-Stack Developer and Systems Engineer based in Malaysia.
              My expertise centers on ensuring uninterrupted uptime and maximum threat resilience for
              vital enterprise environments—including managing server infrastructure for the <strong>Pusat Darah Negara (PDN)
                Blood Bank System</strong> across Ministry of Health (KKM) hospital departments.
            </p>
            <p className="bio-text">
              With a background spanning <strong>Junior Software Engineer at RSA Khidmat & Teknologi</strong>,
              <strong> System Engineer Intern at Beyond2u</strong>, and leading independent freelance software projects,
              I blend deep systems engineering (Linux, Docker, Terraform) with modern web craftsmanship (Laravel, React, Astro).
              My work is guided by stringent cybersecurity standards and proactive monitoring (Checkmk, ESET).
            </p>

            <div className="bio-quick-facts">
              <div className="fact-item">
                <FaCheckCircle className="fact-check" />
                <span><strong>Focus:</strong> Independent Full-Stack Development, Linux Server & Security</span>
              </div>
              <div className="fact-item">
                <FaCheckCircle className="fact-check" />
                <span><strong>Education:</strong> B.IT (Cyber Security) @ UPTM | Diploma CS @ KUPTM</span>
              </div>
              <div className="fact-item">
                <FaCheckCircle className="fact-check" />
                <span><strong>Certifications:</strong> Amazon Full Stack, Cisco CCNA, CompTIA Cloud+, ESET Certified</span>
              </div>
              <div className="fact-item">
                <FaCheckCircle className="fact-check" />
                <span><strong>Core Languages:</strong> Python, PHP (Laravel), JavaScript & TypeScript (React), C#, Bash, SQL</span>
              </div>
            </div>
          </div>

          <div className="about-stats-column">
            <div className="stat-highlight-card glass-panel">
              <div className="stat-icon-wrapper">
                <FaServer />
              </div>
              <div className="stat-data">
                <span className="stat-big-num">KKM & PDN</span>
                <span className="stat-desc">Nationwide Hospital Blood Bank Linux Deployment</span>
              </div>
            </div>

            <div className="stat-highlight-card glass-panel">
              <div className="stat-icon-wrapper">
                <FaShieldAlt />
              </div>
              <div className="stat-data">
                <span className="stat-big-num">3x Certified</span>
                <span className="stat-desc">Cisco CCNA, CompTIA Cloud+, ESET Engineer</span>
              </div>
            </div>

            <div className="stat-highlight-card glass-panel">
              <div className="stat-icon-wrapper">
                <FaGraduationCap />
              </div>
              <div className="stat-data">
                <span className="stat-big-num">3.62 CGPA</span>
                <span className="stat-desc">B.IT Cyber Security Honours Degree (UPTM)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Competence */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-panel">
              <div className="pillar-header">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
              </div>
              <p className="pillar-description">{pillar.desc}</p>
              <div className="pillar-tags">
                {pillar.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge badge-cyan">
                    {tag}
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

export default PortfolioAbout
