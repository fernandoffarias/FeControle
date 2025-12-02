// ========================================
// DADOS DE PRODUTOS (MESMOS DA PÁGINA DE PRODUTOS)
// ========================================

const produtos = [
  // 1. HARDWARE ------------------------
  // Cabos
  {
    nome: "Cabo HDMI",
    categoria: "Hardware",
    grupo: "Cabos",
    qtdAtual: 25,
    qtdMinima: 10
  },
  {
    nome: "Cabo USB-C",
    categoria: "Hardware",
    grupo: "Cabos",
    qtdAtual: 8,
    qtdMinima: 15
  },
  {
    nome: "Cabo de Rede RJ-45",
    categoria: "Hardware",
    grupo: "Cabos",
    qtdAtual: 40,
    qtdMinima: 20
  },
  {
    nome: "Cabo de Força",
    categoria: "Hardware",
    grupo: "Cabos",
    qtdAtual: 5,
    qtdMinima: 10
  },

  // Fontes de Alimentação
  {
    nome: "Fonte 500W",
    categoria: "Hardware",
    grupo: "Fontes de Alimentação",
    qtdAtual: 6,
    qtdMinima: 5
  },
  {
    nome: "Fonte Modular",
    categoria: "Hardware",
    grupo: "Fontes de Alimentação",
    qtdAtual: 2,
    qtdMinima: 5
  },

  // Memórias
  {
    nome: "Memória RAM 8GB",
    categoria: "Hardware",
    grupo: "Memórias",
    qtdAtual: 12,
    qtdMinima: 8
  },
  {
    nome: "Memória RAM 16GB",
    categoria: "Hardware",
    grupo: "Memórias",
    qtdAtual: 4,
    qtdMinima: 10
  },

  // Monitores
  {
    nome: 'Monitor 24" LED',
    categoria: "Hardware",
    grupo: "Monitores",
    qtdAtual: 9,
    qtdMinima: 6
  },
  {
    nome: 'Monitor 27"',
    categoria: "Hardware",
    grupo: "Monitores",
    qtdAtual: 3,
    qtdMinima: 5
  },

  // Placas
  {
    nome: "Placa de Rede",
    categoria: "Hardware",
    grupo: "Placas",
    qtdAtual: 7,
    qtdMinima: 5
  },
  {
    nome: "Placa de Som",
    categoria: "Hardware",
    grupo: "Placas",
    qtdAtual: 2,
    qtdMinima: 5
  },
  {
    nome: "Placa de Vídeo",
    categoria: "Hardware",
    grupo: "Placas",
    qtdAtual: 1,
    qtdMinima: 3
  },

  // Teclados
  {
    nome: "Teclado Mecânico",
    categoria: "Hardware",
    grupo: "Teclados",
    qtdAtual: 6,
    qtdMinima: 4
  },
  {
    nome: "Teclado Semi-mecânico",
    categoria: "Hardware",
    grupo: "Teclados",
    qtdAtual: 5,
    qtdMinima: 5
  },
  {
    nome: "Teclado Wireless",
    categoria: "Hardware",
    grupo: "Teclados",
    qtdAtual: 3,
    qtdMinima: 6
  },

  // 2. EQUIPAMENTOS DE INFORMÁTICA -----
  // Computadores
  {
    nome: "Desktop Completo",
    categoria: "Equipamentos de Informática",
    grupo: "Computadores",
    qtdAtual: 10,
    qtdMinima: 5
  },
  {
    nome: "PC Gamer",
    categoria: "Equipamentos de Informática",
    grupo: "Computadores",
    qtdAtual: 4,
    qtdMinima: 3
  },

  // Impressoras
  {
    nome: "Impressora a Laser",
    categoria: "Equipamentos de Informática",
    grupo: "Impressoras",
    qtdAtual: 3,
    qtdMinima: 2
  },
  {
    nome: "Impressora Multifuncional",
    categoria: "Equipamentos de Informática",
    grupo: "Impressoras",
    qtdAtual: 2,
    qtdMinima: 3
  },

// Laptops
{
  nome: 'Notebook Dell 15"',
  categoria: "Equipamentos de Informática",
  grupo: "Laptops",
  qtdAtual: 6,
  qtdMinima: 8
},

  {
    nome: "Notebook HP",
    categoria: "Equipamentos de Informática",
    grupo: "Laptops",
    qtdAtual: 5,
    qtdMinima: 5
  },
  {
    nome: "Notebook Lenovo",
    categoria: "Equipamentos de Informática",
    grupo: "Laptops",
    qtdAtual: 2,
    qtdMinima: 4
  },

  // 3. PERIFÉRICOS ---------------------
  // Áudio
  {
    nome: "Caixas de Som",
    categoria: "Periféricos",
    grupo: "Áudio",
    qtdAtual: 8,
    qtdMinima: 5
  },
  {
    nome: "Headset com microfone",
    categoria: "Periféricos",
    grupo: "Áudio",
    qtdAtual: 15,
    qtdMinima: 10
  },

  // Entrada
  {
    nome: "Mouse Gamer",
    categoria: "Periféricos",
    grupo: "Entrada",
    qtdAtual: 3,
    qtdMinima: 8
  },
  {
    nome: "Mouse óptico USB",
    categoria: "Periféricos",
    grupo: "Entrada",
    qtdAtual: 12,
    qtdMinima: 10
  },

  // Acessórios
  {
    nome: "Suporte para Notebook",
    categoria: "Periféricos",
    grupo: "Acessórios",
    qtdAtual: 7,
    qtdMinima: 5
  },
  {
    nome: "Suporte para Monitor",
    categoria: "Periféricos",
    grupo: "Acessórios",
    qtdAtual: 4,
    qtdMinima: 6
  },

  // 4. REDES E CONECTIVIDADE -----------
  {
    nome: "Modem",
    categoria: "Redes e Conectividade",
    grupo: "Aparelhos e Roteamento",
    qtdAtual: 4,
    qtdMinima: 3
  },
  {
    nome: "Repetidor Wi-Fi",
    categoria: "Redes e Conectividade",
    grupo: "Aparelhos e Roteamento",
    qtdAtual: 5,
    qtdMinima: 5
  },
  {
    nome: "Roteador",
    categoria: "Redes e Conectividade",
    grupo: "Aparelhos e Roteamento",
    qtdAtual: 2,
    qtdMinima: 5
  },

  // 5. ACESSÓRIOS GERAIS ----------------
  {
    nome: "Carregador de Notebook",
    categoria: "Acessórios Gerais",
    grupo: "Acessórios Gerais",
    qtdAtual: 6,
    qtdMinima: 6
  },
  {
    nome: "Estabilizador",
    categoria: "Acessórios Gerais",
    grupo: "Acessórios Gerais",
    qtdAtual: 3,
    qtdMinima: 5
  },
  {
    nome: "Filtro de Linha",
    categoria: "Acessórios Gerais",
    grupo: "Acessórios Gerais",
    qtdAtual: 10,
    qtdMinima: 8
  }
];

