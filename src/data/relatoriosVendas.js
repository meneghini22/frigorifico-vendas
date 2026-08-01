// Dados dos relatórios "Análise das Vendas por Vendedor" — Centro de Compras Zaleski Ltda.
// Valores = faturamento líquido por cliente (devoluções descontadas).
// Gerado a partir dos relatórios de Maio, Junho e Julho/2026.
// Maio: alguns vendedores com período parcial + abertura semanal.
// Junho/Julho: sem abertura semanal (fonte sem data por transação).

export const DADOS = {
  "meta": {
    "maio": {
      "nome": "Maio",
      "periodo": "01/05/2026 a 31/05/2026",
      "obs": "Alguns vendedores com período parcial. Inclui abertura semanal."
    },
    "junho": {
      "nome": "Junho",
      "periodo": "01/06/2026 a 30/06/2026",
      "obs": "Sem abertura semanal (relatório-fonte sem data por transação)."
    },
    "julho": {
      "nome": "Julho",
      "periodo": "01/07/2026 a 31/07/2026",
      "obs": "Sem abertura semanal (relatório-fonte sem data por transação)."
    }
  },
  "maio": {
    "Everaldo": {
      "total": 8111.52,
      "clientes": 16,
      "ticket": 506.97,
      "semanas": [
        [
          "01–03/05",
          3,
          162.83
        ],
        [
          "04–10/05",
          8,
          3157.67
        ],
        [
          "11–17/05",
          10,
          2318.77
        ],
        [
          "18–24/05",
          2,
          889.73
        ],
        [
          "25–31/05",
          4,
          1582.52
        ]
      ],
      "top": [
        {
          "nome": "Bernardo Baseggio Sisto",
          "valor": 2372.71
        },
        {
          "nome": "Faros Indústria de Farinha de Ossos LTDA",
          "valor": 1447.68
        },
        {
          "nome": "Luciano Bertolazi Gauer",
          "valor": 1440.29
        },
        {
          "nome": "L.L Martiny LTDA",
          "valor": 882.8
        }
      ]
    },
    "Maykel": {
      "total": 651176.93,
      "clientes": 45,
      "ticket": 14470.6,
      "semanas": [
        [
          "01–03/05",
          8,
          12755.79
        ],
        [
          "04–10/05",
          32,
          175471.25
        ],
        [
          "11–17/05",
          30,
          147266.39
        ],
        [
          "18–24/05",
          28,
          155392.53
        ],
        [
          "25–31/05",
          39,
          160289.97
        ]
      ],
      "top": [
        {
          "nome": "Iris Durcks Matana",
          "valor": 162668.82
        },
        {
          "nome": "Cooperativa Mista São Luiz LTDA",
          "valor": 56000,
          "aprox": true
        },
        {
          "nome": "Robison Andres Eventos",
          "valor": 54395.4
        },
        {
          "nome": "Cooperativa Tritícola Santa Rosa LTDA",
          "valor": 37000,
          "aprox": true
        },
        {
          "nome": "Rodrigo Luiz Donadel LTDA",
          "valor": 23264.32
        },
        {
          "nome": "Cerealista Giruá LTDA",
          "valor": 18572.38
        }
      ]
    },
    "Vandal": {
      "total": 18961.91,
      "clientes": 3,
      "ticket": 6320.64,
      "parcial": "25–31/05 (parcial)",
      "semanas": [
        [
          "25–31/05",
          3,
          18961.91
        ]
      ],
      "top": [
        {
          "nome": "Cristo Rei Alimentos LTDA",
          "valor": 13111.59
        },
        {
          "nome": "Galpão Grill Restaurante LTDA",
          "valor": 2954.52
        },
        {
          "nome": "Comércio de Alimentos Ansolin LTDA",
          "valor": 2895.8
        }
      ]
    },
    "Lissandro": {
      "total": 152256.77,
      "clientes": 15,
      "ticket": 10150.45,
      "semanas": [
        [
          "04–10/05",
          8,
          32019.02
        ],
        [
          "11–17/05",
          9,
          26948.67
        ],
        [
          "18–24/05",
          8,
          33982.13
        ],
        [
          "25–31/05",
          9,
          59306.95
        ]
      ],
      "top": []
    },
    "Olavo": {
      "total": 351098.03,
      "clientes": 14,
      "ticket": 25078.43,
      "parcial": "11–31/05 (parcial)",
      "semanas": [
        [
          "11–17/05",
          7,
          140317.3
        ],
        [
          "18–24/05",
          1,
          18358.55
        ],
        [
          "25–31/05",
          13,
          192422.18
        ]
      ],
      "top": [
        {
          "nome": "Ruben Boff Damian & CIA LTDA",
          "valor": 91146.2
        },
        {
          "nome": "Viezzer Central de Compras e Distribuição",
          "valor": 88291.83
        },
        {
          "nome": "Viezzer Loja 02",
          "valor": 21326.24
        },
        {
          "nome": "Viezzer Loja 06",
          "valor": 18489.88
        },
        {
          "nome": "Deitos & Deitos LTDA",
          "valor": 18358.55
        }
      ]
    },
    "Adriano": {
      "total": 11296.45,
      "clientes": 2,
      "ticket": 5648.23,
      "parcial": "18–24/05 (parcial)",
      "semanas": [
        [
          "18–24/05",
          2,
          11296.45
        ]
      ],
      "top": [
        {
          "nome": "Cotripal Agropecuária Cooperativa Ijuí",
          "valor": 6636.53
        },
        {
          "nome": "Cotripal Agropecuária Cooperativa Panambi",
          "valor": 4659.92
        }
      ]
    },
    "Heitor": {
      "total": 387105.76,
      "clientes": 166,
      "ticket": 2331.96,
      "clientesLabel": "atendimentos",
      "semanas": [
        [
          "01–03/05",
          28,
          92995.16
        ],
        [
          "04–10/05",
          30,
          69099.27
        ],
        [
          "11–17/05",
          29,
          57189.48
        ],
        [
          "18–24/05",
          46,
          104060.47
        ],
        [
          "25–31/05",
          33,
          63761.38
        ]
      ],
      "top": []
    }
  },
  "junho": {
    "Everaldo": {
      "total": 4328.05,
      "clientes": 11,
      "ticket": 393.46,
      "top": [
        {
          "nome": "Bernardo Baseggio Sisto",
          "valor": 1210.84
        },
        {
          "nome": "Faros Indústria de Farinha de Ossos LTDA",
          "valor": 1178.96
        },
        {
          "nome": "Sidnei da Rosa Machado",
          "valor": 416.73
        },
        {
          "nome": "Franciele Seifert Schoninger do Nascimento",
          "valor": 392.79
        },
        {
          "nome": "Douglas Rafael Chaves do Santos",
          "valor": 340.62
        },
        {
          "nome": "Marlene Scherer Schwingel",
          "valor": 207.29
        },
        {
          "nome": "Leandro Bottega Reibrich",
          "valor": 200.38
        },
        {
          "nome": "Anderson da Silva Borges",
          "valor": 189.27
        }
      ]
    },
    "Lissandro": {
      "total": 122582.69,
      "clientes": 20,
      "ticket": 6129.13,
      "top": [
        {
          "nome": "Cooperativa Mista Yucuma Cooperyucuma -filial",
          "valor": 26990.72
        },
        {
          "nome": "Milton Bruno Bohnert LTDA",
          "valor": 20972.88
        },
        {
          "nome": "Ari José Neuberger",
          "valor": 15112.35
        },
        {
          "nome": "Silvestre Vogt",
          "valor": 9829.51
        },
        {
          "nome": "Comercial Bertei EIRELI",
          "valor": 7670.86
        },
        {
          "nome": "Júlio César Rossoni",
          "valor": 7193.72
        },
        {
          "nome": "Sebastiao Avani Missio",
          "valor": 6718.4
        },
        {
          "nome": "Mercado Rempel LTDA",
          "valor": 6175.36
        }
      ]
    },
    "Adriano": {
      "total": 36331.31,
      "clientes": 3,
      "ticket": 12110.44,
      "top": [
        {
          "nome": "Cotripal Agropecuaria Cooperativa Ijuí",
          "valor": 20112.06
        },
        {
          "nome": "Cotripal Agropecuaria Cooperativa Panambi",
          "valor": 12950.3
        },
        {
          "nome": "Cotripal Agropecuaria Cooperativa",
          "valor": 3268.95
        }
      ]
    },
    "Maykel": {
      "total": 830683.39,
      "clientes": 64,
      "ticket": 12979.43,
      "top": [
        {
          "nome": "Iris Durcks Matana",
          "valor": 264052.31
        },
        {
          "nome": "Cooperativa Mista São Luiz LTDA",
          "valor": 245627.28
        },
        {
          "nome": "Cerealista Giruá LTDA - FL02",
          "valor": 38481.96
        },
        {
          "nome": "Cooperativa Tritícola Santa Rosa LTDA Av Rio Grande",
          "valor": 35911.86
        },
        {
          "nome": "Rodrigo Luiz Donadel LTDA",
          "valor": 26514.98
        },
        {
          "nome": "Boles Restaurante LTDA",
          "valor": 26385.16
        },
        {
          "nome": "Cooperativa Mista São Luiz",
          "valor": 21679.87
        },
        {
          "nome": "Mercado Cidade Baixa",
          "valor": 20267.14
        }
      ]
    },
    "Heitor": {
      "total": 311029.27,
      "clientes": 51,
      "ticket": 6098.61,
      "top": [
        {
          "nome": "Mercado e Padaria Indepedencia LTDA",
          "valor": 52558.09
        },
        {
          "nome": "Luis Augusto Pes Gabert ME",
          "valor": 28289.37
        },
        {
          "nome": "Kuchak Coml de Alimentos LTDA",
          "valor": 22837.01
        },
        {
          "nome": "Organização Coml Irber LTDA",
          "valor": 22773.92
        },
        {
          "nome": "Wagner de Oliveira Weber",
          "valor": 21830.45
        },
        {
          "nome": "Comércio de Carnes Fernando Oliveira Borges LTDA",
          "valor": 14471.44
        },
        {
          "nome": "Mercado Limasil LTDA",
          "valor": 13063.29
        },
        {
          "nome": "Otaviano Parchen",
          "valor": 12358.14
        }
      ]
    },
    "Olavo": {
      "total": 329180.15,
      "clientes": 9,
      "ticket": 36575.57,
      "top": [
        {
          "nome": "Ruben Boff Damian & CIA LTDA",
          "valor": 262197.67
        },
        {
          "nome": "Viezzer Central de Compras e Distribuição",
          "valor": 26935.84
        },
        {
          "nome": "Viezzer & CIA LTDA Loja 10",
          "valor": 9442.8
        },
        {
          "nome": "Viezzer & CIA LTDA Loja 01",
          "valor": 6461.73
        },
        {
          "nome": "Viezzer & CIA LTDA Loja 06",
          "valor": 5835.87
        },
        {
          "nome": "Viezzer &CIA LTDA Loja 17",
          "valor": 5319.81
        },
        {
          "nome": "Viezzer & CIA LTDA Loja 12",
          "valor": 4941.0
        },
        {
          "nome": "Viezzer & CIA LTDA Loja 11",
          "valor": 4671.99
        }
      ]
    },
    "Vandal": {
      "total": 26422.0,
      "clientes": 4,
      "ticket": 6605.5,
      "top": [
        {
          "nome": "Brasao Supermercados- Avenida",
          "valor": 12800.23
        },
        {
          "nome": "Galpão Grill Restaurante LTDA",
          "valor": 11172.81
        },
        {
          "nome": "Mercado Suamy Miotto",
          "valor": 2030.2
        },
        {
          "nome": "Mercado Sisal LTDA",
          "valor": 418.76
        }
      ]
    }
  },
  "julho": {
    "Everaldo": {
      "total": 20158.36,
      "clientes": 19,
      "ticket": 1060.97,
      "top": [
        {
          "nome": "Bernardo Baseggio Sisto",
          "valor": 8955.43
        },
        {
          "nome": "Sociedade Concórdia e Harmonia - KM20",
          "valor": 4981.24
        },
        {
          "nome": "Ronaldo Cavalheiro",
          "valor": 1530.8
        },
        {
          "nome": "Faros Indústria de Farinha de Ossos LTDA",
          "valor": 1446.88
        },
        {
          "nome": "L.l Martiny LTDA",
          "valor": 1007.28
        },
        {
          "nome": "Franciele Seifert Schoninger do Nascimento",
          "valor": 432.43
        },
        {
          "nome": "Fayruz Vieira Mustafa Minosso",
          "valor": 357.0
        },
        {
          "nome": "Uliane Correa Medina de Lima",
          "valor": 325.59
        }
      ]
    },
    "Lissandro": {
      "total": 168418.24,
      "clientes": 20,
      "ticket": 8420.91,
      "top": [
        {
          "nome": "Cooperativa Mista Yucuma Cooperyucuma -filial",
          "valor": 34221.59
        },
        {
          "nome": "Milton Bruno Bohnert LTDA",
          "valor": 23525.77
        },
        {
          "nome": "Arleu Valadar Machado LTDA",
          "valor": 21468.16
        },
        {
          "nome": "Silvestre Vogt",
          "valor": 20332.33
        },
        {
          "nome": "Ari José Neuberger",
          "valor": 17820.72
        },
        {
          "nome": "Comercial Bertei EIRELI",
          "valor": 10872.94
        },
        {
          "nome": "Mercado Pilatti LTDA",
          "valor": 6811.68
        },
        {
          "nome": "Cooperativa Mista Yucuma Cooperyucuma",
          "valor": 5989.0
        }
      ]
    },
    "Adriano": {
      "total": 29425.79,
      "clientes": 2,
      "ticket": 14712.9,
      "top": [
        {
          "nome": "Cotripal Agropecuaria Cooperativa Ijuí",
          "valor": 17394.05
        },
        {
          "nome": "Cotripal Agropecuaria Cooperativa Panambi",
          "valor": 12031.74
        }
      ]
    },
    "Maykel": {
      "total": 655992.73,
      "clientes": 58,
      "ticket": 11310.22,
      "top": [
        {
          "nome": "Cooperativa Mista São Luiz LTDA",
          "valor": 234427.56
        },
        {
          "nome": "Iris Durcks Matana",
          "valor": 54680.1
        },
        {
          "nome": "Cooperativa Tritícola Santa Rosa LTDA Av Rio Grande",
          "valor": 51259.32
        },
        {
          "nome": "Jurinic & CIA LTDA",
          "valor": 28738.72
        },
        {
          "nome": "Supermercado Strieder Express",
          "valor": 25398.38
        },
        {
          "nome": "Cerealista Giruá LTDA - FL02",
          "valor": 24516.91
        },
        {
          "nome": "Rodrigo Luiz Donadel LTDA",
          "valor": 23230.32
        },
        {
          "nome": "Boles Restaurante LTDA",
          "valor": 22172.06
        }
      ]
    },
    "Heitor": {
      "total": 540830.08,
      "clientes": 68,
      "ticket": 7953.38,
      "top": [
        {
          "nome": "Mercado e Padaria Indepedencia LTDA",
          "valor": 73275.03
        },
        {
          "nome": "Organização Coml Irber LTDA",
          "valor": 73039.11
        },
        {
          "nome": "Kuchak Coml de Alimentos LTDA",
          "valor": 71331.68
        },
        {
          "nome": "Wagner de Oliveira Weber",
          "valor": 39767.79
        },
        {
          "nome": "Comércio de Carnes Ja LTDA",
          "valor": 25322.96
        },
        {
          "nome": "De Carli e Dallabrida LTDA",
          "valor": 15551.82
        },
        {
          "nome": "Mercado Perini Rigo LTDA ME",
          "valor": 14131.66
        },
        {
          "nome": "Comércio de Carnes Fernando Oliveira Borges LTDA",
          "valor": 13235.64
        }
      ]
    },
    "Vandal": {
      "total": 29687.37,
      "clientes": 10,
      "ticket": 2968.74,
      "top": [
        {
          "nome": "Galpão Grill Restaurante LTDA",
          "valor": 13239.37
        },
        {
          "nome": "Casa de Carnes Cella LTDA",
          "valor": 4976.61
        },
        {
          "nome": "Flori Corea de Quadros",
          "valor": 3463.19
        },
        {
          "nome": "Supermercado Marcio LTDA",
          "valor": 3433.14
        },
        {
          "nome": "Colorado Carnes Nobres LTDA",
          "valor": 1899.77
        },
        {
          "nome": "Restaurante Transporte Kataucha LTDA",
          "valor": 711.71
        },
        {
          "nome": "The Garden Wine And Bar com de Bebidas Alimen e Eventos LTDA",
          "valor": 709.33
        },
        {
          "nome": "Comércio de Bebidas Lazzaretti",
          "valor": 467.08
        }
      ]
    }
  }
};

export const MESES = ["maio", "junho", "julho"];
export const PREV = { maio: null, junho: "maio", julho: "junho" };
