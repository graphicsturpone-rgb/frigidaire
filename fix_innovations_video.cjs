const fs = require('fs');

const replacementHTML = `
    <!-- Weather Resistant Design Video Section -->
    <section class="bg-[#f8f8f8] py-20 overflow-hidden">
        <div class="max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            <!-- Left Text -->
            <div class="flex flex-col justify-center lg:pr-8">
                <h2 class="text-5xl md:text-6xl font-extrabold text-[#DB4155] leading-[1.1] uppercase font-['Gotham',sans-serif] tracking-tight">
                    WEATHER<br/>
                    RESISTANT<br/>
                    DESIGN
                </h2>
                <h3 class="text-3xl md:text-4xl font-bold text-[#555555] leading-tight uppercase font-['Gotham',sans-serif] mt-4">
                    WITH<br/>
                    ENERGY<br/>
                    EFFICIENCY
                </h3>
            </div>

            <!-- Middle Video -->
            <div class="flex justify-center items-center relative z-10">
                <div class="bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full max-w-[500px]">
                    <video 
                        src="https://media.frigidaireoutdoorliving.com/ENG-LAST-FEATURES-VID.mp4" 
                        autoplay 
                        loop 
                        muted 
                        playsinline 
                        class="w-full h-auto object-cover"
                    ></video>
                </div>
            </div>

            <!-- Right Text -->
            <div class="flex flex-col justify-start lg:pl-8 pt-8 lg:pt-0">
                <p class="text-[#444444] text-lg md:text-xl font-medium leading-relaxed font-['Gotham',sans-serif]">
                    IPx4 water-resistant design with UL certification for safe, year-rounded outdoor use.
                </p>
            </div>

        </div>
    </section>
`;

function processAstroFile(file, isFrench) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the boundary to replace the old innovations section
    // The old one starts with <section class="innovations-redesign"
    // And ends right before <section class="getting-started">
    const startMarker = '    <!-- Product Features Redesign -->';
    const endMarker = '    <section class="getting-started">';
    
    const startIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker);
    
    if (startIdx !== -1 && endIdx !== -1) {
        let finalHTML = replacementHTML;
        if (isFrench) {
            finalHTML = finalHTML.replace('WEATHER<br/>\\n                    RESISTANT<br/>\\n                    DESIGN', "CONCEPTION<br/>\\nR&#201;SISTANTE<br/>\\nAUX INTEMP&#201;RIES");
            finalHTML = finalHTML.replace('WITH<br/>\\n                    ENERGY<br/>\\n                    EFFICIENCY', "AVEC<br/>\\nEFFICACIT&#201;<br/>\\n&#201;NERG&#201;TIQUE");
            finalHTML = finalHTML.replace('IPx4 water-resistant design with UL certification for safe, year-rounded outdoor use.', "Conception r&#233;sistante &#224; l'eau IPx4 avec certification UL pour une utilisation en ext&#233;rieur s&#251;re tout au long de l'ann&#233;e.");
        }
        
        content = content.substring(0, startIdx) + '    <!-- Weather Resistant Design Section (Tailwind CSS) -->\n' + finalHTML.trim() + '\n\n' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Successfully replaced Innovations section in", file);
    } else {
        console.log("Could not find bounds in", file);
    }
}

processAstroFile('src/pages/index.astro', false);
// Let's do a slightly different replace for French since the whitespace might not perfectly match
let frContent = fs.readFileSync('src/pages/fr/index.astro', 'utf8');
const startIdx = frContent.indexOf('    <!-- Product Features Redesign -->');
const endIdx = frContent.indexOf('    <section class="getting-started">');
if (startIdx !== -1 && endIdx !== -1) {
    let finalHTML = replacementHTML;
    finalHTML = finalHTML.replace('WEATHER<br/>\n                    RESISTANT<br/>\n                    DESIGN', "CONCEPTION<br/>\nR&#201;SISTANTE<br/>\nAUX INTEMP&#201;RIES");
    finalHTML = finalHTML.replace('WITH<br/>\n                    ENERGY<br/>\n                    EFFICIENCY', "AVEC<br/>\nEFFICACIT&#201;<br/>\n&#201;NERG&#201;TIQUE");
    finalHTML = finalHTML.replace('IPx4 water-resistant design with UL certification for safe, year-rounded outdoor use.', "Conception r&#233;sistante &#224; l'eau IPx4 avec certification UL pour une utilisation en ext&#233;rieur s&#251;re tout au long de l'ann&#233;e.");
    
    frContent = frContent.substring(0, startIdx) + '    <!-- Weather Resistant Design Section (Tailwind CSS) -->\n' + finalHTML.trim() + '\n\n' + frContent.substring(endIdx);
    fs.writeFileSync('src/pages/fr/index.astro', frContent);
    console.log("Successfully replaced Innovations section in src/pages/fr/index.astro");
}
