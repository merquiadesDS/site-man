"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jogosData } from "./data/jogosData";

// Converte os dados para array para a lista
const jogosIniciais = Object.entries(jogosData).map(([slug, data]) => ({
  id: Math.random(),
  nome: data.nome,
  genero: data.genero,
  nota: data.nota,
  status: data.status,
  slug: slug
}));

export default function Jogos() {
  const router = useRouter();
  const [lista, setLista] = useState(jogosIniciais);
  const [form, setForm] = useState({ nome: "", genero: "", nota: "", status: "Jogando" });
  const [mostrarForm, setMostrarForm] = useState(false);

  const adicionar = () => {
    if (!form.nome) return;
    // Cria slug automaticamente baseado no nome
    const slug = form.nome.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    setLista([...lista, { id: Date.now(), ...form, nota: Number(form.nota), slug }]);
    setForm({ nome: "", genero: "", nota: "", status: "Jogando" });
    setMostrarForm(false);
  };

  const remover = (id: number) => setLista(lista.filter((j) => j.id !== id));

  const irParaJogo = (slug: string) => {
    router.push(`/jogos/${slug}`);
  };

  const statusColor: Record<string, string> = {
    Jogando: "#00ffff",
    Zerado: "#00ff88",
    "Na fila": "#ff6b00",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600&display=swap');

        .jogos-page {
          min-height: 100vh;
          background: #05050a;
          padding: 100px 2rem 4rem;
          font-family: 'Rajdhani', sans-serif;
        }

        .jogos-title {
          font-family: 'Orbitron', monospace;
          font-size: 2rem;
          color: #00ffff;
          text-shadow: 0 0 20px rgba(0,255,255,0.6);
          margin-bottom: 2rem;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .jogos-title span {
          color: #fff;
        }

        .add-btn {
          font-family: 'Orbitron', monospace;
          font-size: 0.75rem;
          letter-spacing: 2px;
          background: transparent;
          border: 1px solid rgba(0,255,255,0.4);
          color: #00ffff;
          padding: 0.6rem 1.4rem;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: all 0.3s;
          text-transform: uppercase;
        }

        .add-btn:hover {
          background: rgba(0,255,255,0.1);
          box-shadow: 0 0 15px rgba(0,255,255,0.3);
        }

        .form-box {
          background: rgba(0,255,255,0.03);
          border: 1px solid rgba(0,255,255,0.2);
          padding: 1.5rem;
          margin-bottom: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .form-box input, .form-box select {
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(0,255,255,0.2);
          color: #fff;
          padding: 0.5rem 1rem;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          outline: none;
          flex: 1;
          min-width: 140px;
        }

        .form-box input:focus, .form-box select:focus {
          border-color: #00ffff;
        }

        .form-box select option {
          background: #05050a;
        }

        .save-btn {
          font-family: 'Orbitron', monospace;
          font-size: 0.7rem;
          letter-spacing: 2px;
          background: rgba(0,255,255,0.15);
          border: 1px solid #00ffff;
          color: #00ffff;
          padding: 0.5rem 1.5rem;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s;
        }

        .save-btn:hover {
          background: rgba(0,255,255,0.3);
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th {
          font-family: 'Orbitron', monospace;
          font-size: 0.7rem;
          letter-spacing: 2px;
          color: rgba(0,255,255,0.6);
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(0,255,255,0.15);
          text-transform: uppercase;
        }

        .table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #ccc;
          font-size: 1rem;
        }

        .table tr:hover td {
          background: rgba(0,255,255,0.03);
          color: #fff;
        }

        .status-badge {
          font-size: 0.8rem;
          padding: 0.2rem 0.7rem;
          border-radius: 2px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .play-btn {
          background: transparent;
          border: 1px solid rgba(0,255,255,0.4);
          color: #00ffff;
          padding: 0.3rem 0.9rem;
          cursor: pointer;
          font-family: 'Orbitron', monospace;
          font-size: 0.7rem;
          letter-spacing: 1px;
          transition: all 0.2s;
          text-transform: uppercase;
          margin-right: 0.5rem;
        }

        .play-btn:hover {
          background: rgba(0,255,255,0.15);
          box-shadow: 0 0 10px rgba(0,255,255,0.3);
        }

        .del-btn {
          background: transparent;
          border: 1px solid rgba(255,50,50,0.3);
          color: rgba(255,50,50,0.6);
          padding: 0.3rem 0.9rem;
          cursor: pointer;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          transition: all 0.2s;
        }

        .del-btn:hover {
          border-color: #ff3232;
          color: #ff3232;
          background: rgba(255,50,50,0.1);
        }

        .actions-cell {
          display: flex;
          gap: 0.5rem;
        }
      `}</style>

      <div className="jogos-page">
        <h1 className="jogos-title"><span>//</span> Minha Lista de Jogos</h1>

        <button className="add-btn" onClick={() => setMostrarForm(!mostrarForm)}>
          {mostrarForm ? "— Cancelar" : "+ Adicionar Jogo"}
        </button>

        {mostrarForm && (
          <div className="form-box">
            <input
              placeholder="Nome do jogo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
            <input
              placeholder="Gênero"
              value={form.genero}
              onChange={(e) => setForm({ ...form, genero: e.target.value })}
            />
            <input
              placeholder="Nota (0-10)"
              type="number"
              min="0"
              max="10"
              value={form.nota}
              onChange={(e) => setForm({ ...form, nota: e.target.value })}
            />
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option>Jogando</option>
              <option>Zerado</option>
              <option>Na fila</option>
            </select>
            <button className="save-btn" onClick={adicionar}>Salvar</button>
          </div>
        )}

        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Nota</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((jogo) => (
              <tr key={jogo.id}>
                <td>{jogo.nome}</td>
                <td>{jogo.genero}</td>
                <td>{jogo.nota}/10</td>
                <td>
                  <span
                    className="status-badge"
                    style={{
                      color: statusColor[jogo.status],
                      border: `1px solid ${statusColor[jogo.status]}40`,
                      background: `${statusColor[jogo.status]}10`,
                    }}
                  >
                    {jogo.status}
                  </span>
                </td>
                <td>
                  <div className="actions-cell">
                    <button className="play-btn" onClick={() => irParaJogo(jogo.slug)}>
                      ▶ Jogar
                    </button>
                    <button className="del-btn" onClick={() => remover(jogo.id)}>
                      remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}