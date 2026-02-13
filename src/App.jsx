import { useState, useEffect } from 'react'
import './App.css'
import InfiniteMenu from './components/InfiniteMenu'

/* ═══════════════════════════════════════════
   Pixel Art Helpers
   ═══════════════════════════════════════════ */

function PixelHeart({ size = 48, color = '#e8456b', style }) {
  const grid = [
    [0,1,1,0,0,0,1,1,0],
    [1,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0],
  ]
  const px = size / 9
  return (
    <svg width={size} height={size * 8/9} viewBox={`0 0 ${size} ${size * 8/9}`} style={style}>
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell ? <rect key={`${x}-${y}`} x={x*px} y={y*px} width={px} height={px} fill={color} /> : null
        )
      )}
    </svg>
  )
}

/* Pixel Mushroom (8-bit, 11x11 grid) */
function PixelMushroom({ size = 60 }) {
  // simple toadstool: red cap with white dots, tan stem
  const C = { r: '#c92a45', w: '#fff', t: '#f5efe6', _: null }
  const grid = [
    [C._,C._,C._,C.r,C.r,C.r,C.r,C.r,C._,C._,C._],
    [C._,C._,C.r,C.r,C.w,C.r,C.r,C.w,C.r,C._,C._],
    [C._,C.r,C.r,C.w,C.w,C.r,C.w,C.w,C.r,C.r,C._],
    [C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r],
    [C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r,C.r],
    [C._,C._,C._,C.t,C.t,C.t,C.t,C.t,C._,C._,C._],
    [C._,C._,C._,C.t,C.t,C.t,C.t,C.t,C._,C._,C._],
    [C._,C._,C._,C._,C.t,C.t,C.t,C._,C._,C._,C._],
    [C._,C._,C._,C._,C.t,C.t,C.t,C._,C._,C._,C._],
  ]
  const px = size / 11
  return (
    <svg width={size} height={size * 9/11} viewBox={`0 0 ${size} ${size*9/11}`}>
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell ? <rect key={`${x}-${y}`} x={x*px} y={y*px} width={px} height={px} fill={cell} /> : null
        )
      )}
    </svg>
  )
}

/* Pixel Cat (8-bit, 14x10 grid) */
function PixelCat({ size = 90 }) {
  const g = '#888', w = '#fff', d = '#555', p = '#ffb6c1', _ = null
  const grid = [
    [_,_,g,_,_,_,_,_,_,_,_,g,_,_],
    [_,g,g,g,_,_,_,_,_,_,g,g,g,_],
    [_,g,w,g,g,g,g,g,g,g,g,w,g,_],
    [g,g,w,d,w,w,w,w,w,d,w,w,g,g],
    [g,w,w,w,w,w,p,w,w,w,w,w,w,g],
    [g,w,w,w,w,w,w,w,w,w,w,w,w,g],
    [_,g,g,g,g,g,g,g,g,g,g,g,g,_],
    [_,_,g,d,g,g,g,g,g,g,d,g,_,_],
    [_,_,_,g,g,_,_,_,_,g,g,_,_,_],
  ]
  const px = size / 14
  return (
    <svg width={size} height={size * 9/14} viewBox={`0 0 ${size} ${size*9/14}`}>
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell ? <rect key={`${x}-${y}`} x={x*px} y={y*px} width={px} height={px} fill={cell} /> : null
        )
      )}
    </svg>
  )
}

/* ═══════════════════════════════════════════
   Playing Card Component
   ═══════════════════════════════════════════ */

