import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './LoveLetterSection.css'

export default function LoveLetterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="love-letter-section" ref={ref}>
      <div className="love-letter-bg-pattern" />

      <motion.div
        className="love-letter-container"
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="letter-seal">💌</div>
        
        <div className="letter-paper">
          <div className="letter-decoration top-left">✦</div>
          <div className="letter-decoration top-right">✦</div>
          <div className="letter-decoration bottom-left">✦</div>
          <div className="letter-decoration bottom-right">✦</div>

          <motion.h2
            className="letter-greeting"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My Dearest
          </motion.h2>

          <motion.div
            className="letter-body"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p>
              Every moment with you feels like a beautiful dream I never want to wake up from. 
              Your smile lights up my world in ways no words could ever capture.
            </p>
            <p>
              Through every season, every adventure, every quiet moment together — 
              my love for you only grows deeper and more beautiful.
            </p>
            <p>
              You are my today and all of my tomorrows. Happy Valentine's Day, my love.
            </p>
          </motion.div>

          <motion.div
            className="letter-signature"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Forever Yours ♥
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
