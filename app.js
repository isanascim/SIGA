const bancosPerguntas = {
  geral: {
    // Fácil: conteúdos introdutórios adequados principalmente ao 5º e 6º ano.
    facil: [
      { pergunta: "Qual é o resultado de 8 × 7?", opcoes: ["54", "56", "63", "48"], correta: 1 },
      { pergunta: "Qual órgão usamos principalmente para respirar?", opcoes: ["Estômago", "Pulmões", "Rins", "Coração"], correta: 1 },
      { pergunta: "Qual é o nome do planeta em que vivemos?", opcoes: ["Marte", "Vênus", "Terra", "Júpiter"], correta: 2 },
      { pergunta: "Qual destes animais é um mamífero?", opcoes: ["Sapo", "Tartaruga", "Golfinho", "Galinha"], correta: 2 },
      { pergunta: "Quantos minutos há em uma hora?", opcoes: ["30", "45", "60", "100"], correta: 2 },
      { pergunta: "Qual é a capital do Brasil?", opcoes: ["Brasília", "Curitiba", "Salvador", "Manaus"], correta: 0 },
      { pergunta: "Em qual estado fica a cidade de Curitiba?", opcoes: ["Santa Catarina", "Paraná", "São Paulo", "Rio Grande do Sul"], correta: 1 },
      { pergunta: "Qual destes materiais costuma ser atraído por um ímã?", opcoes: ["Madeira", "Plástico", "Ferro", "Papel"], correta: 2 },
      { pergunta: "Qual é o antônimo de 'generoso'?", opcoes: ["Bondoso", "Egoísta", "Gentil", "Solidário"], correta: 1 },
      { pergunta: "Qual é o resultado de 100 ÷ 4?", opcoes: ["20", "25", "40", "50"], correta: 1 },
      { pergunta: "Qual é a estrela mais próxima da Terra?", opcoes: ["Lua", "Sirius", "Sol", "Estrela Polar"], correta: 2 },
      { pergunta: "Qual atitude ajuda a economizar água?", opcoes: ["Deixar a torneira aberta ao escovar os dentes", "Lavar a calçada todos os dias com mangueira", "Fechar a torneira enquanto escova os dentes", "Tomar banhos muito demorados"], correta: 2 },
      { pergunta: "Quantos lados tem um triângulo?", opcoes: ["2", "3", "4", "5"], correta: 1 },
      { pergunta: "Qual destes alimentos é uma fruta?", opcoes: ["Cenoura", "Alface", "Maçã", "Batata"], correta: 2 },
      { pergunta: "Em qual continente está localizado o Brasil?", opcoes: ["Europa", "América do Sul", "Ásia", "Oceania"], correta: 1 }
    ],
    // Médio: conteúdos comuns ao 6º e 7º ano.
    medio: [
      { pergunta: "Qual processo permite que as plantas produzam seu próprio alimento usando luz?", opcoes: ["Digestão", "Fotossíntese", "Evaporação", "Germinação"], correta: 1 },
      { pergunta: "Qual fração é equivalente a 1/2?", opcoes: ["2/3", "3/6", "2/5", "4/6"], correta: 1 },
      { pergunta: "Qual movimento da Terra está relacionado à alternância entre dia e noite?", opcoes: ["Translação", "Rotação", "Inclinação lunar", "Erosão"], correta: 1 },
      { pergunta: "Qual é a principal função das raízes de uma planta?", opcoes: ["Produzir sementes sempre", "Absorver água e sais minerais e ajudar na fixação", "Atrair insetos com cores", "Realizar a maior parte da fotossíntese"], correta: 1 },
      { pergunta: "Em uma cadeia alimentar, como é chamado o ser vivo que produz seu próprio alimento?", opcoes: ["Consumidor", "Decompositor", "Produtor", "Predador"], correta: 2 },
      { pergunta: "Em que ano foi proclamada a Independência do Brasil?", opcoes: ["1500", "1789", "1822", "1889"], correta: 2 },
      { pergunta: "Qual é o maior bioma brasileiro em extensão territorial?", opcoes: ["Pampa", "Pantanal", "Amazônia", "Caatinga"], correta: 2 },
      { pergunta: "Qual é o resultado de 3² + 4?", opcoes: ["13", "14", "10", "25"], correta: 0 },
      { pergunta: "Qual classe gramatical caracteriza ou dá qualidade a um substantivo?", opcoes: ["Verbo", "Adjetivo", "Preposição", "Conjunção"], correta: 1 },
      { pergunta: "Qual camada da Terra é a mais externa?", opcoes: ["Núcleo interno", "Núcleo externo", "Manto", "Crosta"], correta: 3 },
      { pergunta: "Qual é a função principal dos decompositores em um ecossistema?", opcoes: ["Produzir luz solar", "Reciclar nutrientes ao decompor matéria orgânica", "Impedir toda competição", "Transformar animais em produtores"], correta: 1 },
      { pergunta: "Qual oceano banha o litoral brasileiro?", opcoes: ["Pacífico", "Atlântico", "Índico", "Glacial Ártico"], correta: 1 },
      { pergunta: "Qual instrumento mede a temperatura?", opcoes: ["Barômetro", "Termômetro", "Bússola", "Anemômetro"], correta: 1 },
      { pergunta: "Como se chama a passagem da água líquida para o estado gasoso?", opcoes: ["Condensação", "Solidificação", "Evaporação", "Fusão"], correta: 2 },
      { pergunta: "Qual destas fontes de energia é renovável?", opcoes: ["Carvão mineral", "Petróleo", "Energia solar", "Gás natural"], correta: 2 }
    ],
    // Difícil: desafios interdisciplinares adequados principalmente ao 8º e 9º ano.
    dificil: [
      { pergunta: "Uma camiseta custa R$ 80 e recebe desconto de 25%. Qual é o preço final?", opcoes: ["R$ 20", "R$ 55", "R$ 60", "R$ 65"], correta: 2 },
      { pergunta: "Qual organela celular é conhecida por liberar energia durante a respiração celular?", opcoes: ["Núcleo", "Mitocôndria", "Ribossomo", "Membrana celular"], correta: 1 },
      { pergunta: "Qual é a principal função dos glóbulos vermelhos do sangue?", opcoes: ["Produzir hormônios", "Transportar oxigênio", "Filtrar a urina", "Iniciar a digestão"], correta: 1 },
      { pergunta: "Qual é a solução da equação 3x − 5 = 16?", opcoes: ["5", "6", "7", "8"], correta: 2 },
      { pergunta: "Qual é a unidade de medida da força no Sistema Internacional?", opcoes: ["Joule", "Watt", "Newton", "Pascal"], correta: 2 },
      { pergunta: "Qual gás é absorvido pelas plantas na fotossíntese?", opcoes: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hélio"], correta: 2 },
      { pergunta: "Qual acontecimento marcou o início da Revolução Francesa, em 1789?", opcoes: ["A queda do Muro de Berlim", "A tomada da Bastilha", "A Independência do Brasil", "A chegada à Lua"], correta: 1 },
      { pergunta: "Qual é a principal característica de uma fonte histórica primária?", opcoes: ["Foi criada muito tempo depois e resume outros estudos", "É um vestígio ou registro produzido no período estudado", "É sempre um livro didático", "É necessariamente uma lenda"], correta: 1 },
      { pergunta: "Em uma mistura de água e areia, qual método simples pode separar os componentes?", opcoes: ["Filtração", "Imantação", "Destilação fracionada", "Cromatografia gasosa"], correta: 0 },
      { pergunta: "Qual é a probabilidade de obter cara ao lançar uma moeda justa uma vez?", opcoes: ["1/4", "1/3", "1/2", "1"], correta: 2 },
      { pergunta: "Qual órgão é responsável por filtrar o sangue e produzir a urina?", opcoes: ["Pulmão", "Rim", "Pâncreas", "Baço"], correta: 1 },
      { pergunta: "O que significa dizer que um texto apresenta uma tese?", opcoes: ["Apresenta apenas uma lista de personagens", "Defende uma ideia ou opinião que será argumentada", "Não possui assunto definido", "É sempre escrito em versos"], correta: 1 },
      { pergunta: "Qual é a principal causa do efeito estufa intensificado pelas atividades humanas?", opcoes: ["Aumento de gases como o dióxido de carbono na atmosfera", "Desaparecimento da gravidade", "Diminuição do tamanho da Terra", "Interrupção da rotação terrestre"], correta: 0 },
      { pergunta: "Um carro percorre 150 km em 3 horas, mantendo velocidade média constante. Qual é essa velocidade?", opcoes: ["30 km/h", "45 km/h", "50 km/h", "60 km/h"], correta: 2 },
      { pergunta: "Qual é o papel dos poderes Legislativo, Executivo e Judiciário em uma democracia?", opcoes: ["Concentrar todas as decisões em uma pessoa", "Dividir funções do Estado e estabelecer controles entre os poderes", "Substituir as eleições", "Impedir a existência de leis"], correta: 1 }
    ]
  },
  ti: {
    // Fácil: noções digitais básicas para estudantes do 5º e 6º ano.
    facil: [
      { pergunta: "Qual destes dispositivos é usado para mover o ponteiro na tela do computador?", opcoes: ["Impressora", "Mouse", "Caixa de som", "Microfone"], correta: 1 },
      { pergunta: "Para que serve um teclado?", opcoes: ["Digitar letras, números e comandos", "Imprimir folhas", "Mostrar imagens sem tela", "Aumentar a memória sozinho"], correta: 0 },
      { pergunta: "Qual programa é usado para acessar páginas da internet?", opcoes: ["Navegador", "Calculadora física", "Lixeira", "Gerenciador de arquivos apenas"], correta: 0 },
      { pergunta: "Qual destes é um exemplo de senha mais segura?", opcoes: ["123456", "senha", "maria", "Sol!Rio47#Lua"], correta: 3 },
      { pergunta: "O que devemos fazer antes de compartilhar uma notícia duvidosa?", opcoes: ["Repassar imediatamente", "Verificar a fonte e confirmar a informação", "Mudar o título", "Acreditar apenas na imagem"], correta: 1 },
      { pergunta: "Qual atalho geralmente copia um texto selecionado no Windows?", opcoes: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + P"], correta: 0 },
      { pergunta: "Qual destas opções é um sistema operacional?", opcoes: ["Windows", "Teclado", "HDMI", "Wi-Fi"], correta: 0 },
      { pergunta: "O que é um arquivo digital?", opcoes: ["Um documento ou conjunto de dados armazenado em um dispositivo", "Somente uma peça do computador", "Um cabo de energia", "Uma conexão sem fio"], correta: 0 },
      { pergunta: "Para que serve uma impressora?", opcoes: ["Gravar áudio", "Produzir cópias em papel de documentos ou imagens", "Conectar o computador ao Wi-Fi sempre", "Proteger a tela"], correta: 1 },
      { pergunta: "O que significa estar conectado ao Wi-Fi?", opcoes: ["Estar usando uma conexão de rede sem fio", "Ter instalado um jogo", "Estar sem internet obrigatoriamente", "Ter aumentado o tamanho da tela"], correta: 0 },
      { pergunta: "Qual atitude ajuda a proteger informações pessoais na internet?", opcoes: ["Publicar endereço residencial", "Compartilhar senhas com desconhecidos", "Manter dados pessoais privados", "Usar a mesma senha em tudo e contá-la aos amigos"], correta: 2 },
      { pergunta: "Qual componente mostra textos, imagens e vídeos do computador?", opcoes: ["Monitor", "Mousepad", "Microfone", "Roteador"], correta: 0 },
      { pergunta: "Qual destes é um exemplo de aplicativo de edição de texto?", opcoes: ["Microsoft Word", "Cabo USB", "Roteador", "Placa de vídeo"], correta: 0 },
      { pergunta: "O que devemos fazer ao receber uma mensagem suspeita pedindo nossa senha?", opcoes: ["Enviar a senha", "Clicar em todos os links", "Não informar a senha e avisar um adulto de confiança", "Publicar a mensagem com nossos dados"], correta: 2 },
      { pergunta: "Qual unidade costuma ser usada para medir o tamanho de arquivos digitais?", opcoes: ["Litro", "Byte", "Metro", "Grau Celsius"], correta: 1 }
    ],
    // Médio: conceitos e segurança digital para o 6º e 7º ano.
    medio: [
      { pergunta: "Qual é a função principal de um sistema operacional?", opcoes: ["Gerenciar os recursos do dispositivo e permitir executar programas", "Criar eletricidade", "Substituir todos os aplicativos", "Aumentar fisicamente a tela"], correta: 0 },
      { pergunta: "O que é phishing?", opcoes: ["Um tipo de monitor", "Uma tentativa de enganar pessoas para obter dados ou dinheiro", "Um método de carregar a bateria", "Um programa para desenhar"], correta: 1 },
      { pergunta: "Qual é a função de um antivírus atualizado?", opcoes: ["Garantir que nenhum golpe exista", "Ajudar a detectar e bloquear programas maliciosos", "Aumentar a velocidade do teclado", "Criar cópias impressas"], correta: 1 },
      { pergunta: "O que é armazenamento em nuvem?", opcoes: ["Guardar arquivos em serviços acessados pela internet", "Salvar arquivos somente em papel", "Aumentar o espaço físico da sala", "Desligar o computador remotamente sempre"], correta: 0 },
      { pergunta: "Qual destas opções é um exemplo de linguagem de programação?", opcoes: ["Python", "HDMI", "Wi-Fi", "JPEG"], correta: 0 },
      { pergunta: "Para que serve uma planilha eletrônica?", opcoes: ["Organizar dados, fazer cálculos e criar gráficos", "Substituir o sistema operacional", "Limpar fisicamente o computador", "Criar uma conexão elétrica"], correta: 0 },
      { pergunta: "O que significa fazer backup?", opcoes: ["Apagar todos os arquivos", "Criar uma cópia de segurança dos dados", "Trocar o papel de parede", "Compartilhar a senha"], correta: 1 },
      { pergunta: "Qual é uma característica de uma boa senha?", opcoes: ["Usar apenas 1234", "Conter o próprio nome completo", "Ser longa e difícil de adivinhar", "Ser igual à senha dos amigos"], correta: 2 },
      { pergunta: "O que é uma rede de computadores?", opcoes: ["Computadores e dispositivos conectados para trocar dados e compartilhar recursos", "Um conjunto de telas desligadas", "Uma pasta com fotografias", "Um tipo de teclado"], correta: 0 },
      { pergunta: "Qual é a função de um roteador em uma rede doméstica?", opcoes: ["Distribuir a conexão entre dispositivos", "Editar vídeos", "Imprimir documentos", "Substituir a memória RAM"], correta: 0 },
      { pergunta: "O que significa URL?", opcoes: ["Endereço de um recurso na internet", "Tipo de bateria", "Programa antivírus", "Unidade de processamento"], correta: 0 },
      { pergunta: "Em uma apresentação digital, qual prática melhora a leitura dos slides?", opcoes: ["Colocar parágrafos enormes em todas as telas", "Usar texto legível e destacar ideias principais", "Usar muitas fontes diferentes", "Usar cores que não contrastam"], correta: 1 },
      { pergunta: "O que é uma informação pessoal?", opcoes: ["Um dado que pode identificar ou localizar alguém, como telefone ou endereço", "Qualquer palavra do dicionário", "Somente uma imagem pública da natureza", "Um tipo de cabo"], correta: 0 },
      { pergunta: "Qual é o objetivo de atualizar programas e sistemas?", opcoes: ["Corrigir falhas e, muitas vezes, melhorar a segurança", "Apagar obrigatoriamente todos os documentos", "Desligar a internet para sempre", "Impedir o uso de senhas"], correta: 0 },
      { pergunta: "O que é uma fonte confiável para uma pesquisa escolar?", opcoes: ["Uma publicação sem autor e sem referências", "Um site oficial, livro ou instituição reconhecida com informações verificáveis", "Qualquer mensagem encaminhada", "Um comentário anônimo sem evidências"], correta: 1 }
    ],
    // Difícil: fundamentos de lógica, dados e cidadania digital para o 8º e 9º ano.
    dificil: [
      { pergunta: "O que é um algoritmo?", opcoes: ["Uma sequência organizada de passos para resolver um problema", "Uma peça que serve apenas para imprimir", "Um tipo de cabo de rede", "Um arquivo que só contém imagens"], correta: 0 },
      { pergunta: "Em programação, para que serve uma condição 'se... então'?", opcoes: ["Repetir sempre sem verificar nada", "Executar uma ação dependendo de uma condição", "Desligar o computador", "Armazenar apenas fotografias"], correta: 1 },
      { pergunta: "Qual será o resultado de 5 + 3 × 2, respeitando a ordem das operações?", opcoes: ["16", "13", "11", "10"], correta: 2 },
      { pergunta: "Qual é a principal diferença entre hardware e software?", opcoes: ["Hardware são as partes físicas; software são os programas e instruções", "Hardware é a internet; software é o monitor", "Os dois significam somente peças físicas", "Software é sempre gratuito"], correta: 0 },
      { pergunta: "O que significa usar autenticação em duas etapas?", opcoes: ["Usar duas contas iguais", "Confirmar a identidade com dois tipos de verificação", "Compartilhar a senha com duas pessoas", "Trocar a senha duas vezes por dia obrigatoriamente"], correta: 1 },
      { pergunta: "Por que é importante citar as fontes em um trabalho escolar?", opcoes: ["Para mostrar de onde vieram as informações e reconhecer os autores", "Para deixar o texto maior sem motivo", "Para evitar conferir os dados", "Para dizer que todo conteúdo da internet é próprio"], correta: 0 },
      { pergunta: "Em uma planilha, para que serve uma fórmula?", opcoes: ["Realizar cálculos usando valores ou células", "Mudar o tamanho do computador", "Conectar o teclado à internet", "Imprimir sem impressora"], correta: 0 },
      { pergunta: "Qual é um exemplo de comportamento ético no ambiente digital?", opcoes: ["Publicar fotos de colegas sem autorização", "Criar boatos sobre alguém", "Respeitar a privacidade e pedir permissão antes de compartilhar imagens", "Usar a conta de outra pessoa sem consentimento"], correta: 2 },
      { pergunta: "O que é um dado duplicado em uma tabela?", opcoes: ["Uma informação repetida que pode causar confusão ou contagem incorreta", "Um dado que não pode ser salvo", "Um tipo de senha", "Uma imagem em alta resolução"], correta: 0 },
      { pergunta: "Qual é a finalidade de um firewall?", opcoes: ["Controlar o tráfego de rede conforme regras de segurança", "Aumentar o brilho da tela", "Criar apresentações", "Recuperar qualquer arquivo apagado"], correta: 0 },
      { pergunta: "O que é desinformação?", opcoes: ["Informação sempre confirmada por várias fontes", "Conteúdo falso ou enganoso que pode levar pessoas a acreditar em algo incorreto", "Uma atualização de programa", "Uma cópia de segurança"], correta: 1 },
      { pergunta: "Qual é a representação binária do número decimal 2?", opcoes: ["01", "10", "11", "100"], correta: 1 },
      { pergunta: "Em uma página web, qual é a função do HTML?", opcoes: ["Definir a estrutura e o conteúdo da página", "Servir apenas para proteger contra vírus", "Substituir o sistema operacional", "Aumentar a memória do computador"], correta: 0 },
      { pergunta: "Qual é a função mais comum do CSS em um site?", opcoes: ["Armazenar todos os dados dos usuários", "Controlar a aparência e o layout da página", "Substituir o navegador", "Gerenciar a energia do computador"], correta: 1 },
      { pergunta: "Se um e-mail pede urgência, ameaça bloquear sua conta e inclui um link estranho, qual é a atitude mais segura?", opcoes: ["Clicar imediatamente", "Responder com a senha", "Não clicar e verificar o pedido por um canal oficial", "Encaminhar para todos os contatos"], correta: 2 }
    ]
  }
};

const NIVEIS = {
  facil: { nome: 'Fácil' },
  medio: { nome: 'Médio' },
  dificil: { nome: 'Difícil' }
};
const NOMES_QUIZ = { geral: 'Conhecimentos gerais', ti: 'Tecnologia da Informação' };
const CHAVE_RANKING = 'siga_ranking_unificado_v1';
const TOTAL_PERGUNTAS = 10;

const $ = (id) => document.getElementById(id);
const telas = {
  tipo: $('tela-tipo'), modo: $('tela-modo'), config: $('tela-config'),
  individual: $('tela-quiz-individual'), equipe: $('tela-quiz-equipe'), resultado: $('tela-resultado')
};
const sons = { acerto: $('som-acerto'), erro: $('som-erro') };

let tipoQuiz = 'geral';
let modoJogo = 'individual';
let nivelSelecionado = 'facil';
let perguntas = [];
let indicePergunta = 0;
let pontosJogador = 0;
let errosJogador = 0;
let nomeJogador = '';
let equipes = [];
let vezEquipe = null;
let equipesQueTentaram = new Set();
let respostasPorEquipe = [];
let perguntaEncerrada = false;
let filtroRanking = 'todos';
let tipoRanking = 'geral';
let modoRanking = 'individual';
let idResultadoAtual = null;
let tempoRestante = 60;
let intervaloCronometro = null;
const TEMPO_POR_VEZ = 60;

function mostrarTela(chave) {
  Object.values(telas).forEach(tela => tela.classList.remove('ativa'));
  telas[chave].classList.add('ativa');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function tocarSom(tipo) {
  const audio = sons[tipo];
  if (!audio) return;
  try {
    audio.pause();
    audio.currentTime = 0;
    const reproduzindo = audio.play();
    if (reproduzindo && typeof reproduzindo.catch === 'function') reproduzindo.catch(() => {});
  } catch (erro) {
    console.warn('Não foi possível reproduzir o som:', erro);
  }
}

function escapar(texto) {
  return String(texto ?? '').replace(/[&<>"']/g, caractere => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[caractere]);
}

function nomeNormalizado(nome) { return nome.trim().toLocaleLowerCase('pt-BR'); }
function lerRanking() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_RANKING) || '[]');
    return Array.isArray(dados) ? dados : [];
  } catch (erro) {
    return [];
  }
}
function salvarRanking(ranking) {
  try { localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking)); }
  catch (erro) { console.warn('O ranking não pôde ser salvo neste navegador.', erro); }
}
function nomesJaUsados() {
  const nomes = [];
  lerRanking().forEach(item => {
    if (item.nome) nomes.push(item.nome);
    if (item.equipeA) nomes.push(item.equipeA);
    if (item.equipeB) nomes.push(item.equipeB);
  });
  return new Set(nomes.map(nomeNormalizado));
}
function formatarData() {
  return new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}
function selecionarPerguntas() {
  const banco = bancosPerguntas[tipoQuiz]?.[nivelSelecionado] || [];
  return embaralhar(banco).slice(0, TOTAL_PERGUNTAS);
}
function rotuloNivel(nivel) { return NIVEIS[nivel]?.nome || nivel; }

// Etapa 1: seleção da categoria.
document.querySelectorAll('[data-tipo]').forEach(botao => {
  botao.addEventListener('click', () => {
    tipoQuiz = botao.dataset.tipo;
    salvarConfiguracaoTemporaria();
    $('subtitulo-modo').textContent = 'Desafio selecionado: ' + NOMES_QUIZ[tipoQuiz] + '. Agora escolha como jogar.';
    mostrarTela('modo');
  });
});

// Etapa 2: modo individual ou em equipe.
document.querySelectorAll('[data-modo]').forEach(botao => {
  botao.addEventListener('click', () => {
    modoJogo = botao.dataset.modo;
    salvarConfiguracaoTemporaria();
    const individual = modoJogo === 'individual';
    $('campos-individual').classList.toggle('oculto', !individual);
    $('campos-equipe').classList.toggle('oculto', individual);
    $('titulo-config').textContent = individual ? 'Quem vai jogar?' : 'Preparem as equipes';
    $('subtitulo-config').textContent = NOMES_QUIZ[tipoQuiz] + ' · ' + (individual ? 'Modo individual' : 'Disputa em equipe');
    $('btn-iniciar').textContent = individual ? 'Iniciar quiz' : 'Iniciar disputa';
    $('erro-nome').textContent = '';
    $('erro-aceite').textContent = '';
    mostrarTela('config');
  });
});
$('btn-voltar-tipo').addEventListener('click', () => mostrarTela('tipo'));
$('btn-voltar-modo').addEventListener('click', () => mostrarTela('modo'));

document.querySelectorAll('[data-nivel]').forEach(botao => {
  botao.addEventListener('click', () => {
    nivelSelecionado = botao.dataset.nivel;
    document.querySelectorAll('[data-nivel]').forEach(outro => outro.classList.toggle('selecionado', outro === botao));
  });
});

// Guarda os dados da configuração para que o retorno do Termo de Uso não apague o preenchimento.
const CHAVE_CONFIG_TEMPORARIA = 'siga_config_temporaria';
function salvarConfiguracaoTemporaria() {
  const configuracao = {
    tipoQuiz,
    modoJogo,
    nivelSelecionado,
    nomeJogador: $('nome-jogador').value,
    nomeEquipeA: $('nome-equipe-a').value,
    nomeEquipeB: $('nome-equipe-b').value
  };
  try { sessionStorage.setItem(CHAVE_CONFIG_TEMPORARIA, JSON.stringify(configuracao)); } catch (erro) {}
}

function restaurarConfiguracaoTemporaria() {
  // Restaura a configuração quando a página é reaberta/atualizada após consultar o Termo.
  if (window.location.hash !== '#config') return;
  let configuracao;
  try { configuracao = JSON.parse(sessionStorage.getItem(CHAVE_CONFIG_TEMPORARIA) || 'null'); } catch (erro) { return; }
  if (!configuracao) return;

  tipoQuiz = configuracao.tipoQuiz || tipoQuiz;
  modoJogo = configuracao.modoJogo || modoJogo;
  nivelSelecionado = configuracao.nivelSelecionado || nivelSelecionado;
  $('nome-jogador').value = configuracao.nomeJogador || '';
  $('nome-equipe-a').value = configuracao.nomeEquipeA || '';
  $('nome-equipe-b').value = configuracao.nomeEquipeB || '';
  document.querySelectorAll('[data-nivel]').forEach(botao => {
    botao.classList.toggle('selecionado', botao.dataset.nivel === nivelSelecionado);
  });

  const individual = modoJogo === 'individual';
  $('campos-individual').classList.toggle('oculto', !individual);
  $('campos-equipe').classList.toggle('oculto', individual);
  $('titulo-config').textContent = individual ? 'Quem vai jogar?' : 'Preparem as equipes';
  $('subtitulo-config').textContent = NOMES_QUIZ[tipoQuiz] + ' · ' + (individual ? 'Modo individual' : 'Disputa em equipe');
  $('btn-iniciar').textContent = individual ? 'Iniciar quiz' : 'Iniciar disputa';
  $('aceite').checked = false;
  mostrarTela('config');
}

// Salva automaticamente os nomes enquanto são digitados.
['nome-jogador', 'nome-equipe-a', 'nome-equipe-b'].forEach(id => {
  $(id).addEventListener('input', salvarConfiguracaoTemporaria);
});

// Ao abrir o Termo de Uso, salva a etapa atual e marca a configuração na URL.
// Assim, se a página principal for recarregada ao voltar, os campos serão restaurados.
const linkTermo = document.querySelector('.link-termo');
if (linkTermo) {
  linkTermo.addEventListener('click', () => {
    salvarConfiguracaoTemporaria();
    if (window.location.hash !== '#config') {
      history.replaceState(null, '', window.location.pathname + window.location.search + '#config');
    }
  });
}
document.querySelectorAll('[data-nivel]').forEach(botao => {
  botao.addEventListener('click', salvarConfiguracaoTemporaria);
});
restaurarConfiguracaoTemporaria();

function validarConfig() {
  $('erro-nome').textContent = '';
  $('erro-aceite').textContent = '';
  const nomesDigitados = modoJogo === 'individual'
    ? [$('nome-jogador').value.trim()]
    : [$('nome-equipe-a').value.trim(), $('nome-equipe-b').value.trim()];

  if (nomesDigitados.some(nome => !nome)) {
    $('erro-nome').textContent = modoJogo === 'individual'
      ? 'Digite o nome do jogador para continuar.'
      : 'Digite o nome das duas equipes para continuar.';
    return false;
  }
  if (nomesDigitados.some(nome => nome.length > 40)) {
    $('erro-nome').textContent = 'Cada nome deve ter no máximo 40 caracteres.';
    return false;
  }
  if (modoJogo === 'equipe' && nomeNormalizado(nomesDigitados[0]) === nomeNormalizado(nomesDigitados[1])) {
    $('erro-nome').textContent = 'As equipes precisam ter nomes diferentes.';
    return false;
  }
  const usados = nomesJaUsados();
  const repetido = nomesDigitados.find(nome => usados.has(nomeNormalizado(nome)));
  if (repetido) {
    $('erro-nome').textContent = `O nome "${repetido}" já aparece no ranking. Escolha um nome diferente.`;
    return false;
  }
  if (!$('aceite').checked) {
    $('erro-aceite').textContent = 'Você precisa aceitar o Termo de Uso para jogar.';
    return false;
  }
  return true;
}

