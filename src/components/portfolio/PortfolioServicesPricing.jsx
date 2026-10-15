import { useState } from 'react'
import {
  FaCheck,
  FaRocket,
  FaCrown,
  FaShieldAlt,
  FaArrowRight,
  FaLaptopCode,
  FaServer,
  FaBolt,
  FaEnvelope,
  FaWhatsapp,
  FaCopy,
  FaTimes,
  FaTag
} from 'react-icons/fa'
import './PortfolioServicesPricing.css'
import CountryCodeSelect from './CountryCodeSelect'

const PortfolioServicesPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [inquirySent, setInquirySent] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+60',
    phone: '',
    message: ''
  })

  const tiers = [
    {
      id: 'basic',
      name: 'Basic',
      tagline: 'Digital Presence',
      badge: 'Starter Package',
      priceMYR: 'RM 1,899',
      priceSubtext: 'Starting from / per project',
      highlighted: false,
      icon: <FaLaptopCode className="tier-icon" />,
      timeline: '1 - 2 Weeks Delivery',
      description: 'Ideal for small businesses, personal portfolios, and individuals looking to establish a crisp online presence.',
      features: [
        'WordPress / Divi site development',
        'Responsive mobile-first design',
        'Basic SEO & OpenGraph setup',
        'Contact form with email alerts',
        'Up to 5 custom pages',
        'Cross-browser optimization',
        '1-month post-launch technical support'
      ],
      deliverables: 'Complete, turnkey responsive website deployed to your domain.'
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'Custom Web App',
      badge: '⭐ Most Popular / Best Value',
      priceMYR: 'RM 4,899',
      priceSubtext: 'Starting from / per project',
      highlighted: true,
      icon: <FaRocket className="tier-icon" />,
      timeline: '3 - 5 Weeks Delivery',
      description: 'Tailored for growing startups, corporate client portals, and platforms requiring bespoke logic and secure data.',
      features: [
        'Custom frontend (React.js / Astro)',
        'Robust backend architecture (Laravel)',
        'Relational database architecture (MySQL)',
        'User authentication & Role-Based Access Control (RBAC)',
        'Standard security setup (CSRF, XSS, rate limiting)',
        'Dynamic dashboards & RESTful API endpoints',
        '3-month post-launch warranty & performance tuning'
      ],
      deliverables: 'Scalable, modern custom web application with source code and API documentation.'
    },
    {
      id: 'premium',
      name: 'Premium',
      tagline: 'Enterprise Solution',
      badge: 'High Security & DevOps',
      priceMYR: 'RM 8,900',
      priceSubtext: 'Starting from / enterprise deployment',
      highlighted: false,
      icon: <FaCrown className="tier-icon" />,
      timeline: '6 - 10 Weeks Delivery',
      description: 'Enterprise-grade systems engineered for high traffic, strict compliance, automated DevOps, and rock-solid Linux hardening.',
      features: [
        'Full-stack custom system (Frontend + Backend + Database)',
        'Advanced Linux server deployment (Docker / CI-CD setup)',
        'Automated 24/7 monitoring integration (Checkmk)',
        'Comprehensive server hardening & security audit',
        'JumpServer & bastion host configuration',
        'Automated database backups & disaster recovery workflow',
        'Priority enterprise SLA & 6-month dedicated technical support'
      ],
      deliverables: 'Production-ready enterprise ecosystem containerized, monitored, and fully hardened.'
    }
  ]

  const handleOpenInquiry = (tier) => {
    setSelectedPlan(tier)
    setInquirySent(false)
    setCopied(false)
  }

  const handleCloseModal = () => {
    setSelectedPlan(null)
  }

  const getFormattedPhone = () => {
    if (!formData.phone || !formData.phone.trim()) return 'N/A'
    const trimmed = formData.phone.trim()
    if (trimmed.startsWith('+')) return trimmed
    return `${formData.countryCode} ${trimmed}`
  }

  const generateEmailContent = () => {
    const subject = `[Quotation Request] ${selectedPlan.name} Package (${selectedPlan.priceMYR}) - ${formData.name || 'New Client'}`
    const body =
      `Hi Luqman,

I would like to request an official quotation for the following package:

=====================================
Package: ${selectedPlan.name} (${selectedPlan.tagline})
Estimated Investment: ${selectedPlan.priceMYR} (${selectedPlan.priceSubtext})
Estimated Timeline: ${selectedPlan.timeline}
=====================================

Client Details:
Name / Company: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone / WhatsApp: ${getFormattedPhone()}

Project Requirements & Scope:
${formData.message || 'Please provide quotation details and availability.'}

Best regards,
${formData.name || 'Prospective Client'}`

    return { subject, body }
  }

  const handleSubmitInquiry = (e) => {
    e.preventDefault()
    const { subject, body } = generateEmailContent()
    window.location.href = `mailto:luqmantra1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setInquirySent(true)
  }

  const handleWhatsAppInquiry = () => {
    const formattedPhone = getFormattedPhone()
    const contactInfo = formattedPhone !== 'N/A' ? ` My contact number is ${formattedPhone}.` : ''
    const text = `Hi Luqman! I'm interested in your *${selectedPlan.name} Package (${selectedPlan.priceMYR})* for freelance web & IT services. My name is ${formData.name || 'a prospective client'}.${contactInfo} Could we discuss details?`
    window.open(`https://wa.me/60175337009?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleCopyDetails = () => {
    const { subject, body } = generateEmailContent()
    navigator.clipboard.writeText(`To: luqmantra1@gmail.com\nSubject: ${subject}\n\n${body}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section id="pricing" className="portfolio-pricing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FaBolt />
            <span>Freelance & Consulting</span>
          </div>
          <h2 className="section-title">
            Services & <span className="text-gradient">Pricing Quotations</span>
          </h2>
          <p className="section-subtitle">
            Transparent, enterprise-grade engineering tiers with rates in <strong>Malaysian Ringgit (MYR)</strong>.
            Direct quotation inquiries routed immediately to <strong>luqmantra1@gmail.com</strong>.
          </p>
        </div>

        {/* 3-Tier Pricing Grid */}
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card glass-panel ${tier.highlighted ? 'tier-highlighted' : ''}`}
            >
              {/* Highlight Badge */}
              <div className="card-top-badge-container">
                <span className={`plan-badge ${tier.highlighted ? 'badge-featured' : 'badge-regular'}`}>
                  {tier.badge}
                </span>
              </div>

              {/* Card Header */}
              <div className="tier-header">
                <div className="tier-icon-wrap">
                  {tier.icon}
                </div>
                <div className="tier-titles">
                  <h3 className="tier-name">{tier.name}</h3>
                  <span className="tier-tagline">{tier.tagline}</span>
                </div>
              </div>

              {/* Price in MYR Box */}
              <div className="tier-price-box">
                <div className="price-main">
                  <span className="price-amount">{tier.priceMYR}</span>
                  <span className="price-currency">MYR</span>
                </div>
                <span className="price-subtext">{tier.priceSubtext}</span>
              </div>

              {/* Delivery Timeline Pill */}
              <div className="timeline-pill">
                <span className="timeline-dot"></span>
                <span>{tier.timeline}</span>
              </div>

              {/* Description */}
              <p className="tier-desc">{tier.description}</p>

              {/* Features List */}
              <div className="features-container">
                <span className="features-headline">Included Specifications:</span>
                <ul className="features-list">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <div className="feature-check-circle">
                        <FaCheck className="check-icon" />
                      </div>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverable Callout */}
              <div className="deliverable-note">
                <strong>Deliverable:</strong> {tier.deliverables}
              </div>

              {/* CTA Button */}
              <button
                className={`btn tier-cta-btn ${tier.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleOpenInquiry(tier)}
              >
                <span>Request {tier.name} Quote ({tier.priceMYR})</span>
                <FaArrowRight className="cta-arrow" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Scope / Consultation Banner */}
        <div className="custom-scope-banner glass-panel">
          <div className="banner-left">
            <div className="banner-icon-box">
              <FaShieldAlt />
            </div>
            <div className="banner-text">
              <h4 className="banner-title">Need a Tailored Scope, Server Hardening, or Custom Retainer?</h4>
              <p className="banner-desc">
                Whether you need dedicated Linux server setup, Checkmk automated alerting, custom API development,
                or monthly IT maintenance, I provide customized quotations tailored to your exact infrastructure requirements.
              </p>
            </div>
          </div>
          <div className="banner-right">
            <a
              href="mailto:luqmantra1@gmail.com?subject=Custom%20Scope%20Quotation%20Inquiry%20-%20Luqman%20Hakim"
              className="btn btn-outline-glow banner-btn"
            >
              <FaEnvelope /> Email Custom Quotation
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Quotation Modal */}
      {selectedPlan && (
        <div className="inquiry-modal-backdrop" onClick={handleCloseModal}>
          <div className="inquiry-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="modal-tier-badge-row">
                  <span className="modal-plan-pill">{selectedPlan.name} Package</span>
                  <span className="modal-price-pill">{selectedPlan.priceMYR} MYR</span>
                </div>
                <h3 className="modal-title">Request Quotation & Proposal</h3>
              </div>
              <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
                <FaTimes />
              </button>
            </div>

            <p className="modal-intro">
              This request will be sent directly to <strong>luqmantra1@gmail.com</strong>. Fill in your project
              details below to receive an official proposal.
            </p>

            {inquirySent ? (
              <div className="modal-success-box">
                <FaCheck className="success-icon" />
                <h4>Email Client Activated!</h4>
                <p>
                  Your quotation draft has been dispatched to <strong>luqmantra1@gmail.com</strong>.
                  You can also message me on WhatsApp for immediate response.
                </p>
                <div className="modal-post-actions">
                  <button className="btn btn-primary" onClick={handleWhatsAppInquiry}>
                    <FaWhatsapp /> Chat on WhatsApp
                  </button>
                  <button className="btn btn-secondary" onClick={handleCloseModal}>
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleSubmitInquiry}>
                <div className="form-group">
                  <label htmlFor="inquiry-name">Your Name / Organization *</label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Ahmad Razif, Horizon Ventures"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row-modal">
                  <div className="form-group">
                    <label htmlFor="inquiry-email">Work Email *</label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="e.g. ahmad@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inquiry-phone">Phone / WhatsApp (Optional)</label>
                    <CountryCodeSelect
                      selectedDialCode={formData.countryCode}
                      onSelectCountry={(dialCode) => setFormData((prev) => ({ ...prev, countryCode: dialCode }))}
                      phoneNumber={formData.phone}
                      onPhoneNumberChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
                      inputId="inquiry-phone"
                      inputPlaceholder={formData.countryCode === '+60' ? 'e.g. 12-345 6789' : 'e.g. 123 456 7890'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-message">Project Scope & Expected Requirements *</label>
                  <textarea
                    id="inquiry-message"
                    rows="4"
                    required
                    placeholder="Briefly describe what you'd like to build, timeline, or server environment details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Direct Send Buttons */}
                <div className="modal-actions-bar">
                  <button type="submit" className="btn btn-primary send-email-btn">
                    <FaEnvelope />
                    <span>Send to luqmantra1@gmail.com</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary whatsapp-btn"
                    onClick={handleWhatsAppInquiry}
                    title="Send via WhatsApp"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary copy-btn"
                    onClick={handleCopyDetails}
                    title="Copy details to clipboard"
                  >
                    <FaCopy />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioServicesPricing
