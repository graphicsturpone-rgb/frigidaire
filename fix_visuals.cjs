const fs = require('fs');

const replacementHTML = `
    <section class="innovations-redesign">
        <div class="section-header">
            <div class="section-title">MEET OUR FAMILY'S FIRST INNOVATIONS</div>
        </div>
        
        <div class="innovations-main">
            <div class="innovations-container">
                <div class="innovations-text-wrapper">
                    <div class="innovations-title">
                        <h2>
                            <span class="text-solid-red">Weather Resistant</span>
                            <span class="text-hollow">Design with Energy</span>
                            <span class="text-hollow">Efficiency</span>
                        </h2>
                    </div>
                    <div class="innovations-desc">
                        <p>IPX4 water-resistant design with UL certification for safe, year-rounded outdoor use.</p>
                    </div>
                </div>
            </div>

            <div class="innovations-grill-image">
                <img src="/wp-content/uploads/2026/01/OPEN-GRILL-COOKING-FOOD-1.webp" alt="Weather Resistant Design" loading="lazy" />
            </div>

            <div class="innovations-slider-wrapper">
                <div class="swiper miniSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-FrontFace.webp" alt="Grill Front" loading="lazy" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-45d-TopLeft.webp" alt="Grill 45" loading="lazy" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/GRILL-OPNER-CLOSEUP-1.webp" alt="Grill Closeup" loading="lazy" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/OPEN-HEATED-GRILL-1.webp" alt="Open Heated Grill" loading="lazy" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-BackFace.webp" alt="Grill Back" loading="lazy" />
                        </div>
                    </div>
                </div>
                <!-- Navigation -->
                <div class="swiper-button-prev mini-prev"></div>
                <div class="swiper-button-next mini-next"></div>
            </div>
        </div>
    </section>
`;

function processAstroFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    const startIdx = content.indexOf('<section class="innovations-redesign">');
    const endIdx = content.indexOf('<!-- Getting Started Tabs -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + replacementHTML.trim() + '\n\n    ' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Updated HTML in", file);
    } else {
        console.log("Could not find section in", file);
    }
}

processAstroFile('src/pages/index.astro');
processAstroFile('src/pages/fr/index.astro');

// Now update CSS in Layout.astro
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const newCSS = `
        /* Awesome Innovations Redesign */
        .innovations-redesign {
            background: #ffffff;
        }
        .innovations-main {
            background: #f4f4f4;
            padding: 80px 0 100px 0;
            position: relative;
            overflow: hidden;
        }
        .innovations-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 10;
        }
        .innovations-text-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        .innovations-title h2 {
            font-size: 72px;
            line-height: 1.05;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -0.02em;
            margin: 0;
        }
        .text-solid-red {
            color: #DB4155;
            display: block;
        }
        .text-hollow {
            color: transparent;
            -webkit-text-stroke: 2px #b0b0b0;
            display: block;
        }
        .innovations-desc {
            max-width: 400px;
            padding-top: 15px;
        }
        .innovations-desc p {
            font-size: 20px;
            color: #444;
            font-weight: 500;
            line-height: 1.5;
        }
        .innovations-grill-image {
            position: relative;
            z-index: 5;
            text-align: center;
            margin-top: -100px; /* Pull the grill up behind/around the text slightly */
        }
        .innovations-grill-image img {
            max-width: 1100px;
            width: 100%;
            height: auto;
            display: inline-block;
        }
        .innovations-slider-wrapper {
            max-width: 900px;
            margin: -60px auto 0;
            position: relative;
            z-index: 10;
            padding: 0 60px;
        }
        .innovations-slider-wrapper .miniSwiper {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .miniSwiper .swiper-slide img {
            width: 100%;
            height: auto;
            display: block;
        }
        .mini-prev, .mini-next {
            color: #DB4155 !important;
            --swiper-navigation-size: 32px;
            width: 50px;
            height: 50px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .mini-prev {
            left: 0;
        }
        .mini-next {
            right: 0;
        }
        
        @media (max-width: 1024px) {
            .innovations-title h2 { font-size: 50px; }
            .innovations-grill-image img { max-width: 900px; }
        }
        
        @media (max-width: 768px) {
            .innovations-text-wrapper {
                flex-direction: column;
                text-align: center;
            }
            .innovations-title h2 { font-size: 40px; }
            .innovations-desc { max-width: 100%; margin-top: 20px; }
            .innovations-grill-image { margin-top: 0; }
            .innovations-slider-wrapper { margin-top: 20px; padding: 0 40px; }
            .mini-prev, .mini-next { transform: scale(0.8); }
        }
`;

// Remove the old CSS block
const oldCssStart = layout.indexOf('/* Redesigned Innovations Section */');
const oldCssEnd = layout.indexOf('</style>', oldCssStart);

if (oldCssStart !== -1 && oldCssEnd !== -1) {
    layout = layout.substring(0, oldCssStart) + newCSS + '\n    ' + layout.substring(oldCssEnd);
    fs.writeFileSync('src/layouts/Layout.astro', layout);
    console.log("Updated CSS in Layout.astro");
} else {
    console.log("Could not find old CSS block to replace");
}