$('btn-iniciar').addEventListener('click', () => {
  if (!validarConfig()) return;
  perguntas = selecionarPerguntas();
  if (perguntas.length < TOTAL_PERGUNTAS) {
    $('erro-nome').textContent = 'Este nível ainda não tem 10 perguntas disponíveis.';
    return;
  }
  indicePergunta = 0;
  idResultadoAtual = null;
  if (modoJogo === 'individual') iniciarIndividual();
  else iniciarEquipes();
});

function iniciarIndividual() {
  nomeJogador = $('nome-jogador').value.trim();
  pontosJogador = 0;
  errosJogador = 0;
  $('jogador-atual').textContent = nomeJogador;
  $('nivel-atual').textContent = rotuloNivel(nivelSelecionado);
  $('pontos-atuais').textContent = '0 acertos';
  mostrarTela('individual');
  carregarPerguntaIndividual();
}

function carregarPerguntaIndividual() {
  const pergunta = perguntas[indicePergunta];
  $('categoria-pergunta').textContent = NOMES_QUIZ[tipoQuiz];
  $('texto-pergunta').textContent = pergunta.pergunta;
  $('opcoes').innerHTML = '';
  $('feedback-individual').textContent = '';
  $('feedback-individual').className = 'feedback';
  $('btn-proxima').classList.add('oculto');
  $('progresso-preenchido').style.width = (indicePergunta / perguntas.length * 100) + '%';
  $('contador-pergunta').textContent = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
  pergunta.opcoes.forEach((opcao, index) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'opcao';
    botao.textContent = opcao;
    botao.addEventListener('click', () => responderIndividual(index));
    $('opcoes').appendChild(botao);
  });
}

function responderIndividual(indiceEscolhido) {
  const botoes = [...$('opcoes').querySelectorAll('.opcao')];
  if (!botoes.some(botao => !botao.disabled)) return;
  const pergunta = perguntas[indicePergunta];
  const acertou = indiceEscolhido === pergunta.correta;
  botoes.forEach((botao, indice) => {
    botao.disabled = true;
    if (indice === pergunta.correta) botao.classList.add('correta');
    if (indice === indiceEscolhido && !acertou) botao.classList.add('incorreta');
  });
  if (acertou) {
    pontosJogador++;
    tocarSom('acerto');
    $('feedback-individual').textContent = '✓ Resposta correta!';
    $('feedback-individual').className = 'feedback mostrar sucesso';
  } else {
    errosJogador++;
    tocarSom('erro');
    $('feedback-individual').textContent = '✕ Resposta incorreta. A opção correta está destacada em verde.';
    $('feedback-individual').className = 'feedback mostrar erro';
  }
  $('pontos-atuais').textContent = pontosJogador + ' acertos';
  $('btn-proxima').textContent = indicePergunta < perguntas.length - 1 ? 'Próxima pergunta' : 'Ver resultado';
  $('btn-proxima').classList.remove('oculto');
}

