const stopsData = [
  {
    id: 0,
    city: "Canavieiras",
    tag: "Costa do Cacau • Extremo Sul da Rota",
    subtitle: "Sítio histórico preservado, manguezais exuberantes e tradição pesqueira.",
    pathProgress: 0.0,
    labelOffset: { x: -95, y: 5 },
    image: "https://images.trvl-media.com/place/6240889/ec026f88-ddda-4a7b-a592-1ed5959009ce.jpg",
    credit: "Litoral e estuários do Sul da Bahia",
    history:
      "Elevada à vila em 1832, Canavieiras prosperou durante o ciclo do cacau, o que deixou um rico conjunto arquitetônico colonial e neoclássico às margens do Rio Pardo. Suas fachadas coloridas contam a história dos antigos coronéis e comerciantes da região.",
    culture:
      "Forte identidade ligada à pesca artesanal, mariscagem e às festas tradicionais como a Festa de São Boaventura e o Festival do Caranguejo. A culinária local destaca moquecas de frutos do mar e pratos com caranguejo-uçá.",
    spots: [
      "Sítio Histórico de Canavieiras (casarios do século XIX)",
      "Ilha de Atalaia e suas praias extensas",
      "Reserva Extrativista Marinha de Canavieiras (passeios de barco pelos manguezais)"
    ],
    curiosity:
      "Canavieiras já foi considerada um dos principais destinos mundiais para a pesca oceânica do marlim-azul."
  },
  {
    id: 1,
    city: "Una",
    tag: "Santuário Ecológico & Cacau Cabruca",
    subtitle: "Berço de preservação da Mata Atlântica e do sistema agroflorestal do cacau.",
    pathProgress: 0.21,
    labelOffset: { x: -55, y: -12 },
    image: "https://images.trvl-media.com/place/6052080/56d61934-d357-4697-9792-a1ac8f740696.jpg",
    credit: "Mata Atlântica preservada na região de Una",
    history:
      "Desenvolvida em torno da extração de madeira e da expansão das fazendas cacaueiras no século XIX, Una consolidou-se como referência ambiental no Sul da Bahia ao abrigar importantes reservas de biodiversidade.",
    culture:
      "A cultura local gira em torno do sistema 'Cabruca' — técnica tradicional sul-baiana em que o cacaueiro é plantado à sombra das árvores nativas da Mata Atlântica, preservando a floresta e a fauna regional.",
    spots: [
      "Reserva Biológica de Una (habitat do mico-leão-de-cara-dourada)",
      "Ecoparque de Una (passarela suspensa na copa das árvores)",
      "Praia de Comandatuba e Vila de Pedras de Una"
    ],
    curiosity:
      "O mico-leão-de-cara-dourada é uma espécie endêmica do Sul da Bahia e símbolo da conservação ambiental de Una."
  },
  {
    id: 2,
    city: "Itabuna",
    tag: "Capital Regional & Literatura Grapiúna",
    subtitle: "Polo econômico, universitário e palco central das histórias de Jorge Amado.",
    pathProgress: 0.50,
    labelOffset: { x: -85, y: 6 },
    image: "https://images.trvl-media.com/place/6141366/d716da51-0776-4541-a0ed-06f0b43e0d6b.jpg",
    credit: "Região Grapiúna — Vale do Rio Cachoeira",
    history:
      "Emancipada em 1910, Itabuna cresceu às margens do Rio Cachoeira impulsionada pela riqueza do 'fruto de ouro' (o cacau), tornando-se o principal entroncamento comercial, educacional e de serviços do Sul da Bahia.",
    culture:
      "Terra natal de Jorge Amado (nascido no distrito de Ferradas), Itabuna respira a cultura grapiúna, com intensa produção teatral, grupos musicais, saraus literários e eventos tradicionais como o Ita Pedro.",
    spots: [
      "Casa de Jorge Amado em Ferradas (memória literária)",
      "Teatro Municipal Candinha Dórea",
      "Avenida Beira-Rio e Praça Olinto Leoni"
    ],
    curiosity:
      "O termo 'Grapiúna' identifica o povo e a cultura nascidos na região cacaueira entre Itabuna e Ilhéus, imortalizados na literatura brasileira."
  },
  {
    id: 3,
    city: "Ilhéus",
    tag: "Terra da Gabriela & Capital do Cacau",
    subtitle: "Patrimônio histórico, praias extensas e o berço do chocolate de origem.",
    pathProgress: 0.72,
    labelOffset: { x: 16, y: 5 },
    image: "https://escapemagazine.com.br/wp-content/uploads/2024/04/85abd748949542e836a802c16f8d9e37-1024x721.jpeg",
    credit: "Litoral histórico de Ilhéus, Bahia",
    history:
      "Fundada em 1534 como Capitania de São Jorge dos Ilhéus, viveu seu apogeu no início do século XX como maior exportadora de cacau do mundo, período que financiou palacetes, teatros e igrejas monumentais.",
    culture:
      "Cenário de clássicos como 'Gabriela, Cravo e Canela' e 'Terras do Sem-Fim'. Hoje lidera o movimento do chocolate 'bean-to-bar' (do grão à barra), unindo turismo rural nas fazendas históricas e gastronomia.",
    spots: [
      "Catedral de São Sebastião e Centro Histórico",
      "Bar Vesúvio e Bataclan (ícones literários)",
      "Estrada do Chocolate (fazendas históricas na BA-262)"
    ],
    curiosity:
      "A Estrada do Chocolate (Ilhéus–Uruçuca) foi a primeira estrada temática de chocolate do Brasil."
  },
  {
    id: 4,
    city: "Uruçuca (Serra Grande)",
    tag: "Mirantes, Cachoeiras & Inovação Rural",
    subtitle: "Onde a Serra do Conduru encontra o mar em falésias e mirantes panorâmicos.",
    pathProgress: 0.86,
    labelOffset: { x: 16, y: 5 },
    image: "https://static.wixstatic.com/media/954288_7f6f2e868dc14a20a28c9bde7395ed72~mv2.jpg/v1/fill/w_824,h_464,al_c,lg_1,q_85,enc_auto/954288_7f6f2e868dc14a20a28c9bde7395ed72~mv2.jpg",
    credit: "Paisagem de serra e litoral na Costa do Cacau",
    history:
      "Com raízes ligadas à ferrovia do cacau (antiga Estrada de Ferro Ilhéus-Conquista), Uruçuca e seu distrito costeiro de Serra Grande tornaram-se referência em ecoturismo, agroecologia e formação técnica em cacau e chocolate.",
    culture:
      "Combina a tradição das fazendas cacaueiras no interior com a cultura comunitária, capoeira, artesanato sustentável e festivais culturais na praça de Serra Grande.",
    spots: [
      "Mirante de Serra Grande (vista panorâmica do litoral)",
      "Parque Estadual da Serra do Conduru",
      "Cachoeira do Tijuípe e Praia do Pé de Serra"
    ],
    curiosity:
      "O Parque da Serra do Conduru possui uma das maiores diversidades de espécies de árvores por hectare do planeta."
  },
  {
    id: 5,
    city: "Itacaré",
    tag: "Encontro do Rio de Contas com o Mar",
    subtitle: "Trilhas na mata, praias cercadas por morros, surfe e cultura afro-baiana.",
    pathProgress: 1.0,
    labelOffset: { x: 16, y: 5 },
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/MARCIO_FILHO_ITACARE_CIDADE_ITACARE_BAHIA_%2840933336562%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    credit: "Praias e enseadas de Itacaré, Sul da Bahia",
    history:
      "Antigo reduto indígena e importante porto de escoamento de cacau na foz do Rio de Contas, Itacaré manteve-se isolada por décadas até a abertura da estrada parque BA-001 em 1998, o que preservou suas enseadas.",
    culture:
      "Forte presença da capoeira, rodas de samba de roda, cultura surfista e gastronomia baiana. A Rua Pedro Longo (Pituba) concentra a vida noturna, música ao vivo e artesanato local.",
    spots: [
      "Trilha das Quatro Praias (Engenhoca, Havaizinho, Camboinha e Itacarezinho)",
      "Praia da Concha e Farol Quadrado",
      "Cachoeira de Noré e passeios de canoa no Rio de Contas"
    ],
    curiosity:
      "A rodovia BA-001 entre Ilhéus e Itacaré foi a primeira estrada ecológica do Brasil, construída com túneis de fauna para proteger os animais silvestres."
  }
];

