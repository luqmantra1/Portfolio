import { useState } from 'react'
import { FaHeart, FaCamera, FaTshirt, FaHandsHelping, FaTimes } from 'react-icons/fa'
import './PortfolioVolunteering.css'

const volunteeringImages = [
  '/sulam1.jpeg',
  '/sulam2.jpeg',
  '/sulam3.jpeg',
  '/sulam4.jpeg',
  '/sulam5.jpeg',
  '/sulam6.jpeg',
  '/sulam7.jpeg',
  '/sulam8.jpeg',
  '/sulam9.jpeg',
  '/sulam10.jpeg',
]

const PortfolioVolunteering = () => {
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <section id="volunteering" className="portfolio-volunteering">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaHandsHelping />
            <span>Community Leadership</span>
          </div>
          <h2 className="section-title">
            Volunteering & <span className="text-gradient">Initiatives</span>
          </h2>
          <p className="section-subtitle">
            Leading media and branding operations for university community programs and tech initiatives.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="volunteering-narrative-card glass-panel">
          <div className="volunteering-header-info">
            <div className="vol-title-block">
              <h3 className="vol-event-title">TechCrafters Event (SULAM Program)</h3>
              <span className="vol-role-badge">Media Team Lead & Event Logistics</span>
            </div>
          </div>

          <p className="volunteering-intro">
            Spearheaded the media and creative communications division for TechCrafters under the university SULAM initiative. 
            Captured professional event photography with DSLR gear for official archival documentation and promotional collateral. 
            Designed official branded merchandise including event shirts and marketing banners, while coordinating fundraising 
            initiatives (car boot sales and charity car wash campaigns) to support logistical operations.
          </p>

          <div className="volunteering-pillars-row">
            <div className="vol-pill-item">
              <FaCamera className="vol-pill-icon" />
              <span>Media & DSLR Photography</span>
            </div>
            <div className="vol-pill-item">
              <FaTshirt className="vol-pill-icon" />
              <span>Brand & Merchandise Design</span>
            </div>
            <div className="vol-pill-item">
              <FaHandsHelping className="vol-pill-icon" />
              <span>Community Logistics & Fundraising</span>
            </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="volunteering-gallery">
          {volunteeringImages.map((src, index) => (
            <div 
              key={index} 
              className="gallery-item-card"
              onClick={() => setActivePhoto(src)}
            >
              <img 
                src={src} 
                alt={`TechCrafters volunteering moment ${index + 1}`} 
                className="gallery-photo"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div className="gallery-hover-overlay">
                <span>View Full Photo</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="photo-lightbox-backdrop" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setActivePhoto(null)}>
              <FaTimes />
            </button>
            <img src={activePhoto} alt="Volunteering Preview" className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioVolunteering
