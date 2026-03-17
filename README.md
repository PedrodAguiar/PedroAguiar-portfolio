# Pedro Aguiar Portfolio

Portfolio pessoal desenvolvido com React, Vite e Tailwind CSS, com foco em apresentacao profissional, navegacao fluida e layout responsivo.

## Visao geral

O projeto apresenta:

- secao inicial com destaque profissional
- secao "Sobre" com resumo e habilidades
- secao "Projetos" com cards reutilizaveis
- secao "Experiencia" em timeline vertical com expansao de detalhes
- secao de contato com links sociais
- suporte a tema claro e escuro

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- lucide-react

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

## Estrutura

```text
src/
|-- App.jsx
|-- main.jsx
|-- components/
|   |-- About.jsx
|   |-- Contact.jsx
|   |-- Experience.jsx
|   |-- ExperienceTimelineItem.jsx
|   |-- Footer.jsx
|   |-- Hero.jsx
|   |-- Navbar.jsx
|   |-- PortfolioCard.jsx
|   |-- Projects.jsx
|   `-- TagBadge.jsx
|-- contexts/
|   `-- ThemeContext.jsx
`-- styles/
    `-- global.css
```

## Componentes principais

### `Navbar`

Responsavel pela navegacao entre as secoes da pagina e pelo toggle de tema.

### `Projects`

Renderiza os projetos do portfolio usando o componente reutilizavel `PortfolioCard`.

### `Experience`

Exibe a experiencia profissional em uma timeline vertical responsiva, organizada do item mais recente para o mais antigo.

### `ExperienceTimelineItem`

Componente de item da timeline com:

- titulo da experiencia
- periodo
- descricao resumida
- tags
- expansao de detalhes

### `TagBadge`

Badge reutilizavel usado nas secoes de projetos e experiencia para manter consistencia visual.

## Personalizacao

### Atualizar projetos

Edite o array `projectsData` em `src/components/Projects.jsx`.

### Atualizar experiencias

Edite o array `experienceData` em `src/components/Experience.jsx`.

### Atualizar apresentacao principal

Edite os textos em:

- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Contact.jsx`

### Ajustar estilos globais

As fontes, animacoes e tokens de tema estao em `src/styles/global.css`.

## Responsividade

O layout foi construido para funcionar bem em desktop e mobile, com:

- menu responsivo
- grids adaptativos
- timeline ajustada para telas menores
- espacos e tipografia consistentes entre breakpoints

## Observacoes

- O projeto usa componentes simples e reutilizaveis para facilitar manutencao.
- A secao de experiencia foi organizada em timeline para evidenciar progressao profissional.
- A identidade visual segue a paleta clara/escura definida no projeto.
