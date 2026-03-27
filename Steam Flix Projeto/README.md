# 🎮🎬 Steam Flix - Seletor de Perfis

## 📋 Visão Geral

O **Steam Flix** é a página de inicialização que permite ao usuário escolher entre dois perfis (**Pedro** ou **Ana**). Integra um sistema de tema escuro/claro e redireciona para catálogos personalizados.

---

## 🎯 Funcionalidades Principais

### 1. Seleção de Perfil
- Clique em qualquer perfil para acessar seu catálogo
- Dados salvos em `localStorage` para acesso no catálogo

### 2. Tema Escuro/Claro
- ☀️ Botão para alternar temas
- Sincroniza com o catálogo
- Persiste entre sessões (localStorage)

### 3. Design Steam + Netflix
- Cores azuis do tema Steam
- Layout inspirado em Netflix
- Responsivo (desktop, tablet, mobile)

---

## 🏗️ Arquivos

```
Steam Flix Projeto/
├── index.html      # Estrutura (2 perfis)
├── script.js       # Lógica (seleção + tema)
├── style.css       # Estilos (tema escuro/claro)
├── Perfil1.png     # Imagem de Pedro
├── Perfil2.png     # Imagem de Ana
└── README.md       # Este arquivo
```

---

## 🔄 Fluxo Completo

```
┌─────────────────────────────────────────────────┐
│         STEAM FLIX (index.html)                 │
│   ☀️ Escolha seu perfil:                        │
│                                                 │
│   [Pedro] [Ana]                                 │
└─────────────────────────────────────────────────┘
          ↓ Clica em Pedro
┌─────────────────────────────────────────────────┐
│  script.js - inicializarPerfiles()              │
│  1. Obtém nome: "Pedro"                         │
│  2. Obtém imagem: "Perfil1.png"                │
│  3. Salva em localStorage                      │
│  4. Redireciona para catálogo                  │
└─────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────┐
│         CATÁLOGO DO PEDRO                       │
│   ../Catalógos/catalogo/catalogo.html           │
│                                                 │
│   Séries Favoritas ▶ [Cards...]                │
│   Para Maratonar  ▶ [Cards...]                 │
│   Jogos Steam     ▶ [Cards...]                 │
└─────────────────────────────────────────────────┘
```

---

## 📝 HTML (index.html)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>SteamFlix</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navbar com Logo e Botão de Tema -->
    <header class="top-header">
        <div class="header-left">
            <h1 class="logo">STEAMFLIX</h1>
        </div>
        <div class="header-center">
            <h2>Escolha seu perfil:</h2>
        </div>
        <div class="header-right">
            <!-- Botão tema com SVGs (sol/lua) -->
            <button class="theme-toggle" id="themeToggle">
                <svg class="sun-icon"><!-- ☀️ --></svg>
                <svg class="moon-icon"><!-- 🌙 --></svg>
            </button>
        </div>
    </header>

    <main>
        <section class="perfis-container">
            <!-- Perfil Pedro -->
            <article class="perfil">
                <img src="Perfil1.png" alt="Perfil1">
                <h2>Pedro</h2>
            </article>

            <!-- Perfil Ana -->
            <article class="perfil">
                <img src="Perfil2.png" alt="Perfil2">
                <h2>Ana</h2>
            </article>
        </section>
    </main>

    <footer>
        <!-- Informações do rodapé -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

## ⚙️ JavaScript (script.js)

### 1. Tema Escuro/Claro

```javascript
// ============================================================
// TEMA ESCURO/CLARO
// ============================================================

const THEME_KEY = 'steamflix-theme';
const DEFAULT_THEME = 'dark';

function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const current = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);
```

**Como funciona:**
1. Ao carregar, `loadTheme()` verifica localStorage
2. Se houver tema salvo, aplica o tema
3. Se não, usa 'dark' como padrão
4. Ao clicar no botão, `toggleTheme()` alterna
5. A classe `light-theme` é adicionada/removida do body
6. CSS muda cores via variables

### 2. Seleção de Perfil

```javascript
// ============================================================
// SELEÇÃO DE PERFIL
// ============================================================

function inicializarPerfiles() {
    const perfis = document.querySelectorAll('.perfil');
    
    perfis.forEach(perfil => {
        perfil.addEventListener('click', () => {
            // Extrair dados do perfil clicado
            const nomePerfil = perfil.querySelector('h2').textContent;
            const imagemPerfil = perfil.querySelector('img').src;
            
            // Salvar no localStorage
            localStorage.setItem('perfilAtivoNome', nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            
            console.log(`✓ Perfil "${nomePerfil}" selecionado`);
            
            // Redirecionar para catálogo
            window.location.href = '../Catalógos/catalogo/catalogo.html';
        });
    });
}
```

