// =======================
// LISTA DE PRODUTOS
// (mesma base da página de produtos)
// =======================

const produtosReposicao = [
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

// =======================
// FUNÇÕES DE APOIO
// =======================

function calcularNivelRepo(produto) {
  const ratio = produto.qtdAtual / produto.qtdMinima;

  if (produto.qtdAtual <= 0 || ratio <= 0.5) {
    return "critico";
  } else if (ratio > 0.5 && ratio <= 1) {
    return "baixo";
  } else {
    return "normal";
  }
}

function labelSituacao(nivel) {
  if (nivel === "critico") return "Reposição urgente";
  if (nivel === "baixo") return "Estoque baixo";
  return "Normal";
}

function classeBadgeSituacao(nivel) {
  if (nivel === "critico") return "badge badge-critico";
  if (nivel === "baixo") return "badge badge-saida";
  return "badge badge-entrada";
}

// sugestão de compra: leva estoque a 2x o mínimo (ex.: mínimo 10, atual 4 → comprar 16)
function sugestaoCompra(produto) {
  const alvo = produto.qtdMinima * 2;
  const sugestao = alvo - produto.qtdAtual;
  return sugestao > 0 ? sugestao : 0;
}

// =======================
// RESUMO (CARDS)
// =======================

function atualizarResumoReposicao(produtosFiltrados) {
  const totalMonitoradosEl = document.getElementById("repo-total-monitorados");
  const totalBaixoEl = document.getElementById("repo-total-baixo");
  const totalUrgenteEl = document.getElementById("repo-total-urgente");
  const totalSugestaoEl = document.getElementById("repo-total-sugestao");

  const totalMonitorados = produtosReposicao.length;

  let baixo = 0;
  let urgente = 0;
  let somaSugestao = 0;

  produtosReposicao.forEach((p) => {
    const nivel = calcularNivelRepo(p);
    if (nivel === "baixo") baixo++;
    if (nivel === "critico") urgente++;
  });

  // se passar uma lista filtrada, soma sugestão só nela
  (produtosFiltrados || []).forEach((p) => {
    const nivel = calcularNivelRepo(p);
    if (nivel === "baixo" || nivel === "critico") {
      somaSugestao += sugestaoCompra(p);
    }
  });

  totalMonitoradosEl.textContent = totalMonitorados;
  totalBaixoEl.textContent = baixo;
  totalUrgenteEl.textContent = urgente;
  totalSugestaoEl.textContent = somaSugestao;
}

// =======================
// TABELA
// =======================

function aplicarFiltrosReposicao() {
  const termo = document
    .getElementById("repo-busca")
    .value.toLowerCase()
    .trim();

  const categoria = document.getElementById("repo-categoria").value;
  const prioridade = document.getElementById("repo-prioridade").value;

  // pega só produtos com nível baixo ou crítico
  let lista = produtosReposicao.filter((p) => {
    const nivel = calcularNivelRepo(p);
    return nivel === "baixo" || nivel === "critico";
  });

  // filtro por busca
  if (termo) {
    lista = lista.filter((p) =>
      p.nome.toLowerCase().includes(termo)
    );
  }

  // filtro por categoria
  if (categoria !== "todos") {
    lista = lista.filter((p) => p.categoria === categoria);
  }

  // filtro por prioridade
  if (prioridade !== "todas") {
    lista = lista.filter((p) => calcularNivelRepo(p) === prioridade);
  }

  renderizarTabelaReposicao(lista);
  atualizarResumoReposicao(lista);
}

function renderizarTabelaReposicao(lista) {
  const tbody = document.getElementById("tbody-reposicao");
  if (!tbody) return;

  tbody.innerHTML = "";

  lista.forEach((p) => {
    const nivel = calcularNivelRepo(p);
    const sug = sugestaoCompra(p);

    const tr = document.createElement("tr");
    tr.classList.add("linha-repo");
    if (nivel === "critico") {
      tr.classList.add("linha-critica");
    } else if (nivel === "baixo") {
      tr.classList.add("linha-baixo");
    }

    const tdNome = document.createElement("td");
    tdNome.textContent = p.nome;

    const tdCategoria = document.createElement("td");
    tdCategoria.textContent = p.categoria;

    const tdGrupo = document.createElement("td");
    tdGrupo.textContent = p.grupo;

    const tdAtual = document.createElement("td");
    tdAtual.textContent = p.qtdAtual;
    tdAtual.style.textAlign = "center";

    const tdMinima = document.createElement("td");
    tdMinima.textContent = p.qtdMinima;
    tdMinima.style.textAlign = "center";

    const tdSituacao = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = classeBadgeSituacao(nivel);
    badge.textContent = labelSituacao(nivel);
    tdSituacao.appendChild(badge);

    const tdSugestao = document.createElement("td");
    tdSugestao.textContent = sug + " un.";
    tdSugestao.style.textAlign = "center";

    tr.appendChild(tdNome);
    tr.appendChild(tdCategoria);
    tr.appendChild(tdGrupo);
    tr.appendChild(tdAtual);
    tr.appendChild(tdMinima);
    tr.appendChild(tdSituacao);
    tr.appendChild(tdSugestao);

    tbody.appendChild(tr);
  });

  if (lista.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 7;
    td.textContent =
      "Nenhum produto precisa de reposição com os filtros aplicados.";
    td.style.textAlign = "center";
    td.style.fontSize = "0.85rem";
    td.style.opacity = "0.75";
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

// =======================
// INICIALIZAÇÃO
// =======================

document.addEventListener("DOMContentLoaded", () => {
  const busca = document.getElementById("repo-busca");
  const cat = document.getElementById("repo-categoria");
  const pri = document.getElementById("repo-prioridade");

  if (busca) busca.addEventListener("input", aplicarFiltrosReposicao);
  if (cat) cat.addEventListener("change", aplicarFiltrosReposicao);
  if (pri) pri.addEventListener("change", aplicarFiltrosReposicao);

  // primeira montagem
  aplicarFiltrosReposicao();
});
