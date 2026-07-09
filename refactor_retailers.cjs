const fs = require('fs');

const replacementRetailersEn = `
    <!-- Where to Buy (Tailwind CSS) -->
    <section class="bg-white py-20" id="where-to-buy">
        <div class="max-w-7xl mx-auto px-5 md:px-10 text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold text-[#333] mb-2 uppercase font-['Gotham',sans-serif]">
                <span class="text-[#DB4155]">AVAILABLE</span> AT
            </h2>
            <h3 class="text-3xl font-bold text-[#333] mb-12 uppercase font-['Gotham',sans-serif]">
                TRUSTED RETAILERS
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {retailers.map((retailer) => {
                    // Extract data to handle both real collections and dummy data
                    const url = retailer.data?.url || '#';
                    const name = retailer.data?.name || 'Retailer';
                    const availability = retailer.data?.availability || 'Coming Soon';
                    const hoverBg = retailer.data?.hover_bg_color || '#DB4155';
                    const defaultImg = retailer.data?.default_image || retailer.data?.default_image_url || '';
                    const hoverImg = retailer.data?.hover_image || retailer.data?.hover_image_url || '';
                    
                    const isWhiteBg = hoverBg.toLowerCase() === '#fff' || hoverBg.toLowerCase() === '#ffffff';
                    
                    return (
                        <a href={url} target="_blank" rel="noopener" aria-label={\`Buy \${name} - \${availability}\`} class="group relative flex flex-col rounded-xl overflow-hidden bg-[#f5f5f5] cursor-pointer transition-colors duration-300 hover:bg-[var(--hover-bg)]" style={\`--hover-bg: \${hoverBg};\`}>
                            
                            <!-- Image Wrap -->
                            <div class="relative w-full h-[200px] overflow-hidden group-hover:bg-[var(--hover-bg)] transition-colors duration-300">
                                <img src={defaultImg} alt={name} class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" loading="lazy" width="600" height="160" />
                                <img src={hoverImg} alt={name} class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" loading="lazy" width="600" height="160" />
                            </div>
                            
                            <!-- Info Wrap -->
                            <div class="relative flex-grow p-6 pb-24 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 class="text-3xl font-extrabold text-[#333] mb-2 font-['Gotham',sans-serif]">{name}</h3>
                                <p class="text-[#DB4155] text-sm">{availability}</p>
                            </div>
                            
                            <!-- Button Wrap -->
                            <div class="absolute bottom-6 left-6 right-6">
                                <div class={\`w-full py-3 rounded-full text-center font-bold border-2 transition-all duration-300 \${isWhiteBg ? 'bg-[#DB4155] border-[#DB4155] text-white group-hover:bg-transparent group-hover:text-[#DB4155]' : 'bg-[#DB4155] border-[#DB4155] text-white group-hover:bg-transparent group-hover:border-white group-hover:text-white'}\`}>BUY NOW</div>
                            </div>
                            
                        </a>
                    );
                })}
            </div>
        </div>
    </section>
`;

const replacementRetailersFr = `
    <!-- Where to Buy (Tailwind CSS) -->
    <section class="bg-white py-20" id="where-to-buy">
        <div class="max-w-7xl mx-auto px-5 md:px-10 text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold text-[#333] mb-2 uppercase font-['Gotham',sans-serif]">
                <span class="text-[#DB4155]">DISPONIBLE</span> CHEZ
            </h2>
            <h3 class="text-3xl font-bold text-[#333] mb-12 uppercase font-['Gotham',sans-serif]">
                NOS DÉTAILLANTS DE CONFIANCE
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {retailers.map((retailer) => {
                    const url = retailer.data?.url || '#';
                    const name = retailer.data?.name || 'Retailer';
                    const availability = retailer.data?.availability_fr || retailer.data?.availability || 'À venir';
                    const hoverBg = retailer.data?.hover_bg_color || '#DB4155';
                    const defaultImg = retailer.data?.default_image || retailer.data?.default_image_url || '';
                    const hoverImg = retailer.data?.hover_image || retailer.data?.hover_image_url || '';
                    
                    const isWhiteBg = hoverBg.toLowerCase() === '#fff' || hoverBg.toLowerCase() === '#ffffff';
                    
                    return (
                        <a href={url} target="_blank" rel="noopener" aria-label={\`Acheter \${name} - \${availability}\`} class="group relative flex flex-col rounded-xl overflow-hidden bg-[#f5f5f5] cursor-pointer transition-colors duration-300 hover:bg-[var(--hover-bg)]" style={\`--hover-bg: \${hoverBg};\`}>
                            
                            <div class="relative w-full h-[200px] overflow-hidden group-hover:bg-[var(--hover-bg)] transition-colors duration-300">
                                <img src={defaultImg} alt={name} class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" loading="lazy" width="600" height="160" />
                                <img src={hoverImg} alt={name} class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" loading="lazy" width="600" height="160" />
                            </div>
                            
                            <div class="relative flex-grow p-6 pb-24 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 class="text-3xl font-extrabold text-[#333] mb-2 font-['Gotham',sans-serif]">{name}</h3>
                                <p class="text-[#DB4155] text-sm">{availability}</p>
                            </div>
                            
                            <div class="absolute bottom-6 left-6 right-6">
                                <div class={\`w-full py-3 rounded-full text-center font-bold border-2 transition-all duration-300 \${isWhiteBg ? 'bg-[#DB4155] border-[#DB4155] text-white group-hover:bg-transparent group-hover:text-[#DB4155]' : 'bg-[#DB4155] border-[#DB4155] text-white group-hover:bg-transparent group-hover:border-white group-hover:text-white'}\`}>ACHETER</div>
                            </div>
                            
                        </a>
                    );
                })}
            </div>
        </div>
    </section>
`;

function processAstroFile(file, isFrench) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the where-to-buy section
    const startIdx = content.indexOf('    <!-- Where to Buy -->');
    const endIdx = content.indexOf('    <!-- FAQ Section -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        let finalHTML = isFrench ? replacementRetailersFr : replacementRetailersEn;
        content = content.substring(0, startIdx) + finalHTML.trim() + '\n\n' + content.substring(endIdx);
        fs.writeFileSync(file, content);
    }
}

processAstroFile('src/pages/index.astro', false);
processAstroFile('src/pages/fr/index.astro', true);