**O que acontece ao clicar num perfil:**

```
Clique no perfil Pedro
        ↓
querySelector('h2') → "Pedro"
querySelector('img') → "Perfil1.png"
        ↓
localStorage.setItem('perfilAtivoNome', 'Pedro')
localStorage.setItem('perfilAtivoImagem', 'Perfil1.png')
        ↓
window.location.href = '../Catalógos/catalogo/catalogo.html'
        ↓
Carrega o catálogo do Pedro (já com dados salvos)
```

### 3. Inicialização

```javascript
window.addEventListener('DOMContentLoaded', () => {
    loadTheme();              // Carregar tema salvo
    inicializarPerfiles();    // Adicionar listeners
});
```

---

## 🎨 CSS (style.css)

### Variáveis de Cores

```css
:root {
    /* Steam Flix Colors */
    --primary-blue: #1a3a52;
    --secondary-blue: #1e90ff;
    --accent-blue: #00d4ff;
    --dark-bg: #0a0e27;
    --card-bg: #162038;
    --text-primary: #ffffff;
    --text-secondary: #b0b8c1;
}

/* Tema Claro */
body.light-theme {
    --dark-bg: #f5f5f5;
    --card-bg: #ffffff;
    --text-primary: #1a1a1a;
    --text-secondary: #555555;
}
```

### Componentes Principais

#### Logo
```css
.logo {
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 3px;
    background: linear-gradient(135deg, var(--accent-blue), var(--secondary-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```
- Gradiente azul (Steam)
- Efeito de texto com gradiente

#### Perfil Card
```css
.perfil {
    background: var(--card-bg);
    border-radius: 12px;
    cursor: pointer;
    transition: var(--transition);
}

.perfil:hover {
    transform: translateY(-12px) scale(1.05);
    border-color: var(--accent-blue);
    box-shadow: 0 12px 40px rgba(30, 144, 255, 0.5);
}
```
- Elevação ao hover
- Brilho azul

#### Botão Tema
```css
.theme-toggle {
    background: var(--card-bg);
    border: 2px solid var(--secondary-blue);
}

.theme-toggle:hover {
    transform: rotate(20deg) scale(1.1);
    background: var(--secondary-blue);
}

/* Ocultar ícone baseado no tema */
.sun-icon { opacity: 1; }
.moon-icon { opacity: 0; }

body.light-theme .sun-icon { opacity: 0; }
body.light-theme .moon-icon { opacity: 1; }
```

---

## 📱 Responsividade

### Desktop (1200px+)
```
┌────────────────────────────────────────┐
│ STEAMFLIX     Escolha seu perfil   ☀️  │
├────────────────────────────────────────┤
│              [Pedro]  [Ana]             │
└────────────────────────────────────────┘
```

### Tablet (768px - 1023px)
```
┌─────────────────────────┐
│ STEAMFLIX        ☀️      │
│  Escolha perfil         │
├─────────────────────────┤
│   [Pedro]   [Ana]       │
└─────────────────────────┘
```

### Mobile (até 480px)
```
┌──────────────┐
│ STEAM ☀️     │
│  Flix        │
├──────────────┤
│   [Pedro]    │
│    [Ana]     │
└──────────────┘
```

---

## 🔗 localStorage

| Chave | Tipo | Valor | Duração |
|-------|------|-------|---------|
| `steamflix-theme` | String | "dark" \| "light" | Persistente |
| `perfilAtivoNome` | String | "Pedro" \| "Ana" | Até limpar |
| `perfilAtivoImagem` | String | URL da imagem | Até limpar |

**Como visualizar (DevTools):**
```javascript
// Abrir Console (F12)
localStorage.getItem('steamflix-theme')     // "dark"
localStorage.getItem('perfilAtivoNome')     // "Pedro"
localStorage.clear()                        // Limpar tudo
```

---

## 🎬 Interações

### 1. Clique no Logo/Perfil
```
Qualquer clique na página de perfil
        ↓
Dados salvos no localStorage
        ↓
Redireciona para catálogo
        ↓
Catálogo carrega e recupera dados
```

