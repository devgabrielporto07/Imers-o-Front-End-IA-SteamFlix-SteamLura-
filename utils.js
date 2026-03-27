/**
 * UTILS.JS - FUNÇÕES UTILITÁRIAS DO CATÁLOGO
 * 
 * Este módulo contém funções auxiliares reutilizáveis para:
 * - Extrair IDs de URLs do YouTube
 * - Gerar dados aleatórios (score, duração, classificação)
 * - Simular conteúdo dinâmico
 */

/**
 * FUNÇÃO: getYouTubeId
 * Extrai o ID do vídeo de uma URL do YouTube
 * 
 * Suporta formatos:
 * - https://www.youtube.com/watch?v=ID
 * - https://youtu.be/ID
 * - ID direto
 * 
 * @param {string} url - URL do YouTube ou ID
 * @returns {string} - ID do vídeo (padrão: 7RUA0IOfar8)
 */
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

/**
 * FUNÇÃO: getRandomMatchScore
 * Gera um score aleatório de relevância entre 80-100%
 * Simula compatibilidade do conteúdo com o usuário
 * 
 * @returns {number} - Score entre 80 e 100
 */
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

/**
 * FUNÇÃO: getRandomDuration
 * Gera duração aleatória baseada no tipo de conteúdo
 * - Com progresso: Número de temporadas
 * - Sem progresso: Duração em horas e minutos
 * 
 * @param {number} hasProgress - Se tem barra de progresso (série vs jogo)
 * @returns {string} - Duração formatada ("10 temporadas" ou "2h 45m")
 */
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

/**
 * FUNÇÃO: getRandomAgeBadge
 * Gera um badge de classificação etária aleatoriamente
 * - 50% de chance: A16 (com aviso de conteúdo)
 * - 50% de chance: 16 (classificação padrão)
 * 
 * @returns {object} - Objeto com { text: string, class: string }
 *   - text: Texto do badge ("A16" ou "16")
 *   - class: Classe CSS ("red-accent" para A16, vazio para 16)
 */
export function getRandomAgeBadge() {
    return Math.random() > 0.5 
        ? { text: 'A16', class: 'red-accent' } 
        : { text: '16', class: '' };
}
