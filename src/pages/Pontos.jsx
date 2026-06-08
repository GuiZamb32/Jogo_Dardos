import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Pontos.css";

const SECTIONS = [
  1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20
];

export default function Pontos() {
  const navigate = useNavigate();

  const gameData = JSON.parse(
    localStorage.getItem("dartsGame")
  );

  const [players] = useState(gameData.players);

  const [scores, setScores] = useState([
    gameData.mode,
    gameData.mode,
  ]);

  const [turn, setTurn] = useState(0);
  const [darts, setDarts] = useState([]);
  const [mult, setMult] = useState(1);
  const [bust, setBust] = useState(false);

  const turnScore = darts.reduce(
    (total, dart) => total + dart,
    0
  );

  const canNext = darts.length === 3 || bust;

  function addDart(points) {
    if (bust || darts.length >= 3) return;

    const value = points * mult;
    const newDarts = [...darts, value];

    const runTotal = newDarts.reduce(
      (a, b) => a + b,
      0
    );

    const currentScore =
      scores[turn] - runTotal;

    setMult(1);

    if (currentScore < 0) {
      setBust(true);
      setDarts(newDarts);
      return;
    }

    if (currentScore === 0) {
      localStorage.setItem(
        "winner",
        JSON.stringify(players[turn])
      );

      navigate("/vitoria");
      return;
    }

    setDarts(newDarts);
  }

  function nextPlayer() {
    const roundTotal = darts.reduce(
      (a, b) => a + b,
      0
    );

    if (!bust) {
      const newScores = [...scores];

      newScores[turn] =
        newScores[turn] - roundTotal;

      setScores(newScores);
    }

    setTurn(turn === 0 ? 1 : 0);
    setDarts([]);
    setBust(false);
    setMult(1);
  }

  function resetGame() {
    localStorage.removeItem("dartsGame");
    localStorage.removeItem("winner");

    navigate("/");
  }

  return (
    <div className="darts-game-container">

      <div className="darts-scoreboard">
        {scores.map((score, i) => (
          <div
            key={i}
            className={`darts-score-card ${
              turn === i
                ? "darts-score-active"
                : "darts-score-inactive"
            }`}
          >
            <div className="darts-score-name">
              {players[i].name}
            </div>

            <div className="darts-score-num">
              {score}
            </div>
          </div>
        ))}
      </div>

      <div className="darts-turn-info">
        <div className="darts-turn-text">
          É a vez de <strong>{players[turn].name}</strong>
        </div>

        <div
          className={`darts-turn-score ${
            bust ? "darts-text-bust" : ""
          }`}
        >
          {bust ? "💥 ESTOURO!" : `+${turnScore}`}
        </div>

        <div className="darts-dots-row">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`darts-dot ${
                i < darts.length
                  ? "darts-dot-active"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className="darts-mult-row">
        {[1, 2, 3].map((m) => (
          <button
            key={m}
            className={`darts-mult-btn ${
              mult === m
                ? "darts-mult-active"
                : ""
            }`}
            onClick={() => setMult(m)}
          >
            {m === 1
              ? "x1 Simples"
              : m === 2
              ? "x2 Duplo"
              : "x3 Triplo"}
          </button>
        ))}
      </div>

      <div className="darts-grid-numbers">
        {SECTIONS.map((n) => (
          <button
            key={n}
            className="darts-num-btn"
            onClick={() => addDart(n)}
            disabled={bust || darts.length >= 3}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="darts-special-row">
        <button
          className="darts-special-btn"
          onClick={() => addDart(25)}
        >
          Centro Verde (25)
        </button>

        <button
          className="darts-special-btn"
          onClick={() => addDart(50)}
        >
          🎯 Mosca (50)
        </button>

        <button
          className="darts-special-btn darts-miss-btn"
          onClick={() => addDart(0)}
        >
          Errou
        </button>
      </div>

      {canNext && (
        <button
          className="darts-next-btn"
          onClick={nextPlayer}
        >
          Próximo Jogador ➡️
        </button>
      )}

      <div className="darts-footer">
        <button
          className="darts-link-btn"
          onClick={resetGame}
        >
          Resetar Partida
        </button>
      </div>

    </div>
  );
}