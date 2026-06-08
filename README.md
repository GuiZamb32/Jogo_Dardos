#  Placar de Dardos Casual

Uma aplicação web desenvolvida em **React** para gerenciamento de partidas de dardos nos modos **301** e **501**, com interface moderna, responsiva e otimizada para dispositivos móveis.

O sistema permite configurar jogadores, personalizar cores, controlar pontuações automaticamente e exibir o vencedor ao final da partida.

---

##  Demonstração

O aplicativo possui quatro telas principais:

*  Home
*  Configuração dos Jogadores
*  Partida
*  Vitória

A interface foi projetada com foco em experiência mobile, utilizando um layout inspirado em aplicativos modernos.

---

##  Funcionalidades

###  Modos de Jogo

* 301
* 501

###  Configuração dos Jogadores

* Cadastro de 2 jogadores
* Personalização dos nomes
* Escolha de cor individual
* Cor aplicada dinamicamente durante a partida

###  Sistema de Pontuação

* Contagem automática
* Multiplicadores:

  * Simples (x1)
  * Duplo (x2)
  * Triplo (x3)
* Centro Verde (25 pontos)
* Mosca / Bullseye (50 pontos)
* Errou (0 pontos)

###  Controle de Turnos

* Até 3 arremessos por rodada
* Alternância automática de jogadores
* Indicador visual do jogador da vez
* Contador visual de dardos lançados

###  Sistema de Bust (Estouro)

Quando a pontuação ficaria abaixo de zero:

* A rodada é anulada
* A pontuação permanece inalterada
* O turno passa para o próximo jogador

###  Sistema de Vitória

* Detecção automática do vencedor
* Tela exclusiva de comemoração
* Opção para reiniciar a partida

###  Tema Dinâmico

Durante a partida:

* O fundo da tela muda automaticamente para a cor escolhida pelo jogador atual
* Transição suave entre turnos

###  Persistência Local

Os dados são armazenados utilizando:

* Local Storage

Informações salvas:

* Jogadores
* Cores
* Modo de jogo
* Vencedor

---

##  Tecnologias Utilizadas

### Front-end

* React 19
* React Router DOM 7
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

### Armazenamento

* Local Storage API

---

##  Estrutura do Projeto

```text
src/
│
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   │
│   ├── Player.jsx
│   ├── Player.css
│   │
│   ├── Pontos.jsx
│   ├── Pontos.css
│   │
│   ├── Vitoria.jsx
│   └── Vitoria.css
│
├── App.jsx
├── App.css
├── main.jsx
│
└── assets/
```

---

##  Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/jogo-dardos.git
```

### 2. Entre na pasta

```bash
cd jogo-dardos
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Abra no navegador

```text
http://localhost:5173
```

---

##  Responsividade

O projeto foi desenvolvido com abordagem Mobile First e funciona em:

* Smartphones Android
* iPhone
* Tablets
* Notebooks
* Computadores Desktop

---

##  Regras Implementadas

### Início da Partida

Cada jogador inicia com:

* 301 pontos
  ou
* 501 pontos

### Rodadas

Cada jogador possui:

* Até 3 arremessos por turno

### Multiplicadores

* Simples = x1
* Duplo = x2
* Triplo = x3

### Vitória

O jogador vence quando sua pontuação chega exatamente a:

```text
0 pontos
```

### Bust (Estouro)

Quando:

```text
Pontuação Atual - Pontuação da Rodada < 0
```

A rodada é cancelada automaticamente.

---

##  Melhorias Futuras

* Histórico de partidas
* Ranking de jogadores
* Estatísticas avançadas
* Média por rodada
* Histórico de lançamentos
* Mais modos de jogo (701, Cricket etc.)
* Mais de 2 jogadores
* Sons e efeitos especiais
* Progressive Web App (PWA)
* Integração com banco de dados

---

##  Autor

**Guilherme Zamboni Menegacio**

Projeto desenvolvido para estudo de React, React Router, gerenciamento de estado e criação de interfaces responsivas voltadas para dispositivos móveis.

---

##  Licença

Este projeto está sob a licença MIT.

Sinta-se à vontade para utilizar, estudar, modificar e contribuir com melhorias.
