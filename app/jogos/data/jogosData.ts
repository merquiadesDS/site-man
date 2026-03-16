// Dados de todos os jogos
export const jogosData: Record<string, any> = {
  'jogo-1': {
    nome: 'Jogo dos Baldes',
    genero: 'Puzzle',
    nota: 9,
    status: 'Jogando',
    descricao: 'Desafio de lógica com baldes de água! Use dois baldes (4L e 3L) para conseguir exatamente 2L no Balde A. Planeje suas ações e resolva o quebra-cabeça!',
    controles: [
      'Mouse - Clicar nos botões',
      'Encher A - Enche balde A (4L)',
      'Encher B - Enche balde B (3L)',
      'Esvaziar - Esvazia os baldes',
      'A→B / B→A - Transfere água'
    ],
    desenvolvedor: 'Studio XYZ',
    anoLancamento: '2023',
    componente: 'JogoBaldes' // Nome do componente
  },
  'jogo-2': {
    nome: 'Jogo 2',
    genero: 'Ação',
    nota: 8,
    status: 'Zerado',
    descricao: 'Ação intensa com combates dinâmicos e gráficos impressionantes.',
    controles: [
      'WASD - Movimentar',
      'Mouse - Mirar',
      'Clique Esquerdo - Atirar',
      'Clique Direito - Mira precisa',
      'R - Recarregar',
      'Shift - Sprint'
    ],
    desenvolvedor: 'Action Games Inc',
    anoLancamento: '2024',
    componente: null // Sem jogo ainda
  },
  'jogo-3': {
    nome: 'Jogo 3',
    genero: 'Aventura',
    nota: 7,
    status: 'Na fila',
    descricao: 'Explore um mundo aberto cheio de mistérios e desafios únicos.',
    controles: [
      'Setas - Movimentar',
      'Z - Ação principal',
      'X - Ação secundária',
      'C - Mapa',
      'Tab - Trocar ferramenta',
      'Enter - Diálogo'
    ],
    desenvolvedor: 'Adventure Studios',
    anoLancamento: '2024',
    componente: null // Sem jogo ainda
  },
  'simulador-trem': {
    nome: 'Simulador de Bilhetes de Trem',
    genero: 'Simulação',
    nota: 10,
    status: 'Jogando',
    descricao: 'Simule a compra de bilhetes de trem! Digite o valor do pagamento e receba o troco calculado automaticamente. Perfeito para treinar matemática e lidar com dinheiro.',
    controles: [
      'Mouse - Selecionar valores',
      'Teclado - Digitar valores',
      'Enter - Confirmar compra',
      'ESC - Limpar'
    ],
    desenvolvedor: 'Você',
    anoLancamento: '2025',
    componente: 'SimuladorTrem' // Nome do componente
  }
};