$('btn-proxima').addEventListener('click', () => {
  indicePergunta++;
  if (indicePergunta < perguntas.length) carregarPerguntaIndividual();
  else finalizarIndividual();
});

function iniciarEquipes() {
  equipes = [
    { nome: $('nome-equipe-a').value.trim(), acertos: 0, erros: 0 },
    { nome: $('nome-equipe-b').value.trim(), acertos: 0, erros: 0 }
  ];
  respostasPorEquipe = ['', ''];
  $('nome-disputa').textContent = NOMES_QUIZ[tipoQuiz] + ' · Disputa';
  $('nivel-equipe').textContent = rotuloNivel(nivelSelecionado);
  $('rotulo-equipe-a').textContent = equipes[0].nome;
  $('rotulo-equipe-b').textContent = equipes[1].nome;
  atualizarPlacarEquipe();
  mostrarTela('equipe');
  carregarPerguntaEquipe();
}

function atualizarPlacarEquipe() {
  $('acertos-a').textContent = equipes[0]?.acertos ?? 0;
  $('erros-a').textContent = equipes[0]?.erros ?? 0;
  $('acertos-b').textContent = equipes[1]?.acertos ?? 0;
  $('erros-b').textContent = equipes[1]?.erros ?? 0;
}

function pararCronometro() {
  if (intervaloCronometro !== null) {
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
  }
}

function atualizarCronometro() {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;
  $('tempo-restante').textContent = String(minutos).padStart(2, '0') + ':' + String(segundos).padStart(2, '0');
  $('cronometro-equipe').classList.toggle('urgente', tempoRestante <= 10);
  $('cronometro-status').textContent = vezEquipe === null
    ? 'Aguardando buzzer'
    : 'Vez de ' + equipes[vezEquipe].nome;
}

function iniciarCronometro() {
  pararCronometro();
  tempoRestante = TEMPO_POR_VEZ;
  atualizarCronometro();
  intervaloCronometro = setInterval(() => {
    if (perguntaEncerrada || vezEquipe === null) {
      pararCronometro();
      return;
    }
    tempoRestante -= 1;
    atualizarCronometro();
    if (tempoRestante <= 0) {
      pararCronometro();
      tempoEsgotado();
    }
  }, 1000);
}

function tempoEsgotado() {
  if (perguntaEncerrada || vezEquipe === null) return;

  const indiceTime = vezEquipe;
  const outroIndice = 1 - indiceTime;
  equipesQueTentaram.add(indiceTime);
  equipes[indiceTime].erros++;
  tocarSom('erro');
  atualizarPlacarEquipe();
  $('cronometro-status').textContent = 'Tempo esgotado';
  $('opcoes-equipe').querySelectorAll('.opcao').forEach(botao => { botao.disabled = true; });

  if (!equipesQueTentaram.has(outroIndice)) {
    vezEquipe = outroIndice;
    $('feedback-equipe').textContent = '⏰ O tempo da equipe ' + equipes[indiceTime].nome + ' acabou! Agora a equipe ' + equipes[outroIndice].nome + ' tem 1 minuto para responder.';
    $('feedback-equipe').className = 'feedback mostrar erro';
    $('rotulo-resposta').textContent = 'Vez de ' + equipes[outroIndice].nome + ': escolha uma alternativa.';
    $('status-disputa').textContent = 'Tempo esgotado! A vez passou automaticamente.';
    mostrarOpcoesEquipe(false);
    atualizarBotaoPassar();
    iniciarCronometro();
  } else {
    const pergunta = perguntas[indicePergunta];
    $('opcoes-equipe').querySelectorAll('.opcao').forEach((botao, indice) => {
      if (indice === pergunta.correta) botao.classList.add('correta');
    });
    $('feedback-equipe').textContent = '⏰ O tempo das duas equipes acabou. Resposta correta: ' + pergunta.opcoes[pergunta.correta] + '.';
    $('feedback-equipe').className = 'feedback mostrar erro';
    encerrarPerguntaEquipe(false);
  }
}

function carregarPerguntaEquipe() {
  pararCronometro();
  tempoRestante = TEMPO_POR_VEZ;
  const pergunta = perguntas[indicePergunta];
  vezEquipe = null;
  equipesQueTentaram = new Set();
  respostasPorEquipe = ['', ''];
  perguntaEncerrada = false;
  $('categoria-pergunta-equipe').textContent = NOMES_QUIZ[tipoQuiz];
  $('texto-pergunta-equipe').textContent = pergunta.pergunta;
  $('progresso-equipe').style.width = (indicePergunta / perguntas.length * 100) + '%';
  $('contador-equipe').textContent = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
  $('status-disputa').textContent = 'Quem apertar primeiro ganha a vez!';
  atualizarCronometro();
  $('botoes-buzzer').classList.remove('oculto');
  $('btn-buzzer-a').textContent = '🔔 ' + equipes[0].nome + ' — responder';
  $('btn-buzzer-b').textContent = '🔔 ' + equipes[1].nome + ' — responder';
  $('btn-buzzer-a').disabled = false;
  $('btn-buzzer-b').disabled = false;
  $('painel-resposta-equipe').classList.remove('oculto');
  $('rotulo-resposta').textContent = 'Apertem o botão da equipe para ganhar a vez; depois escolham uma alternativa.';
  $('opcoes-equipe').innerHTML = '';
  $('feedback-equipe').textContent = '';
  $('feedback-equipe').className = 'feedback';
  $('btn-proxima-equipe').classList.add('oculto');
  mostrarOpcoesEquipe(true);
  $('btn-passar').classList.add('oculto');
}

function iniciarVezDaEquipe(indice) {
  if (vezEquipe !== null || perguntaEncerrada || equipesQueTentaram.has(indice)) return;
  vezEquipe = indice;
  $('botoes-buzzer').classList.add('oculto');
  $('painel-resposta-equipe').classList.remove('oculto');
  $('rotulo-resposta').textContent = 'Vez de ' + equipes[indice].nome + ': escolha uma alternativa.';
  $('status-disputa').textContent = 'A equipe ' + equipes[indice].nome + ' ganhou a vez!';
  $('feedback-equipe').textContent = '';
  $('opcoes-equipe').querySelectorAll('.opcao').forEach(botao => { botao.disabled = false; });
  atualizarBotaoPassar();
  iniciarCronometro();
}
$('btn-buzzer-a').addEventListener('click', () => iniciarVezDaEquipe(0));
$('btn-buzzer-b').addEventListener('click', () => iniciarVezDaEquipe(1));

