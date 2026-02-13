import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="valentine-footer">
      <div className="footer-bg-gradient" />
      
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="footer-heart-animation">
          <span className="footer-heart">❤️</span>
          <span className="footer-plus">+</span>
          <span className="footer-heart">❤️</span>
          <span className="footer-equals">=</span>
          <span className="footer-heart big">💕</span>
        </div>

        <h3 className="footer-message">
          You are my today and all of my tomorrows
        </h3>

        <div className="footer-divider" />

        <p className="footer-tagline">
          Made with love, for the love of my life
        </p>

        <p className="footer-year">♥ Valentine's 2026 ♥</p>
      </motion.div>
    </footer>
  )
}
