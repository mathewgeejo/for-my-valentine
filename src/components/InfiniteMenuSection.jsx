import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import InfiniteMenu from './InfiniteMenu'
import './InfiniteMenuSection.css'

// Placeholder Valentine's-themed images — replace with your own photos!
const items = [
  {
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=800&fit=crop',
    link: '#',
    title: 'Our Love',
    description: 'Every heartbeat'
  },
  {
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop',
    link: '#',
    title: 'Together',
    description: 'Hand in hand'
  },
  {
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=800&fit=crop',
    link: '#',
    title: 'Moments',
    description: 'Cherished memories'
  },
  {
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&h=800&fit=crop',
    link: '#',
    title: 'Forever',
    description: 'You and me'
  },
  {
    image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=800&fit=crop',
    link: '#',
    title: 'Romance',
    description: 'Red roses'
  },
  {
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=800&fit=crop',
    link: '#',
    title: 'Dreams',
    description: 'Our journey'
  },
]

export default function InfiniteMenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="infinite-menu-section" ref={ref}>
      <div className="infinite-menu-bg" />

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="section-icon">🌹</span>
        <h2 className="section-title">Our Memories</h2>
        <p className="section-subtitle">Drag the globe to explore our moments together</p>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="infinite-menu-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="menu-glow" />
        <InfiniteMenu items={items} scale={1.5} />
      </motion.div>

      <p className="menu-hint">
        ✨ Replace these placeholder images with your own photos!
      </p>
    </section>
  )
}
