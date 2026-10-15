// =====================================================
// BANCO DE PERGUNTAS POR NÍVEL
// =====================================================
const NIVEIS = {
  facil:   { nome: "Fácil" },
  medio:   { nome: "Médio" },
  dificil: { nome: "Difícil" },
};
 
const bancoPerguntas = {
  facil: [
    { pergunta: "Qual é a capital do Brasil?", opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], correta: 1 },
    { pergunta: "Quantos planetas existem no Sistema Solar?", opcoes: ["7", "8", "9", "10"], correta: 1 },
    { pergunta: "Quem pintou a Mona Lisa?", opcoes: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], correta: 2 },
    { pergunta: "Qual é o maior oceano do mundo?", opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"], correta: 3 },
    { pergunta: "Qual é a moeda oficial dos Estados Unidos?", opcoes: ["Euro", "Dólar", "Iene", "Libra"], correta: 1 },
    { pergunta: "Quantas cores tem o arco-íris?", opcoes: ["5", "6", "7", "8"], correta: 2 },
    { pergunta: "Em qual estado brasileiro fica a cidade de Salvador?", opcoes: ["Pernambuco", "Sergipe", "Bahia", "Ceará"], correta: 2 },
    { pergunta: "Qual é a capital da França?", opcoes: ["Londres", "Madri", "Paris", "Roma"], correta: 2 },
    { pergunta: "Quantos lados tem um hexágono?", opcoes: ["5", "6", "7", "8"], correta: 1 },
    { pergunta: "Quem escreveu 'Romeu e Julieta'?", opcoes: ["Charles Dickens", "William Shakespeare", "Júlio Verne", "Cervantes"], correta: 1 },
    { pergunta: "Qual é o esporte mais popular do mundo?", opcoes: ["Basquete", "Vôlei", "Futebol", "Tênis"], correta: 2 },
    { pergunta: "Qual órgão é responsável por bombear sangue no corpo humano?", opcoes: ["Pulmão", "Fígado", "Coração", "Rim"], correta: 2 },
    { pergunta: "Qual é a capital do Japão?", opcoes: ["Pequim", "Seul", "Tóquio", "Bangcoc"], correta: 2 },
    { pergunta: "Qual é a capital da Itália?", opcoes: ["Milão", "Veneza", "Roma", "Florença"], correta: 2 },
    { pergunta: "Qual é o maior planeta do Sistema Solar?", opcoes: ["Saturno", "Júpiter", "Netuno", "Urano"], correta: 1 },
    { pergunta: "Qual é o maior animal terrestre do mundo?", opcoes: ["Girafa", "Rinoceronte", "Elefante-africano", "Hipopótamo"], correta: 2 },
    { pergunta: "Em qual continente fica o Brasil?", opcoes: ["Europa ", "África", "América do Sul", "Ásia"], correta: 2 },
    { pergunta: "Qual é o satélite natural da Terra?", opcoes: ["Sol ", "Lua", "Marte", "Vênus"], correta: 1 },
    { pergunta: "Quantas pernas tem uma aranha?", opcoes: ["4 ", "6", "8", "10"], correta: 2 },
  ],
  medio: [
    { pergunta: "Em que ano o homem pisou na Lua pela primeira vez?", opcoes: ["1965", "1969", "1972", "1958"], correta: 1 },
    { pergunta: "Qual é o maior país do mundo em território?", opcoes: ["China", "Estados Unidos", "Rússia", "Canadá"], correta: 2 },
    { pergunta: "Quem escreveu 'Dom Casmurro'?", opcoes: ["José de Alencar", "Machado de Assis", "Carlos Drummond", "Clarice Lispector"], correta: 1 },
    { pergunta: "Qual é o continente mais populoso do mundo?", opcoes: ["África", "Ásia", "Europa", "América"], correta: 1 },
    { pergunta: "Quem foi o primeiro presidente do Brasil?", opcoes: ["Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek", "Dom Pedro II"], correta: 1 },
    { pergunta: "Qual gás compõe a maior parte da atmosfera terrestre?", opcoes: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"], correta: 1 },
    { pergunta: "Quem inventou a lâmpada incandescente comercial?", opcoes: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Isaac Newton"], correta: 1 },
    { pergunta: "Qual é o planeta mais próximo do Sol?", opcoes: ["Vênus", "Terra", "Mercúrio", "Marte"], correta: 2 },
    { pergunta: "Qual é o menor país do mundo?", opcoes: ["Mônaco", "San Marino", "Vaticano", "Malta"], correta: 2 },
    { pergunta: "Em que ano o Brasil foi descoberto?", opcoes: ["1492", "1500", "1822", "1889"], correta: 1 },
    { pergunta: "Quem pintou 'A Noite Estrelada'?", opcoes: ["Claude Monet", "Vincent van Gogh", "Salvador Dalí", "Edvard Munch"], correta: 1 },
    { pergunta: "Em que ano começou a Segunda Guerra Mundial?", opcoes: ["1914", "1939", "1945", "1929"], correta: 1 },
    { pergunta: "Quem desenvolveu a teoria da relatividade?", opcoes: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileu"], correta: 1 },
    { pergunta: "Em que ano ocorreu a Independência do Brasil?", opcoes: ["1500", "1822", "1889", "1922"], correta: 1 },
    { pergunta: "Qual é o símbolo químico do ouro?", opcoes: ["Ag", "Fe", "Au", "O"], correta: 1 },
    { pergunta: " Qual é o maior planeta do Sistema Solar?", opcoes: ["Terra", "Saturno", "Júpiter", "Netuno"], correta: 2 },
    { pergunta: "Qual é o processo pelo qual as plantas produzem seu próprio alimento usando a luz solar?", opcoes: ["Respiração", "Fotossíntese", "Fermentação", "Evaporação"], correta: 1 },
    { pergunta: "Quem pintou a obra Mona Lisa?", opcoes: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"], correta: 1 },
  ],
  dificil: [
    { pergunta: "Qual é a capital da Austrália?", opcoes: ["Sydney", "Melbourne", "Canberra", "Perth"], correta: 2 },
    { pergunta: "Qual elemento químico tem o símbolo 'W'?", opcoes: ["Tungstênio", "Wolfrâmio-ouro", "Vanádio", "Zircônio"], correta: 0 },
    { pergunta: "Em que ano caiu o Muro de Berlim?", opcoes: ["1985", "1987", "1989", "1991"], correta: 2 },
    { pergunta: "Quem escreveu 'Grande Sertão: Veredas'?", opcoes: ["Graciliano Ramos", "João Guimarães Rosa", "Jorge Amado", "Rubem Fonseca"], correta: 1 },
    { pergunta: "Qual é o osso mais longo do corpo humano?", opcoes: ["Tíbia", "Úmero", "Fêmur", "Fíbula"], correta: 2 },
    { pergunta: "Quem compôs 'As Quatro Estações'?", opcoes: ["Mozart", "Bach", "Vivaldi", "Beethoven"], correta: 2 },
    { pergunta: "Qual é o maior deserto quente do mundo?", opcoes: ["Gobi", "Saara", "Kalahari", "Arábico"], correta: 1 },
    { pergunta: "Qual é o número atômico do carbono?", opcoes: ["6", "8", "12", "14"], correta: 0 },
    { pergunta: "Quem liderou a Revolução Russa de 1917 e chefiou o primeiro governo soviético?", opcoes: ["Stálin", "Trótski", "Lênin", "Gorbachev"], correta: 2 },
    { pergunta: "Qual cidade foi a primeira capital do Brasil?", opcoes: ["Rio de Janeiro", "Salvador", "Recife", "São Vicente"], correta: 1 },
    { pergunta: "Qual é o elemento químico de número atômico 26?", opcoes: ["Cobre", "Ferro", "Zinco", "Níquel"], correta: 1 },
    { pergunta: "Em que ano terminou a Segunda Guerra Mundial?", opcoes: ["1939", "1942", "1945", "1950"], correta: 2 },
    { pergunta: "Qual cientista formulou as três leis do movimento clássico?", opcoes: ["Albert Einstein", "Isaac Newton", " Galileu Galilei", " Nikola Tesla"], correta: 1 },
    { pergunta: "Qual é o menor país do mundo em extensão territorial?", opcoes: ["Mônaco", "Malta", "Vaticano", "Luxemburgo"], correta: 2},
    { pergunta: "Qual civilização construiu a cidade de Machu Picchu?", opcoes: ["Maia", "Asteca", "Inca", "Egípcia"], correta: 2 },
    { pergunta: "Qual tratado, assinado em 1494, dividiu terras recém-descobertas fora da Europa entre Portugal e Espanha?", opcoes: ["Tratado de Versalhes", "Tratado de Utrecht", "Tratado de Tordesilhas", "Tratado de Paris"], correta: 2 },
  ],
};
 
// =====================================================
// ESTADO DO JOGO
// =====================================================
let perguntasAtuais = [];
let perguntaAtual = 0;
let pontos = 0;
let nomeJogador = "";
let nivelAtual = "facil";
let filtroRanking = "todos";
let respondeu = false;
 
// =====================================================
// ELEMENTOS DA TELA
// =====================================================
const telaInicio = document.getElementById("tela-inicio");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");
 
const inputNome = document.getElementById("nome");
const checkboxAceite = document.getElementById("aceite");
const erroNome = document.getElementById("erro-nome");
const erroAceite = document.getElementById("erro-aceite");
const btnIniciar = document.getElementById("btn-iniciar");
 
const jogadorNome = document.getElementById("jogador-nome");
const seloNivelQuiz = document.getElementById("nivel-atual");
const pontosAtuais = document.getElementById("pontos-atuais");
const barraProgresso = document.getElementById("progresso-preenchido");
const contadorPergunta = document.getElementById("contador-pergunta");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes");
const feedback = document.getElementById("feedback");
const btnProxima = document.getElementById("btn-proxima");
 
const pontuacaoValor = document.getElementById("pontuacao-valor");
const resultadoNivel = document.getElementById("resultado-nivel");
const listaRanking = document.getElementById("lista-ranking");
const abasRanking = document.querySelectorAll("#abas-ranking .aba");
const btnReiniciar = document.getElementById("btn-reiniciar");
 
// =====================================================
// RANKING (localStorage)
// =====================================================
const CHAVE_RANKING = "quiz_ranking";
 
function obterRanking() {
  const dados = localStorage.getItem(CHAVE_RANKING);
  return dados ? JSON.parse(dados) : [];
}
 
function salvarRanking(ranking) {
  localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking));
}
 
function nomeJaExiste(nome) {
  return obterRanking().some(item => item.nome.toLowerCase() === nome.toLowerCase());
}
 
function adicionarAoRanking(nome, pontos, nivel) {
  const ranking = obterRanking();
  const agora = new Date();
  const data = agora.toLocaleDateString("pt-BR") + " " + agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  ranking.push({ nome, pontos, nivel, data });
  ranking.sort((a, b) => b.pontos - a.pontos);
  salvarRanking(ranking);
}
 
function escapar(texto) {
  const d = document.createElement("div");
  d.textContent = texto;
  return d.innerHTML;
}
 
function seloNivelHTML(nivel) {
  if (!NIVEIS[nivel]) return "";
  return `<span class="selo-nivel ${nivel}">${NIVEIS[nivel].nome}</span>`;
}
 
function atualizarAbas() {
  abasRanking.forEach(aba => aba.classList.toggle("ativa", aba.dataset.filtro === filtroRanking));
}
 
function renderizarRanking() {
  let ranking = obterRanking();
  if (filtroRanking !== "todos") {
    ranking = ranking.filter(item => item.nivel === filtroRanking);
  }
  listaRanking.innerHTML = "";
  atualizarAbas();
 
  if (ranking.length === 0) {
    listaRanking.innerHTML = '<p class="ranking-vazio">Nenhuma tentativa ainda neste nível. Seja o primeiro!</p>';
    return;
  }
 
  ranking.forEach((item, index) => {
    const ehJogador = item.nome === nomeJogador && item.nivel === nivelAtual;
    const div = document.createElement("div");
    div.className = "item-ranking" + (ehJogador ? " destaque" : "");
    div.innerHTML = `
      <span class="posicao">${index + 1}º</span>
      <div class="info-nome">
        <span class="nome-ranking">${escapar(item.nome)} ${seloNivelHTML(item.nivel)}</span>
        <span class="data-ranking">${escapar(item.data)}</span>
      </div>
      <span class="pontos-ranking">${item.pontos}/10</span>
    `;
    listaRanking.appendChild(div);
  });
}
 
abasRanking.forEach(aba => {
  aba.addEventListener("click", () => {
    filtroRanking = aba.dataset.filtro;
    renderizarRanking();
  });
});
 
// =====================================================
// NAVEGAÇÃO ENTRE TELAS
// =====================================================
function mostrarTela(tela) {
  [telaInicio, telaQuiz, telaResultado].forEach(t => t.classList.remove("ativa"));
  tela.classList.add("ativa");
}
 
function definirSelo(el, nivel) {
  el.textContent = NIVEIS[nivel].nome;
  el.className = "selo-nivel " + nivel;
}
 
// =====================================================
// EMBARALHAR E SELECIONAR PERGUNTAS
// =====================================================
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}
 
