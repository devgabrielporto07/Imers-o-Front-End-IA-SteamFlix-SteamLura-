/**
 * CARD.JS - CRIA CARTÃO INDIVIDUAL DE CONTEÚDO
 * 
 * Este módulo gerencia a criação e interação de cada cartão de série/jogo.
 * Cada cartão tem:
 * - Imagem de capa
 * - Reprodutor de vídeo (YouTube) em hover
 * - Detalhes interativos (botões, badge, progresso)
 * 
 * INTERAÇÕES:
 * - Mouse enter: Reproduz preview em YouTube
 * - Mouse leave: Para reprodução
 * - Detalhes aparecem ao passar o mouse
 */

import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

/**
 * FUNÇÃO: createCard
 * Cria um cartão individual de conteúdo
 * 
 * @param {object} item - Objeto com: img, youtube, badge, progress
 * @returns {HTMLElement} - Div contendo o cartão completo
 */
export function createCard(item) {
    // ============================================================
    // CRIAR ELEMENTO CARD
    // ============================================================
    
    const card = document.createElement('div');
    card.className = 'movie-card';
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // ============================================================
    // IMAGEM DO CARTÃO
    // ============================================================
    
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Capa de ${item.title || 'conteúdo'}`;

    // ============================================================
    // IFRAME PARA VIDEO DO YOUTUBE (OCULTO ATÉ HOVER)
    // ============================================================
    
    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    const videoId = getYouTubeId(item.youtube);

    card.appendChild(iframe);
    card.appendChild(img);

    const ageBadge = getRandomAgeBadge();

    // ============================================================
    // PAINEL DE DETALHES (HOVER)
    // ============================================================
    
    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon" title="Reproduzir"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon" title="Assistido"><i class="fas fa-check"></i></button>' : '<button class="btn-icon" title="Adicionar"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon" title="Favoritar"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon" title="Mais informações"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    card.appendChild(details);

    // ============================================================
    // BARRA DE PROGRESSO (OPCIONAL)
    // ============================================================
    
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    // ============================================================
    // INTERAÇÕES DO MOUSE
    // ============================================================
    
    let playTimeout;
    
    /**
     * Ao passar o mouse - Reproduzir vídeo
     * Verifica posição para evitar sair da tela
     */
    card.addEventListener('mouseenter', () => {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        // Ajustar ponto de origem para transformação
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Aguardar 600ms antes de reproduzir vídeo
        playTimeout = setTimeout(() => {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 600);
    });

    /**
     * Ao sair do mouse - Parar vídeo
     */
    card.addEventListener('mouseleave', () => {
        clearTimeout(playTimeout);
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        iframe.src = "";
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    return card;
}
