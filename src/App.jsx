import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import LoveLetterSection from './components/LoveLetterSection'
import InfiniteMenuSection from './components/InfiniteMenuSection'
import Timeline from './components/Timeline'
import FloatingHearts from './components/FloatingHearts'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <FloatingHearts />
      <Hero />
      <LoveLetterSection />
      <InfiniteMenuSection />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
