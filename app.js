// Bancos originais mantidos separados: conhecimentos gerais e Tecnologia da Informação.
const bancosPerguntas = {
  geral: {
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
    { pergunta: "Em que ano o Brasil foi descoberto?", opcoes: ["1492", "1500", "1822", "1889"], correta: 1 },
    { pergunta: "Quem pintou 'A Noite Estrelada'?", opcoes: ["Claude Monet", "Vincent van Gogh", "Salvador Dalí", "Edvard Munch"], correta: 1 },
    { pergunta: "Em que ano começou a Segunda Guerra Mundial?", opcoes: ["1914", "1939", "1945", "1929"], correta: 1 },
    { pergunta: "Quem desenvolveu a teoria da relatividade?", opcoes: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileu"], correta: 1 },
    { pergunta: "Em que ano ocorreu a Independência do Brasil?", opcoes: ["1500", "1822", "1889", "1922"], correta: 1 },
    { pergunta: "Qual é o símbolo químico do ouro?", opcoes: ["Ag", "Fe", "Au", "O"], correta: 2 },
    { pergunta: "Qual é o maior planeta do Sistema Solar?", opcoes: ["Terra", "Saturno", "Júpiter", "Netuno"], correta: 2 },
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
},
  ti: {
  // ---------------------- FÁCIL ----------------------
  facil: [
    { pergunta: "O que significa a sigla HTML?", opcoes: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correta: 0 },
    { pergunta: "Qual linguagem é usada para estilizar páginas web?", opcoes: ["JavaScript", "HTML", "CSS", "PHP"], correta: 2 },
    { pergunta: "O que significa a sigla CPU?", opcoes: ["Computer Personal Unit", "Central Processing Unit", "Central Power Unit", "Computer Processing Utility"], correta: 1 },
    { pergunta: "O que significa a sigla RAM?", opcoes: ["Read Access Memory", "Random Access Memory", "Ready Application Memory", "Run Access Module"], correta: 1 },
    { pergunta: "Qual empresa desenvolveu o sistema Windows?", opcoes: ["Apple", "IBM", "Microsoft", "Google"], correta: 2 },
    { pergunta: "O que significa a sigla URL?", opcoes: ["Uniform Resource Locator", "Universal Reference Link", "Unique Resource Locator", "Uniform Reference Language"], correta: 0 },
    { pergunta: "Qual destas é uma linguagem de programação?", opcoes: ["HTTP", "Python", "USB", "HTML"], correta: 1 },
    { pergunta: "Qual é o atalho de teclado para copiar?", opcoes: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"], correta: 1 },
    { pergunta: "Qual empresa criou o iPhone?", opcoes: ["Samsung", "Google", "Apple", "Nokia"], correta: 2 },
    { pergunta: "Qual destas é uma rede social?", opcoes: ["Windows", "Instagram", "Linux", "Chrome"], correta: 1 },
    { pergunta: "O que significa a sigla TI?", opcoes: ["Tecnologia da Internet", "Tecnologia da Informação", "Transferência de Informação", "Técnica de Internet"], correta: 1 },
    { pergunta: "O que significa a sigla SSD?", opcoes: ["Solid State Drive", "Super Speed Disk", "System Storage Drive", "Solid Storage Disk"], correta: 0 },
    { pergunta: "Qual componente armazena dados permanentemente no computador?", opcoes: ["RAM", "Cache", "HD/SSD", "CPU"], correta: 2 },
    { pergunta: "O que é um algoritmo?", opcoes: ["Um tipo de computador", "Uma sequência de instruções para resolver um problema", "Um programa de design", "Uma linguagem de marcação"], correta: 1 },
  ],
 
  // ---------------------- MÉDIO ----------------------
  medio: [
    { pergunta: "O que significa SQL?", opcoes: ["Simple Query Language", "Structured Query Language", "Standard Question Language", "System Query Logic"], correta: 1 },
    { pergunta: "Qual é o protocolo mais usado para navegar na web de forma segura?", opcoes: ["FTP", "HTTP", "HTTPS", "SMTP"], correta: 2 },
    { pergunta: "O que é um banco de dados relacional?", opcoes: ["Um banco que só armazena textos", "Um banco que organiza dados em tabelas", "Um banco sem estrutura", "Um tipo de rede social"], correta: 1 },
    { pergunta: "Qual é a função de um servidor web?", opcoes: ["Criar sites", "Hospedar e entregar páginas web", "Proteger contra vírus", "Aumentar a velocidade da internet"], correta: 1 },
    { pergunta: "O que é phishing?", opcoes: ["Um tipo de impressora", "Um ataque para roubar dados pessoais", "Um sistema de backup", "Uma linguagem de programação"], correta: 1 },
    { pergunta: "O que é cloud computing (nuvem)?", opcoes: ["Um tipo de monitor", "Serviços de computação pela internet", "Um cabo de rede", "Um antivírus"], correta: 1 },
    { pergunta: "O que significa a sigla DNS?", opcoes: ["Domain Name System", "Data Network Service", "Direct Network System", "Domain Network Service"], correta: 0 },
    { pergunta: "O que significa API?", opcoes: ["Application Programming Interface", "Automatic Process Integration", "Application Process Interface", "Advanced Programming Integration"], correta: 0 },
    { pergunta: "Qual é a unidade básica de dados em redes?", opcoes: ["Byte", "Pacote", "Pixel", "Hertz"], correta: 1 },
    { pergunta: "O que é um firewall?", opcoes: ["Um tipo de teclado", "Uma barreira de segurança para redes", "Um navegador", "Um sistema de resfriamento"], correta: 1 },
    { pergunta: "Qual linguagem é usada para consultar bancos de dados relacionais?", opcoes: ["HTML", "CSS", "SQL", "Python"], correta: 2 },
    { pergunta: "Qual é a principal função de um sistema operacional?", opcoes: ["Navegar na internet", "Gerenciar recursos do computador", "Editar imagens", "Enviar e-mails"], correta: 1 },
    { pergunta: "O que é JavaScript?", opcoes: ["Uma linguagem de marcação", "Uma linguagem de programação para web", "Um sistema operacional", "Um banco de dados"], correta: 1 },
    { pergunta: "Qual linguagem é principal no desenvolvimento backend com Node.js?", opcoes: ["Python", "JavaScript", "Java", "C#"], correta: 1 },
    { pergunta: "Qual é o endereço IP de loopback (a própria máquina)?", opcoes: ["192.168.0.1", "10.0.0.1", "0.0.0.0", "127.0.0.1"], correta: 3 },
  ],
 
  // ---------------------- DIFÍCIL ----------------------
  dificil: [
    { pergunta: "Qual das alternativas define melhor um algoritmo?", opcoes: ["Um conjunto de dados armazenados em um banco", "Um programa escrito obrigatoriamente em uma linguagem como Java ou Python", "Uma sequência finita e ordenada de passos para resolver um problema", "Um erro de lógica que impede o programa de rodar"], correta: 2 },
    { pergunta: "No Git, o que significa fazer um commit?", opcoes: ["Apagar todas as versões antigas do projeto", "Compilar o código para gerar o executável", "Baixar o projeto de outra pessoa para o computador", "Registrar no histórico do repositório um conjunto de alterações feitas nos arquivos"], correta: 3 },
    { pergunta: "Qual é a diferença básica entre um erro de sintaxe e um erro de lógica?", opcoes: ["Não há diferença, são nomes diferentes para o mesmo problema", "O erro de lógica impede o programa de abrir; o de sintaxe só aparece no banco de dados de rede", "O erro de sintaxe só ocorre em sites; o de lógica só ocorre em aplicativos", "O erro de sintaxe viola as regras da linguagem e impede a execução; o de lógica deixa o programa rodar, mas com resultado errado"], correta: 3 },
    { pergunta: "Qual é a complexidade de tempo da busca binária em um vetor ordenado?", opcoes: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correta: 1 },
    { pergunta: "Qual estrutura de dados segue o princípio LIFO (último a entrar, primeiro a sair)?", opcoes: ["Fila", "Árvore binária", "Pilha", "Grafo"], correta: 2 },
    { pergunta: "Qual é a porta padrão do protocolo HTTPS?", opcoes: ["80", "443", "22", "25"], correta: 1 },
    { pergunta: "No modelo OSI, qual camada é responsável pelo endereçamento IP e pelo roteamento dos pacotes?", opcoes: ["Enlace", "Transporte", "Aplicação", "Rede"], correta: 3 },
    { pergunta: "Qual é a principal diferença entre TCP e UDP?", opcoes: ["O TCP garante entrega confiável e ordenada; o UDP não oferece essa garantia", "O UDP é criptografado e o TCP não", "O TCP só funciona em redes locais; o UDP, na internet", "O UDP garante a entrega dos dados; o TCP prioriza velocidade"], correta: 0 },
    { pergunta: "O que é um ataque de SQL Injection?", opcoes: ["Uma técnica de otimização de índices", "Inserir comandos SQL maliciosos em campos de entrada para manipular o banco de dados", "Um tipo de backup incremental", "A migração de um banco para a nuvem"], correta: 1 },
    { pergunta: "O que a sigla ACID representa em transações de bancos de dados?", opcoes: ["Acesso, Controle, Integridade e Dados", "Autenticação, Criptografia, Isolamento e Disponibilidade", "Atomicidade, Consistência, Isolamento e Durabilidade", "Atomicidade, Consistência, Integração e Disponibilidade"], correta: 2 },
    { pergunta: "Qual é o objetivo da normalização em bancos de dados relacionais?", opcoes: ["Compactar os arquivos do banco", "Organizar as tabelas para reduzir redundância e inconsistências", "Criptografar todas as colunas", "Converter o banco para NoSQL"], correta: 1 },
    { pergunta: "O que é um deadlock?", opcoes: ["Quando dois ou mais processos ficam bloqueados esperando recursos que um detém do outro", "Um vazamento de memória", "Um erro de compilação", "Uma queda de energia no servidor"], correta: 0 },
    { pergunta: "No Git, qual comando integra as alterações de uma branch em outra?", opcoes: ["git clone", "git stash", "git init", "git merge"], correta: 3 },
    { pergunta: "Qual é a principal diferença entre contêineres (como Docker) e máquinas virtuais?", opcoes: ["Contêineres exigem um hypervisor; VMs não", "Contêineres compartilham o kernel do host; VMs executam um sistema operacional completo próprio", "Contêineres só funcionam em redes locais", "Não há diferença entre eles"], correta: 1 },
  ],
}
};

// Perguntas extras para ampliar a variedade entre partidas (20 por categoria e nível).

bancosPerguntas.geral.facil.push(
  { pergunta: "Qual é o estado brasileiro conhecido como “Terra da Garoa”?", opcoes: ["Paraná", "São Paulo", "Minas Gerais", "Bahia"], correta: 1 },
  { pergunta: "Qual animal é conhecido como rei da selva?", opcoes: ["Tigre", "Elefante", "Leão", "Urso"], correta: 2 },
  { pergunta: "Quantos minutos há em uma hora?", opcoes: ["30", "45", "60", "90"], correta: 2 },
  { pergunta: "Qual é a estrela mais próxima da Terra?", opcoes: ["Sirius", "Sol", "Vega", "Lua"], correta: 1 },
  { pergunta: "Qual destes alimentos é produzido pelas abelhas?", opcoes: ["Leite", "Mel", "Azeite", "Farinha"], correta: 1 },
  { pergunta: "Em qual estação do ano as folhas costumam cair em muitas árvores?", opcoes: ["Primavera", "Verão", "Outono", "Inverno"], correta: 2 },
  { pergunta: "Qual é o idioma oficial do Brasil?", opcoes: ["Espanhol", "Português", "Inglês", "Francês"], correta: 1 },
  { pergunta: "Quantos meses tem um ano?", opcoes: ["10", "11", "12", "13"], correta: 2 },
  { pergunta: "Qual destes animais vive na água e respira por brânquias?", opcoes: ["Cachorro", "Peixe", "Gato", "Cavalo"], correta: 1 },
  { pergunta: "Qual é o principal ingrediente do pão tradicional?", opcoes: ["Arroz", "Farinha de trigo", "Milho verde", "Batata"], correta: 1 },
  { pergunta: "Qual planeta é conhecido como Planeta Vermelho?", opcoes: ["Vênus", "Marte", "Saturno", "Mercúrio"], correta: 1 },
  { pergunta: "Qual é a capital do Paraná?", opcoes: ["Londrina", "Maringá", "Curitiba", "Cascavel"], correta: 2 },
  { pergunta: "Qual sentido usamos principalmente para ouvir?", opcoes: ["Visão", "Tato", "Audição", "Olfato"], correta: 2 },
  { pergunta: "Qual destes é um instrumento musical de cordas?", opcoes: ["Flauta", "Violino", "Tambor", "Pandeiro"], correta: 1 },
  { pergunta: "Em qual continente fica o Egito?", opcoes: ["África", "Europa", "América", "Oceania"], correta: 0 },
  { pergunta: "Qual é o resultado de 9 × 7?", opcoes: ["56", "63", "72", "49"], correta: 1 },
  { pergunta: "Qual é o nome do processo em que a água vira vapor?", opcoes: ["Condensação", "Evaporação", "Solidificação", "Fusão"], correta: 1 },
  { pergunta: "Qual destes materiais é atraído por um ímã?", opcoes: ["Madeira", "Plástico", "Ferro", "Papel"], correta: 2 },
  { pergunta: "Qual é o maior mamífero do planeta?", opcoes: ["Elefante", "Baleia-azul", "Girafa", "Orca"], correta: 1 },
  { pergunta: "Qual órgão usamos para respirar?", opcoes: ["Estômago", "Pulmões", "Coração", "Rins"], correta: 1 },
);

bancosPerguntas.geral.medio.push(
  { pergunta: "Qual bioma ocupa grande parte do norte do Brasil?", opcoes: ["Caatinga", "Amazônia", "Pampa", "Pantanal"], correta: 1 },
  { pergunta: "Qual é a função dos glóbulos vermelhos?", opcoes: ["Combater vírus", "Transportar oxigênio", "Produzir hormônios", "Digestionar alimentos"], correta: 1 },
  { pergunta: "Quem proclamou a República no Brasil?", opcoes: ["Dom Pedro I", "Deodoro da Fonseca", "Getúlio Vargas", "Tiradentes"], correta: 1 },
  { pergunta: "Qual é a fórmula química da água?", opcoes: ["CO₂", "H₂O", "O₂", "NaCl"], correta: 1 },
  { pergunta: "Qual movimento da Terra causa as estações do ano junto à inclinação do eixo?", opcoes: ["Rotação", "Translação", "Precessão", "Vibração"], correta: 1 },
  { pergunta: "Em que região brasileira está o Pantanal?", opcoes: ["Norte", "Centro-Oeste", "Sul", "Nordeste"], correta: 1 },
  { pergunta: "Qual é o nome da camada gasosa que envolve a Terra?", opcoes: ["Hidrosfera", "Atmosfera", "Litosfera", "Biosfera"], correta: 1 },
  { pergunta: "Qual escritor brasileiro criou a personagem Emília?", opcoes: ["Monteiro Lobato", "Machado de Assis", "José de Alencar", "Rui Barbosa"], correta: 0 },
  { pergunta: "Qual é a unidade usada para medir corrente elétrica?", opcoes: ["Volt", "Ampere", "Watt", "Ohm"], correta: 1 },
  { pergunta: "Qual país tem formato frequentemente comparado a uma bota?", opcoes: ["Grécia", "Itália", "Portugal", "Noruega"], correta: 1 },
  { pergunta: "Qual é o processo de passagem do líquido para o sólido?", opcoes: ["Fusão", "Vaporização", "Solidificação", "Sublimação"], correta: 2 },
  { pergunta: "Qual órgão filtra o sangue e produz urina?", opcoes: ["Pulmão", "Rim", "Pâncreas", "Baço"], correta: 1 },
  { pergunta: "Qual foi o movimento artístico de Salvador Dalí?", opcoes: ["Surrealismo", "Cubismo", "Realismo", "Barroco"], correta: 0 },
  { pergunta: "Qual é a principal fonte de energia da Terra?", opcoes: ["Lua", "Sol", "Vento", "Carvão"], correta: 1 },
  { pergunta: "Qual número representa o algarismo romano X?", opcoes: ["5", "10", "50", "100"], correta: 1 },
  { pergunta: "Qual é a região brasileira com maior número de estados?", opcoes: ["Norte", "Nordeste", "Sul", "Centro-Oeste"], correta: 1 },
  { pergunta: "O que mede um termômetro?", opcoes: ["Massa", "Temperatura", "Velocidade", "Pressão sonora"], correta: 1 },
  { pergunta: "Qual é o nome do conjunto de órgãos que realiza a digestão?", opcoes: ["Sistema nervoso", "Sistema digestório", "Sistema respiratório", "Sistema circulatório"], correta: 1 },
  { pergunta: "Qual oceano banha o litoral brasileiro?", opcoes: ["Pacífico", "Atlântico", "Índico", "Ártico"], correta: 1 },
  { pergunta: "Quem escreveu “O Pequeno Príncipe”?", opcoes: ["Antoine de Saint-Exupéry", "Victor Hugo", "Júlio Verne", "Lewis Carroll"], correta: 0 },
);

bancosPerguntas.geral.dificil.push(
  { pergunta: "Qual é o nome da passagem de vapor diretamente para sólido?", opcoes: ["Fusão", "Sublimação inversa", "Evaporação", "Condensação"], correta: 1 },
  { pergunta: "Qual filósofo é associado à frase “Só sei que nada sei”?", opcoes: ["Platão", "Sócrates", "Aristóteles", "Descartes"], correta: 1 },
  { pergunta: "Qual é o número primo imediatamente anterior a 20?", opcoes: ["15", "17", "19", "21"], correta: 2 },
  { pergunta: "Qual país sediou os Jogos Olímpicos de 2016?", opcoes: ["China", "Brasil", "Grécia", "Japão"], correta: 1 },
  { pergunta: "Qual é a unidade de medida da resistência elétrica?", opcoes: ["Ampere", "Ohm", "Volt", "Watt"], correta: 1 },
  { pergunta: "Que tipo de rocha se forma pelo resfriamento do magma?", opcoes: ["Sedimentar", "Metamórfica", "Ígnea", "Calcária"], correta: 2 },
  { pergunta: "Qual tratado encerrou oficialmente a Primeira Guerra Mundial com a Alemanha?", opcoes: ["Tordesilhas", "Versalhes", "Utrecht", "Madri"], correta: 1 },
  { pergunta: "Qual é o nome da divisão celular que forma gametas?", opcoes: ["Mitose", "Meiose", "Brotamento", "Fissão"], correta: 1 },
  { pergunta: "Qual destes países não faz parte da Escandinávia tradicional?", opcoes: ["Noruega", "Suécia", "Dinamarca", "Finlândia"], correta: 3 },
  { pergunta: "Qual é a principal característica de um soneto clássico?", opcoes: ["12 versos", "14 versos", "16 versos", "20 versos"], correta: 1 },
  { pergunta: "Qual cientista propôs a teoria da evolução por seleção natural?", opcoes: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Lavoisier"], correta: 1 },
  { pergunta: "Qual é o nome do meridiano de longitude 0°?", opcoes: ["Equador", "Greenwich", "Trópico de Câncer", "Linha Internacional"], correta: 1 },
  { pergunta: "Qual é o maior número de lados de um polígono regular entre estas opções?", opcoes: ["Pentágono", "Hexágono", "Octógono", "Decágono"], correta: 3 },
  { pergunta: "Qual civilização antiga desenvolveu a escrita cuneiforme?", opcoes: ["Egípcia", "Suméria", "Romana", "Fenícia"], correta: 1 },
  { pergunta: "Qual é o principal gás responsável pelo efeito estufa natural em maior abundância?", opcoes: ["Ozônio", "Vapor d’água", "Metano", "Hélio"], correta: 1 },
  { pergunta: "Em que século ocorreu a Revolução Francesa?", opcoes: ["XVII", "XVIII", "XIX", "XX"], correta: 1 },
  { pergunta: "Qual é o nome da escala que mede a acidez de uma solução?", opcoes: ["Richter", "pH", "Beaufort", "Celsius"], correta: 1 },
  { pergunta: "Qual país é atravessado pelo rio Nilo e abriga as pirâmides de Gizé?", opcoes: ["Egito", "Índia", "México", "Peru"], correta: 0 },
  { pergunta: "Qual é a camada da Terra localizada entre a crosta e o núcleo?", opcoes: ["Manto", "Atmosfera", "Hidrosfera", "Litosfera"], correta: 0 },
  { pergunta: "Qual movimento literário brasileiro teve como marco “Memórias Póstumas de Brás Cubas”?", opcoes: ["Romantismo", "Realismo", "Modernismo", "Arcadismo"], correta: 1 },
);

bancosPerguntas.ti.facil.push(
  { pergunta: "Qual dispositivo usamos para mover o cursor na tela?", opcoes: ["Teclado", "Mouse", "Impressora", "Scanner"], correta: 1 },
  { pergunta: "Qual extensão costuma identificar arquivos de imagem JPEG?", opcoes: [".mp3", ".jpg", ".docx", ".exe"], correta: 1 },
  { pergunta: "Para que serve a tecla Enter?", opcoes: ["Apagar texto", "Confirmar ou iniciar uma nova linha", "Copiar", "Desligar o monitor"], correta: 1 },
  { pergunta: "Qual destes é um navegador de internet?", opcoes: ["Excel", "Firefox", "PowerPoint", "Windows"], correta: 1 },
  { pergunta: "O que é um aplicativo?", opcoes: ["Programa que executa uma função", "Peça física do computador", "Cabo de rede", "Tipo de memória"], correta: 0 },
  { pergunta: "Qual componente mostra imagens e textos do computador?", opcoes: ["Monitor", "Microfone", "Roteador", "Pendrive"], correta: 0 },
  { pergunta: "Qual atalho geralmente desfaz a última ação?", opcoes: ["Ctrl + A", "Ctrl + Z", "Ctrl + P", "Ctrl + S"], correta: 1 },
  { pergunta: "O que significa Wi-Fi?", opcoes: ["Conexão sem fio de rede", "Tipo de impressora", "Memória interna", "Linguagem de programação"], correta: 0 },
  { pergunta: "Qual equipamento imprime documentos em papel?", opcoes: ["Scanner", "Impressora", "Webcam", "Modem"], correta: 1 },
  { pergunta: "O que é um pendrive?", opcoes: ["Dispositivo portátil de armazenamento", "Programa antivírus", "Monitor pequeno", "Placa de vídeo"], correta: 0 },
  { pergunta: "Qual destes é um sistema operacional?", opcoes: ["Linux", "Google Chrome", "WhatsApp", "Canva"], correta: 0 },
  { pergunta: "Qual tecla apaga o caractere à esquerda do cursor?", opcoes: ["Delete", "Backspace", "Shift", "Tab"], correta: 1 },
  { pergunta: "O que é uma senha forte?", opcoes: ["Nome simples", "Sequência 12345", "Combinação difícil de adivinhar", "Data de nascimento"], correta: 2 },
  { pergunta: "Qual ferramenta permite fazer videochamadas?", opcoes: ["Planilha", "Aplicativo de videoconferência", "Editor de texto", "Calculadora"], correta: 1 },
  { pergunta: "O que é hardware?", opcoes: ["Parte física do computador", "Programas instalados", "Dados na nuvem", "Página da internet"], correta: 0 },
  { pergunta: "Qual programa é usado principalmente para planilhas?", opcoes: ["Word", "Excel", "Paint", "Bloco de Notas"], correta: 1 },
  { pergunta: "O que significa download?", opcoes: ["Enviar arquivo", "Baixar arquivo da internet", "Excluir arquivo", "Imprimir arquivo"], correta: 1 },
  { pergunta: "Qual dispositivo capta a voz?", opcoes: ["Alto-falante", "Microfone", "Monitor", "Mouse"], correta: 1 },
  { pergunta: "Qual é a função do antivírus?", opcoes: ["Editar vídeos", "Ajudar a detectar e bloquear ameaças", "Aumentar a tela", "Criar planilhas"], correta: 1 },
  { pergunta: "O que é software?", opcoes: ["Conjunto de programas e instruções", "Peça metálica", "Cabo USB", "Tela do computador"], correta: 0 },
);

bancosPerguntas.ti.medio.push(
  { pergunta: "O que é endereço IP?", opcoes: ["Identificação de um dispositivo em uma rede", "Senha de usuário", "Nome de arquivo", "Modelo de computador"], correta: 0 },
  { pergunta: "Qual protocolo é usado para enviar e-mails entre servidores?", opcoes: ["SMTP", "FTP", "DHCP", "SSH"], correta: 0 },
  { pergunta: "Para que serve o Git?", opcoes: ["Editar imagens", "Controlar versões de arquivos e projetos", "Criar redes Wi-Fi", "Compactar vídeos"], correta: 1 },
  { pergunta: "O que é um backup?", opcoes: ["Cópia de segurança dos dados", "Atualização de tela", "Senha temporária", "Tipo de vírus"], correta: 0 },
  { pergunta: "Qual linguagem estrutura o conteúdo de uma página web?", opcoes: ["CSS", "HTML", "SQL", "Bash"], correta: 1 },
  { pergunta: "O que é uma variável na programação?", opcoes: ["Espaço nomeado para armazenar um valor", "Um erro do sistema", "Um cabo de computador", "Um tipo de navegador"], correta: 0 },
  { pergunta: "Qual função do DHCP em uma rede?", opcoes: ["Atribuir configurações IP automaticamente", "Criptografar arquivos", "Bloquear anúncios", "Enviar e-mails"], correta: 0 },
  { pergunta: "O que significa open source?", opcoes: ["Software de código aberto", "Programa pago obrigatoriamente", "Sistema sem código", "Arquivo temporário"], correta: 0 },
  { pergunta: "Qual formato é comum para documentos portáteis?", opcoes: [".pptx", ".pdf", ".xlsx", ".wav"], correta: 1 },
  { pergunta: "O que é autenticação em dois fatores?", opcoes: ["Usar duas contas", "Adicionar uma segunda etapa de verificação", "Compartilhar senha", "Trocar usuário automaticamente"], correta: 1 },
  { pergunta: "Qual é a finalidade de uma consulta SELECT no SQL?", opcoes: ["Excluir tabela", "Buscar dados", "Criar usuário", "Desligar banco"], correta: 1 },
  { pergunta: "O que é cache?", opcoes: ["Armazenamento temporário para acesso mais rápido", "Cópia impressa", "Senha de rede", "Sistema de arquivos"], correta: 0 },
  { pergunta: "Qual topologia conecta dispositivos a um ponto central?", opcoes: ["Anel", "Estrela", "Barramento", "Malha completa"], correta: 1 },
  { pergunta: "O que é responsividade em um site?", opcoes: ["Adaptar layout a diferentes telas", "Carregar só imagens", "Bloquear celular", "Criar banco de dados"], correta: 0 },
  { pergunta: "Qual ferramenta é usada para inspecionar elementos de uma página no navegador?", opcoes: ["DevTools", "BIOS", "Gerenciador de impressão", "Paint"], correta: 0 },
  { pergunta: "O que é uma LAN?", opcoes: ["Rede local", "Rede mundial", "Linguagem de marcação", "Sistema de arquivos"], correta: 0 },
  { pergunta: "Qual comando Git registra alterações no histórico?", opcoes: ["git push", "git commit", "git pull", "git status"], correta: 1 },
  { pergunta: "O que é malware?", opcoes: ["Software malicioso", "Atualização segura", "Cópia de segurança", "Aplicativo educativo"], correta: 0 },
  { pergunta: "Qual é a função do roteador?", opcoes: ["Encaminhar tráfego entre redes", "Digitalizar documentos", "Armazenar fotos", "Reproduzir áudio"], correta: 0 },
  { pergunta: "O que significa UX?", opcoes: ["Experiência do usuário", "Unidade de execução", "Extensão universal", "Uso externo"], correta: 0 },
);

bancosPerguntas.ti.dificil.push(
  { pergunta: "Em JavaScript, qual método transforma um JSON textual em objeto?", opcoes: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "parseInt()"], correta: 1 },
  { pergunta: "Qual comando Git cria uma nova branch?", opcoes: ["git branch nome", "git merge nome", "git init nome", "git log nome"], correta: 0 },
  { pergunta: "O que caracteriza uma chave primária em banco de dados?", opcoes: ["Pode repetir valores", "Identifica unicamente cada registro", "Aceita apenas texto", "É sempre uma senha"], correta: 1 },
  { pergunta: "Qual camada do modelo OSI lida diretamente com sinais físicos?", opcoes: ["Aplicação", "Rede", "Física", "Sessão"], correta: 2 },
  { pergunta: "O que é uma API REST?", opcoes: ["Interface baseada em recursos e métodos HTTP", "Um sistema operacional", "Um banco sem tabelas", "Um tipo de cabo"], correta: 0 },
  { pergunta: "Qual estrutura de dados segue FIFO?", opcoes: ["Pilha", "Fila", "Árvore", "Grafo"], correta: 1 },
  { pergunta: "Em CSS, qual propriedade controla o espaçamento interno?", opcoes: ["margin", "padding", "gap externo", "border"], correta: 1 },
  { pergunta: "O que significa CI/CD?", opcoes: ["Integração contínua e entrega/implantação contínua", "Código interno e dados", "Controle de internet", "Computação inteligente"], correta: 0 },
  { pergunta: "Qual algoritmo de ordenação tem pior caso O(n²) entre estas opções?", opcoes: ["Merge sort", "Heap sort", "Bubble sort", "Counting sort"], correta: 2 },
  { pergunta: "O que é uma foreign key?", opcoes: ["Campo que referencia chave de outra tabela", "Senha de banco", "Índice de imagem", "Coluna sem valor"], correta: 0 },
  { pergunta: "Qual protocolo permite acesso remoto seguro por terminal?", opcoes: ["Telnet", "SSH", "HTTP", "POP3"], correta: 1 },
  { pergunta: "O que é programação assíncrona?", opcoes: ["Execução que permite lidar com tarefas sem bloquear todo o fluxo", "Código executado apenas uma vez", "Programa sem funções", "Linguagem sem variáveis"], correta: 0 },
  { pergunta: "Qual status HTTP indica “Não encontrado”?", opcoes: ["200", "301", "404", "500"], correta: 2 },
  { pergunta: "O que é hashing criptográfico?", opcoes: ["Transformação de dados em resumo de tamanho definido", "Compressão reversível", "Envio de arquivo", "Criação de senha aleatória apenas"], correta: 0 },
  { pergunta: "Qual comando Linux lista arquivos e pastas?", opcoes: ["pwd", "ls", "cd", "mkdir"], correta: 1 },
  { pergunta: "Em redes, o que significa NAT?", opcoes: ["Network Address Translation", "Network Access Transfer", "Node Application Table", "New Address Terminal"], correta: 0 },
  { pergunta: "Qual princípio de segurança concede apenas permissões necessárias?", opcoes: ["Privilégio máximo", "Menor privilégio", "Acesso público", "Confiança total"], correta: 1 },
  { pergunta: "Qual é a finalidade de um índice em banco de dados?", opcoes: ["Acelerar consultas", "Duplicar registros", "Apagar tabelas", "Substituir backup"], correta: 0 },
  { pergunta: "Qual ferramenta é frequentemente usada para containers?", opcoes: ["Docker", "Figma", "Excel", "Notepad"], correta: 0 },
  { pergunta: "O que é recursão?", opcoes: ["Função que chama a si mesma", "Loop sempre infinito", "Variável global", "Tipo de banco"], correta: 0 },
);

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

['nome-jogador', 'nome-equipe-a', 'nome-equipe-b'].forEach(id => {
  $(id).addEventListener('input', salvarConfiguracaoTemporaria);
});
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
