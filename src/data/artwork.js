// src/data/artwork.js

export const ALL_ARTWORK = [
    // PAINTINGS
    { 
        id: 'p001', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Waves, 2023', 
        description: 'Pigment and acrylic medium on unstretched canvas,13 1/2" x 13 1/2.', 
        imageUrl: '/public/paintings/waves.webp', 
        linkUrl: '/public/paintings/waves.webp' 
    },
    { 
        id: 'p002', 
        type: 'painting', // <-- CRITICAL: Use this for filtering
        title: 'Gallo', 
        description: 'Graphite on bristol board, 9" x 12"', 
        imageUrl: '/public/paintings/gallo.webp', 
        linkUrl: '/public/paintings/gallo.webp' 
    },
    // MURALS
    { 
        id: 'm001', 
        type: 'mural', // <-- CRITICAL: Use this for filtering
        title: 'Learners', 
        description: 'Large-scale outdoor mural painted in 2024.', 
        imageUrl: '/public/murals/learners.webp', 
        linkUrl: '/public/murals/learners.webp'
    },
    // PUBLIC ART
    { 
        id: 'pa001', 
        type: 'public-art', // <-- CRITICAL: Use this for filtering
        title: 'The Steel Garden', 
        description: 'Public metal installation, 2023.', 
        imageUrl: '/images/public-art/steel-garden.jpg', 
        linkUrl: '/public-art/steel-garden' 
    },
    // ... add all your other artwork here
];