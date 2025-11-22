// =========================
// BASE DE PRODUTOS
// (mesma estrutura das outras telas)
// =========================

const produtosSaude = [
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
    nome: 'Monitor 24"',
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
    nome: "Notebook Dell",
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
    nome: "Headset USB",
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
    nome: "Mouse Óptico",
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

// =========================
// FUNÇÕES DE APOIO
// =========================

function calcularNivelSaude(produto) {
  const ratio = produto.qtdAtual / produto.qtdMinima;

  if (produto.qtdAtual <= 0 || ratio <= 0.5) {
    return "critico";
  } else if (ratio > 0.5 && ratio <= 1) {
    return "baixo";
  } else {
    return "normal";
  }
}

function calcularCoberturaGeral() {
  let somaAtual = 0;
  let somaMin = 0;

  produtosSaude.forEach((p) => {
    somaAtual += p.qtdAtual;
    somaMin += p.qtdMinima;
  });

  if (somaMin === 0) return 0;

  let perc = (somaAtual / somaMin) * 100;
  if (perc > 150) perc = 150; // teto só pra não estourar
  if (perc < 0) perc = 0;

  return Math.round(perc);
}

function calcularCoberturaCategoria(categoria) {
  let somaAtual = 0;
  let somaMin = 0;

  produtosSaude.forEach((p) => {
    if (p.categoria === categoria) {
      somaAtual += p.qtdAtual;
      somaMin += p.qtdMinima;
    }
  });

  if (somaMin === 0) return 0;

  let perc = (somaAtual / somaMin) * 100;
  if (perc > 150) perc = 150;
  if (perc < 0) perc = 0;

  return Math.round(perc);
}

function labelPorPercentual(perc) {
  if (perc >= 120) return "Estoque bem abastecido";
  if (perc >= 90) return "Estoque saudável";
  if (perc >= 70) return "Estoque estável";
  if (perc >= 50) return "Atenção – próximo do mínimo";
  return "Crítico – abaixo do mínimo";
}

// =========================
// VISÃO GERAL (GAUGE + RESUMO)
// =========================

function atualizarVisaoGeral() {
  const gaugePercentEl = document.getElementById("gauge-percentual");
  const gaugeStatusLabelEl = document.getElementById("gauge-status-label");
  const gaugeStatusDescEl = document.getElementById("gauge-status-desc");

  const qtdNormaisEl = document.getElementById("qtd-normais");
  const qtdBaixosEl = document.getElementById("qtd-baixos");
  const qtdCriticosEl = document.getElementById("qtd-criticos");

  const totalProdutosEl = document.getElementById("saude-total-produtos");
  const totalCategoriasEl = document.getElementById("saude-total-categorias");
  const coberturaMediaEl = document.getElementById("saude-cobertura-media");

  if (
    !gaugePercentEl ||
    !gaugeStatusLabelEl ||
    !gaugeStatusDescEl ||
    !qtdNormaisEl ||
    !qtdBaixosEl ||
    !qtdCriticosEl ||
    !totalProdutosEl ||
    !totalCategoriasEl ||
    !coberturaMediaEl
  ) {
    return;
  }

  const coberturaGeral = calcularCoberturaGeral();

  // Contagem de níveis
  let normais = 0;
  let baixos = 0;
  let criticos = 0;

  produtosSaude.forEach((p) => {
    const nivel = calcularNivelSaude(p);
    if (nivel === "normal") normais++;
    else if (nivel === "baixo") baixos++;
    else if (nivel === "critico") criticos++;
  });

  const categoriasUnicas = Array.from(
    new Set(produtosSaude.map((p) => p.categoria))
  );

  gaugePercentEl.textContent = `${coberturaGeral}%`;
  qtdNormaisEl.textContent = normais;
  qtdBaixosEl.textContent = baixos;
  qtdCriticosEl.textContent = criticos;

  totalProdutosEl.textContent = produtosSaude.length;
  totalCategoriasEl.textContent = categoriasUnicas.length;
  coberturaMediaEl.textContent = `${coberturaGeral}%`;

  // Texto da situação geral
  const label = labelPorPercentual(coberturaGeral);
  gaugeStatusLabelEl.textContent = label;

  if (coberturaGeral >= 90) {
    gaugeStatusDescEl.textContent =
      "Seu estoque está saudável na maior parte das categorias. Mantenha o monitoramento e revisões periódicas.";
  } else if (coberturaGeral >= 70) {
    gaugeStatusDescEl.textContent =
      "Alguns grupos estão próximos do mínimo. Planeje reposições pontuais para evitar rupturas.";
  } else if (coberturaGeral >= 50) {
    gaugeStatusDescEl.textContent =
      "Diversos itens estão no limite. Uma revisão geral de estoque é recomendada.";
  } else {
    gaugeStatusDescEl.textContent =
      "Estoque em nível crítico. Priorize imediatamente os produtos com menor cobertura.";
  }
}

// =========================
// SAÚDE POR CATEGORIA
// =========================

function atualizarSaudeCategorias() {
  const mapa = {
    "Hardware": {
      barra: document.getElementById("barra-hardware"),
      pct: document.getElementById("pct-hardware"),
      label: document.getElementById("label-hardware")
    },
    "Equipamentos de Informática": {
      barra: document.getElementById("barra-equip"),
      pct: document.getElementById("pct-equip"),
      label: document.getElementById("label-equip")
    },
    "Periféricos": {
      barra: document.getElementById("barra-perif"),
      pct: document.getElementById("pct-perif"),
      label: document.getElementById("label-perif")
    },
    "Redes e Conectividade": {
      barra: document.getElementById("barra-redes"),
      pct: document.getElementById("pct-redes"),
      label: document.getElementById("label-redes")
    },
    "Acessórios Gerais": {
      barra: document.getElementById("barra-acess"),
      pct: document.getElementById("pct-acess"),
      label: document.getElementById("label-acess")
    }
  };

  Object.keys(mapa).forEach((cat) => {
    const { barra, pct, label } = mapa[cat];
    if (!barra || !pct || !label) return;

    const cobertura = calcularCoberturaCategoria(cat);
    pct.textContent = `${cobertura}%`;
    barra.style.width = `${Math.min(cobertura, 100)}%`;

    // Ajusta classes de cor
    barra.classList.remove("nivel-ok", "nivel-atencao", "nivel-critico");
    if (cobertura >= 90) {
      barra.classList.add("nivel-ok");
      label.textContent = "Saudável";
    } else if (cobertura >= 60) {
      barra.classList.add("nivel-atencao");
      label.textContent = "Atenção";
    } else {
      barra.classList.add("nivel-critico");
      label.textContent = "Crítico";
    }
  });
}

// =========================
// RANKING DE PRODUTOS CRÍTICOS
// =========================

function atualizarRankingCriticos() {
  const tbody = document.getElementById("tbody-ranking");
  if (!tbody) return;

  tbody.innerHTML = "";

  // Calcula ratio (qtdAtual / qtdMinima)
  const lista = produtosSaude
    .map((p) => ({
      ...p,
      ratio: p.qtdAtual / p.qtdMinima
    }))
    .sort((a, b) => a.ratio - b.ratio); // menor ratio = mais crítico

  const top = lista.slice(0, 7); // top 7 críticos, por exemplo

  top.forEach((p, index) => {
    const tr = document.createElement("tr");

    const tdPos = document.createElement("td");
    tdPos.textContent = index + 1;

    const tdNome = document.createElement("td");
    tdNome.textContent = p.nome;

    const tdCat = document.createElement("td");
    tdCat.textContent = p.categoria;

    const tdGrupo = document.createElement("td");
    tdGrupo.textContent = p.grupo;

    const tdAtual = document.createElement("td");
    tdAtual.textContent = p.qtdAtual;
    tdAtual.style.textAlign = "center";

    const tdMinima = document.createElement("td");
    tdMinima.textContent = p.qtdMinima;
    tdMinima.style.textAlign = "center";

    const tdRatio = document.createElement("td");
    const ratioPercent = Math.round((p.ratio || 0) * 100);
    tdRatio.textContent = isFinite(ratioPercent)
      ? ratioPercent + "%"
      : "0%";
    tdRatio.style.textAlign = "center";

    tr.appendChild(tdPos);
    tr.appendChild(tdNome);
    tr.appendChild(tdCat);
    tr.appendChild(tdGrupo);
    tr.appendChild(tdAtual);
    tr.appendChild(tdMinima);
    tr.appendChild(tdRatio);

    tbody.appendChild(tr);
  });
}

// =========================
// INICIALIZAÇÃO
// =========================

document.addEventListener("DOMContentLoaded", () => {
  atualizarVisaoGeral();
  atualizarSaudeCategorias();
  atualizarRankingCriticos();
});
