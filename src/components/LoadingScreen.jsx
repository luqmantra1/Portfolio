import { useState, useEffect } from 'react'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState('Initializing security protocols...')
  const [showContent, setShowContent] = useState(false)

  const loadingMessages = [
    'Initializing security protocols...',
    'Scanning for vulnerabilities...',
    'Establishing secure connection...',
    'Loading encrypted data...',
    'Verifying authentication...',
    'System ready!'
  ]

  useEffect(() => {
    setShowContent(true)
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const messageInterval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = loadingMessages.findIndex(msg => msg === prev)
        if (currentIndex < loadingMessages.length - 1) {
          return loadingMessages[currentIndex + 1]
        }
        return prev
      })
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <div className={`loading-screen ${showContent ? 'active' : ''}`}>
      <div className="loading-container">
        <div className="cyber-grid"></div>
        <div className="loading-content">
          <div className="hacker-text">
            <span className="cyber-title">&gt; SYSTEM_INIT</span>
            <span className="cyber-subtitle">CYBER_SECURITY_PORTFOLIO.exe</span>
          </div>
          
          <div className="loading-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">Terminal</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">./load_portfolio.sh</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">{currentText}</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-progress">
                  [{'>'.repeat(Math.floor(progress / 5))}{' '.repeat(20 - Math.floor(progress / 5))}]
                </span>
                <span className="terminal-percent">{progress}%</span>
              </div>
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <div className="progress-glow" style={{ left: `${progress}%` }}></div>
          </div>

          <div className="loading-stats">
            <div className="stat-item">
              <span className="stat-label">Encryption:</span>
              <span className="stat-value">AES-256</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Status:</span>
              <span className="stat-value">{progress < 100 ? 'LOADING' : 'READY'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

