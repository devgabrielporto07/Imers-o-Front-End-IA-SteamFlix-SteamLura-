# 🎬 Steam Flix - Catálogo Dinâmico

## 📋 Visão Geral

O catálogo Steam Flix é um sistema de visualização de conteúdo integrado com dois temas: **Steam** (para Jogos) e **Netflix** (para Séries e Maratonas). Cada perfil (Pedro/Ana) possui seu próprio catálogo personalizado.

---

## 🏗️ Arquitetura do Projeto

```
catalogo/
├── catalogo.html          # Estrutura HTML principal
├── catalogo.css           # Estilos (Tema escuro/claro integrado)
├── README.md              # Este arquivo
└── js/
    ├── main.js            # Lógica principal e inicialização
    ├── data.js            # Dados dos catálogos por perfil
    ├── utils.js           # Funções utilitárias reutilizáveis
    └── components/
        ├── Carousel.js    # Cria carrosséis de conteúdo
        └── Card.js        # Cria cartões individuais
```

---

## 🎯 Fluxo de Funcionamento

### 1️⃣ Seleção de Perfil (index.html - Steam Flix)

```
Usuário clica no perfil (Pedro ou Ana)
        ↓
Script detecta clique e obtém dados do perfil
        ↓
Salva no localStorage:
  - perfilAtivoNome: "Pedro" ou "Ana"
  - perfilAtivoImagem: URL da imagem
        ↓
Redireciona para: ../Catalógos/catalogo/catalogo.html
```

### 2️⃣ Carregamento do Catálogo

```
Página catalogo.html carrega
        ↓
main.js inicia (DOMContentLoaded)
        ↓
1. Recupera dados do localStorage
2. Sincroniza tema (escuro/claro)
3. Obtém categorias do perfil (data.js)
4. Cria carrosséis (Carousel.js + Card.js)
5. Configura event listeners
```

### 3️⃣ Tema Escuro/Claro

```
Usuário clica no botão ☀️/🌙
        ↓
toggleTheme() alterna o tema
        ↓
Salva no localStorage (THEME_KEY: 'steamflix-theme')
        ↓
Aplica classe 'light-theme' ao body
        ↓
CSS redefine todas as cores via CSS Variables
```

### 4️⃣ Voltando aos Perfis

```
Usuário clica no logo "STEAMFLIX" ou menu de perfil
        ↓
voltarAosPerfis() é chamado
        ↓
1. Remove dados do localStorage
2. Redireciona para ../index.html
```

---

## 📁 Detalhamento dos Arquivos

### **catalogo.html**
- Estrutura semântica
- Navbar com logo e botão de tema
- Container para carrosséis (preenchido por JavaScript)
- Links de navegação: Início, Séries, Maratonas, Jogos Steam

```html
<!-- Exemplo de estrutura criada dinâmicamente -->
<main class="sliders-container" id="main-content">
  <div class="slider-section" id="séries">
    <h2>Séries Favoritas</h2>
    <div class="movie-row">
      <!-- Cartões de série aqui -->
    </div>
  </div>
</main>
```

### **catalogo.css**
- **CSS Variables** para cores (Steam Flix azuis)
- **Tema Claro/Escuro** com `body.light-theme`
- **Gradientes** para navbar e cards
- **Hover Effects** com escala e brilho
- **Responsividade** completa (desktop → mobile)

```css
/* Exemplos de variáveis */
:root {
    --primary-blue: #1a3a52;
    --secondary-blue: #1e90ff;
    --accent-blue: #00d4ff;
    /* ... */
}

body.light-theme {
    --dark-bg: #f5f5f5;
    --text-primary: #1a1a1a;
    /* ... */
}
```

### **main.js** 📋 Arquivo Principal
- Inicializa toda a aplicação
- Recupera perfil do localStorage
- Sincroniza tema
- Gera catálogos dinâmicos
- Controla navegação

**Funções principais:**
- `atualizarInterfacePerfil()` - Mostra nome e avatar do perfil
- `sincronizarTema()` - Carrega e alterna temas
- `configurarEventListeners()` - Configura cliques
- `voltarAosPerfis()` - Retorna à seleção de perfis

### **data.js** 📊 Dados por Perfil
Define dois objetos no `perfilCatalogos`:

```javascript
perfilCatalogos = {
    Pedro: [
        {
            title: "Séries Favoritas",
            id: "séries",
            items: [ /* 5 séries */ ]
        },
        {
            title: "Para Maratonar",
            id: "maratonas",
            items: [ /* 4 maratonas */ ]
        },
        {
            title: "Jogos Steam",
            id: "jogos",
            items: [ /* 4 jogos */ ]
        }
    ],
    Ana: [ /* Similar */ ]
}
```

**Estrutura de cada item:**
```javascript
{
    img: "https://...",           // URL da imagem/capa
    badge: "Assistindo",          // Badge visível
    badgeColor: "blue",           // Cor do badge
    progress: 65,                 // Porcentagem (0-100) ou 0 = sem barra
    youtube: "https://youtube..."  // Link para preview em hover
}
```

### **Carousel.js** 🎠 Gerador de Carrosséis
Cria a estrutura de cada categoria:
- Section com ID (para âncoras)
- Header com título
- Row com cards

```javascript
export function createCarousel(category) {
    // 1. Cria <div class="slider-section" id="séries">
    // 2. Cria <h2> com título
    // 3. Cria <div class="movie-row">
    // 4. Popula com Cards
    // 5. Retorna a section completa
}
```

### **Card.js** 🎫 Gerador de Cartões
Cria cada cartão individual:
- Imagem de capa
- Preview de YouTube (oculto)
- Detalhes em hover (botões, badge, progresso)