let currentIndex = 0;
let animationFrameId = null;
let currentCarProgress = 0;

const roadPath = document.getElementById("road-base");
const carMarker = document.getElementById("car-marker");
const mapPinsGroup = document.getElementById("map-pins");
const cityPillsContainer = document.getElementById("city-pills");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const stepCounter = document.getElementById("step-counter");
const progressFill = document.getElementById("progress-fill");

function initMapElements() {
  const totalLength = roadPath.getTotalLength();

  stopsData.forEach((stop, index) => {
    const point = roadPath.getPointAtLength(stop.pathProgress * totalLength);

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "pin-group");
    g.setAttribute("data-index", index);
    g.setAttribute("transform", `translate(${point.x}, ${point.y})`);
    g.addEventListener("click", () => goToStop(index));

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("class", "pin-circle");
    circle.setAttribute("r", "8");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", "pin-label");
    text.setAttribute("x", stop.labelOffset.x);
    text.setAttribute("y", stop.labelOffset.y);
    text.textContent = stop.city;

    g.appendChild(circle);
    g.appendChild(text);
    mapPinsGroup.appendChild(g);

    const pill = document.createElement("button");
    pill.className = "pill";
    pill.setAttribute("aria-label", `Ir para ${stop.city}`);
    pill.addEventListener("click", () => goToStop(index));
    cityPillsContainer.appendChild(pill);
  });
}

