import { useNavigate } from "react-router-dom";
import "./Vitoria.css";

export default function Vitoria() {
  const navigate = useNavigate();

  const winner = JSON.parse(
    localStorage.getItem("winner")
  );

  function voltarMenu() {
    localStorage.removeItem("dartsGame");
    localStorage.removeItem("winner");

    navigate("/");
  }

  return (
    <div className="darts-overlay">

      <div className="darts-victory-player">
        <span>Jogador:</span>

        <span className="darts-player-name">
          {winner?.name}
        </span>
      </div>

      <div className="darts-victory-title">
        Venceu !!
      </div>

      <div className="darts-victory-icon">
        <img className="Medalha" src="fita.png" alt="" />
      </div>

      <button
        className="darts-victory-btn"
        onClick={voltarMenu}
      >
        Voltar ao Menu
      </button>

    </div>
  );
}