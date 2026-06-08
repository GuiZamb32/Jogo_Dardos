import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  function startGame(mode) {
    navigate(`/players/${mode}`);
  }

  return (
    <div className="darts-center">
      <div className="darts-menu-icon">
        <img className="alvo" src="dardo.png" alt="" />
      </div>

      <div className="darts-title">
        PLACAR DE DARDOS CASUAL
      </div>

      <button
        className="darts-big-btn darts-btn-yellow"
        onClick={() => startGame(301)}
      >
        Jogar 301
      </button>

      <button
        className="darts-big-btn darts-btn-red"
        onClick={() => startGame(501)}
      >
        Jogar 501
      </button>
    </div>
  );
}