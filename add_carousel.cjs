const fs = require('fs');

const replacementCarousel = `
    <!-- Image Carousel (Tailwind CSS) -->
    <section class="bg-white py-16">
        <div class="relative max-w-7xl mx-auto px-10 md:px-16">
            <div class="swiper mySwiper w-full h-full">
                <div class="swiper-wrapper">
                    <div class="swiper-slide flex justify-center items-center text-center">
                        <img src="/wp-content/uploads/2026/01/OPEN-GRILL-COOKING-FOOD-1.webp" alt="Open Grill Cooking Food" loading="lazy" width="1200" height="800" class="w-full h-auto object-cover">
                    </div>
                    <div class="swiper-slide flex justify-center items-center text-center">
                        <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-FrontFace.webp" alt="Grill Front Face" loading="lazy" width="1200" height="800" class="w-full h-auto object-cover">
                    </div>
                    <div class="swiper-slide flex justify-center items-center text-center">
                        <img src="/wp-content/uploads/2026/01/GRILL-OPNER-CLOSEUP-1.webp" alt="Grill Opener Closeup" loading="lazy" width="1200" height="800" class="w-full h-auto object-cover">
                    </div>
                    <div class="swiper-slide flex justify-center items-center text-center">
                        <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-45d-TopLeft.webp" alt="Grill 45 Degree View" loading="lazy" width="1200" height="800" class="w-full h-auto object-cover">
                    </div>
                    <div class="swiper-slide flex justify-center items-center text-center">
                        <img src="/wp-content/uploads/2026/01/OPEN-HEATED-GRILL-1.webp" alt="Open Heated Grill" loading="lazy" width="1200" height="800" class="w-full h-auto object-cover">
                    </div>
                    <div class="swiper-slide flex justify-center items-center text-center">
                        <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-BackFace.webp" alt="Grill Back Face" loading="lazy" width="1200" height="800" class="w-full h-auto object-cover">
                    </div>
                </div>
                <div class="swiper-button-prev !text-[#DB4155] after:!text-2xl after:!font-bold"></div>
                <div class="swiper-button-next !text-[#DB4155] after:!text-2xl after:!font-bold"></div>
            </div>
        </div>
    </section>
`;

function processAstroFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Insert before getting-started
    const targetIdx = content.indexOf('    <section class="getting-started">');
    
    if (targetIdx !== -1) {
        content = content.substring(0, targetIdx) + replacementCarousel + '\n\n' + content.substring(targetIdx);
        fs.writeFileSync(file, content);
    }
}

processAstroFile('src/pages/index.astro');
processAstroFile('src/pages/fr/index.astro');
