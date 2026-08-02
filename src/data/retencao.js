// Retenção de clientes — junho/2026 -> julho/2026.
// Calculado das listas COMPLETAS de clientes por vendedor (relatórios PDF).
// Maio não entra: a fonte de maio (relatórios .docx) traz só resumo, sem a
// lista completa de clientes. Com o export completo de maio dá pra incluir os 3 meses.

export const RETENCAO = {
  periodo: 'Junho → Julho / 2026',
  total: { base: 159, continuaram: 112, pararam: 47, novos: 61, julho: 173 },
  vendedores: [
    { nome: "Maykel", junho: 64, julho: 58, continuaram: 46, pararam: 18, novos: 12, exemplosPararam: ["A L STRIEDER & CIA LTDA", "BBD COMERCIO DE CARNES LTDA", "COOPERATIVA MISTA SÃO LUIZ", "COOPERATIVA TRITICOLA SANTA ROSA LTDA", "DIEGO ROBERTO RODRIGUES WEIMANN LTDA", "EDEGAR DE JESUS CORREA", "EDSON DANIEL DALLABONA", "ELIANE APARECIDA DUDA GOULART", "GENI ENDRES & CIA LTDA", "JOAO ANTUNES BORCHARTT ME", "MERCADO BAIRRO CENTRAL", "MERCADO CIDADE BAIXA"] },
    { nome: "Heitor", junho: 51, julho: 68, continuaram: 38, pararam: 13, novos: 30, exemplosPararam: ["ALCIONE CEZAR DOS SANTOS", "ALMEIDA E SCHUBERT LTDA", "ANDREI FLORES MARTINS", "BENEDETTI E BENEDETTI LTDA BVB", "CAMILA TATIANE COLOMBO DOROSINSKI LTDA", "CEZAR ERNESTO LEHSTEN", "DANIEL OLIVEIRA BRUM", "EVARISTO ROTTA", "IGREJA BATISTA TRANSFORMAÇÃO - TRES DE MAIO", "SAO JOAO PALACE HOTEL LTDA", "SUPERMERCADO LH LTDA", "VANDERLEI NASS SIMIONATO LTDA"] },
    { nome: "Lissandro", junho: 20, julho: 20, continuaram: 16, pararam: 4, novos: 4, exemplosPararam: ["MERCADO PEREIRA LTDA", "MERCADO REMPEL LTDA", "RIBEIRO GOBBI LTDA", "SUPER MARA LTDA"] },
    { nome: "Olavo", junho: 9, julho: 0, continuaram: 0, pararam: 9, novos: 0, exemplosPararam: ["BERNARDO BASEGGIO SISTO", "RUBEN BOFF DAMIAN & CIA LTDA", "VIEZZER & CIA LTDA LOJA 01", "VIEZZER & CIA LTDA LOJA 06", "VIEZZER & CIA LTDA LOJA 10", "VIEZZER & CIA LTDA LOJA 11", "VIEZZER & CIA LTDA LOJA 12", "VIEZZER &CIA LTDA LOJA 17", "VIEZZER CENTRAL DE COMPRAS E DISTRIBUIÇÃO"] },
    { nome: "Adriano", junho: 3, julho: 2, continuaram: 2, pararam: 1, novos: 0, exemplosPararam: ["COTRIPAL AGROPECUARIA COOPERATIVA"] },
    { nome: "Everaldo", junho: 11, julho: 19, continuaram: 9, pararam: 2, novos: 10, exemplosPararam: ["DANIEL RODRIGO BRANDT GEBAUER", "JONAS DA SILVA DIANA"] },
    { nome: "Vandal", junho: 4, julho: 10, continuaram: 1, pararam: 3, novos: 9, exemplosPararam: ["BRASAO SUPERMERCADOS- AVENIDA", "MERCADO SISAL LTDA", "MERCADO SUAMY MIOTTO"] },
  ],
};
