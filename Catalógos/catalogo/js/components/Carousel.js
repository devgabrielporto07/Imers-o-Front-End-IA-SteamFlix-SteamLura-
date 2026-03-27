/**
 * CAROUSEL.JS - CRIA CARROSSEL PARA CADA CATEGORIA
 * 
 * Este módulo cria a estrutura visual de cada carrossel de conteúdo.
 * Cada categoria tem seu próprio carrossel com título, indicadores e cards.
 * 
 * ESTRUTURA CRIADA:
 * - Section: Container da categoria
 * - Header: Título e indicadores
 * - Row: Container horizontal dos cards
 */

import { createCard } from './Card.js';

/**
 * FUNÇÃO: createCarousel
 * Cria um carrossel completo para uma categoria
 * 
 * @param {object} category - Objeto da categoria com title, items, e id
 * @returns {HTMLElement} - Section contendo o carrossel
 */
export function createCarousel(category) {
    // Criar container da seção
    const section = document.createElement('div');
    section.className = 'slider-section';
    section.id = category.id || ''; // Adicionar ID para anchor links

    // ============================================================
    // HEADER - TÍTULO E INDICADORES
    // ============================================================
    
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    // ============================================================
    // ROW - CONTAINER DE CARDS
    // ============================================================
    
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Criar card para cada item da categoria
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}
