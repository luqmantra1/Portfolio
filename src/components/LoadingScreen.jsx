import { useState, useEffect } from 'react'
import { FaShieldAlt, FaServer, FaCheckCircle, FaForward } from 'react-icons/fa'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Initializing secure environment...')

  const steps = [
    { at: 15, text: 'Verifying enterprise security credentials...' },
    { at: 40, text: 'Connecting to Linux server infrastructure...' },
    { at: 70, text: 'Validating CCNA, Cloud+ & ESET certifications...' },
    { at: 90, text: 'Deploying Luqman TRA portfolio services...' },
    { at: 100, text: 'Systems operational & ready.' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 300)
          return 100
        }
        const next = prev + 4
        const matched = steps.find((s) => s.at <= next && s.at > prev)
        if (matched) {
          setStatusText(matched.text)
        }
        return next
      })
    }, 28)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-bg-effects">
        <div className="loading-radial-glow"></div>
      </div>

      <div className="loading-card glass-panel">
        <div className="loading-header">
          <div className="loading-brand">
            <span className="brand-badge">
              <FaShieldAlt className="shield-icon" />
              SYSTEM_BOOT
            </span>
            <span className="brand-version">v2.6 Enterprise</span>
          </div>
          <button className="skip-btn" onClick={onComplete} title="Skip loading">
            Skip <FaForward />
          </button>
        </div>

        <div className="loading-center">
          <div className="identity-pill">
            <span className="status-dot"></span>
            <span>Luqman TRA Portfolio Environment</span>
          </div>

          <div className="progress-value">{progress}%</div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>

          <p className="loading-status-text code-font">
            <span className="prompt-sym">&gt;</span> {statusText}
          </p>
        </div>

        <div className="loading-footer">
          <div className="footer-metric">
            <span className="metric-label">Specialization</span>
            <span className="metric-val">Full-Stack & Security</span>
          </div>
          <div className="footer-metric">
            <span className="metric-label">Status</span>
            <span className="metric-val status-ok">Open for Projects</span>
          </div>
          <div className="footer-metric">
            <span className="metric-label">Security</span>
            <span className="metric-val status-ok">ESET & Checkmk OK</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
