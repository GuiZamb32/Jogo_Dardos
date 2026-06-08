import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Players from "./pages/Player";
import Pontos from "./pages/Pontos";
import Vitoria from "./pages/Vitoria";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:mode" element={<Players />} />
        <Route path="/pontos" element={<Pontos />} />
        <Route path="/vitoria" element={<Vitoria />} />
      </Routes>
    </BrowserRouter>
  );
}