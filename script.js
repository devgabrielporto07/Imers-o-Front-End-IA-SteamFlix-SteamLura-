/**
 * SCRIPT.JS - LÓGICA DA PÁGINA DE PERFIS DO STEAM FLIX
 * 
 * RESPONSABILIDADES:
 * 1. Gerenciar tema escuro/claro com localStorage
 * 2. Detectar clique nos perfis (Pedro/Ana)
 * 3. Salvar perfil ativo no localStorage
 * 4. Redirecionar para catálogo do perfil
 * 5. Sincronizar tema com o catálogo
 */

// ============================================================
// TEMA ESCURO/CLARO
// ============================================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Chave para armazenar preferência no localStorage
const THEME_KEY = 'steamflix-theme';

// Tema padrão
const DEFAULT_THEME = 'dark';

/**
 * FUNÇÃO: loadTheme
 * Carrega o tema salvo ao iniciar a página
 */
function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    applyTheme(savedTheme);
}

/**
 * FUNÇÃO: applyTheme
 * Aplica o tema ao body e salva no localStorage
 * 
 * @param {string} theme - 'light' ou 'dark'
 */
function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        localStorage.setItem(THEME_KEY, 'light');
    } else {
        body.classList.remove('light-theme');
        localStorage.setItem(THEME_KEY, 'dark');
    }
}

/**
 * FUNÇÃO: toggleTheme
 * Alterna entre tema claro e escuro
 */
function toggleTheme() {
    const currentTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Event listener para o botão de tema
themeToggle.addEventListener('click', toggleTheme);

// ============================================================
// SELEÇÃO DE PERFIL
// ============================================================

/**
 * FUNÇÃO: inicializarPerfiles
 * Adiciona event listeners aos perfis para detectar cliques
 * 
 * FLUXO:
 * 1. Usuário clica em Pedro ou Ana
 * 2. Perfil é salvo no localStorage
 * 3. Redireciona para o catálogo
 */
function inicializarPerfiles() {
    const perfis = document.querySelectorAll('.perfil');
    
    perfis.forEach(perfil => {
        perfil.addEventListener('click', () => {
            // Obter nome do perfil do elemento h2
            const nomePerfil = perfil.querySelector('h2').textContent;
            
            // Obter URL da imagem do perfil
            const imagemPerfil = perfil.querySelector('img').src;
            
            // Salvar no localStorage para o catálogo acessar
            localStorage.setItem('perfilAtivoNome', nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            
            console.log(`✓ Perfil "${nomePerfil}" selecionado`);
            console.log(`✓ Imagem: ${imagemPerfil}`);
            
            // Redirecionar para o catálogo
            // Ajuste o caminho se necessário (Windows/Mac/Linux)
            window.location.href = '../Catalógos/catalogo/catalogo.html';
        });
        
        // Adicionar efeito visual ao passar o mouse
        perfil.addEventListener('mouseenter', () => {
            perfil.style.cursor = 'pointer';
        });
    });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

/**
 * Ao carregar a página:
 * 1. Carregar tema salvo
 * 2. Inicializar listeners dos perfis
 */
window.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    inicializarPerfiles();
    console.log('✓ Steam Flix carregado com sucesso');
    console.log(`✓ Tema atual: ${localStorage.getItem(THEME_KEY) || DEFAULT_THEME}`);
});