**Interatividades:**
```javascript
// Ao passar o mouse (mouseenter):
- Detecta posição na tela
- Aguarda 600ms
- Reproduz vídeo do YouTube

// Ao sair do mouse (mouseleave):
- Para vídeo
- Remove sobreposição
- Remove transformações
```

### **utils.js** 🔧 Funções Utilitárias
```javascript
getYouTubeId(url)           // Extrai ID da URL
getRandomMatchScore()        // Retorna 80-100%
getRandomDuration(type)      // "10 temporadas" ou "2h 45m"
getRandomAgeBadge()          // "A16" ou "16"
```

---

## 🎨 Sistema de Cores (Steam Flix)

### Tema Escuro (Padrão)
```css
--primary-blue: #1a3a52;        /* Nav background */
--secondary-blue: #1e90ff;      /* Hover/Accent */
--accent-blue: #00d4ff;         /* Logo, botões */
--dark-bg: #0a0e27;             /* Fundo principal */
--card-bg: #162038;             /* Cards, modals */
--text-primary: #ffffff;        /* Texto principal */
--text-secondary: #b0b8c1;      /* Texto secundário */
```

### Tema Claro
```css
--primary-blue: #e8f4f8;        /* Nav background */
--dark-bg: #f5f5f5;             /* Fundo principal */
--card-bg: #ffffff;             /* Cards brancos */
--text-primary: #1a1a1a;        /* Texto escuro */
```

---

## 🔄 localStorage Keys

| Chave | Valor | Origem | Destino |
|-------|-------|--------|---------|
| `perfilAtivoNome` | "Pedro" \| "Ana" | `script.js` (main) | `main.js` (catalog) |
| `perfilAtivoImagem` | URL da imagem | `script.js` (main) | `main.js` (catalog) |
| `steamflix-theme` | "dark" \| "light" | Ambos os scripts | Ambos os arquivos |

---

## 📱 Responsividade

### Desktop (1200px+)
- Navbar completa com navegação
- Carrosséis normais
- Hover effects

### Tablet (768px - 1023px)
- Navegação responsiva
- Cards reduzidos
- Hover effects simplificados

### Mobile (até 480px)
- Logo reduzido
- Sem navegação inline
- Cards compactos
- Swipe scroll (automático)

---

## 🎬 Interações

### 🎥 Hover em Cartão
```
1. Mouse entra no card (mouseenter)
2. Card escala para 1.5x
3. Aguarda 600ms
4. YouTube plays com autoplay + mute
5. Detalhes aparecem abaixo

1. Mouse sai (mouseleave)
2. YouTube para
3. Card volta ao normal
4. Detalhes desaparecem
```

### 🌙 Botão de Tema
```
1. Usuário clica no ☀️/🌙
2. toggleTheme() chamado
3. Tema alterna dark ↔ light
4. CSS variables redefinidas
5. localStorage atualizado
6. Tema sincroniza com catálogo
```

### ⬅️ Voltar aos Perfis
```
1. Logo (STEAMFLIX) ou menu de perfil clicado
2. voltarAosPerfis() chamado
3. localStorage limpo
4. Redireciona para ../index.html
5. Volta à seleção de perfis
```

---

## 🚀 Como Adicionar Novo Conteúdo

### Adicionar Série/Jogo para Pedro

Em `data.js`, na array `Pedro`:

```javascript
{
    title: "Séries Favoritas",
    items: [
        // ... itens existentes ...
        {
            img: "https://nova-imagem.jpg",
            badge: "Novo",
            badgeColor: "blue",
            progress: 0,
            youtube: "https://youtube.com/watch?v=VIDEO_ID"
        }
    ]
}
```

### Adicionar Nova Categoria

```javascript
Pedro: [
    // ... categorias existentes ...
    {
        title: "Documentários",
        id: "documentários",
        items: [ /* itens aqui */ ]
    }
]
```

---

## 🐛 Troubleshooting

### ❌ Cartãos vazios / sem imagem
- Verifique se a URL da imagem está correta
- Use URLs HTTPS para evitar problemas de segurança

### ❌ Vídeo não reproduz no hover
- Verifique se o link do YouTube é válido
- Certifique-se de que `getYouTubeId()` extrai corretamente

### ❌ Tema não sincroniza
- Limpe o localStorage do navegador
- Atualize a página (Ctrl + Shift + R)

### ❌ Redireciona para erro 404
- Verifique os caminhos relativos
- Windows usa `\`, mas URLs usam `/`

---

## 📝 Notas Importantes

1. **localStorage é persistente** - Tema permanece salvo entre sessões
2. **Caminhos relativos** - Ajuste conforme sua estrutura
3. **Imagens Externas** - URLs do Unsplash/YouTube podem estar bloqueadas em alguns ambientes
4. **Responsividade** - Mobile-first em `catalogo.css`
5. **Documentação** - Cada função tem comentários detalhados (JSDoc)

---

## 🎓 Aprendizados Utilizados

✅ **localStorage** - Armazenar tema e perfil  
✅ **CSS Variables** - Trocar tema dinamicamente  
✅ **Event Listeners** - Cliques, hover, scroll  
✅ **DOM Manipulation** - Criar elementos dinamicamente  
✅ **Modules (ES6)** - Importar/exportar funções  
✅ **Responsividade** - Media queries  
✅ **YouTube API** - Embed dinâmico  
✅ **CSS Grid/Flex** - Layout responsivo  

---

## 🔗 Links Úteis

- [YouTube Embed Docs](https://developers.google.com/youtube/iframe_api_reference)
- [localStorage MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/using_css_custom_properties)
- [Unsplash Images](https://unsplash.com/napi/search/photos)

---

**Última atualização:** Março 2026  
**Autor:** Imersão Alura AI  
**Versão:** 1.0.0
