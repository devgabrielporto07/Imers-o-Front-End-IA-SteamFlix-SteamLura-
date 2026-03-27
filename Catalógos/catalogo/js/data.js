/**
 * DATA.JS - DADOS DO CATÁLOGO
 * 
 * Este arquivo gerencia os dados dos catálogos para cada perfil.
 * Cada perfil tem suas próprias categorias: Séries, Maratonas e Jogos Steam.
 * 
 * ESTRUTURA:
 * - perfilCatalogos: Objeto com dados de cada perfil
 * - title: Título da categoria
 * - items: Array com os itens (séries/jogos)
 * - img: URL da imagem
 * - badge: Texto do badge (novo, em alta, etc)
 */

export const perfilCatalogos = {
    // ============================================================
    // CATÁLOGO DO PEDRO
    // ============================================================
    Pedro: [
        {
            title: "Séries Favoritas",
            id: "séries",
            items: [
                {
                    img: "https://occ-0-4995-2992.1.nflxso.net/dnm/api/v6/E8vDc_W8ClH7NdL53tLEwg/AAAABaLvWNtd3GJMY503BtN7DOHn06V3qesK6mPPubordY5ZBPY3ftQJBXW9IaET4xygV-_qN1DaAqe-zylDHtmHNMHkyQ.jpg?r=a41",
                    badge: "Top Pedro",
                    badgeColor: "blue",
                    progress: 65,
                    youtube: "https://www.youtube.com/watch?v=b9EkMc5fvzQ"
                },
                {
                    img: "https://occ-0-4995-2992.1.nflxso.net/dnm/api/v6/tAx70bBAmKCNpDVaI6pN-g/AAAABbN9Ixz0w3Xuw0h9jMqO2JhbI-rkJKvs-8FKEKdqE1jFbA1VpJB5Xj3Qeo4vyaRnLr4CXwNeVXKoWDhb7z7a0AkxCg.jpg?r=7c6",
                    badge: "Assistindo",
                    badgeColor: "blue",
                    progress: 30,
                    youtube: "https://www.youtube.com/watch?v=BBwepxOK4fw"
                },
                {
                    img: "https://occ-0-4995-2992.1.nflxso.net/dnm/api/v6/ZsheaDApaEk3BjynEfsxa/AAAABQmljKsJ8shTqlNQJ5F9isKoi30G2tD8nYt_VGT9lJ4v0C3UkVMjK_rLFXqG_pLbT6rO-ow9MNhhLsV5x7-MgUpbUg.jpg?r=943",
                    badge: "Novo Ep.",
                    badgeColor: "blue",
                    progress: 80,
                    youtube: "https://www.youtube.com/watch?v=D-G-f6axVT8"
                },
                {
                    img: "https://occ-0-4995-2992.1.nflxso.net/dnm/api/v6/8z8zqALR01e88888888/AAAABWf0Sn8aK0d0d0d0d0d.jpg?r=000",
                    badge: "Nova Temp.",
                    badgeColor: "blue",
                    progress: 0,
                    youtube: "https://www.youtube.com/watch?v=eap-sVOFGOU"
                },
                {
                    img: "https://images.unsplash.com/photo-1536440936271-38c75010e6c9?q=80&w=600&auto=format&fit=crop",
                    badge: "Recomendado",
                    badgeColor: "blue",
                    progress: 45,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
            ]
        },
        {
            title: "Para Maratonar",
            id: "maratonas",
            items: [
                {
                    img: "https://images.unsplash.com/photo-1524712245610-cbfa9ab75b7f?q=80&w=600&auto=format&fit=crop",
                    badge: "8 Temp.",
                    badgeColor: "blue",
                    progress: 0,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1522869635100-ce306e08592d?q=80&w=600&auto=format&fit=crop",
                    badge: "Clássico",
                    badgeColor: "blue",
                    progress: 25,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
                    badge: "Épico",
                    badgeColor: "blue",
                    progress: 50,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
                    badge: "Viral",
                    badgeColor: "blue",
                    progress: 10,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
            ]
        },
        {
            title: "Jogos Steam",
            id: "jogos",
            items: [
                {
                    img: "https://images.unsplash.com/photo-1538481214726-bb32886cc773?q=80&w=600&auto=format&fit=crop",
                    badge: "Favorito",
                    badgeColor: "blue",
                    progress: 0,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop",
                    badge: "Em Jogo",
                    badgeColor: "blue",
                    progress: 45,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1460925895917-adf4e565f900?q=80&w=600&auto=format&fit=crop",
                    badge: "Soon",
                    badgeColor: "blue",
                    progress: 0,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1578303512414-52a28e92f84e?q=80&w=600&auto=format&fit=crop",
                    badge: "Indie",
                    badgeColor: "blue",
                    progress: 60,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
            ]
        }
    ],

    // ============================================================
    // CATÁLOGO DA ANA
    // ============================================================
    Ana: [
        {
            title: "Séries Favoritas",
            id: "séries",
            items: [
                {
                    img: "https://images.unsplash.com/photo-1564613535308-eb5fbd34d2a7?q=80&w=600&auto=format&fit=crop",
                    badge: "Top Ana",
                    badgeColor: "blue",
                    progress: 90,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1637346687695-eae4d974a50f?q=80&w=600&auto=format&fit=crop",
                    badge: "Drama",
                    badgeColor: "blue",
                    progress: 70,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1618945524163-32451704ffa6?q=80&w=600&auto=format&fit=crop",
                    badge: "Romance",
                    badgeColor: "blue",
                    progress: 40,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=600&auto=format&fit=crop",
                    badge: "Novo",
                    badgeColor: "blue",
                    progress: 15,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                    badge: "Favorito",
                    badgeColor: "blue",
                    progress: 100,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
            ]
        },
        {
            title: "Para Maratonar",
            id: "maratonas",
            items: [
                {
                    img: "https://images.unsplash.com/photo-1599239457265-60dcd9eb63f6?q=80&w=600&auto=format&fit=crop",
                    badge: "Comédia",
                    badgeColor: "blue",
                    progress: 0,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1583265479519-4f1d77b4dbda?q=80&w=600&auto=format&fit=crop",
                    badge: "Suspense",
                    badgeColor: "blue",
                    progress: 55,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                    badge: "Fantasia",
                    badgeColor: "blue",
                    progress: 35,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1471922534545-0ff6dcd3c38e?q=80&w=600&auto=format&fit=crop",
                    badge: "Clássico",
                    badgeColor: "blue",
                    progress: 20,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
            ]
        },
        {
            title: "Jogos Steam",
            id: "jogos",
            items: [
                {
                    img: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=600&auto=format&fit=crop",
                    badge: "Puzzle",
                    badgeColor: "blue",
                    progress: 75,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1559954511-cd4628902c4a?q=80&w=600&auto=format&fit=crop",
                    badge: "Casual",
                    badgeColor: "blue",
                    progress: 50,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1538481214726-bb32886cc773?q=80&w=600&auto=format&fit=crop",
                    badge: "Aventura",
                    badgeColor: "blue",
                    progress: 30,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
                    badge: "RPG",
                    badgeColor: "blue",
                    progress: 0,
                    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
            ]
        }
    ]
};

/**
 * FUNÇÃO: obterCatalogoPorPerfil
 * Retorna o catálogo específico de um perfil
 * 
 * @param {string} nomePerfil - Nome do perfil (Pedro ou Ana)
 * @returns {array} - Array com as categorias do perfil
 */
export function obterCatalogoPorPerfil(nomePerfil) {
    return perfilCatalogos[nomePerfil] || perfilCatalogos.Pedro;
}
