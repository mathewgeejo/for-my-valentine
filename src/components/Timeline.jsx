import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Timeline.css'

const timelineEvents = [
  { emoji: '💫', title: 'The Day We Met', description: 'When our worlds collided and everything changed forever.', season: 'Spring' },
  { emoji: '☕', title: 'First Date', description: 'Nervous laughter, stolen glances, and the start of something magical.', season: 'Summer' },
  { emoji: '💕', title: 'Falling in Love', description: 'That moment I realized you were my everything.', season: 'Autumn' },
  { emoji: '🌟', title: 'Our First Trip', description: 'Adventures together, discovering the world side by side.', season: 'Winter' },
  { emoji: '🏠', title: 'Building Dreams', description: 'Creating a life together, one beautiful day at a time.', season: 'Spring' },
  { emoji: '💝', title: 'Today & Forever', description: 'Every day with you is a Valentine\'s Day. Here\'s to infinity.', season: 'Always' },
]

function TimelineItem({ event, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="timeline-dot">
        <span className="timeline-emoji">{event.emoji}</span>
      </div>
      <div className="timeline-card">
        <span className="timeline-season">{event.season}</span>
        <h3 className="timeline-event-title">{event.title}</h3>
        <p className="timeline-event-desc">{event.description}</p>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="timeline-section" ref={ref}>
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="section-icon">💞</span>
        <h2 className="section-title-dark">Our Story</h2>
        <p className="section-subtitle-dark">A timeline of moments that took my breath away</p>
        <div className="section-divider-dark" />
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line" />
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  )
}
