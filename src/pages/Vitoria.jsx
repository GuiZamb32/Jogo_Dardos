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
      <div className="darts-victory-icon">🏆</div>

      <div className="darts-victory-title">
        {winner?.name || "Jogador"} VENCEU!
      </div>

      <button
        className="darts-big-btn darts-btn-yellow"
        style={{ width: "280px" }}
        onClick={voltarMenu}
      >
        Voltar ao Menu
      </button>
    </div>
  );
}