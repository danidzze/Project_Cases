function Cases() {
  return (
    <>
      <main>
        <h1>Starter Case</h1>

        <p className="sub">
          Price: 100 coins per case
        </p>

        <div className="ribbon">
          <div className="pointer"></div>

          <div className="track" id="track"></div>
        </div>

        <div className="controls">

          <button className="mult on" data-n="1">
            1X
          </button>

          <button className="mult" data-n="2">
            2X
          </button>

          <button className="mult" data-n="3">
            3X
          </button>

          <button className="mult" data-n="5">
            5X
          </button>

          <button id="open">
            OPEN
          </button>

        </div>

        <div id="result">
          Press OPEN to try your luck.
        </div>
      </main>

      <footer>
        Virtual coins only. Fictional items. School project.
      </footer>
    </>
  );
}

export default Cases;
