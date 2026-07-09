const fs = require('fs');

const replacementFeatures = `
    <!-- Product Features Section (Tailwind CSS) -->
    <section class="bg-white pt-20" id="product">
        <div class="text-center">
            <div class="bg-[#DB4155] text-white py-4 px-8 block w-full text-lg font-semibold uppercase tracking-widest">
                MEET OUR FAMILY-FIRST INNOVATIONS
            </div>
        </div>
        <div class="w-full text-center">
            <video autoplay loop muted playsinline class="w-full h-auto block">
                <source src="https://media.frigidaireoutdoorliving.com/ENG-LAST-FEATURES-VID.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </section>
`;

function processAstroFile(file, isFrench) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the old innovations section
    const startMarker = '    <!-- Weather Resistant Design Section (Tailwind CSS) -->';
    const endMarker = '    <section class="getting-started">';
    
    const startIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker);
    
    if (startIdx !== -1 && endIdx !== -1) {
        let finalHTML = replacementFeatures;
        if (isFrench) {
            finalHTML = finalHTML.replace('MEET OUR FAMILY-FIRST INNOVATIONS', "D&#201;COUVREZ NOS INNOVATIONS POUR LA FAMILLE");
        }
        content = content.substring(0, startIdx) + finalHTML.trim() + '\n\n' + content.substring(endIdx);
        fs.writeFileSync(file, content);
    }
}

processAstroFile('src/pages/index.astro', false);
processAstroFile('src/pages/fr/index.astro', true);
