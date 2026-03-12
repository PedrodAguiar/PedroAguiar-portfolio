import './styles/global.css'
import { createNavbar } from './components/Navbar.js'
import { createHero } from './components/Hero.js'
import { createAbout } from './components/About.js'
import { createProjects } from './components/Projects.js'
import { createContact } from './components/Contact.js'
import { createFooter } from './components/Footer.js'

// Montar a aplicação
const app = document.getElementById('app')

// Adicionar componentes na ordem correta
app.appendChild(createNavbar())
app.appendChild(createHero())
app.appendChild(createAbout())
app.appendChild(createProjects())
app.appendChild(createContact())
app.appendChild(createFooter())

console.log('✅ Portfólio carregado com sucesso!')
