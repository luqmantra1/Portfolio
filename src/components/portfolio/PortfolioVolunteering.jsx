import { useRef, useEffect } from 'react'
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
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="volunteering"
      className="portfolio-volunteering"
      ref={sectionRef} // <-- fixed ref here
    >
      <div className="volunteering-container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">
            Volunteering <span className="highlight">Experience</span>
          </h2>
        </div>

        <p className="volunteering-intro">
        Led the Media Team to enhance TechCrafters’ online presence through strategic social media content creation and audience engagement. 
        Captured high-quality event photography using a DSLR camera for promotional and archival purposes, ensuring the event’s key moments were professionally documented. 
        Designed official event merchandise, including t-shirts and promotional materials, 
        maintaining consistent branding across all outputs. Additionally, coordinated fundraising initiatives, 
        such as car boot sales and car wash campaigns, to support event logistics and operations, 
        contributing to a smooth and successful event execution.
        </p>

        <div className="volunteering-gallery">
          {volunteeringImages.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Volunteering ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioVolunteering
