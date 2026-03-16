"use client";
import { useState } from "react";

export default function SimuladorTrem() {
  const [precoBilhete] = useState(15.50);
  const [valorPago, setValorPago] = useState('');
  const [troco, setTroco] = useState<number | null>(null);
  const [erro, setErro] = useState('');

  const calcularTroco = () => {
    const valor = parseFloat(valorPago);
    
    if (isNaN(valor)) {
      setErro('Digite um valor válido!');
      setTroco(null);
      return;
    }
    
    if (valor < precoBilhete) {
      setErro(`Valor insuficiente! O bilhete custa R$ ${precoBilhete.toFixed(2)}`);
      setTroco(null);
      return;
    }
    
    setErro('');
    setTroco(valor - precoBilhete);
  };

  const limpar = () => {
    setValorPago('');
    setTroco(null);
    setErro('');
  };

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
        maxWidth: '500px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ 
            fontFamily: 'Orbitron, monospace',
            color: '#00ffff',
            fontSize: '1.5rem',
            marginBottom: '0.5rem'
          }}>
            🚂 ESTAÇÃO CENTRAL
          </h2>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Sistema de Venda de Bilhetes</p>
        </div>

        <div style={{
          background: 'rgba(0,255,255,0.05)',
          border: '1px solid rgba(0,255,255,0.2)',
          padding: '1.5rem',
          borderRadius: '4px',
          marginBottom: '1.5rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#00ffff', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
              Preço do Bilhete:
            </label>
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(0,255,255,0.3)',
              padding: '1rem',
              borderRadius: '4px',
              fontSize: '2rem',
              fontFamily: 'Orbitron, monospace',
              color: '#00ff88',
              textAlign: 'center'
            }}>
              R$ {precoBilhete.toFixed(2)}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#00ffff', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
              Valor Pago pelo Cliente:
            </label>
            <input
              type="number"
              step="0.01"
              value={valorPago}
              onChange={(e) => setValorPago(e.target.value)}
              placeholder="Digite o valor pago"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(0,255,255,0.3)',
                borderRadius: '4px',
                color: '#fff',
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, monospace',
                textAlign: 'center',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') calcularTroco();
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={calcularTroco}
              style={{
                flex: '1 1 200px',
                padding: '1rem',
                background: 'rgba(0,255,255,0.2)',
                border: '2px solid #00ffff',
                color: '#00ffff',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1rem',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s',
                letterSpacing: '2px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(0,255,255,0.3)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(0,255,255,0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              CALCULAR
            </button>
            <button
              onClick={limpar}
              style={{
                flex: '1 1 200px',
                padding: '1rem',
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.2)',
                color: '#888',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1rem',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s',
                letterSpacing: '2px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = '#888';
              }}
            >
              LIMPAR
            </button>
          </div>
        </div>

        {erro && (
          <div style={{
            background: 'rgba(255,50,50,0.1)',
            border: '1px solid rgba(255,50,50,0.3)',
            padding: '1rem',
            borderRadius: '4px',
            color: '#ff3232',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            ⚠️ {erro}
          </div>
        )}

        {troco !== null && !erro && (
          <div style={{
            background: 'rgba(0,255,136,0.1)',
            border: '2px solid rgba(0,255,136,0.4)',
            padding: '1.5rem',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#00ff88', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              💰 TROCO A DEVOLVER:
            </p>
            <p style={{
              fontSize: '3rem',
              fontFamily: 'Orbitron, monospace',
              color: '#00ff88',
              margin: 0,
              textShadow: '0 0 20px rgba(0,255,136,0.5)'
            }}>
              R$ {troco.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}