function mostrarOpcoesEquipe(desabilitadas = false) {
  const pergunta = perguntas[indicePergunta];
  const container = $('opcoes-equipe');
  container.innerHTML = '';
  pergunta.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'opcao';
    botao.textContent = opcao;
    botao.disabled = desabilitadas;
    botao.addEventListener('click', () => responderOpcaoEquipe(indice));
    container.appendChild(botao);
  });
}

function atualizarBotaoPassar() {
  const outroIndice = vezEquipe === null ? null : 1 - vezEquipe;
  const podePassar = !perguntaEncerrada && outroIndice !== null && !equipesQueTentaram.has(outroIndice);
  $('btn-passar').classList.toggle('oculto', !podePassar);
}

$('btn-passar').addEventListener('click', () => {
  if (vezEquipe === null || perguntaEncerrada) return;
  const nomeAnterior = equipes[vezEquipe].nome;
  const outroIndice = 1 - vezEquipe;
  equipesQueTentaram.add(vezEquipe);
  vezEquipe = outroIndice;
  $('feedback-equipe').textContent = nomeAnterior + ' passou a vez para ' + equipes[outroIndice].nome + '.';
  $('feedback-equipe').className = 'feedback mostrar';
  $('rotulo-resposta').textContent = 'Vez de ' + equipes[outroIndice].nome + ': escolha uma alternativa.';
  $('status-disputa').textContent = 'Agora é a vez de ' + equipes[outroIndice].nome + '!';
  mostrarOpcoesEquipe(false);
  atualizarBotaoPassar();
  iniciarCronometro();
});

function responderOpcaoEquipe(indiceEscolhido) {
  if (vezEquipe === null || perguntaEncerrada || equipesQueTentaram.has(vezEquipe)) return;
  const pergunta = perguntas[indicePergunta];
  const botoes = [...$('opcoes-equipe').querySelectorAll('.opcao')];
  const indiceTime = vezEquipe;
  const acertou = indiceEscolhido === pergunta.correta;
  equipesQueTentaram.add(indiceTime);
  botoes.forEach((botao, indice) => {
    botao.disabled = true;
    if (acertou && indice === pergunta.correta) botao.classList.add('correta');
    if (!acertou && indice === indiceEscolhido) botao.classList.add('incorreta');
  });

  if (acertou) {
    equipes[indiceTime].acertos++;
    tocarSom('acerto');
    atualizarPlacarEquipe();
    $('feedback-equipe').textContent = '✓ Resposta correta! Ponto para ' + equipes[indiceTime].nome + '.';
    $('feedback-equipe').className = 'feedback mostrar sucesso';
    encerrarPerguntaEquipe(true);
    return;
  }

  equipes[indiceTime].erros++;
  tocarSom('erro');
  atualizarPlacarEquipe();
  const outroIndice = 1 - indiceTime;
  if (!equipesQueTentaram.has(outroIndice)) {
    $('feedback-equipe').textContent = '✕ Resposta incorreta de ' + equipes[indiceTime].nome + '. A outra equipe pode tentar responder!';
    $('feedback-equipe').className = 'feedback mostrar erro';
    vezEquipe = outroIndice;
    $('rotulo-resposta').textContent = 'Repasse para ' + equipes[outroIndice].nome + ': escolha uma alternativa.';
    $('status-disputa').textContent = 'Repasse! Vez de ' + equipes[outroIndice].nome + '.';
    mostrarOpcoesEquipe(false);
    atualizarBotaoPassar();
    iniciarCronometro();
  } else {
    botoes.forEach((botao, indice) => {
      if (indice === pergunta.correta) botao.classList.add('correta');
    });
    $('feedback-equipe').textContent = '✕ As duas equipes erraram. Resposta correta: ' + pergunta.opcoes[pergunta.correta] + '.';
    $('feedback-equipe').className = 'feedback mostrar erro';
    encerrarPerguntaEquipe(false);
  }
}

function encerrarPerguntaEquipe(acertou) {
  perguntaEncerrada = true;
  pararCronometro();
  $('cronometro-status').textContent = 'Pergunta encerrada';
  $('painel-resposta-equipe').classList.remove('oculto');
  $('botoes-buzzer').classList.add('oculto');
  $('opcoes-equipe').querySelectorAll('.opcao').forEach(botao => { botao.disabled = true; });
  $('btn-passar').classList.add('oculto');
  $('status-disputa').textContent = acertou ? 'Resposta correta! Preparem-se para a próxima.' : 'Fim das tentativas desta pergunta.';
  $('btn-proxima-equipe').textContent = indicePergunta < perguntas.length - 1 ? 'Próxima pergunta' : 'Ver resultado';
  $('btn-proxima-equipe').classList.remove('oculto');
}

$('btn-proxima-equipe').addEventListener('click', () => {
  indicePergunta++;
  if (indicePergunta < perguntas.length) carregarPerguntaEquipe();
  else finalizarEquipes();
});

function concluirData() { return formatarData(); }
function finalizarIndividual() {
  const ranking = lerRanking();
  const registro = {
    id: (Date.now() + Math.random()).toString(36), tipoQuiz, modo: 'individual',
    nivel: nivelSelecionado, nome: nomeJogador, acertos: pontosJogador,
    erros: errosJogador, pontos: pontosJogador, data: concluirData()
  };
  ranking.push(registro);
  salvarRanking(ranking);
  idResultadoAtual = registro.id;
  $('titulo-resultado').textContent = 'Quiz concluído!';
  $('resumo-resultado').textContent = `${nomeJogador}, você terminou ${NOMES_QUIZ[tipoQuiz]} no nível ${rotuloNivel(nivelSelecionado)}.`;
  $('detalhes-resultado').innerHTML = `<div class="detalhe-final"><strong>${pontosJogador} acertos</strong> e ${errosJogador} erros, de ${perguntas.length} perguntas.</div>`;
  prepararRanking();
  mostrarTela('resultado');
}
function finalizarEquipes() {
  const ranking = lerRanking();
  const timeA = equipes[0], timeB = equipes[1];
  let vencedor = 'Empate';
  if (timeA.acertos > timeB.acertos) vencedor = timeA.nome;
  if (timeB.acertos > timeA.acertos) vencedor = timeB.nome;
  const registro = {
    id: (Date.now() + Math.random()).toString(36), tipoQuiz, modo: 'equipe', nivel: nivelSelecionado,
    equipeA: timeA.nome, equipeB: timeB.nome, acertosA: timeA.acertos, errosA: timeA.erros,
    acertosB: timeB.acertos, errosB: timeB.erros, vencedor, pontos: Math.max(timeA.acertos, timeB.acertos),
    erros: timeA.erros + timeB.erros, data: concluirData()
  };
  ranking.push(registro);
  salvarRanking(ranking);
  idResultadoAtual = registro.id;
  $('titulo-resultado').textContent = vencedor === 'Empate' ? 'A disputa terminou empatada!' : vencedor + ' venceu!';
  $('resumo-resultado').textContent = `${NOMES_QUIZ[tipoQuiz]} · Nível ${rotuloNivel(nivelSelecionado)}.`;
  $('detalhes-resultado').innerHTML = `
    <div class="detalhe-final"><strong>${escapar(timeA.nome)}</strong>: ${timeA.acertos} acertos e ${timeA.erros} erros.</div>
    <div class="detalhe-final"><strong>${escapar(timeB.nome)}</strong>: ${timeB.acertos} acertos e ${timeB.erros} erros.</div>
    <div class="detalhe-final"><strong>Resultado:</strong> ${escapar(vencedor)}.</div>`;
  prepararRanking();
  mostrarTela('resultado');
}

