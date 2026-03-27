/**
 * MAIN.JS - LÓGICA PRINCIPAL DO CATÁLOGO
 * 
 * RESPONSABILIDADES:
 * 1. Carregar perfil ativo do localStorage
 * 2. Sincronizar tema escuro/claro com projeto principal
 * 3. Gerar catálogo específico do perfil
 * 4. Gerenciar navegação de volta aos perfis
 * 5. Documentar código com comentários
 */

import { perfilCatalogos, obterCatalogoPorPerfil } from './data.js';
import { createCarousel } from './components/Carousel.js';

/**
 * INICIALIZAÇÃO AO CARREGAR A PÁGINA
 * Executa todas as configurações necessárias
 */
document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // 1. RECUPERAR DADOS DO PERFIL ATIVO
    // ============================================================
    
    const nomePerfil = localStorage.getItem('perfilAtivoNome') || 'Pedro';
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem') || '';
    
    // Atualizar interface com dados do perfil
    atualizarInterfacePerfil(nomePerfil, imagemPerfil);
    
    // ============================================================
    // 2. SINCRONIZAR TEMA ESCURO/CLARO
    // ============================================================
    
    sincronizarTema();
    
    // ============================================================
    // 3. GERAR CATÁLOGO DO PERFIL
    // ============================================================
    
    const container = document.getElementById('main-content');
    if (container) {
        // Obter categorias específicas do perfil
        const categoriasDoPerfil = obterCatalogoPorPerfil(nomePerfil);
        
        // Criar carrossel para cada categoria
        categoriasDoPerfil.forEach(categoria => {
            const carousel = createCarousel(categoria);
            container.appendChild(carousel);
        });
    }
    
    // ============================================================
    // 4. CONFIGURAR EVENT LISTENERS
    // ============================================================
    
    configurarEventListeners(nomePerfil);
});

/**
 * FUNÇÃO: atualizarInterfacePerfil
 * Atualiza nome e avatar do perfil na navbar
 * 
 * @param {string} nome - Nome do perfil
 * @param {string} imagem - URL da imagem do perfil
 */
function atualizarInterfacePerfil(nome, imagem) {
    const nomeElement = document.getElementById('perfilNome');
    const imagemElement = document.getElementById('profileIcon');
    
    if (nomeElement) {
        nomeElement.textContent = nome;
    }
    
    if (imagemElement && imagem) {
        imagemElement.src = imagem;
    }
}

/**
 * FUNÇÃO: sincronizarTema
 * Sincroniza o tema escuro/claro com o localStorage e projeto principal
 * Recupera preferência do tema salvo e aplica ao catálogo
 */
function sincronizarTema() {
    const THEME_KEY = 'steamflix-theme';
    const DEFAULT_THEME = 'dark';
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    // Carregar tema salvo
    const temaSalvo = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    aplicarTema(temaSalvo);
    
    // Event listener para botão de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', alternarTema);
    }
    
    /**
     * Função interna: aplicarTema
     * Aplica o tema (light/dark) ao body
     */
    function aplicarTema(tema) {
        if (tema === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
        localStorage.setItem(THEME_KEY, tema);
    }
    
    /**
     * Função interna: alternarTema
     * Alterna entre tema claro e escuro
     */
    function alternarTema() {
        const temaCurrent = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
        const novoTema = temaCurrent === 'dark' ? 'light' : 'dark';
        aplicarTema(novoTema);
    }
}

/**
 * FUNÇÃO: configurarEventListeners
 * Configura todos os event listeners necessários
 * 
 * @param {string} nomePerfil - Nome do perfil atual
 */
function configurarEventListeners(nomePerfil) {
    // ============================================================
    // LOGO - VOLTAR AOS PERFIS
    // ============================================================
    
    const logoBtn = document.getElementById('logoBtn');
    if (logoBtn) {
        logoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            voltarAosPerfis();
        });
    }
    
    // ============================================================
    // MENU DE PERFIL - SAIR/VOLTAR
    // ============================================================
    
    const profileMenu = document.getElementById('profileMenu');
    if (profileMenu) {
        profileMenu.addEventListener('click', (e) => {
            e.preventDefault();
            voltarAosPerfis();
        });
    }
}

/**
 * FUNÇÃO: voltarAosPerfis
 * Navega de volta para a página de seleção de perfis
 * Limpa dados do perfil ativo do localStorage
 */
function voltarAosPerfis() {
    // Limpar dados do perfil ativo
    localStorage.removeItem('perfilAtivoNome');
    localStorage.removeItem('perfilAtivoImagem');
    
    // Redirecionar para página de perfis (Steam Flix)
    // Ajuste o caminho conforme necessário
    window.location.href = '../index.html';
}
