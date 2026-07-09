const fs = require('fs');

const replacementHTML = `
    <!-- Welcome Section Redesign (Inline) -->
    <section class="welcome" style="background: white; padding: 100px 0;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: center;">
            <div style="display: flex; flex-direction: column;">
                <h2 style="font-family: 'Gotham', sans-serif; font-size: 52px; font-weight: 800; line-height: 1.1; color: #333; margin: 0; text-transform: uppercase;">
                    WELCOME<br/>
                    TO FRIGIDAIRE<br/>
                    <span style="color: #DB4155;">OUTDOOR LIVING</span>
                </h2>
            </div>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <h3 style="font-family: 'Gotham', sans-serif; font-size: 24px; font-weight: 700; color: #333; margin: 0;">
                    Where innovation meets the open air.
                </h3>
                <p style="font-family: 'Gotham', sans-serif; font-size: 16px; color: #666; line-height: 1.8; margin: 0;">
                    Building on over 100 years of trusted performance, Frigidaire is stepping outside &mdash; creating durable, high-performance outdoor solutions designed for effortless living.
                </p>
            </div>
        </div>
    </section>
`;

function processAstroFile(file, isFrench) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the boundary to replace EVERYTHING between hero and features
    const startMarker = '    <!-- Hero Section -->';
    const endMarker = '    <!-- Product Features Redesign -->';
    
    const heroStartIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker);
    
    if (heroStartIdx !== -1 && endIdx !== -1) {
        // Find the end of the Hero Section itself
        const heroEndIdx = content.indexOf('</section>', heroStartIdx) + 10;
        
        let finalHTML = replacementHTML;
        if (isFrench) {
            finalHTML = finalHTML.replace('Where innovation meets the open air.', "L'o&#249; l'innovation rencontre le plein air.");
            finalHTML = finalHTML.replace('Building on over 100 years of trusted performance, Frigidaire is stepping outside &mdash; creating durable, high-performance outdoor solutions designed for effortless living.', "Avec plus de 100 ans de performance reconnue, Frigidaire sort &#224; l'ext&#233;rieur &mdash; en cr&#233;ant des solutions ext&#233;rieures durables et hautement performantes, con&#231;ues pour une vie sans effort.");
        }
        
        content = content.substring(0, heroEndIdx) + '\n\n' + finalHTML.trim() + '\n\n' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Successfully replaced Welcome section in", file);
    } else {
        console.log("Could not find bounds in", file);
    }
}

processAstroFile('src/pages/index.astro', false);
processAstroFile('src/pages/fr/index.astro', true);
