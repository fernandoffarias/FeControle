// ===========================
// DADOS INICIAIS (EXEMPLOS)
// ===========================
let movimentacoes = [
  {
    data: "2025-11-20",
    produto: 'Notebook Dell 15"',
    tipo: "Entrada",
    quantidade: 10,
    observacao: "Reposição mensal"
  },
  {
    data: "2025-11-18",
    produto: "Mouse óptico USB",
    tipo: "Saída",
    quantidade: 6,
    observacao: "Uso interno – novos colaboradores"
  },
  {
    data: "2025-11-16",
    produto: 'Monitor 24" LED',
    tipo: "Entrada",
    quantidade: 4,
    observacao: "Lote recebido do fornecedor"
  },
  {
    data: "2025-11-15",
    produto: "Headset com microfone",
    tipo: "Saída",
    quantidade: 3,
    observacao: "Substituição de equipamentos"
  }
];

// ===========================
// FUNÇÕES DE APOIO
// ===========================

function formatarDataBr(dataISO) {
  // data no formato "aaaa-mm-dd" -> "dd/mm/aaaa"
  if (!dataISO) return "";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

// Atualiza os cards de resumo
function atualizarResumo() {
  const totalEntradasEl = document.getElementById("total-entradas");
  const totalSaidasEl = document.getElementById("total-saidas");
  const saldoMovEl = document.getElementById("saldo-mov");
  const ultimaDataEl = document.getElementById("ultima-data");

  let entradas = 0;
  let saidas = 0;
  let ultimaData = null;

  movimentacoes.forEach((mov) => {
    if (mov.tipo === "Entrada") {
      entradas += mov.quantidade;
    } else if (mov.tipo === "Saída") {
      saidas += mov.quantidade;
    }

    // Guarda maior data (string ISO)
    if (!ultimaData || mov.data > ultimaData) {
      ultimaData = mov.data;
    }
  });

  totalEntradasEl.textContent = movimentacoes.length
    ? entradas
    : 0;
  totalSaidasEl.textContent = movimentacoes.length
    ? saidas
    : 0;
  saldoMovEl.textContent = entradas - saidas;

  ultimaDataEl.textContent = ultimaData
    ? formatarDataBr(ultimaData)
    : "—";
}

// Renderiza linhas da tabela
function renderizarTabela() {
  const tbody = document.getElementById("tbody-movimentacoes");
  if (!tbody) return;

  // Limpa
  tbody.innerHTML = "";

  // Ordena pela data (mais recente primeiro)
  const ordenadas = [...movimentacoes].sort((a, b) => {
    if (a.data > b.data) return -1;
    if (a.data < b.data) return 1;
    return 0;
  });

  ordenadas.forEach((mov) => {
    const tr = document.createElement("tr");

    const tdData = document.createElement("td");
    tdData.textContent = formatarDataBr(mov.data);

    const tdProduto = document.createElement("td");
    tdProduto.textContent = mov.produto;

    const tdTipo = document.createElement("td");
    const badge = document.createElement("span");
    badge.classList.add("badge");
    if (mov.tipo === "Entrada") {
      badge.classList.add("badge-entrada");
    } else {
      badge.classList.add("badge-saida");
    }
    badge.textContent = mov.tipo;
    tdTipo.appendChild(badge);

    const tdQtd = document.createElement("td");
    tdQtd.textContent = mov.quantidade;
    tdQtd.style.textAlign = "center";

    const tdObs = document.createElement("td");
    tdObs.textContent = mov.observacao || "—";

    tr.appendChild(tdData);
    tr.appendChild(tdProduto);
    tr.appendChild(tdTipo);
    tr.appendChild(tdQtd);
    tr.appendChild(tdObs);

    tbody.appendChild(tr);
  });

  // Atualiza cards
  atualizarResumo();
}

// Trata envio do formulário
function configurarFormulario() {
  const form = document.getElementById("form-movimentacao");
  if (!form) return;

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dataInput = document.getElementById("data");
    const produtoInput = document.getElementById("produto");
    const tipoInput = document.getElementById("tipo");
    const qtdInput = document.getElementById("quantidade");
    const obsInput = document.getElementById("observacao");

    const data = dataInput.value;
    const produto = produtoInput.value;
    const tipo = tipoInput.value;
    const quantidade = parseInt(qtdInput.value, 10) || 0;
    const observacao = obsInput.value.trim();

    if (!data || !produto || !tipo || quantidade <= 0) {
      alert("Preencha todos os campos obrigatórios com valores válidos.");
      return;
    }

    // Cria nova movimentação
    const novaMov = {
      data,
      produto,
      tipo,
      quantidade,
      observacao
    };

    // Adiciona ao array
    movimentacoes.push(novaMov);

    // Atualiza tabela e resumo
    renderizarTabela();

    // Limpa formulário (exceto data)
    produtoInput.value = "";
    tipoInput.value = "";
    qtdInput.value = "";
    obsInput.value = "";
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  configurarFormulario();
  renderizarTabela();
});