function PlayingCard({ type }) {
  if (type === 'ace') {
    return (
      <div className="card">
        <div className="card-corner top-left"><span className="card-rank">A</span><span className="card-suit">♥</span></div>
        <div className="card-center"><span className="card-suit-large">♥</span></div>
        <div className="card-corner bottom-right"><span className="card-rank">A</span><span className="card-suit">♥</span></div>
      </div>
    )
  }
  if (type === 'lucky') {
    return (
      <div className="card card-lucky">
        <div className="card-inner-border">
          <div className="lucky-content">
            <span className="lucky-text">LUCKY</span>
            <span className="lucky-text">YOU</span>
            <div className="lucky-heart">♥</div>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'eight') {
    return (
      <div className="card">
        <div className="card-corner top-left"><span className="card-rank">8</span><span className="card-suit">♥</span></div>
        <div className="card-center eight-grid">
          <div className="eight-col"><span>♥</span><span>♥</span><span>♥</span></div>
          <div className="eight-col middle-col"><span>♥</span><span>♥</span></div>
          <div className="eight-col"><span>♥</span><span>♥</span><span>♥</span></div>
        </div>
        <div className="card-corner bottom-right"><span className="card-rank">8</span><span className="card-suit">♥</span></div>
      </div>
    )
  }
  return null
}

/* ═══════════════════════════════════════════
   Screen 1 – Landing Page
   ═══════════════════════════════════════════ */

function LandingScreen({ onNext }) {
  return (
    <div className="screen landing-screen">
      <div className="polka-overlay" />
      <div className="top-line" />

      <div className="hearts-row">
        <PixelHeart size={56} />
        <PixelHeart size={56} />
        <PixelHeart size={56} />
      </div>

      <h1 className="title">
        <span>Valentine</span>
        <span>Game Night</span>
      </h1>

      <div className="cards-row">
        <PlayingCard type="ace" />
        <PlayingCard type="lucky" />
        <PlayingCard type="eight" />
      </div>

      <div className="divider-line" />

      <button className="pixel-btn" onClick={onNext}>
        Let's Go ♥
      </button>

      <div className="bottom-line" />
    </div>
  )
}

/* ═══════════════════════════════════════════
   Screen 2 – Ready To Play?
   ═══════════════════════════════════════════ */

function ReadyScreen({ onStart }) {
  const [score, setScore] = useState(0)

  /* fun: the score ticks up like an old arcade attract screen */
  useEffect(() => {
    const iv = setInterval(() => setScore(s => (s + 100) % 100000000), 400)
    return () => clearInterval(iv)
  }, [])

  return (
    <div className="screen ready-screen">
      <div className="polka-overlay" />

      {/* Knit / cross-stitch border */}
      <div className="knit-border top" />

      <div className="ready-content">
        {/* Score bar */}
        <div className="score-bar">
          <PixelMushroom size={44} />
          <PixelCat size={80} />
          <span className="score-text">{String(score).padStart(8, '0')}</span>
        </div>

        {/* Main prompt */}
        <div className="ready-prompt-box">
          <h2 className="ready-title">Ready to Play?</h2>
        </div>

        {/* Start button */}
        <button className="start-btn" onClick={onStart}>
          START
        </button>
      </div>

      <div className="knit-border bottom" />
    </div>
  )
}

/* ═══════════════════════════════════════════
   Screen 3 – Would You Rather
   ═══════════════════════════════════════════ */

const questions = [
  { a: "Go on a surprise date planned entirely by your partner", b: "Plan the perfect surprise date for your partner" },
  { a: "Receive a love letter every day for a year", b: "Get one grand romantic gesture" },
  { a: "Have a candlelight dinner on a rooftop", b: "Have a cozy movie night with homemade pizza" },
  { a: "Slow dance in the rain together", b: "Watch the sunrise together from a mountaintop" },
  { a: "Relive your first date all over again", b: "Fast-forward to your 50th anniversary" },
  { a: "Always know what your partner is thinking", b: "Your partner always knows the perfect gift for you" },
]

function GameScreen({ onFinish }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (choice) => { setSelected(choice); setShowResult(true) }

  const nextQuestion = () => {
    if (currentQ >= questions.length - 1) { onFinish(); return }
    setSelected(null); setShowResult(false)
    setCurrentQ(prev => prev + 1)
  }

  const q = questions[currentQ]

  return (
    <div className="screen game-screen">
      <div className="polka-overlay" />

      <div className="wyr-badge">
        <span className="wyr-label">Would You Rather</span>
      </div>

      <div className="wyr-game">
        <div className="question-counter">
          Question {currentQ + 1} / {questions.length}
        </div>

        <div className={`wyr-choices ${showResult ? 'revealed' : ''}`}>
          <button
            className={`wyr-option ${selected === 'a' ? 'chosen' : ''} ${showResult && selected !== 'a' ? 'not-chosen' : ''}`}
            onClick={() => !showResult && handleSelect('a')} disabled={showResult}
          >
            <span className="option-letter">A</span>
            <span className="option-text">{q.a}</span>
          </button>

          <div className="or-divider"><span>OR</span></div>

          <button
            className={`wyr-option ${selected === 'b' ? 'chosen' : ''} ${showResult && selected !== 'b' ? 'not-chosen' : ''}`}
            onClick={() => !showResult && handleSelect('b')} disabled={showResult}
          >
            <span className="option-letter">B</span>
            <span className="option-text">{q.b}</span>
          </button>
        </div>

        {showResult && (
          <button className="next-btn" onClick={nextQuestion}>
            {currentQ >= questions.length - 1 ? 'Finish ♥' : 'Next Question ♥'}
          </button>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Screen 4 – Love Message / Photo Page
   ═══════════════════════════════════════════ */

function LoveScreen({ onNext }) {
  return (
    <div className="screen love-screen">
      {/* Top meta text */}
      <div className="love-meta">
        <span className="love-meta-small">with awareness</span>
        <span className="love-meta-small">design: storytold.co</span>
      </div>
      <div className="love-date">14/02/26</div>

      {/* ── Laptop Mockup ── */}
      <div className="laptop-wrapper">
        {/* Side text */}
        <span className="side-text left">LOVE</span>

        <div className="laptop">
          {/* Screen */}
          <div className="laptop-screen">
            {/* Overlaid text */}
            <span className="screen-text top-text">MY VALENTINE</span>
            <span className="screen-text center-text">BOUNDLESS</span>

            {/* Dummy photo placeholder */}
            <div className="laptop-photo">
              <span className="photo-placeholder-icon">📷</span>
              <span className="photo-placeholder-label">Photo goes here</span>
            </div>
          </div>
          {/* Keyboard / base */}
          <div className="laptop-base">
            <div className="laptop-keyboard" />
            <div className="laptop-trackpad" />
          </div>
        </div>

        <span className="side-text right">LOVE</span>
      </div>

      {/* ── LOVE IS message ── */}
      <div className="love-is-section">
        <h3 className="love-is-title">LOVE IS</h3>
        <p className="love-is-body">
          When you feel like you're with someone
          you can talk about everything with,
          someone who makes you feel completely
          accepted and sure that you are loved
          and heard without judgment.
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="love-marquee">
        <div className="marquee-track">
          <span>LOVE EVERYTHING ABOUT YOU ♥ LOVE EVERYTHING ABOUT YOU ♥ LOVE EVERYTHING ABOUT YOU ♥ LOVE EVERYTHING ABOUT YOU ♥&nbsp;</span>
          <span>LOVE EVERYTHING ABOUT YOU ♥ LOVE EVERYTHING ABOUT YOU ♥ LOVE EVERYTHING ABOUT YOU ♥ LOVE EVERYTHING ABOUT YOU ♥&nbsp;</span>
        </div>
      </div>

      {/* Continue button */}
      <button className="pixel-btn love-next-btn" onClick={onNext}>
        Our Memories ♥
      </button>

      {/* Decorative splatter */}
      <div className="love-splatter">
        <PixelHeart size={60} color="#e8456b" />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Screen 5 – Gallery (Infinite 3D Menu)
   ═══════════════════════════════════════════ */

const galleryItems = [
  { image: 'https://picsum.photos/seed/val1/900/900', link: '#', title: 'Us', description: 'Our first photo together' },
  { image: 'https://picsum.photos/seed/val2/900/900', link: '#', title: 'Date Night', description: 'That perfect evening' },
  { image: 'https://picsum.photos/seed/val3/900/900', link: '#', title: 'Adventure', description: 'Exploring together' },
  { image: 'https://picsum.photos/seed/val4/900/900', link: '#', title: 'Laughs', description: 'You make me smile' },
  { image: 'https://picsum.photos/seed/val5/900/900', link: '#', title: 'Sunset', description: 'Golden hour with you' },
  { image: 'https://picsum.photos/seed/val6/900/900', link: '#', title: 'Home', description: 'Cozy nights in' },
  { image: 'https://picsum.photos/seed/val7/900/900', link: '#', title: 'Travel', description: 'Our favorite trip' },
  { image: 'https://picsum.photos/seed/val8/900/900', link: '#', title: 'Forever', description: 'Always & forever' },
]

function GalleryScreen() {
  return (
    <div className="screen gallery-screen">
      <div className="polka-overlay" />

      <div className="gallery-header">
        <PixelHeart size={32} color="#e8456b" />
        <h2 className="gallery-title">Our Memories</h2>
        <PixelHeart size={32} color="#e8456b" />
      </div>

      <div className="gallery-canvas-wrap">
        <InfiniteMenu items={galleryItems} />
      </div>

      <p className="gallery-hint">drag to spin the globe ♥</p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   App – Screen Router
   ═══════════════════════════════════════════ */

function App() {
  const [screen, setScreen] = useState('landing')
  const [fadeClass, setFadeClass] = useState('fade-in')

  const goTo = (next) => {
    setFadeClass('fade-out')
    setTimeout(() => {
      setScreen(next)
      setFadeClass('fade-in')
    }, 500)
  }

  return (
    <div className={`app ${fadeClass}`}>
      {screen === 'landing' && <LandingScreen onNext={() => goTo('ready')} />}
      {screen === 'ready' && <ReadyScreen onStart={() => goTo('game')} />}
      {screen === 'game' && <GameScreen onFinish={() => goTo('love')} />}
      {screen === 'love' && <LoveScreen onNext={() => goTo('gallery')} />}
      {screen === 'gallery' && <GalleryScreen />}
    </div>
  )
}

export default App