### 2. Clique no Botão Tema
```
Antes:  Tema "dark" (Fundo escuro, texto branco)
        ☀️ visível, 🌙 oculto
        ↓ Clique
Depois: Tema "light" (Fundo claro, texto escuro)
        ☀️ oculto, 🌙 visível
        ↓
localStorage atualizado
Catálogo sincroniza automaticamente
```

### 3. Hover no Perfil
```
Mouse entra no perfil
        ↓
Card sobe (translateY -12px)
Card cresce (scale 1.05)
Brilho azul aparece
Cursor vira pointer
        ↓
Mouse sai
Card volta ao normal
```

---

## 🚀 Como Adicionar Novo Perfil

### 1. Adicionar no HTML
```html
<article class="perfil">
    <img src="Perfil3.png" alt="Perfil3">
    <h2>Carlos</h2>
</article>
```

### 2. Adicionar dados em data.js (Catálogo)
```javascript
export const perfilCatalogos = {
    Pedro: [ /* ... */ ],
    Ana: [ /* ... */ ],
    Carlos: [
        // Mesma estrutura de categorias
    ]
}
```

O script já itera todos os `.perfil` automaticamente!

---

## 🐛 Troubleshooting

### ❌ Tema não persiste
```javascript
// Solução: Limpar localStorage e recarregar
localStorage.clear()
location.reload()
```

### ❌ Redireciona para 404
```
Verifique o caminho:
Errado: '../Catalógos/catalogo/catalogo.html'
Correto: '../Catalógos/catalogo/catalogo.html' (ajuste conforme sua estrutura)
```

### ❌ Perfil não cadastrado no catálogo
```javascript
// Adicione em data.js:
export const perfilCatalogos = {
    Pedro: [ /* ... */ ],
    Ana: [ /* ... */ ],
    NovoNome: [ /* ... */ ]  // ← Adicione aqui
}
```

---

## 📊 Estrutura localStorage do Catálogo

```javascript
// Quando Pedro clica em seu perfil:
localStorage = {
    'steamflix-theme': 'dark',
    'perfilAtivoNome': 'Pedro',
    'perfilAtivoImagem': 'Perfil1.png'
}

// main.js do catálogo usa isso para:
nomePerfil = localStorage.getItem('perfilAtivoNome')  // "Pedro"
imagemPerfil = localStorage.getItem('perfilAtivoImagem') // "Perfil1.png"

// Obtém categorias do Pedro
categorias = obterCatalogoPorPerfil('Pedro')
// Resultado: [Séries Favoritas, Para Maratonar, Jogos Steam]
```

---

## 🎓 Tecnologias Utilizadas

✅ **HTML5** - Semântica (header, main, article, footer)  
✅ **CSS3** - Gradientes, variáveis, transitions, flexbox  
✅ **JavaScript ES6** - Arrow functions, modules, const/let  
✅ **localStorage** - Persistência de dados  
✅ **Responsive Design** - Mobile-first  
✅ **SVG Icons** - Ícones otimizados  

---

## 🔗 Integração com Catálogo

### Fluxo Completo

```
index.html
    ↓ (Clique em Pedro)
script.js
    ↓ (Salva dados)
localStorage
    ↓ (Redireciona)
catalogo.html
    ↓ (main.js inicia)
Recupera de localStorage
    ↓
Mostra catálogo do Pedro
    ↓
Botão volta ao perfil
    ↓
Limpa localStorage
    ↓
Volta para index.html
```

---

## 💡 Dicas Importantes

1. **PATHS RELATIVOS** - Use `../` para subir de pastas
2. **IMAGENS** - Coloque no mesmo diretório ou use URLs
3. **LOCALSTORAGE** - Cada aba do navegador compartilha os mesmos dados
4. **TEMA** - O catálogo sincroniza automaticamente
5. **CONSOLE** - Use `console.log()` para debugar

---

## 🎯 Próximas Melhorias

- [ ] Adicionar função de "Lembrar-me"
- [ ] Sistema de favoritos por perfil
- [ ] Histórico de visualização
- [ ] Recomendações personalizadas
- [ ] Sincronização com backend

---

**Última atualização:** Março 2026  
**Autor:** Imersão Alura AI  
**Versão:** 1.0.0

---

## 📞 Suporte

Para problemas:
1. Abra o Console (F12)
2. Verifique a aba Network
3. Confirme localStorage com `localStorage.getItem(key)`
4. Recarregue a página (Ctrl + Shift + R)
