// Painel de mercado — DADOS REAIS de referência (cotação do gado).
// Fontes: CEPEA/Esalq (indicador do boi gordo, B3) e Scot Consultoria (RS).
// Atualize os números periodicamente aqui — para cotação ao vivo seria preciso
// conectar uma API/feed depois.
//
// Observação: listas de preço de VENDA de concorrentes não são públicas.
// Por isso a referência de mercado usada é a COTAÇÃO DO BOI POR PRAÇA (o que os
// frigoríficos pagam pela matéria-prima em cada região) — dado público e comparável.

export const MERCADO = {
  fonte: 'CEPEA/Esalq · Scot Consultoria',
  atualizado: '30/07/2026',

  // Indicador de referência nacional do boi gordo (praça de São Paulo)
  indicador: {
    valor: 347.4,          // R$/@
    varMesPct: 3.27,       // valorização acumulada em julho/2026
    data: '29/07/2026',
    praca: 'CEPEA/Esalq · B3 (praça SP)',
  },

  // Tendência da arroba ao longo de julho/2026 (aprox. — alta de +3,27% no mês)
  tendencia: [336.4, 339.5, 342.6, 345.2, 347.4],

  // Rio Grande do Sul negocia por KG DE PESO VIVO (não por arroba)
  rs: [
    { label: 'Boi gordo', valor: 10.45 },
    { label: 'Vaca gorda', valor: 10.75 },
    { label: 'Novilha gorda (oeste)', valor: 12.05 },
  ],

  // Cotação da arroba do boi gordo por praça (CEPEA, 30/07/2026)
  pracas: [
    { uf: 'SP', valor: 344.0 },
    { uf: 'RJ', valor: 336.0 },
    { uf: 'MS', valor: 331.0 },
    { uf: 'MG', valor: 325.0 },
    { uf: 'GO', valor: 322.0 },
    { uf: 'MT', valor: 321.0 },
  ],
};
