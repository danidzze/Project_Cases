import { useState } from 'react'
import './App.css'

const PRICE = 50
const WIN_INDEX = 40 // на какой по счёту карточке остановится лента
const CARD = 130     // ширина карточки (120) + отступ (10)
const HALF = 400     // половина ширины ленты (800 / 2): там белая линия

const ITEMS = [
  { name: 'Consumer Grade',  icon: '⚙️', color: 'gray',       chance: 50 },
  { name: 'Industrial Grade',    icon: '💎', color: '#74a0ff', chance: 30 },
  { name: 'Mil-Spec', icon: '👑', color: 'darkblue',     chance: 15 },
  { name: 'Restricted',       icon: '🗡️', color: '#8c00ff',        chance: 4 },
  { name: 'Classified',    icon: '☀️', color: '#ff00f2',       chance: 1 },
  { name: 'Covert',    icon: '☀️', color: 'red',       chance: 1 },
  { name: 'Gold',    icon: '☀️', color: 'gold',       chance: 1 },
]

function randomItem() {
  return ITEMS[Math.floor(Math.random() * ITEMS.length)]
}

function makeStrip() {
  return Array.from({ length: 50 }, randomItem)
}

function Ribbon({ strip, phase, jitter }) {
  // на сколько пикселей сдвинуть ленту влево, чтобы нужная карточка встала под линию
  const offset = WIN_INDEX * CARD + 60 + jitter - HALF

  return (
    <div className="ribbon">
      <div
        className="track"
        style={{
          transform: phase === 'idle' ? 'translateX(0)' : `translateX(-${offset}px)`,
          transition: phase === 'spin' ? 'transform 5s cubic-bezier(0.1, 0.7, 0.1, 1)' : 'none',
        }}
      >
        {strip.map((item, i) => (
          <div key={i} className="card" style={{ borderColor: item.color }}>
            <div className="icon">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="line"></div>
    </div>
  )
}

export default function App() {
  const [balance, setBalance] = useState(1000)
  const [count, setCount] = useState(1)
  const [strips, setStrips] = useState([makeStrip()])
  const [phase, setPhase] = useState('idle')
  const [jitter, setJitter] = useState(0)

  const cost = PRICE * count
  const busy = phase === 'spin'

  function chooseCount(n) {
    if (busy) return
    setCount(n)
    setPhase('idle')
    setStrips(Array.from({ length: n }, makeStrip))
  }

      function open() {
    if (busy) return
    if (balance < cost) {
      alert('Не хватает монет!')
      return
    }
    setBalance(balance - cost)
    setWinners([])
    setJitter(Math.random() * 60 - 30)

    const newWinners = []
    const newStrips = []
    for (let i = 0; i < count; i++) {
      const winner = rollItem()
      const strip = makeStrip()
      strip[WIN_INDEX] = winner
      newWinners.push(winner)
      newStrips.push(strip)
    }
    setStrips(newStrips)
    setPhase('idle')

    setTimeout(() => setPhase('spin'), 50)
    setTimeout(() => {
      setPhase('done')
      setWinners(newWinners) // показываем результат
    }, 5500)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">LOGO</div>
        <button>Cases</button>
        <button>Contest</button>
        <button>Bonus</button>
        <div className="space"></div>
        <div className="balance">🪙 {balance}</div>
        <button>Profile</button>
      </header>

      <aside className="sidebar">Item</aside>

      <main className="main">
        {strips.map((strip, i) => (
          <Ribbon key={i} strip={strip} phase={phase} jitter={jitter} />
        ))}

        <div className="buttons">
          {[1, 2, 3, 5].map((n) => (
            <button
              key={n}
              className={n === count ? 'active' : ''}
              onClick={() => chooseCount(n)}
            >
              {n}X
            </button>
          ))}
          <button className="open" onClick={open}>OPEN ({cost} 🪙)</button>
        </div>
      </main>

      <footer className="footer">
        Учебный проект · Монеты виртуальные
      </footer>
    </div>
  )
}