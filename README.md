# 🗺️ Rota Cultural do Sul da Bahia

> Aplicação web interativa desenvolvida como atividade do **Projeto de Extensão II — Programa de Ação e Difusão Cultural** (Bacharelado em Ciência da Computação).

## 📌 Sobre o Projeto

A **Rota Cultural do Sul da Bahia** é um guia digital interativo criado para promover, preservar e difundir o patrimônio histórico, literário, ambiental e turístico da Costa do Cacau e região grapiúna. 

Por meio de um mapa vetorial animado, o usuário percorre uma trilha rodoviária passando por seis municípios/localidades emblemáticas do Sul da Bahia (**Canavieiras, Una, Itabuna, Ilhéus, Uruçuca/Serra Grande e Itacaré**), explorando a identidade cultural, tradições, curiosidades e pontos turísticos de cada parada.

---

## 🎯 Objetivos e Aderência Extensionista

* **Difusão Cultural:** Democratizar o acesso à memória histórica, literatura grapiúna, cultura cacaueira (sistema *cabruca*) e manifestações populares do Sul da Bahia por meio de uma interface acessível e responsiva.
* **Alinhamento aos Objetivos de Desenvolvimento Sustentável (ODS - ONU):**
  * **ODS 11 (Meta 11.4):** Fortalecer esforços para proteger e salvaguardar o patrimônio cultural e natural do mundo.
  * **ODS 8 (Meta 8.9):** Promover o turismo sustentável, valorizando a cultura e os produtos locais.

---

## ✨ Funcionalidades

* **Mapa Vetorial Interativo (SVG):** Representação estilizada do litoral e interior do Sul da Bahia com traçado rodoviário.
* **Animação Dinâmica de Trajeto:** Um veículo desliza e rotaciona suavemente ao longo da curva da estrada conforme o usuário avança ou retrocede entre as cidades.
* **Navegação Múltipla:** Controle via botões (*Anterior* / *Próximo*), clique direto nos pinos do mapa, indicadores inferiores ou setas do teclado (`←` e `→`).
* **Painel Cultural Organizado por Abas:**
  * *História & Identidade*
  * *Cultura & Tradições*
  * *Pontos Turísticos*
* **Design Responsivo:** Adaptado para dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e gráficos vetoriais escaláveis (`<svg>`).
* **CSS3:** Estilização moderna com variáveis CSS, Grid Layout, Flexbox e animações fluidas.
* **JavaScript (Vanilla JS):** Manipulação do DOM, estruturação de dados em objetos/arrays e cálculos geométricos sobre caminhos SVG (`getPointAtLength` e trigonometria com `Math.atan2`) para movimentação e rotação do marcador na rota.

---

## 📂 Estrutura de Arquivos

```text
rota-cultural-sul-bahia/
├── index.html      # Estrutura da página, mapa SVG e painel de conteúdo
├── style.css       # Estilização, tema visual e responsividade
├── script.js       # Base de dados culturais e lógica de animação da rota
└── README.md       # Documentação do projeto
