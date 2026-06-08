import { useState } from "react";
import "./Telas.css"; // Importação direta do CSS clássico

const COLORS = [
  "#8A1111", // vermelho
  "#8A4111", // laranja
  "#7A8A11", // amarelo
  "#138A11", // verde
  "#11648A", // Ciano
  "#17118A", // Azul
  "#66118A", // roxo
  "#36343A", // cinzs
  "#171616", // preto
  "#D3D3DF"  // branco
];

const SECTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function useLS(key, def) {
  const [val, setVal] = useState(() => {
    try { 
      const s = localStorage.getItem(key); 
      return s ? JSON.parse(s) : def; 
    } catch { 
      return def; 
    }
  });
  const set = (v) => { 
    setVal(v); 
    try { 
      localStorage.setItem(key, JSON.stringify(v)); 
    } catch {} 
  };
  return [val, set];
}

export default function ArenaDardos() {
  const [screen, setScreen] = useLS("dsp_screen", "menu");
  const [mode, setMode] = useLS("dsp_mode", 301);
  const [players, setPlayers] = useLS("dsp_players", [
    { name: "Jogador 1", color: COLORS[0] },
    { name: "Jogador 2", color: COLORS[1] }
  ]);
  const [scores, setScores] = useLS("dsp_scores", [301, 301]);
  const [turn, setTurn] = useLS("dsp_turn", 0);
  const [darts, setDarts] = useLS("dsp_darts", []);
  const [mult, setMult] = useLS("dsp_mult", 1);
  const [bust, setBust] = useLS("dsp_bust", false);
  const [winner, setWinner] = useLS("dsp_winner", null);
  const [p1name, setP1name] = useState(players[0].name);
  const [p2name, setP2name] = useState(players[1].name);
  const [p1color, setP1color] = useState(players[0].color);
  const [p2color, setP2color] = useState(players[1].color);

  const turnScore = darts.reduce((a, b) => a + b, 0);
  const canNext = darts.length === 3 || bust;

  function startConfig(m) { 
    setMode(m); 
    setScreen("config"); 
  }

  function startGame() {
    const ps = [
      { name: p1name.trim() || "Jogador 1", color: p1color },
      { name: p2name.trim() || "Jogador 2", color: p2color }
    ];
    setPlayers(ps);
    setScores([mode, mode]);
    setTurn(0); setDarts([]); setMult(1); setBust(false); setWinner(null);
    setScreen("game");
  }

  function addDart(pts) {
    if (bust || darts.length >= 3 || winner !== null) return;
    const val = pts * mult;
    const newDarts = [...darts, val];
    const runTotal = newDarts.reduce((a, b) => a + b, 0);
    const newScore = scores[turn] - runTotal;
    setMult(1);
    
    if (newScore < 0) {
      setBust(true);
      setDarts(newDarts);
    } else if (newScore === 0) {
      const ns = [...scores]; ns[turn] = 0; setScores(ns);
      setDarts(newDarts); setWinner(turn);
      localStorage.removeItem("dsp_darts"); localStorage.removeItem("dsp_bust");
    } else {
      setDarts(newDarts);
      if (newDarts.length === 3) {
        const ns = [...scores]; ns[turn] = newScore; setScores(ns);
      }
    }
  }

  function nextPlayer() {
    if (!bust) {
      const runTotal = darts.reduce((a, b) => a + b, 0);
      const ns = [...scores];
      ns[turn] = Math.max(0, ns[turn] - runTotal);
      setScores(ns);
    }
    const next = turn === 0 ? 1 : 0;
    setTurn(next); setDarts([]); setMult(1); setBust(false);
  }

  function reset() {
    ["dsp_screen","dsp_mode","dsp_players","dsp_scores","dsp_turn","dsp_darts","dsp_mult","dsp_bust","dsp_winner"]
      .forEach(k => localStorage.removeItem(k));
    setScreen("menu"); setScores([301,301]); setTurn(0); setDarts([]); setMult(1); setBust(false); setWinner(null);
  }

  const appStyle = {
    backgroundColor: screen === "game" ? players[turn]?.color : "#121212"
  };

  if (screen === "menu") return (
    <div className="darts-app" style={appStyle}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&display=swap" rel="stylesheet"/>
      <div className="darts-center">
        <div className="darts-menu-icon">🎯</div>
        <div className="darts-title">PLACAR DE DARDOS CASUAL</div>
        <button className="darts-big-btn darts-btn-yellow" onClick={()=>startConfig(301)}>Jogar 301</button>
        <button className="darts-big-btn darts-btn-blue" onClick={()=>startConfig(501)}>Jogar 501</button>
      </div>
    </div>
  );

  if (screen === "config") return (
    <div className="darts-app" style={appStyle}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&display=swap" rel="stylesheet"/>
      <div className="darts-center">
        <div className="darts-title">⚙️ CONFIGURAR — {mode}</div>
        
        {[{n:p1name,sn:setP1name,c:p1color,sc:setP1color,lbl:"Jogador 1"},{n:p2name,sn:setP2name,c:p2color,sc:setP2color,lbl:"Jogador 2"}].map((p,i)=>(
          <div key={i} className="darts-config-card">
            <div className="darts-label">{p.lbl}</div>
            <div className="darts-input-row">
              <input className="darts-inp" value={p.n} onChange={e=>p.sn(e.target.value)} placeholder={p.lbl}/>
              <input type="color" className="darts-color-pick" value={p.c} onChange={e=>p.sc(e.target.value)} style={{background: p.c}}/>
            </div>
          </div>
        ))}
        
        <button className="darts-big-btn darts-btn-yellow" onClick={startGame}>INICIAR JOGO 🚀</button>
        <button className="darts-link-btn" onClick={()=>setScreen("menu")}>← Voltar</button>
      </div>
    </div>
  );

  if (screen === "game") return (
    <div className="darts-app" style={appStyle}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&display=swap" rel="stylesheet"/>

      {winner !== null && (
        <div className="darts-overlay">
          <div className="darts-victory-icon">🏆</div>
          <div className="darts-victory-title">{players[winner].name} VENCEU!</div>
          <button className="darts-big-btn darts-btn-yellow" style={{width: 280}} onClick={reset}>Voltar ao Menu</button>
        </div>
      )}

      <div className="darts-game-container">
        <div className="darts-scoreboard">
          {scores.map((sc, i) => (
            <div 
              key={i} 
              className={`darts-score-card ${turn === i ? "darts-score-active" : "darts-score-inactive"}`}
            >
              <div className="darts-score-name">{players[i].name}</div>
              <div className="darts-score-num">{sc}</div>
            </div>
          ))}
        </div>

        <div className="darts-turn-info">
          <div className="darts-turn-text">É a vez de <strong>{players[turn].name}</strong></div>
          <div className={`darts-turn-score ${bust ? "darts-text-bust" : ""}`}>
            {bust ? "💥 ESTOURO!" : `+${turnScore}`}
          </div>
          <div className="darts-dots-row">
            {[0, 1, 2].map(i => (
              <div 
                key={i} 
                className={`darts-dot ${i < darts.length ? "darts-dot-active" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="darts-mult-row">
          {[1, 2, 3].map(m => (
            <button 
              key={m} 
              className={`darts-mult-btn ${mult === m ? "darts-mult-active" : ""}`} 
              onClick={() => setMult(m)}
            >
              {m === 1 ? "x1 Simples" : m === 2 ? "x2 Duplo" : "x3 Triplo"}
            </button>
          ))}
        </div>

        <div className="darts-grid-numbers">
          {SECTIONS.map(n => (
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
          <button className="darts-special-btn" onClick={() => addDart(25)} disabled={bust || darts.length >= 3}>Centro Verde (25)</button>
          <button className="darts-special-btn" onClick={() => addDart(50)} disabled={bust || darts.length >= 3}>🎯 Mosca (50)</button>
          <button className="darts-special-btn darts-miss-btn" onClick={() => addDart(0)} disabled={bust || darts.length >= 3}>Errou</button>
        </div>

        {canNext && (
          <button className="darts-next-btn" onClick={nextPlayer}>Próximo Jogador ➡️</button>
        )}

        <div className="darts-footer">
          <button className="darts-link-btn" onClick={reset}>Resetar Partida</button>
        </div>
      </div>
    </div>
  );
}