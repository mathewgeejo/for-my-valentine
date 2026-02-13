import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const [heartBeat, setHeartBeat] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartBeat(prev => !prev)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = []
    const colors = ['#e8456b', '#f8bbd0', '#c2185b', '#d4a574', '#fce4ec', '#ff6b9d']

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.2
        this.pulse = Math.random() * Math.PI * 2
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += 0.02
        this.opacity = 0.2 + Math.sin(this.pulse) * 0.15

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    // Connection lines
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = '#f8bbd055'
            ctx.lineWidth = 0.5
            ctx.globalAlpha = 1 - dist / 120
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-particles" />
      
      <div className="hero-gradient-overlay" />
      
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.div
          className="hero-heart-icon"
          animate={{
            scale: heartBeat ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          💝
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          A celebration of love, memories & us
        </motion.p>

        <motion.div
          className="hero-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          February 14, 2026
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 2.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <span className="scroll-arrow">↓</span>
          <span className="scroll-text">scroll down</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
