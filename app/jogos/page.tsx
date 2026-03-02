"use client";

import { useState } from "react";
import JogoRow from "@/app/components/JogoRow";

const jogos = [
  { id: 1, nome: "Jogo 1", genero: "RPG", nota: 9, status: "Jogando", slug: "jogo-1" },
  { id: 2, nome: "Jogo 2", genero: "Ação", nota: 8, status: "Zerado", slug: "jogo-2" },
  { id: 3, nome: "Jogo 3", genero: "Aventura", nota: 7, status: "Na fila", slug: "jogo-3" },
];

export default function Jogos() {
  const [lista, setLista] = useState(jogos);
  const [form, setForm] = useState({ nome: "", genero: "", nota: "", status: "Jogando" });
  const [mostrarForm, setMostrarForm] = useState(false);

  // Adiciona novo jogo
  const adicionar = () => {
    if (!form.nome) return;
    const slug = form.nome.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    setLista([
      ...lista,
      { id: Date.now(), ...form, nota: Number(form.nota), slug },
    ]);
    setForm({ nome: "", genero: "", nota: "", status: "Jogando" });
    setMostrarForm(false);
  };

  // Remove jogo pelo id
  const remover = (id: number) => setLista(lista.filter((j) => j.id !== id));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600&display=swap');
        .jogos-page { min-height:100vh; background:#05050a; padding:100px 2rem 4rem; font-family:'Rajdhani', sans-serif; }
        .jogos-title { font-family:'Orbitron', monospace; font-size:2rem; color:#00ffff; text-shadow:0 0 20px rgba(0,255,255,0.6); margin-bottom:2rem; letter-spacing:4px; text-transform:uppercase; }
        .jogos-title span { color:#fff; }
        .add-btn { font-family:'Orbitron', monospace; font-size:0.75rem; letter-spacing:2px; background:transparent; border:1px solid rgba(0,255,255,0.4); color:#00ffff; padding:0.6rem 1.4rem; cursor:pointer; margin-bottom:2rem; transition:all 0.3s; text-transform:uppercase; }
        .add-btn:hover { background:rgba(0,255,255,0.1); box-shadow:0 0 15px rgba(0,255,255,0.3); }
        .form-box { background: rgba(0,255,255,0.03); border:1px solid rgba(0,255,255,0.2); padding:1.5rem; margin-bottom:2rem; display:flex; flex-wrap:wrap; gap:1rem; }
        .form-box input, .form-box select { background: rgba(0,0,0,0.5); border:1px solid rgba(0,255,255,0.2); color:#fff; padding:0.5rem 1rem; font-family:'Rajdhani', sans-serif; font-size:1rem; outline:none; flex:1; min-width:140px; }
        .form-box input:focus, .form-box select:focus { border-color:#00ffff; }
        .form-box select option { background:#05050a; }
        .save-btn { font-family:'Orbitron', monospace; font-size:0.7rem; letter-spacing:2px; background:rgba(0,255,255,0.15); border:1px solid #00ffff; color:#00ffff; padding:0.5rem 1.5rem; cursor:pointer; text-transform:uppercase; transition:all 0.3s; }
        .save-btn:hover { background:rgba(0,255,255,0.3); }
        .table { width:100%; border-collapse:collapse; }
        .table th { font-family:'Orbitron', monospace; font-size:0.7rem; letter-spacing:2px; color:rgba(0,255,255,0.6); text-align:left; padding:0.75rem 1rem; border-bottom:1px solid rgba(0,255,255,0.15); text-transform:uppercase; }
        .table td { padding:0.85rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:#ccc; font-size:1rem; }
        .table tr:hover td { background:rgba(0,255,255,0.03); color:#fff; }
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
              <JogoRow
                key={jogo.id}
                id={jogo.id}
                nome={jogo.nome}
                genero={jogo.genero}
                nota={jogo.nota}
                status={jogo.status}
                slug={jogo.slug}
                remover={remover}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}