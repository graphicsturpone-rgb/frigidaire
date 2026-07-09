const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const newCSS = `
        /* Redesigned Innovations Section */
        .innovations-redesign {
            background: #f8f8f8;
            position: relative;
            padding-bottom: 50px;
        }
        .innovations-content {
            max-width: 1300px;
            margin: 0 auto;
            padding: 60px 20px 20px 20px;
        }
        .innovations-text-grid {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: -150px;
            position: relative;
            z-index: 2;
        }
        .innovations-title h2 {
            font-size: 52px;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }
        .innovations-desc {
            max-width: 350px;
            font-size: 16px;
            color: #666;
            font-weight: 600;
            line-height: 1.5;
            padding-top: 10px;
        }
        .innovations-center-image {
            text-align: center;
            position: relative;
            z-index: 1;
        }
        .innovations-center-image img {
            max-width: 75%;
            height: auto;
            display: inline-block;
        }
        .mini-carousel-container {
            max-width: 900px;
            margin: 40px auto 0;
            position: relative;
            padding: 0 50px;
        }
        .miniSwiper {
            width: 100%;
        }
        .miniSwiper .swiper-slide {
            text-align: center;
        }
        .miniSwiper .swiper-slide img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .mini-prev, .mini-next {
            color: #DB4155;
            --swiper-navigation-size: 24px;
        }
        @media (max-width: 768px) {
            .innovations-text-grid {
                flex-direction: column;
                margin-bottom: 0;
                text-align: center;
            }
            .innovations-title h2 {
                font-size: 36px;
            }
            .innovations-desc {
                margin: 20px auto 0;
            }
            .innovations-center-image img {
                max-width: 100%;
            }
        }
`;

// Insert the new CSS before </style>
layout = layout.replace('</style>', newCSS + '\n    </style>');

// Update Swiper script
const newScript = `
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    });

    var miniSwiper = new Swiper(".miniSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".mini-next",
            prevEl: ".mini-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });
`;

layout = layout.replace(/var swiper = new Swiper[\s\S]*?\}\);/, newScript);

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Layout.astro updated with new CSS and JS');
