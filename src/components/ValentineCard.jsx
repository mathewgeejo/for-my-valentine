import { useState, useEffect } from 'react'
import './ValentineCard.css'

export default function ValentineCard() {
  const [opened, setOpened] = useState(false)
  const [showText, setShowText] = useState(false)
  const [showBow, setShowBow] = useState(false)
  const [yesClicked, setYesClicked] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Auto-open after a short delay for dramatic effect
    const t1 = setTimeout(() => setOpened(true), 800)
    const t2 = setTimeout(() => setShowBow(true), 1800)
    const t3 = setTimeout(() => setShowText(true), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const handleNo = () => {
    // Move the "No" button to a random position
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    setNoPos({ x, y })
  }

  const handleYes = () => {
    setYesClicked(true)
  }

  return (
    <div className="screen valentine-card-screen">
      {/* Striped background */}
      <div className="vc-stripes" />

      {/* Floating hearts */}
      <div className="vc-floating-hearts">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="vc-float-heart" style={{
            left: `${8 + (i * 7.5) % 85}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + (i % 3)}s`,
            fontSize: `${12 + (i % 4) * 6}px`,
            opacity: 0.15 + (i % 3) * 0.1
          }}>♥</span>
        ))}
      </div>

      <div className="vc-card-wrapper">
        {/* The letter/card */}
        <div className={`vc-letter ${opened ? 'vc-letter--visible' : ''}`}>
          {/* Scalloped top edge */}
          <div className="vc-scallop-edge" />

          {/* Card content */}
          <div className="vc-letter-inner">
            {/* Corner decorations */}
            <div className="vc-corner vc-corner-tl">❧</div>
            <div className="vc-corner vc-corner-tr">❧</div>
            <div className="vc-corner vc-corner-bl">❧</div>
            <div className="vc-corner vc-corner-br">❧</div>

            {/* Bow */}
            <div className={`vc-bow ${showBow ? 'vc-bow--visible' : ''}`}>
              <div className="vc-bow-loop vc-bow-left" />
              <div className="vc-bow-loop vc-bow-right" />
              <div className="vc-bow-knot">♥</div>
              <div className="vc-bow-tail vc-bow-tail-l" />
              <div className="vc-bow-tail vc-bow-tail-r" />
            </div>

            {/* Text */}
            <div className={`vc-text-block ${showText ? 'vc-text--visible' : ''}`}>
              <h2 className="vc-heading-top">WILL YOU BE MY</h2>
              <h1 className="vc-heading-script">Valentine</h1>
            </div>

            {/* Decorative line */}
            <div className={`vc-ornament-line ${showText ? 'vc-text--visible' : ''}`}>
              <span>✦</span>
              <span className="vc-line" />
              <span>♥</span>
              <span className="vc-line" />
              <span>✦</span>
            </div>
          </div>
        </div>

        {/* The envelope */}
        <div className={`vc-envelope ${opened ? 'vc-envelope--open' : ''}`}>
          {/* Envelope body */}
          <div className="vc-envelope-body">
            {/* Lace trim top */}
            <div className="vc-lace-trim" />

            {/* Envelope content */}
            <div className="vc-envelope-content">
              <p className="vc-env-text-main">A Special Message</p>
              <p className="vc-env-text-sub">✨ Just For You ✨</p>

              {/* Decorative scrollwork */}
              <div className="vc-scrollwork">
                <span>⟡</span>
                <span>❦</span>
                <span>⟡</span>
              </div>
            </div>

            {/* Lace trim bottom */}
            <div className="vc-lace-bottom">
              <div className="vc-lace-pattern" />
            </div>

            {/* Bottom ornament */}
            <div className="vc-env-ornament">
              ❦
            </div>
          </div>

          {/* Envelope flap */}
          <div className={`vc-envelope-flap ${opened ? 'vc-flap--open' : ''}`}>
            <div className="vc-flap-inner" />
          </div>
        </div>
      </div>

      {/* Yes/No buttons */}
      {showText && !yesClicked && (
        <div className="vc-buttons">
          <button className="vc-btn vc-btn-yes" onClick={handleYes}>
            Yes! ♥
          </button>
          <button
            className="vc-btn vc-btn-no"
            onClick={handleNo}
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          >
            No
          </button>
        </div>
      )}

      {/* Celebration */}
      {yesClicked && (
        <div className="vc-celebration">
          <div className="vc-confetti-burst">
            {[...Array(30)].map((_, i) => (
              <span key={i} className="vc-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
                backgroundColor: ['#e8456b', '#c92a45', '#ffb6c1', '#ff69b4', '#ffd700', '#fff'][i % 6],
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
              }} />
            ))}
          </div>
          <p className="vc-celebrate-text">Yay! Happy Valentine's Day! 💕</p>
          <div className="vc-big-hearts">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="vc-pop-heart" style={{
                animationDelay: `${i * 0.15}s`,
                left: `${15 + i * 13}%`,
              }}>♥</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
