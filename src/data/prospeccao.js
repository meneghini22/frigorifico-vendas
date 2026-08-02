// Prospecção — mercados-alvo onde ainda NÃO vendemos.
// Cidades reais das regiões pedidas (Noroeste do RS e Oeste de SC).
// As lojas específicas de cada cidade devem ser preenchidas conforme a
// prospecção avança (dá para deixar isto editável pelo banco depois).

export const PROSPECCAO = {
  obs: 'Regiões-alvo para abrir novos clientes. As cidades abaixo são o foco; adicione as lojas específicas em “lojas”.',
  regioes: [
    {
      nome: 'Noroeste do RS',
      cidades: ['Ijuí', 'Santa Rosa', 'Santo Ângelo', 'Cruz Alta', 'Panambi', 'Três de Maio',
        'Giruá', 'Horizontina', 'Santo Augusto', 'São Luiz Gonzaga', 'Cerro Largo',
        'Tenente Portela', 'Frederico Westphalen', 'Palmeira das Missões', 'Carazinho',
        'Não-Me-Toque', 'Catuípe', 'Augusto Pestana'],
    },
    {
      nome: 'Oeste de SC',
      cidades: ['Chapecó', 'São Miguel do Oeste', 'Xanxerê', 'Concórdia', 'Maravilha',
        'Pinhalzinho', 'Palmitos', 'São Lourenço do Oeste', 'Seara', 'Itapiranga',
        'Cunha Porã', 'Xaxim', 'Coronel Freitas', 'Quilombo', 'Mondaí', 'Descanso'],
    },
  ],
  // Lojas prospectadas. status: 'a-contatar' | 'em-negociacao' | 'sem-interesse'
  // Ex.: { loja: 'Supermercado X', cidade: 'Ijuí', regiao: 'Noroeste do RS', status: 'a-contatar', contato: '', obs: '' }
  lojas: [],
};