// ========================================
// DADOS EXEMPLO DE MOVIMENTAÇÕES
// (parecido com a página de movimentações)
// ========================================

const movimentacoes = [
  {
    data: "2025-11-20",
    produto: 'Notebook Dell 15"',
    tipo: "Entrada",
    quantidade: 10
  },
  {
    data: "2025-11-18",
    produto: "Mouse óptico USB",
    tipo: "Saída",
    quantidade: 6
  },
  {
    data: "2025-11-16",
    produto: 'Monitor 24" LED',
    tipo: "Entrada",
    quantidade: 4
  },
  {
    data: "2025-11-15",
    produto: "Headset com microfone",
    tipo: "Saída",
    quantidade: 3
  }
];

// ========================================
// FUNÇÕES DE APOIO
// ========================================

function calcularNivel(produto) {
  const ratio = produto.qtdAtual / produto.qtdMinima;

  if (produto.qtdAtual <= 0 || ratio <= 0.5) {
    return "critico";
  } else if (ratio > 0.5 && ratio <= 1) {
    return "baixo";
  } else {
    return "normal";
  }
}

// ========================================
// ATUALIZAR CARDS DO TOPO
// (Total de produtos, Estoque baixo, Entradas, Saídas)
// ========================================

function atualizarCardsResumo() {
  const cardValores = document.querySelectorAll(
    ".cards-resumo .card-resumo .card-valor"
  );

  if (cardValores.length < 4) return;

  const totalProdutos = produtos.length;

  let estoqueBaixo = 0;
  produtos.forEach((p) => {
    const nivel = calcularNivel(p);
    if (nivel === "baixo" || nivel === "critico") {
      estoqueBaixo++;
    }
  });

  let entradas = 0;
  let saidas = 0;
  movimentacoes.forEach((mov) => {
    if (mov.tipo === "Entrada") entradas += mov.quantidade;
    if (mov.tipo === "Saída") saidas += mov.quantidade;
  });

  cardValores[0].textContent = totalProdutos;
  cardValores[1].textContent = estoqueBaixo;
  cardValores[2].textContent = entradas;
  cardValores[3].textContent = saidas;
}

