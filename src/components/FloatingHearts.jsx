import { useEffect, useRef } from 'react'
import './FloatingHearts.css'

export default function FloatingHearts() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const hearts = ['❤', '💕', '💗', '💖', '♥', '💘', '🌹']
    
    const createHeart = () => {
      const heart = document.createElement('span')
      heart.className = 'floating-heart'
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      heart.style.left = Math.random() * 100 + '%'
      heart.style.fontSize = (Math.random() * 20 + 10) + 'px'
      heart.style.animationDuration = (Math.random() * 6 + 8) + 's'
      heart.style.animationDelay = Math.random() * 2 + 's'
      heart.style.opacity = Math.random() * 0.4 + 0.1
      container.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 16000)
    }

    const interval = setInterval(createHeart, 800)
    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="floating-hearts-container" />
}
