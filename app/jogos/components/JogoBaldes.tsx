"use client";
import { useState } from "react";

export default function JogoBaldes() {
  const [baldeA, setBaldeA] = useState(0); // Capacidade 4L
  const [baldeB, setBaldeB] = useState(0); // Capacidade 3L
  const capacidadeA = 4;
  const capacidadeB = 3;
  const objetivo = 2;

  const encherA = () => setBaldeA(capacidadeA);
  const encherB = () => setBaldeB(capacidadeB);
  
  const esvaziarA = () => setBaldeA(0);
  const esvaziarB = () => setBaldeB(0);
  
  const transferirAparaB = () => {
    const espacoB = capacidadeB - baldeB;
    if (baldeA <= espacoB) {
      setBaldeB(baldeB + baldeA);
      setBaldeA(0);
    } else {
      setBaldeA(baldeA - espacoB);
      setBaldeB(capacidadeB);
    }
  };
  
  const transferirBparaA = () => {
    const espacoA = capacidadeA - baldeA;
    if (baldeB <= espacoA) {
      setBaldeA(baldeA + baldeB);
      setBaldeB(0);
    } else {
      setBaldeB(baldeB - espacoA);
      setBaldeA(capacidadeA);
    }
  };

  const venceu = baldeA === objetivo;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        border: '2px solid rgba(0,255,255,0.3)',
        borderRadius: '8px',
        padding: '2rem',
        width: '100%',
        maxWidth: '600px'
      }}>
        <h2 style={{
          fontFamily: 'Orbitron, monospace',
          color: '#00ffff',
          fontSize: '2rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Jogo dos Baldes
        </h2>

        {/* Baldes */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Balde A */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              color: '#00ffff',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              fontFamily: 'Rajdhani, sans-serif'
            }}>
              BALDE A ({capacidadeA}L)
            </div>
            <div style={{
              width: '120px',
              height: '200px',
              border: '3px solid rgba(0,255,255,0.5)',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(0,0,0,0.3)'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: `${(baldeA / capacidadeA) * 100}%`,
                background: 'linear-gradient(180deg, rgba(0,150,255,0.6), rgba(0,100,200,0.8))',
                transition: 'height 0.3s ease',
                borderTop: baldeA > 0 ? '2px solid rgba(100,200,255,0.8)' : 'none'
              }} />
            </div>
            <div style={{
              color: venceu ? '#00ff88' : '#fff',
              fontSize: '1.5rem',
              marginTop: '0.5rem',
              fontFamily: 'Orbitron, monospace',
              fontWeight: 'bold'
            }}>
              {baldeA}L
            </div>
          </div>

          {/* Balde B */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              color: '#00ffff',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              fontFamily: 'Rajdhani, sans-serif'
            }}>
              BALDE B ({capacidadeB}L)
            </div>
            <div style={{
              width: '120px',
              height: '200px',
              border: '3px solid rgba(0,255,255,0.5)',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(0,0,0,0.3)'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: `${(baldeB / capacidadeB) * 100}%`,
                background: 'linear-gradient(180deg, rgba(0,150,255,0.6), rgba(0,100,200,0.8))',
                transition: 'height 0.3s ease',
                borderTop: baldeB > 0 ? '2px solid rgba(100,200,255,0.8)' : 'none'
              }} />
            </div>
            <div style={{
              color: '#fff',
              fontSize: '1.5rem',
              marginTop: '0.5rem',
              fontFamily: 'Orbitron, monospace',
              fontWeight: 'bold'
            }}>
              {baldeB}L
            </div>
          </div>
        </div>

        {venceu && (
          <div style={{
            background: 'rgba(0,255,136,0.15)',
            border: '2px solid rgba(0,255,136,0.5)',
            padding: '1rem',
            borderRadius: '4px',
            textAlign: 'center',
            marginBottom: '2rem',
            animation: 'pulse 1s infinite'
          }}>
            <span style={{
              color: '#00ff88',
              fontSize: '1.5rem',
              fontFamily: 'Orbitron, monospace'
            }}>
              🎉 VOCÊ VENCEU! 🎉
            </span>
          </div>
        )}

        {/* Regras */}
        <div style={{
          background: 'rgba(0,255,255,0.05)',
          border: '1px solid rgba(0,255,255,0.2)',
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            color: '#00ffff',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            fontFamily: 'Orbitron, monospace'
          }}>
            Regras do Jogo
          </h3>
          <ul style={{
            color: '#aaa',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            paddingLeft: '1.5rem',
            fontFamily: 'Rajdhani, sans-serif'
          }}>
            <li>Você tem dois baldes: A (4L) e B (3L).</li>
            <li>Objetivo: colocar exatamente 2L no Balde A.</li>
            <li>Você pode encher, esvaziar ou transferir água entre os baldes.</li>
            <li>Use os botões para realizar as ações.</li>
          </ul>
        </div>

        {/* Botões */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.5rem'
        }}>
          <button
            onClick={encherA}
            style={{
              padding: '0.8rem',
              background: 'rgba(0,255,255,0.15)',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00ffff',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.75rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
              e.currentTarget.style.borderColor = '#00ffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)';
            }}
          >
            ENCHER A
          </button>

          <button
            onClick={esvaziarA}
            style={{
              padding: '0.8rem',
              background: 'rgba(0,255,255,0.15)',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00ffff',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.75rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
              e.currentTarget.style.borderColor = '#00ffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)';
            }}
          >
            ESVAZIAR A
          </button>

          <button
            onClick={transferirAparaB}
            style={{
              padding: '0.8rem',
              background: 'rgba(0,255,255,0.15)',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00ffff',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.75rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
              e.currentTarget.style.borderColor = '#00ffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)';
            }}
          >
            A → B
          </button>

          <button
            onClick={encherB}
            style={{
              padding: '0.8rem',
              background: 'rgba(0,255,255,0.15)',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00ffff',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.75rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
              e.currentTarget.style.borderColor = '#00ffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)';
            }}
          >
            ENCHER B
          </button>

          <button
            onClick={esvaziarB}
            style={{
              padding: '0.8rem',
              background: 'rgba(0,255,255,0.15)',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00ffff',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.75rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
              e.currentTarget.style.borderColor = '#00ffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)';
            }}
          >
            ESVAZIAR B
          </button>

          <button
            onClick={transferirBparaA}
            style={{
              padding: '0.8rem',
              background: 'rgba(0,255,255,0.15)',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00ffff',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.75rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
              e.currentTarget.style.borderColor = '#00ffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)';
            }}
          >
            B → A
          </button>
        </div>
      </div>
    </div>
  );
}