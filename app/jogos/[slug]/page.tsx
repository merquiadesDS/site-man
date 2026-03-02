"use client";
import { useState } from "react";

export default function BaldesGame() {
  const capacidadeA = 4;
  const capacidadeB = 3;

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const atualizarMensagem = (nova: string) => setMensagem(nova);

  const encherA = () => { setA(capacidadeA); atualizarMensagem("Encheu o Balde A"); checarVitoria(capacidadeA); };
  const encherB = () => { setB(capacidadeB); atualizarMensagem("Encheu o Balde B"); checarVitoria(a); };
  const esvaziarA = () => { setA(0); atualizarMensagem("Esvaziou o Balde A"); };
  const esvaziarB = () => { setB(0); atualizarMensagem("Esvaziou o Balde B"); };
  const transferirAB = () => { const total = a + b; const novaB = Math.min(total, capacidadeB); const novaA = total - novaB; setA(novaA); setB(novaB); atualizarMensagem("Transferiu água do Balde A para B"); checarVitoria(novaA); };
  const transferirBA = () => { const total = a + b; const novaA = Math.min(total, capacidadeA); const novaB = total - novaA; setA(novaA); setB(novaB); atualizarMensagem("Transferiu água do Balde B para A"); checarVitoria(novaA); };

  const checarVitoria = (valorA: number) => { if (valorA === 2) atualizarMensagem("🎉 Parabéns! Você conseguiu 2L no Balde A!"); };

  return (
    <div className="baldes-game">
      <h1 className="title">Jogo dos Baldes</h1>

      <div className="baldes-container">
        <div className="balde">
          <div className="balde-label">Balde A (4L)</div>
          <div className="balde-box">
            <div className="agua" style={{ height: `${(a / capacidadeA) * 100}%` }}></div>
          </div>
          <div className="nivel">{a}L</div>
        </div>

        <div className="balde">
          <div className="balde-label">Balde B (3L)</div>
          <div className="balde-box">
            <div className="agua" style={{ height: `${(b / capacidadeB) * 100}%` }}></div>
          </div>
          <div className="nivel">{b}L</div>
        </div>
      </div>
<div className="regras-container">
  <h2>Regras do Jogo</h2>
  <ul>
    <li>Você tem dois baldes: A (4L) e B (3L).</li>
    <li>Objetivo: colocar exatamente 2L no Balde A.</li>
    <li>Você pode encher, esvaziar ou transferir água entre os baldes.</li>
    <li>Use os botões para realizar as ações.</li>
  </ul>
</div>
      <div className="botoes-container">
        <button className="play-btn" onClick={encherA}>Encher A</button>
        <button className="play-btn" onClick={esvaziarA}>Esvaziar A</button>
        <button className="play-btn" onClick={transferirAB}>A → B</button>
        <button className="play-btn" onClick={encherB}>Encher B</button>
        <button className="play-btn" onClick={esvaziarB}>Esvaziar B</button>
        <button className="play-btn" onClick={transferirBA}>B → A</button>

      </div>

      <p className="mensagem">{mensagem}</p>

      {/* Estilo */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600&display=swap');

        .baldes-game {
          min-height: 100vh;
          padding: 4rem 2rem;
          background: #05050a;
          color: #00ffff;
          font-family: 'Rajdhani', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          font-family: 'Orbitron', monospace;
          font-size: 2rem;
          color: #00ffff;
          margin-bottom: 2rem;
          text-shadow: 0 0 15px #00ffff70;
        }

        .baldes-container {
          display: flex;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .balde {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .balde-label {
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-size: 0.9rem;
          color: #00ffffaa;
        }

        .balde-box {
          width: 80px;
          height: 160px;
          border: 2px solid #00ffff50;
          border-radius: 5px;
          background: #111;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          box-shadow: inset 0 0 10px #00ffff20;
        }

        .agua {
          width: 100%;
          background: linear-gradient(to top, #00ffff, #00ff88);
          transition: height 0.3s ease;
        }

        .nivel {
          margin-top: 0.5rem;
          font-weight: bold;
        }

        .botoes-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .play-btn {
          font-family: 'Orbitron', monospace;
          font-size: 0.75rem;
          letter-spacing: 1px;
          background: transparent;
          border: 1px solid rgba(0,255,255,0.4);
          color: #00ffff;
          padding: 0.5rem 1rem;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s;
        }

        .play-btn:hover {
          background: rgba(0,255,255,0.1);
          box-shadow: 0 0 10px rgba(0,255,255,0.3);
        }

        .mensagem {
          margin-top: 2rem;
          color: #ff0;
          font-weight: bold;
          font-size: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}