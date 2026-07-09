const fs = require('fs');

const replacement = `
    <section class="innovations-redesign">
        <div class="section-header">
            <div class="section-title">MEET OUR FAMILY-FIRST INNOVATIONS</div>
        </div>
        <div class="innovations-content">
            <div class="container">
                <div class="innovations-text-grid">
                    <div class="innovations-title">
                        <h2>
                            <span style="color: #DB4155; font-weight: 700;">Weather Resistant</span><br>
                            <span style="color: #e5e5e5; font-weight: 700;">Design</span> <span style="color: #b3b3b3; font-weight: 700;">with Energy</span><br>
                            <span style="color: #e5e5e5; font-weight: 700;">Efficiency</span>
                        </h2>
                    </div>
                    <div class="innovations-desc">
                        <p>IPx4 water-resistant design with UL certification for safe, year-rounded outdoor use.</p>
                    </div>
                </div>
            </div>
            
            <div class="innovations-center-image">
                <img src="/wp-content/uploads/2026/01/OPEN-GRILL-COOKING-FOOD-1.webp" alt="Weather Resistant Design" loading="lazy" width="1200" height="800" />
            </div>
            
            <div class="mini-carousel-container">
                <div class="swiper miniSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-FrontFace.webp" alt="Grill Front Face" loading="lazy" width="1200" height="800" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-45d-TopLeft.webp" alt="Grill 45 Degree View" loading="lazy" width="1200" height="800" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/GRILL-OPNER-CLOSEUP-1.webp" alt="Grill Opener Closeup" loading="lazy" width="1200" height="800" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/OPEN-HEATED-GRILL-1.webp" alt="Open Heated Grill" loading="lazy" width="1200" height="800" />
                        </div>
                        <div class="swiper-slide">
                            <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-BackFace.webp" alt="Grill Back Face" loading="lazy" width="1200" height="800" />
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev mini-prev"></div>
                <div class="swiper-button-next mini-next"></div>
            </div>
        </div>
    </section>
`;

function processFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find where <section class="product-features" starts
    const startIdx = content.indexOf('<section class="product-features"');
    
    // Find where <!-- Getting Started Tabs --> starts
    const endIdx = content.indexOf('<!-- Getting Started Tabs -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + replacement.trim() + '\n\n    ' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Updated", file);
    } else {
        console.log("Could not find boundaries in", file);
    }
}

processFile('src/pages/index.astro');
processFile('src/pages/fr/index.astro');
