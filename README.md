#  Placar de Dardos Casual

Uma aplicação web desenvolvida em React para gerenciamento de partidas de dardos nos modos **301** e **501**, com suporte para dois jogadores, personalização de nomes e cores, controle automático de pontuação e persistência de dados utilizando Local Storage.

---

##  Sobre o Projeto

O **Placar de Dardos Casual** foi criado para facilitar o acompanhamento de partidas de dardos de forma prática, intuitiva e responsiva.

A aplicação elimina a necessidade de anotações manuais, calculando automaticamente a pontuação dos jogadores e gerenciando os turnos durante toda a partida.

---

##  Funcionalidades

###  Modos de Jogo

* 301
* 501

###  Gerenciamento de Jogadores

* Cadastro de 2 jogadores
* Personalização do nome
* Escolha de cor individual

###  Sistema de Pontuação

* Pontuação automática
* Multiplicadores:

  * Simples (x1)
  * Duplo (x2)
  * Triplo (x3)
* Centro Verde (25 pontos)
* Mosca/Bullseye (50 pontos)
* Errou (0 pontos)

###  Controle de Turnos

* Até 3 dardos por rodada
* Alternância automática entre jogadores
* Indicador visual do jogador da vez

###  Sistema de Bust (Estouro)

Quando a pontuação de um jogador ficaria abaixo de zero:

* A rodada é cancelada
* Nenhum ponto é descontado
* O turno passa para o próximo jogador

###  Sistema de Vitória

* Detecta automaticamente quando um jogador chega a 0 pontos
* Exibe tela de vencedor
* Permite reiniciar a partida

###  Persistência de Dados

Utiliza o Local Storage do navegador para salvar:

* Jogadores
* Pontuações
* Turno atual
* Dardos lançados
* Multiplicador selecionado

Assim, a partida pode ser retomada mesmo após atualizar a página.

---

##  Tecnologias Utilizadas

### Front-end

* React
* JavaScript (ES6+)
* HTML5
* CSS3

### Armazenamento

* Local Storage API

---

##  Estrutura do Projeto

```text
src/
│
├── ArenaDardos.jsx
├── Telas.css
├── App.jsx
├── main.jsx
│
└── assets/
```

---

##  Como Executar

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/placar-dardos.git
```

### Acesse a pasta do projeto

```bash
cd placar-dardos
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run dev
```

### Abra no navegador

```text
http://localhost:5173
```

---

##  Responsividade

O projeto foi desenvolvido para funcionar em:

* Smartphones Android
* iPhone
* Tablets
* Notebooks
* Computadores Desktop

---

##  Regras Implementadas

### Início da Partida

Cada jogador inicia com:

* 301 pontos (modo 301)
* 501 pontos (modo 501)

### Rodada

Cada jogador possui:

* Até 3 arremessos por turno

### Vitória

O jogador vence quando sua pontuação chega exatamente a:

```text
0 pontos
```

### Bust (Estouro)

Quando:

```text
Pontuação Atual - Pontos da Rodada < 0
```

A rodada é anulada e a pontuação permanece inalterada.

---

##  Melhorias Futuras

* Histórico de partidas
* Ranking de jogadores
* Estatísticas detalhadas
* Média de pontuação por rodada
* Sugestão de checkout
* Modo para mais de 2 jogadores
* Tema claro/escuro
* Sons e animações avançadas
* Progressive Web App (PWA)

---

##  Autor

**Guilherme Zamboni Menegacio**

Projeto desenvolvido para prática de React, gerenciamento de estado e criação de interfaces responsivas para dispositivos móveis.

---

##  Licença

Este projeto está licenciado sob a licença MIT.

Sinta-se à vontade para utilizar, estudar e modificar este projeto para fins acadêmicos ou pessoais.
