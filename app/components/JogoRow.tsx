"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface JogoProps {
  id: number;
  nome: string;
  genero: string;
  nota: number;
  status: string;
  slug: string;
  remover: (id: number) => void;
}

const statusColor: Record<string, string> = {
  Jogando: "#00ffff",
  Zerado: "#00ff88",
  "Na fila": "#ff6b00",
};

export default function JogoRow({ id, nome, genero, nota, status, slug, remover }: JogoProps) {
  const router = useRouter();

  const irParaJogo = () => {
    router.push(`/jogos/${slug}`);
  };

  return (
    <tr>
      <td>{nome}</td>
      <td>{genero}</td>
      <td>{nota}/10</td>
      <td>
        <span
          className="status-badge"
          style={{
            color: statusColor[status],
            border: `1px solid ${statusColor[status]}40`,
            background: `${statusColor[status]}10`,
          }}
        >
          {status}
        </span>
      </td>
      <td>
        <div className="actions-cell">
          <button className="play-btn" onClick={irParaJogo}>
            ▶ Jogar
          </button>
          <button className="del-btn" onClick={() => remover(id)}>
            remover
          </button>
        </div>
      </td>
    </tr>
  );
}