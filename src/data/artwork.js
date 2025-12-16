// src/data/artwork.js

export const ALL_ARTWORK = [
    // PAINTINGS
    { 
        id: 'p001', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Waves, 2023', 
        description: 'Pigment and acrylic medium on unstretched canvas,13 1/2" x 13 1/2.', 
        imageUrl: '/paintings/waves.webp', 
        linkUrl: '/paintings/waves.webp' 
    },
    { 
        id: 'p002', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Gallo', 
        description: 'Graphite on bristol board, 9" x 12"', 
        imageUrl: '/paintings/gallo.webp', 
        linkUrl: '/paintings/gallo.webp' 
    },
    { 
        id: 'p001', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Rise', 
        description: '', 
        imageUrl: '/paintings/unnamed-painting1.webp', 
        linkUrl: '/paintings/unnamed-painting1.webp' 
    },
    { 
        id: 'p001', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Boriken Dreams, 2021', 
        description: '', 
        imageUrl: '/paintings/unnamed-painting2.webp', 
        linkUrl: '/paintings/unnamed-painting2.webp' 
    },
    { 
        id: 'p001', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Blue Wide Open', 
        description: '', 
        imageUrl: '/paintings/unnamed-painting3.webp', 
        linkUrl: '/paintings/unnamed-painting3.webp' 
    },
    { 
        id: 'p001', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Visions, 1996', 
        description: '', 
        imageUrl: '/paintings/unnamed-painting4.webp', 
        linkUrl: '/paintings/unnamed-painting4.webp' 
    },
    // MURALS
    { 
        id: 'm001', 
        type: 'mural', // <-- CRITICAL: Use this for filtering
        title: 'Learners', 
        description: 'Large-scale outdoor mural painted in 2024.', 
        imageUrl: '/murals/learners.webp', 
        linkUrl: '/murals/learners.webp'
    },
    // PUBLIC ART
    { 
        id: 'pa001', 
        type: 'public-art', // <-- CRITICAL: Use this for filtering
        title: 'The Steel Garden', 
        description: 'Public metal installation, 2023.', 
        imageUrl: '/public-art/steel-garden.jpg', 
        linkUrl: '/public-art/steel-garden' 
    },
    // ... add all your other artwork here
];
