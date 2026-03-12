# Portfólio Front-end com Vite + JavaScript

Um portfólio pessoal moderno e responsivo, desenvolvido com **Vite** e **JavaScript puro**, inspirado no design do MongoDB.

## 🎨 Design

- **Paleta de Cores**: Verde (#00ED64), Preto (#0A1217), Branco
- **Tipografia**: Poppins (títulos) + Inter (corpo)
- **Animações**: Fade-in, Slide-in suaves
- **Responsivo**: Mobile-first design

## 📁 Estrutura do Projeto

```
portfolio-js/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.js       # Barra de navegação
│   │   ├── Hero.js         # Seção inicial
│   │   ├── About.js        # Sobre você
│   │   ├── Projects.js     # Galeria de projetos
│   │   ├── Contact.js      # Formulário de contato
│   │   └── Footer.js       # Rodapé
│   ├── styles/
│   │   └── global.css      # Estilos globais
│   └── main.js             # Arquivo principal
├── index.html              # HTML principal
└── package.json            # Dependências
```

## 🚀 Como Rodar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:5173` no navegador.

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎯 Personalizando

### 1. Alterar seu Nome e Informações

Abra `src/components/Hero.js` e atualize:

```javascript
<h1>Olá, sou <span class="highlight">SEU NOME AQUI</span></h1>
```

### 2. Adicionar sua Foto

Substitua o emoji pela sua foto no componente Hero:

```javascript
<div class="placeholder">👨‍💻</div>  // ← Troque por <img src="sua-foto.jpg" />
```

### 3. Adicionar seus Projetos

Edite o array `projectsData` em `src/components/Projects.js`:

```javascript
const projectsData = [
  {
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    tags: ['JavaScript', 'HTML/CSS'],
    live: 'https://seu-projeto.com',
    github: 'https://github.com/seu-usuario/seu-projeto'
  },
  // ... mais projetos
];
```

### 4. Atualizar Links de Contato

Edite `src/components/Contact.js` e atualize os links sociais:

```javascript
<a href="mailto:seu.email@exemplo.com" class="social-icon">📧</a>
<a href="https://linkedin.com/in/seu-usuario" class="social-icon">💼</a>
<a href="https://github.com/seu-usuario" class="social-icon">💻</a>
```

## 📦 Dependências

- **Vite** - Build tool rápido
- **Google Fonts** - Tipografia (Poppins + Inter)

## 🌐 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Adicione ao `package.json`:
```json
"homepage": "https://seu-usuario.github.io/portfolio-js"
```

2. Deploy:
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

## 📝 Licença

MIT - Sinta-se livre para usar este projeto como base para seu portfólio!

## 💡 Dicas

- Customize as cores editando as variáveis CSS em `src/styles/global.css`
- Adicione mais seções criando novos componentes em `src/components/`
- Use emojis para ícones ou integre uma biblioteca como Font Awesome
- Teste a responsividade no DevTools (F12)

---

**Desenvolvido com ❤️ usando Vite + JavaScript**