function selecionarPerguntas(nivel) {
  return embaralhar(bancoPerguntas[nivel]).slice(0, 10);
}
 
// =====================================================
// INICIAR JOGO
// =====================================================
btnIniciar.addEventListener("click", () => {
  erroNome.textContent = "";
  erroAceite.textContent = "";
 
  const nome = inputNome.value.trim();
 
  if (nome === "") {
    erroNome.textContent = "Por favor, digite seu nome.";
    return;
  }
 
  if (nomeJaExiste(nome)) {
    erroNome.textContent = "Este nome já foi usado. Escolha outro nome.";
    return;
  }
 
  if (!checkboxAceite.checked) {
    erroAceite.textContent = "Você precisa aceitar o termo de uso para jogar.";
    return;
  }
 
  nomeJogador = nome;
  nivelAtual = document.querySelector('input[name="nivel"]:checked').value;
  perguntasAtuais = selecionarPerguntas(nivelAtual);
  perguntaAtual = 0;
  pontos = 0;
 
  jogadorNome.textContent = "Jogador: " + nomeJogador;
  definirSelo(seloNivelQuiz, nivelAtual);
  pontosAtuais.textContent = "0 pts";
 
  mostrarTela(telaQuiz);
  carregarPergunta();
});
 
// =====================================================
// CARREGAR PERGUNTA
// =====================================================
function carregarPergunta() {
  respondeu = false;
  const pergunta = perguntasAtuais[perguntaAtual];
 
  textoPergunta.textContent = pergunta.pergunta;
  opcoesContainer.innerHTML = "";
  feedback.className = "feedback";
  feedback.textContent = "";
  btnProxima.style.display = "none";
 
  barraProgresso.style.width = ((perguntaAtual / perguntasAtuais.length) * 100) + "%";
  contadorPergunta.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntasAtuais.length}`;
 
  pergunta.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = opcao;
    botao.addEventListener("click", () => responder(index));
    opcoesContainer.appendChild(botao);
  });
}
 
// =====================================================
// RESPONDER
// =====================================================
function responder(index) {
  if (respondeu) return;
  respondeu = true;
 
  const pergunta = perguntasAtuais[perguntaAtual];
  const botoes = opcoesContainer.querySelectorAll(".opcao");
 
  botoes.forEach((botao, i) => {
    botao.disabled = true;
    if (i === pergunta.correta) botao.classList.add("correta");
    if (i === index && i !== pergunta.correta) botao.classList.add("incorreta");
  });
 
  if (index === pergunta.correta) {
    pontos++;
    feedback.textContent = "✓ Resposta correta!";
    feedback.className = "feedback mostrar sucesso";
  } else {
    feedback.textContent = "✗ Resposta errada! A correta está destacada em verde.";
    feedback.className = "feedback mostrar erro";
  }
 
  pontosAtuais.textContent = pontos + " pts";
 
  btnProxima.textContent = perguntaAtual < perguntasAtuais.length - 1 ? "Próxima Pergunta" : "Ver Resultado";
  btnProxima.style.display = "block";
}
 
// =====================================================
// PRÓXIMA PERGUNTA
// =====================================================
btnProxima.addEventListener("click", () => {
  perguntaAtual++;
  if (perguntaAtual < perguntasAtuais.length) {
    carregarPergunta();
  } else {
    finalizarQuiz();
  }
});
 
// =====================================================
// FINALIZAR E MOSTRAR RANKING
// =====================================================
function finalizarQuiz() {
  barraProgresso.style.width = "100%";
  adicionarAoRanking(nomeJogador, pontos, nivelAtual);
  pontuacaoValor.textContent = pontos;
  definirSelo(resultadoNivel, nivelAtual);
  filtroRanking = nivelAtual; // abre o ranking já no nível jogado
  renderizarRanking();
  mostrarTela(telaResultado);
}
 
// =====================================================
// REINICIAR
// =====================================================
btnReiniciar.addEventListener("click", () => {
  inputNome.value = "";
  checkboxAceite.checked = false;
  erroNome.textContent = "";
  erroAceite.textContent = "";
  mostrarTela(telaInicio);
});
 
// Permitir iniciar com Enter
inputNome.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btnIniciar.click();
});
