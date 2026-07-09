const fs = require('fs');

const replacementHTML = `
    <!-- Welcome Section Redesign -->
    <section class="welcome" style="background: white; padding: 100px 0;">
        <div style="max-width: 1300px; margin: 0 auto; padding: 0 40px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 80px;">
            <!-- Left Text -->
            <div style="flex: 1; min-width: 300px;">
                <h2 style="font-size: 42px; font-weight: 800; line-height: 1.3; color: #333; margin: 0;">
                    WELCOME<br/>
                    TO FRIGIDAIRE<br/>
                    <span style="color: #DB4155;">OUTDOOR LIVING</span>
                </h2>
            </div>
            
            <!-- Right Text -->
            <div style="flex: 1.2; min-width: 300px; padding-top: 10px;">
                <h3 style="font-size: 18px; font-weight: 700; color: #333; margin-bottom: 15px;">Where innovation meets the open air.</h3>
                <p style="font-size: 15px; color: #555; line-height: 1.8; margin: 0; max-width: 650px;">
                    Building on over 100 years of trusted performance, Frigidaire is stepping outside — creating durable, high-performance outdoor solutions designed for effortless living.
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