function prepararRanking() {
  tipoRanking = tipoQuiz;
  modoRanking = modoJogo;
  filtroRanking = nivelSelecionado;
  document.querySelectorAll('[data-ranking-tipo]').forEach(botao => botao.classList.toggle('ativo', botao.dataset.rankingTipo === tipoRanking));
  document.querySelectorAll('[data-ranking-modo]').forEach(botao => botao.classList.toggle('ativo', botao.dataset.rankingModo === modoRanking));
  document.querySelectorAll('[data-filtro]').forEach(botao => botao.classList.toggle('ativo', botao.dataset.filtro === filtroRanking));
  atualizarTituloRanking();
  renderizarRanking();
}
function atualizarTituloRanking() {
  $('titulo-ranking').textContent = `Ranking · ${NOMES_QUIZ[tipoRanking]} · ${modoRanking === 'individual' ? 'Individual' : 'Em equipe'}`;
}
function renderizarRanking() {
  let ranking = lerRanking().filter(item => item.tipoQuiz === tipoRanking && item.modo === modoRanking);
  if (filtroRanking !== 'todos') ranking = ranking.filter(item => item.nivel === filtroRanking);
  if (modoJogo === 'individual') {
    ranking.sort((a,b) => b.pontos - a.pontos || a.erros - b.erros || a.data.localeCompare(b.data));
  } else {
    ranking.sort((a,b) => b.pontos - a.pontos || (Math.abs(b.acertosA - b.acertosB) - Math.abs(a.acertosA - a.acertosB)) || a.erros - b.erros);
  }
  $('lista-ranking').innerHTML = '';
  if (!ranking.length) {
    $('lista-ranking').innerHTML = '<p class="ranking-vazio">Nenhum resultado registrado para esta seleção ainda.</p>';
    return;
  }
  ranking.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'item-ranking' + (item.id === idResultadoAtual ? ' destaque' : '');
    const pos = document.createElement('span'); pos.className = 'posicao'; pos.textContent = (index + 1) + 'º';
    const info = document.createElement('div'); info.className = 'info-nome';
    const nome = document.createElement('span'); nome.className = 'nome-ranking';
    const detalhe = document.createElement('span'); detalhe.className = 'data-ranking';
    const pontos = document.createElement('span'); pontos.className = 'pontos-ranking';
    if (modoJogo === 'individual') {
      nome.textContent = item.nome;
      detalhe.textContent = `${rotuloNivel(item.nivel)} · ${item.acertos} acertos · ${item.erros} erros · ${item.data}`;
      pontos.textContent = `${item.pontos}/10`;
    } else {
      nome.textContent = `${item.equipeA} (${item.acertosA}–${item.errosA}) × ${item.equipeB} (${item.acertosB}–${item.errosB})`;
      detalhe.textContent = `${rotuloNivel(item.nivel)} · Vencedora: ${item.vencedor} · ${item.data}`;
      pontos.textContent = `${item.pontos}/10`;
    }
    info.append(nome, detalhe); div.append(pos, info, pontos); $('lista-ranking').appendChild(div);
  });
}
document.querySelectorAll('[data-ranking-tipo]').forEach(botao => {
  botao.addEventListener('click', () => {
    tipoRanking = botao.dataset.rankingTipo;
    document.querySelectorAll('[data-ranking-tipo]').forEach(outro => outro.classList.toggle('ativo', outro === botao));
    atualizarTituloRanking();
    renderizarRanking();
  });
});
document.querySelectorAll('[data-ranking-modo]').forEach(botao => {
  botao.addEventListener('click', () => {
    modoRanking = botao.dataset.rankingModo;
    document.querySelectorAll('[data-ranking-modo]').forEach(outro => outro.classList.toggle('ativo', outro === botao));
    atualizarTituloRanking();
    renderizarRanking();
  });
});
document.querySelectorAll('[data-filtro]').forEach(botao => {
  botao.addEventListener('click', () => {
    filtroRanking = botao.dataset.filtro;
    document.querySelectorAll('[data-filtro]').forEach(outro => outro.classList.toggle('ativo', outro === botao));
    renderizarRanking();
  });
});

$('btn-novo-jogo').addEventListener('click', () => {
  // Reutiliza a categoria e modalidade selecionadas, mas limpa nomes e aceite.
  $('nome-jogador').value = '';
  $('nome-equipe-a').value = '';
  $('nome-equipe-b').value = '';
  $('aceite').checked = false;
  $('erro-nome').textContent = '';
  $('erro-aceite').textContent = '';
  mostrarTela('config');
});
$('btn-inicio').addEventListener('click', () => {
  $('nome-jogador').value = '';
  $('nome-equipe-a').value = '';
  $('nome-equipe-b').value = '';
  $('aceite').checked = false;
  mostrarTela('tipo');
});
$('nome-jogador').addEventListener('keydown', e => { if (e.key === 'Enter') $('btn-iniciar').click(); });
$('nome-equipe-a').addEventListener('keydown', e => { if (e.key === 'Enter') $('nome-equipe-b').focus(); });
$('nome-equipe-b').addEventListener('keydown', e => { if (e.key === 'Enter') $('btn-iniciar').click(); });