function setCarPosition(progress) {
  const totalLength = roadPath.getTotalLength();
  const distance = progress * totalLength;
  const point = roadPath.getPointAtLength(distance);

  const lookAhead = Math.min(totalLength, distance + 4);
  const lookBehind = Math.max(0, distance - 4);
  const p1 = roadPath.getPointAtLength(lookBehind);
  const p2 = roadPath.getPointAtLength(lookAhead);
  const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);

  carMarker.setAttribute(
    "transform",
    `translate(${point.x}, ${point.y}) rotate(${angle})`
  );
}

function animateCarTo(targetProgress) {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const startProgress = currentCarProgress;
  const delta = targetProgress - startProgress;
  const duration = 650;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    currentCarProgress = startProgress + delta * eased;
    setCarPosition(currentCarProgress);

    if (t < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      currentCarProgress = targetProgress;
    }
  }

  animationFrameId = requestAnimationFrame(step);
}

function updateInfoPanel(stop) {
  const card = document.getElementById("info-card");
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = null;

  document.getElementById("region-image").src = stop.image;
  document.getElementById("region-image").alt = `Paisagem de ${stop.city}`;
  document.getElementById("region-tag").textContent = stop.tag;
  document.getElementById("image-credit").textContent = stop.credit;
  document.getElementById("region-title").textContent = stop.city;
  document.getElementById("region-km").textContent = `Parada ${stop.id + 1} de ${stopsData.length}`;
  document.getElementById("region-subtitle").textContent = stop.subtitle;
  document.getElementById("region-history").textContent = stop.history;
  document.getElementById("region-culture").textContent = stop.culture;
  document.getElementById("region-curiosity").textContent = stop.curiosity;

  const spotsList = document.getElementById("region-spots");
  spotsList.innerHTML = "";
  stop.spots.forEach((spot) => {
    const li = document.createElement("li");
    li.textContent = spot;
    spotsList.appendChild(li);
  });
}

function goToStop(index) {
  if (index < 0 || index >= stopsData.length) return;
  currentIndex = index;
  const stop = stopsData[currentIndex];

  animateCarTo(stop.pathProgress);
  updateInfoPanel(stop);

  document.querySelectorAll(".pin-group").forEach((pin, idx) => {
    pin.classList.toggle("active", idx === currentIndex);
  });

  document.querySelectorAll(".pill").forEach((pill, idx) => {
    pill.classList.toggle("active", idx === currentIndex);
  });

  stepCounter.textContent = `Parada ${currentIndex + 1} de ${stopsData.length}`;
  progressFill.style.width = `${((currentIndex + 1) / stopsData.length) * 100}%`;
  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === stopsData.length - 1;
}

btnPrev.addEventListener("click", () => goToStop(currentIndex - 1));
btnNext.addEventListener("click", () => goToStop(currentIndex + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") goToStop(currentIndex + 1);
  if (e.key === "ArrowLeft") goToStop(currentIndex - 1);
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    const targetId = `tab-${btn.getAttribute("data-tab")}`;
    document.getElementById(targetId).classList.add("active");
  });
});

initMapElements();
setCarPosition(0);
goToStop(0);
