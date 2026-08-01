// Painel de mercado — VALORES ILUSTRATIVOS.
// Edite aqui com os números reais (preço do gado, concorrentes) sempre que quiser.
// Para dados ao vivo (cotação da arroba, etc.) seria preciso conectar uma fonte/API depois.

export const MERCADO = {
  atualizado: '01/08/2026',
  ilustrativo: true,

  // Cotação do gado (referência regional)
  gado: [
    { label: 'Boi gordo', valor: 295.0, unidade: 'R$/@' },
    { label: 'Vaca gorda', valor: 268.0, unidade: 'R$/@' },
    { label: 'Novilho', valor: 302.0, unidade: 'R$/@' },
  ],

  // Evolução da arroba do boi gordo (últimas semanas) — ilustrativo
  tendenciaArroba: [284, 287, 289, 292, 295],

  // Comparativo de preço com concorrentes (edite com nomes/valores reais)
  concorrentes: {
    produto: 'Dianteiro bovino (R$/kg)',
    linhas: [
      { nome: 'Nós (Zaleski)', valor: 24.9, destaque: true },
      { nome: 'Concorrente A', valor: 25.8 },
      { nome: 'Concorrente B', valor: 24.5 },
      { nome: 'Concorrente C', valor: 26.1 },
    ],
  },
};
