import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Player.css";

export default function Players() {
  const navigate = useNavigate();
  const { mode } = useParams();

  const [p1name, setP1name] = useState("Jogador 1");
  const [p2name, setP2name] = useState("Jogador 2");

  const [p1color, setP1color] = useState("#701616");
  const [p2color, setP2color] = useState("#1b217a");

  function startGame() {
    const gameData = {
      mode: Number(mode),
      players: [
        {
          name: p1name || "Jogador 1",
          color: p1color,
        },
        {
          name: p2name || "Jogador 2",
          color: p2color,
        },
      ],
    };

    localStorage.setItem(
      "dartsGame",
      JSON.stringify(gameData)
    );

    navigate("/pontos");
  }

  return (
    <div className="darts-center">
      <div className="darts-title">
         Nomes
      </div>

      {[
        {
          n: p1name,
          sn: setP1name,
          c: p1color,
          sc: setP1color,
          lbl: "Jogador 1",
        },
        {
          n: p2name,
          sn: setP2name,
          c: p2color,
          sc: setP2color,
          lbl: "Jogador 2",
        },
      ].map((p, i) => (
        <div key={i} className="darts-config-card">
          <div className="darts-label">{p.lbl}</div>

          <div className="darts-input-row">
            <input
              className="darts-inp"
              value={p.n}
              onChange={(e) => p.sn(e.target.value)}
              placeholder={p.lbl}
            />

            <input
              type="color"
              className="darts-color-pick"
              value={p.c}
              onChange={(e) => p.sc(e.target.value)}
              style={{ background: p.c }}
            />
          </div>
        </div>
      ))}

      <button
        className="darts-big-btn darts-btn-yellow"
        onClick={startGame}
      >
        INICIAR JOGO 🚀
      </button>

      <button
        className="darts-link-btn"
        onClick={() => navigate("/")}
      >
        ← Voltar
      </button>
    </div>
  );
}