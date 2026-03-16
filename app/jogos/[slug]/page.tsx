"use client";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { use } from "react";
import { jogosData } from "../data/jogosData";
import SimuladorTrem from "../components/SimuladorTrem";
import JogoBaldes from "../components/JogoBaldes";

// Mapa de componentes - adicione novos jogos aqui
const jogosComponentes: Record<string, any> = {
  'SimuladorTrem': SimuladorTrem,
  'JogoBaldes': JogoBaldes,
  // Adicione mais jogos aqui:
  // 'OutroJogo': OutroJogo,
};

export default function JogoPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params); // Desembrulha a Promise
  const jogo = jogosData[slug];

  if (!jogo) {
    notFound();
  }

  const statusColor: Record<string, string> = {
    Jogando: "#00ffff",
    Zerado: "#00ff88",
    "Na fila": "#ff6b00",
  };

  // Pega o componente do jogo, se existir
  const JogoComponente = jogo.componente ? jogosComponentes[jogo.componente] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600&display=swap');

        .jogo-page {
          min-height: 100vh;
          background: #05050a;
          padding: 80px 0 4rem;
          font-family: 'Rajdhani', sans-serif;
          color: #fff;
        }

        .back-btn {
          font-family: 'Orbitron', monospace;
          font-size: 0.7rem;
          letter-spacing: 2px;
          background: transparent;
          border: 1px solid rgba(0,255,255,0.3);
          color: rgba(0,255,255,0.7);
          padding: 0.5rem 1.2rem;
          cursor: pointer;
          margin: 0 2rem 2rem;
          transition: all 0.3s;
          text-transform: uppercase;
          display: inline-block;
        }

        .back-btn:hover {
          background: rgba(0,255,255,0.1);
          color: #00ffff;
          box-shadow: 0 0 15px rgba(0,255,255,0.2);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .jogo-header {
          margin-bottom: 3rem;
        }

        .jogo-title {
          font-family: 'Orbitron', monospace;
          font-size: 3rem;
          color: #00ffff;
          text-shadow: 0 0 30px rgba(0,255,255,0.5);
          margin-bottom: 1rem;
          letter-spacing: 3px;
        }

        .jogo-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          font-size: 1rem;
          color: #888;
        }

        .jogo-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .jogo-meta strong {
          color: #00ffff;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 968px) {
          .grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .game-area {
          background: rgba(0,255,255,0.02);
          border: 1px solid rgba(0,255,255,0.15);
          padding: 2rem;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .game-screen {
          background: #000;
          border: 2px solid rgba(0,255,255,0.3);
          padding: 2rem;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
        }

        .game-icon {
          font-size: 5rem;
        }

        .descricao-box {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 1.5rem;
        }

        .descricao-box h2 {
          font-family: 'Orbitron', monospace;
          font-size: 1.2rem;
          color: rgba(0,255,255,0.7);
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .descricao-box p {
          color: #bbb;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-box {
          background: rgba(0,255,255,0.02);
          border: 1px solid rgba(0,255,255,0.15);
          padding: 1.5rem;
        }

        .info-box h3 {
          font-family: 'Orbitron', monospace;
          font-size: 1rem;
          color: rgba(0,255,255,0.7);
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .controls-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .controls-list li {
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(0,255,255,0.1);
          padding: 0.7rem 1rem;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: #aaa;
          font-family: 'Rajdhani', sans-serif;
        }

        .controls-list li:hover {
          border-color: rgba(0,255,255,0.3);
          background: rgba(0,255,255,0.05);
        }

        .status-badge-large {
          display: inline-block;
          font-size: 0.9rem;
          padding: 0.4rem 1rem;
          border-radius: 2px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .stat-item {
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(0,255,255,0.1);
          padding: 1rem;
          text-align: center;
        }

        .stat-value {
          font-family: 'Orbitron', monospace;
          font-size: 1.8rem;
          color: #00ffff;
          display: block;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      <div className="jogo-page">
        <button className="back-btn" onClick={() => router.push('/jogos')}>
          ← Voltar para Lista
        </button>

        <div className="container">
          <div className="jogo-header">
            <h1 className="jogo-title">{jogo.nome}</h1>
            <div className="jogo-meta">
              <span><strong>Gênero:</strong> {jogo.genero}</span>
              <span><strong>Desenvolvedor:</strong> {jogo.desenvolvedor}</span>
              <span><strong>Ano:</strong> {jogo.anoLancamento}</span>
              <span>
                <strong>Status:</strong>{" "}
                <span
                  className="status-badge-large"
                  style={{
                    color: statusColor[jogo.status],
                    border: `1px solid ${statusColor[jogo.status]}40`,
                    background: `${statusColor[jogo.status]}10`,
                  }}
                >
                  {jogo.status}
                </span>
              </span>
            </div>
          </div>

          <div className="grid-layout">
            {/* Área Principal */}
            <div className="game-area">
              <div className="game-screen">
                {JogoComponente ? (
                  <JogoComponente />
                ) : (
                  <>
                    <span className="game-icon">🎮</span>
                    <p style={{ color: '#555', fontSize: '0.9rem' }}>
                      Área do Jogo - Integre seu jogo aqui
                    </p>
                  </>
                )}
              </div>

              <div className="descricao-box">
                <h2>Sobre o Jogo</h2>
                <p>{jogo.descricao}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Controles */}
              <div className="info-box">
                <h3>🎮 Controles</h3>
                <ul className="controls-list">
                  {jogo.controles.map((controle: string, index: number) => (
                    <li key={index}>{controle}</li>
                  ))}
                </ul>
              </div>

              {/* Estatísticas */}
              <div className="info-box">
                <h3>📊 Estatísticas</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">{jogo.nota}</span>
                    <span className="stat-label">Nota</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">0h</span>
                    <span className="stat-label">Jogado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}