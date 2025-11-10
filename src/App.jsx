import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Portfolio from './components/Portfolio'
import ResumeApp from './resume/App'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentView, setCurrentView] = useState('portfolio') // 'portfolio' or 'resume'

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const navigateToResume = () => {
    setCurrentView('resume')
  }

  const navigateToPortfolio = () => {
    setCurrentView('portfolio')
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="App">
      {currentView === 'portfolio' ? (
        <Portfolio onNavigateToResume={navigateToResume} />
      ) : (
        <ResumeApp onNavigateToPortfolio={navigateToPortfolio} />
      )}
    </div>
  )
}

export default App
