// Prospecção — lojas REAIS (OpenStreetMap/Overpass, restrito a RS/SC + redes conhecidas), cruzadas com a carteira.
// No Supabase a lista fica editável; este arquivo é o fallback e o seed inicial.

export const PROSPECCAO = {
 "obs": "Lojas reais das cidades-alvo (OpenStreetMap + redes conhecidas), cruzadas com o relatório. No Supabase, admin/gestor editam status e adicionam lojas. Cobertura do OSM varia por cidade.",
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
   "loja": "Cotrijal",
   "cidade": "Não-Me-Toque",
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
   "loja": "Koch Supermercados",
   "cidade": "Concórdia",
   "regiao": "Oeste de SC",
   "tipo": "Rede",
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
  }
 ]
};
