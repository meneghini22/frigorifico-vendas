// Prospecção — lojas REAIS (OpenStreetMap/Overpass, restrito a RS/SC) + redes conhecidas, cruzadas com a carteira.
// No Supabase a lista fica editável; este arquivo é o fallback e o seed inicial.

export const PROSPECCAO = {
 "obs": "Lojas reais das cidades-alvo (OpenStreetMap/Overpass, restrito a RS/SC) + redes conhecidas, cruzadas com o relatório. No Supabase, admin/gestor editam status e adicionam lojas. Cobertura do OSM varia por cidade.",
 "regioes": [
  {
   "nome": "Noroeste do RS",
   "cidades": [
    "Ijuí",
    "Santa Rosa",
    "Santo Ângelo",
    "Cruz Alta",
    "Panambi",
    "Três de Maio",
    "Giruá",
    "Horizontina",
    "Santo Augusto",
    "São Luiz Gonzaga",
    "Cerro Largo",
    "Tenente Portela",
    "Frederico Westphalen",
    "Palmeira das Missões",
    "Carazinho",
    "Não-Me-Toque",
    "Catuípe",
    "Augusto Pestana"
   ]
  },
  {
   "nome": "Oeste de SC",
   "cidades": [
    "Chapecó",
    "São Miguel do Oeste",
    "Xanxerê",
    "Concórdia",
    "Maravilha",
    "Pinhalzinho",
    "Palmitos",
    "São Lourenço do Oeste",
    "Seara",
    "Itapiranga",
    "Cunha Porã",
    "Xaxim",
    "Coronel Freitas",
    "Quilombo",
    "Mondaí",
    "Descanso"
   ]
  }
 ],
 "jaClientes": [
  {
   "nome": "Cotripal Agropecuária Cooperativa",
   "cidade": "Ijuí / Panambi"
  },
  {
   "nome": "Cooperativa Tritícola Santa Rosa",
   "cidade": "Santa Rosa"
  },
  {
   "nome": "Cooperativa Mista São Luiz",
   "cidade": "São Luiz Gonzaga"
  },
  {
   "nome": "Cerealista Giruá",
   "cidade": "Giruá"
  }
 ],
 "lojas": [
  {
   "loja": "Boa Vista Supermercados",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Boa Vista Supermercados (Fechado)",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Casa do Pão",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Coqueiros Supermercado",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "E-Atacarejo",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Economia",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "HIPER BOA VISTA",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Hiper Boa Vista Supermercados",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Ipiranga",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado PSM",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado do Milico",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado do trabalhador",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "SUPERMERCADO COQUEIROS",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "SUPERMERCADO ECONOMIA",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "SuperEconomia Borghetti",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Boa Vista",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercados Coqueiros",
   "cidade": "Carazinho",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Abatedouro e Açougue Lunkes",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Açougue München",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "BR",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercadinho  do Pedro Gallas",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Caetano",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Compre Bem",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Kaytano",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Padaria Kazarão",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Jaeschke",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Jaeschke - Moinho",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Strieder",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "ja-cliente"
  },
  {
   "loja": "Supermercado São Roque",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "ampm",
   "cidade": "Cerro Largo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Casa de Carne do Gringo",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Casa de Carnes Ivaí",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Casa de Carnes e Mercado Serrana",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Churrascaria Wagner",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Conveniência 2001",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Conveniência da Barão",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Drum Super",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Irmãos Linke e Cia",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Loja Alternativa",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Comércio de Rações Maldaner",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Minimercado Azevedo",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Pães e Massas",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Sadia Alimentos",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Marangon",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Útil da Lomba",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Amaral",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Daltrozo",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Linassi",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Pag Pouco",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Super Útil",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Super Útil - Domingos Verissimo",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Zaffari",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Zaffari Erico Verissimo",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Telê Mercado e Açougue",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Walmart - Nacional",
   "cidade": "Cruz Alta",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Ediles",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Longo",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercador Jardel",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Barril",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Bertoletti",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cotrifred",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Pereto",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Silva",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Sorriso - Filial",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Sorriso - Matriz",
   "cidade": "Frederico Westphalen",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Comercial Zaffari",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cotripal",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Loja do Darci",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "MD Hortifruti",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Cotrijuí",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Nacional",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Kuchak",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "UFA mercado 24h",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "mercado e açougue Martins",
   "cidade": "Ijuí",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Atacado Cotrijal",
   "cidade": "Não-Me-Toque",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cotrijal",
   "cidade": "Não-Me-Toque",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado do Juca",
   "cidade": "Não-Me-Toque",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Casa do Pão",
   "cidade": "Não-Me-Toque",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cotrijal",
   "cidade": "Não-Me-Toque",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cotrisal",
   "cidade": "Palmeira das Missões",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Calgaro",
   "cidade": "Palmeira das Missões",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado do baixinho",
   "cidade": "Palmeira das Missões",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cotripal",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Lojas Cotripal",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Samambaia",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Weidle",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado do Morro",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cotripal",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cotripal - Arco Íris",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cotripal - Centro",
   "cidade": "Panambi",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cooperativa Tritícola Santa Rosa (Cotrirosa)",
   "cidade": "Santa Rosa",
   "regiao": "Noroeste do RS",
   "tipo": "Cooperativa",
   "status": "a-contatar"
  },
  {
   "loja": "Coopermil",
   "cidade": "Santa Rosa",
   "regiao": "Noroeste do RS",
   "tipo": "Cooperativa",
   "status": "a-contatar"
  },
  {
   "loja": "Açougue Gurizinho",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Becker Supermercado",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Casa de Carnes Costelão",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Casa do Frango",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Fruteira Missões",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Fruteira Sandayas",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Avenida",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "ja-cliente"
  },
  {
   "loja": "Mercado Bueno",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Milanesi",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Paineira",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Nacional",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Rede Vivo",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Stock Center",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Master",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Amigão",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Caryone",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cripy",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Mattana",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Popular",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Weinert",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "UNI Mini Mercado",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Weinert Supermercados",
   "cidade": "Santo Ângelo",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Açougue Ouro Verde",
   "cidade": "São Luiz Gonzaga",
   "regiao": "Noroeste do RS",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Coopatrigo",
   "cidade": "São Luiz Gonzaga",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Feron Supermercados (Centro)",
   "cidade": "São Luiz Gonzaga",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Feron Supermercados - Centro",
   "cidade": "São Luiz Gonzaga",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Rede Vivo",
   "cidade": "São Luiz Gonzaga",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Q Útil",
   "cidade": "São Luiz Gonzaga",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Capelari & Cia",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "DONA ANA CARBONI",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Freese",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Garibom",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado do Povo",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Moleta",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "O Colono",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Popular",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Safra",
   "cidade": "Tenente Portela",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado HI",
   "cidade": "Três de Maio",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Paulus",
   "cidade": "Três de Maio",
   "regiao": "Noroeste do RS",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Benedetti",
   "cidade": "Três de Maio",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Tem-Tem",
   "cidade": "Três de Maio",
   "regiao": "Noroeste do RS",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Ala Supermercado",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Atacadão",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Atacado",
   "status": "a-contatar"
  },
  {
   "loja": "Auto Posto De Marco",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Açougue Carne Fresca",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Açougue Efapi",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Bigolin Supermercado",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Brasão",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Brasão Avenida",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Celeiro Supercenter",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Celeiro Superitália",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Celeiro Supernorte",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Chapecó Casa de Carne",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Grupo Passarela",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Rede",
   "status": "a-contatar"
  },
  {
   "loja": "Grupo Superviza",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Rede",
   "status": "a-contatar"
  },
  {
   "loja": "Império Das Carnes",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Liédi Decor",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Lussisa Ferrarini Industria e Comércio de Carnes",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Antonini",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Barp",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Economia",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Gaúcho",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Ide",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado João 23",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Karlei",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Líder",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Maravilha",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Novo Horizonte",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Novo Sul",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Rodrigues",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Sapiranga",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Vederti",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Açougue Gabriel",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Açougue LC",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Açougue Rossi",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Padaria Altas Horas",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Merco Express Belvedere",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Merco Express General",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Merco Express Presidente",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Milliuma Preço Baixo",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Moura Super Efapi",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Posto Bauer",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Posto Galli",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Royal Presidente Médici",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Maravilha",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Moura",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Moura Jardim do Lago",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Superalfa",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Annaleo",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Caipirão",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Cristo Rei",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Favaretto",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Ideal",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Mercosul",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Popiolski",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Rigo",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Tozzo",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Tres",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Via Atacadista",
   "cidade": "Chapecó",
   "regiao": "Oeste de SC",
   "tipo": "Atacado",
   "status": "a-contatar"
  },
  {
   "loja": "Caitá Supermercados",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Catá Supermercados",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Copérdia",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Koch Supermercados",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Rede",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Faresin",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Passarela Center",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Imperial",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Passarela",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Zat Supermercado",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Zat Supermercados",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "SuperAlfa - Supermercado",
   "cidade": "Coronel Freitas",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Acácia Supermercados",
   "cidade": "Descanso",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cooper A1",
   "cidade": "Descanso",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Comin",
   "cidade": "Descanso",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cooper A1",
   "cidade": "Itapiranga",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Guisa",
   "cidade": "Itapiranga",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Amauri Supermercado",
   "cidade": "Maravilha",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Bom Gosto",
   "cidade": "Maravilha",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Rede Iguatemi Supermercados",
   "cidade": "Maravilha",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Super Centro",
   "cidade": "Maravilha",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Cooper A1",
   "cidade": "Mondaí",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Abastecedor El Jardín",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Alok2 Mart",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Carnexpress",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Açougue",
   "status": "a-contatar"
  },
  {
   "loja": "Cooper A1",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Santa Lúcia",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado e Restaurante Orsolin",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mini Súper Papiros",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mini Súper Ruta 1",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mini Súper y Licorera J y D",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mini Súper y Licores El Centro",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Pulpería El Colegio",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Pulpería La Conchita",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Pulpería La Villa",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Meotti",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Pouco Preço",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Súper Coopro Palmitos",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Unidão Comércio em Geral",
   "cidade": "Palmitos",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Posto Delta",
   "cidade": "Pinhalzinho",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Shop Estok Atacadista",
   "cidade": "Pinhalzinho",
   "regiao": "Oeste de SC",
   "tipo": "Atacado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Itaipú",
   "cidade": "Pinhalzinho",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Shimoda",
   "cidade": "Pinhalzinho",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado União",
   "cidade": "Pinhalzinho",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Ítalo Supermercado",
   "cidade": "Pinhalzinho",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Alfa",
   "cidade": "Quilombo",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Tartari",
   "cidade": "Seara",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Alfa - Supermercado",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Amauri Supermercado",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Deon Supermercado",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Italo Supermercado",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Prolar",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Steffens",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Tito",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Alfa",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Caslo",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado São Francisco",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Verona Supermercado",
   "cidade": "São Lourenço do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Bonno Atacado e Varejo",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Atacado",
   "status": "a-contatar"
  },
  {
   "loja": "Marcon",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Confiança",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Cuca",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Gongo",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Posto MaxSul",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "SMO834",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Marcon SMO",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Treviso",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super fora de hora",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Superalfa",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Coração",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Paraty",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Tio Roque Atacarejo",
   "cidade": "São Miguel do Oeste",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "HiperBadotti",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Marció",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Badotti Center",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Dill",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Jack",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Toígo",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercado Vitória",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mercearia Lopes",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Mini Mercado Tacca",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Mercado",
   "status": "a-contatar"
  },
  {
   "loja": "Super Gentil Victoria",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Máximo",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Oeste",
   "cidade": "Xanxerê",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Brasão",
   "cidade": "Xaxim",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "SUPERMERCADO ZANELLA",
   "cidade": "Xaxim",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Superalfa",
   "cidade": "Xaxim",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  },
  {
   "loja": "Supermercado Santa Marta",
   "cidade": "Xaxim",
   "regiao": "Oeste de SC",
   "tipo": "Supermercado",
   "status": "a-contatar"
  }
 ]
};
