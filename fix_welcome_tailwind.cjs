const fs = require('fs');

const replacementHTML = `
    <!-- Welcome Section Redesign (Tailwind CSS) -->
    <section class="bg-white py-24 px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div class="flex flex-col">
                <h2 class="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight uppercase font-['Gotham',sans-serif]">
                    WELCOME<br/>
                    TO FRIGIDAIRE<br/>
                    <span class="text-[#DB4155]">OUTDOOR LIVING</span>
                </h2>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="text-xl md:text-2xl font-bold text-[#333333] font-['Gotham',sans-serif]">
                    Where innovation meets the open air.
                </h3>
                <p class="text-[#666666] text-base leading-relaxed font-['Gotham',sans-serif]">
                    Building on over 100 years of trusted performance, Frigidaire is stepping outside &mdash; creating durable, high-performance outdoor solutions designed for effortless living.
                </p>
            </div>
        </div>
    </section>
`;

function processAstroFile(file, isFrench) {
    let content = fs.readFileSync(file, 'utf8');
    
    const startIdx = content.indexOf('<section class="welcome"');
    const endIdx = content.indexOf('<!-- Product Features Redesign -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        let finalHTML = replacementHTML;
        if (isFrench) {
            finalHTML = finalHTML.replace('Where innovation meets the open air.', "L'o&#249; l'innovation rencontre le plein air.");
            finalHTML = finalHTML.replace('Building on over 100 years of trusted performance, Frigidaire is stepping outside &mdash; creating durable, high-performance outdoor solutions designed for effortless living.', "Avec plus de 100 ans de performance reconnue, Frigidaire sort &#224; l'ext&#233;rieur &mdash; en cr&#233;ant des solutions ext&#233;rieures durables et hautement performantes, con&#231;ues pour une vie sans effort.");
        }
        
        content = content.substring(0, startIdx) + finalHTML.trim() + '\n\n    ' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Updated HTML in", file);
    } else {
        console.log("Could not find welcome section bounds in", file);
    }
}

processAstroFile('src/pages/index.astro', false);
processAstroFile('src/pages/fr/index.astro', true);
