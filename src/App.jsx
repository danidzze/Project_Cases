import { useState } from 'react'
import './App.css'

const ITEMS = [
  { name: "Rusty Dagger", rarity: "common" },
  { name: "Steel Shield", rarity: "rare" },
  { name: "Mage Staff", rarity: "epic" },
  { name: "Dragon Crown", rarity: "legend" },
];

const WIN_INDEX = 30;

function App() {
  const [items, setItems] = useState([]);
  const [winner, setWinner] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [position, setPosition] = useState(0);

  function getRandomItem() {
    const index = Math.floor(Math.random() * ITEMS.length);
    return ITEMS[index];
  }

  function openCase() {
    if (spinning) return;

    const win = getRandomItem();

    const newItems = [];

    for (let i = 0; i < 50; i++) {
      if (i === WIN_INDEX) {
        newItems.push(win);
      } else {
        newItems.push(getRandomItem());
      }
    }

    setWinner(win);
    setItems(newItems);
    setSpinning(true);

    const step = 120;

    setTimeout(() => {
      const randomOffset = Math.random() * 60 - 30;

      const target =
        WIN_INDEX * step -
        350 +
        55 +
        randomOffset;

      setPosition(target);
    }, 50);

    setTimeout(() => {
      setSpinning(false);
    }, 5200);
  }

  return (
    <div className="app">

      <header className="header">
        <div className="logo">
          LOGO
        </div>

        <button>Cases</button>
        <button>Contest</button>
        <button>Bonus</button>

        <span className="balance">
          Balance: 1000
        </span>

        <button>Profile</button>
      </header>

      <main>

        <h1>Starter Case</h1>

        <p className="sub">
          Price: 100 coins per case
        </p>

        <div className="roulette">

          {/* Белая линия по центру */}
          <div className="pointer"></div>

          {/* Лента */}
          <div
            className="track"
            style={{
              transform: `translateX(-${position}px)`,
              transition: spinning
                ? "transform 5s cubic-bezier(.1,.7,.1,1)"
                : "none",
            }}
          >

            {items.map((item, index) => (
              <div
                className={`card ${item.rarity}`}
                key={index}
              >
                {item.name}
              </div>
            ))}

          </div>

        </div>

        <button
          className="open"
          onClick={openCase}
          disabled={spinning}
        >
          {spinning ? "OPENING..." : "OPEN"}
        </button>

        <div className="result">

          {!winner && "Press OPEN to try your luck."}

          {winner && spinning && "Opening..."}

          {winner && !spinning &&
            `You got: ${winner.name}`
          }

        </div>

      </main>

    </div>
  );
}

export default App;