// ========================================
// SAÚDE DO ESTOQUE (SEÇÃO DO "SEMÁFORO" E BARRAS)
// ========================================

// Calcula percentual médio de cobertura de uma "categoria visual" da seção de saúde
function calcularPercentualSaude(labelCategoria) {
  let somaAtual = 0;
  let somaMin = 0;

  produtos.forEach((p) => {
    // Mapeamento dos nomes da seção "Saúde do estoque"
    if (labelCategoria === "Notebooks" && p.grupo === "Laptops") {
      somaAtual += p.qtdAtual;
      somaMin += p.qtdMinima;
    }

    if (labelCategoria === "Monitores" && p.grupo === "Monitores") {
      somaAtual += p.qtdAtual;
      somaMin += p.qtdMinima;
    }

    if (labelCategoria === "Periféricos" && p.categoria === "Periféricos") {
      somaAtual += p.qtdAtual;
      somaMin += p.qtdMinima;
    }

    if (labelCategoria === "Cabos & acessórios") {
      if (p.grupo === "Cabos" || p.categoria === "Acessórios Gerais") {
        somaAtual += p.qtdAtual;
        somaMin += p.qtdMinima;
      }
    }
  });

  if (somaMin === 0) return 0;

  let percentual = (somaAtual / somaMin) * 100;
  if (percentual > 100) percentual = 100;
  if (percentual < 0) percentual = 0;

  return Math.round(percentual);
}

function atualizarSaudeEstoque() {
  // Texto principal
  const textoPrincipal = document.querySelector(".status-texto-principal");
  const textoSecundario = document.querySelector(".status-texto-secundario");

  // Proteção para evitar erros se a seção não existir
  if (!textoPrincipal || !textoSecundario) return;
  let normais = 0;
  let criticouBaixo = 0;

  produtos.forEach((p) => {
    const nivel = calcularNivel(p);
    if (nivel === "normal") normais++;
    else criticouBaixo++;
  });

  const total = produtos.length || 1;
  const percNormal = (normais / total) * 100;

  if (percNormal >= 70) {
    textoPrincipal.textContent = "Estoque em nível saudável";
    textoSecundario.textContent =
      "A maioria dos produtos está acima do nível mínimo configurado.";
  } else if (percNormal >= 40) {
    textoPrincipal.textContent = "Atenção ao estoque";
    textoSecundario.textContent =
      "Alguns grupos de produtos estão próximos do nível mínimo.";
  } else {
    textoPrincipal.textContent = "Estoque em nível crítico";
    textoSecundario.textContent =
      "Diversos produtos estão abaixo do mínimo. Avalie reposições com urgência.";
  }

  // Atualizar barras por categoria
  const linhas = document.querySelectorAll(".saude-barras .barra-linha");
  linhas.forEach((linha) => {
    const labelEl = linha.querySelector(".categoria");
    const percEl = linha.querySelector(".percentual");
    const barraPreenchimento = linha.querySelector(".barra-preenchimento");

    if (!labelEl || !percEl || !barraPreenchimento) return;

    const label = labelEl.textContent.trim();
    const percentual = calcularPercentualSaude(label);

    percEl.textContent = `${percentual}%`;
    barraPreenchimento.style.width = `${percentual}%`;

    // Ajuste visual de cor conforme o percentual
    barraPreenchimento.classList.remove("critico", "atencao");
    if (percentual <= 50) {
      barraPreenchimento.classList.add("critico");
    } else if (percentual > 50 && percentual < 80) {
      barraPreenchimento.classList.add("atencao");
    }
  });
}

// ========================================
// PRODUTO MAIS CRÍTICO (CARD EMBAIXO)
// ========================================

function atualizarProdutoCritico() {
  if (!produtos.length) return;

  let pior = produtos[0];
  let piorRatio = produtos[0].qtdAtual / produtos[0].qtdMinima;

  produtos.forEach((p) => {
    const ratio = p.qtdAtual / p.qtdMinima;
    if (ratio < piorRatio) {
      pior = p;
      piorRatio = ratio;
    }
  });

  const nomeEl = document.querySelector(".critico-nome");
  const infoEl = document.querySelector(".critico-info");

  if (!nomeEl || !infoEl) return;

  nomeEl.textContent = pior.nome;

  const spansInfo = infoEl.querySelectorAll("span");
  if (spansInfo.length >= 2) {
    spansInfo[0].textContent = `Estoque atual: ${pior.qtdAtual} unidades`;
    spansInfo[1].textContent = `Estoque mínimo: ${pior.qtdMinima} unidades`;
  }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  atualizarCardsResumo();
  atualizarSaudeEstoque();
  atualizarProdutoCritico();
});
