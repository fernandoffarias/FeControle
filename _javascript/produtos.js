// =======================
// LISTA DE PRODUTOS
// =======================
// Cada item tem:
// nome, categoria (macro), grupo (subcategoria), qtdAtual, qtdMinima

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
  // Aparelhos e Roteamento
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

function obterLabelStatus(nivel) {
  if (nivel === "critico") return "Reposição urgente";
  if (nivel === "baixo") return "Estoque baixo";
  return "Normal";
}

function obterClasseBarra(nivel) {
  if (nivel === "critico") return "nivel-critico";
  if (nivel === "baixo") return "nivel-atencao";
  return "nivel-ok";
}

function obterClasseBadge(nivel) {
  if (nivel === "critico") return "badge-critico";
  if (nivel === "baixo") return "badge-saida";
  return "badge-entrada";
}

// =======================
// RENDERIZAÇÃO DA TABELA
// =======================

function renderizarProdutos() {
  const tbody = document.getElementById("tbody-produtos");
  if (!tbody) return;

  const termoBusca = document
    .getElementById("busca")
    .value.toLowerCase()
    .trim();

  const catFiltro = document.getElementById("categoria").value;
  const statusFiltro = document.getElementById("status").value;

  tbody.innerHTML = "";

  produtos.forEach((produto) => {
    const nivel = calcularNivel(produto);

    // Filtro: busca por nome
    if (
      termoBusca &&
      !produto.nome.toLowerCase().includes(termoBusca)
    ) {
      return;
    }

    // Filtro: categoria macro
    if (catFiltro !== "todos" && produto.categoria !== catFiltro) {
      return;
    }

    // Filtro: status (normal/baixo/critico)
    if (statusFiltro !== "todos" && statusFiltro !== nivel) {
      return;
    }

    // Cria linha
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = produto.nome;

    const tdCategoria = document.createElement("td");
    tdCategoria.textContent = produto.categoria;

    const tdGrupo = document.createElement("td");
    tdGrupo.textContent = produto.grupo;

    const tdQtdAtual = document.createElement("td");
    tdQtdAtual.textContent = produto.qtdAtual;
    tdQtdAtual.style.textAlign = "center";

    const tdQtdMin = document.createElement("td");
    tdQtdMin.textContent = produto.qtdMinima;
    tdQtdMin.style.textAlign = "center";

    // Barra de estoque
    const tdBarra = document.createElement("td");
    const barraWrapper = document.createElement("div");
    barraWrapper.className = "estoque-barra";

    const barra = document.createElement("div");
    barra.className =
      "estoque-preenchimento " + obterClasseBarra(nivel);

    let percentual = (produto.qtdAtual / produto.qtdMinima) * 100;
    if (percentual > 100) percentual = 100;
    if (percentual < 0) percentual = 0;
    barra.style.width = percentual + "%";

    barraWrapper.appendChild(barra);
    tdBarra.appendChild(barra);

    tdBarra.innerHTML = "";
    tdBarra.appendChild(barraWrapper);

    // Status
    const tdStatus = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "badge " + obterClasseBadge(nivel);
    badge.textContent = obterLabelStatus(nivel);
    tdStatus.appendChild(badge);

    tr.appendChild(tdNome);
    tr.appendChild(tdCategoria);
    tr.appendChild(tdGrupo);
    tr.appendChild(tdQtdAtual);
    tr.appendChild(tdQtdMin);
    tr.appendChild(tdBarra);
    tr.appendChild(tdStatus);

    tbody.appendChild(tr);
  });
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  const busca = document.getElementById("busca");
  const categoria = document.getElementById("categoria");
  const status = document.getElementById("status");

  if (busca) busca.addEventListener("input", renderizarProdutos);
  if (categoria) categoria.addEventListener("change", renderizarProdutos);
  if (status) status.addEventListener("change", renderizarProdutos);

  renderizarProdutos();
});
