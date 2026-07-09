const fs = require('fs');

const replacementHTML = `
    <!-- Welcome Section Redesign -->
    <section class="welcome" style="background: white; padding: 100px 0;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: center;">
            <div>
                <h2 style="font-family: 'Montserrat', 'Gotham', sans-serif; font-size: 46px; font-weight: 800; line-height: 1.2; color: #2A2A2A; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
                    WELCOME<br>
                    TO FRIGIDAIRE<br>
                    <span style="color: #DB4155;">OUTDOOR LIVING</span>
                </h2>
            </div>
            <div style="padding-left: 20px;">
                <h3 style="font-family: 'Montserrat', 'Gotham', sans-serif; font-size: 18px; font-weight: 700; color: #333; margin-bottom: 20px;">
                    Where innovation meets the open air.
                </h3>
                <p style="font-family: 'Montserrat', 'Gotham', sans-serif; font-size: 15px; color: #666; line-height: 1.8; margin: 0;">
                    Building on over 100 years of trusted performance, Frigidaire is stepping outside &mdash; creating durable, high-performance outdoor solutions designed for effortless living.
                </p>
            </div>
        </div>
    </section>
`;

function processAstroFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    const startIdx = content.indexOf('<section class="welcome"');
    const endIdx = content.indexOf('<!-- Product Features Redesign -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + replacementHTML.trim() + '\n\n    ' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Updated HTML in", file);
    } else {
        console.log("Could not find welcome section bounds in", file);
    }
}

processAstroFile('src/pages/index.astro');
processAstroFile('src/pages/fr/index.astro');
