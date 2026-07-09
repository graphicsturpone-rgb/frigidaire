const fs = require('fs');

const replacementHTML = `
    <!-- Product Features Redesign -->
    <section class="innovations-redesign" style="background: #f8f8f8; overflow: hidden; padding-bottom: 60px;">
        <div class="section-header" style="text-align: center; margin-bottom: 0;">
            <div class="section-title" style="background: #DB4155; color: white; padding: 15px 30px; display: block; width: 100%; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">MEET OUR FAMILY-FIRST INNOVATIONS</div>
        </div>
        
        <div style="max-width: 1400px; margin: 60px auto 0; padding: 0 40px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 40px;">
            
            <!-- Left Text -->
            <div style="flex: 1; min-width: 280px; max-width: 350px;">
                <h2 style="font-size: 52px; font-weight: 900; line-height: 1.1; margin: 0; text-transform: uppercase;">
                    <span style="color: #DB4155; display: block;">Weather Resistant</span>
                    <span style="color: #DB4155; display: block;">Design</span>
                    <span style="color: #555; display: block; font-size: 42px; margin-top: 10px;">with Energy</span>
                    <span style="color: #555; display: block; font-size: 42px;">Efficiency</span>
                </h2>
            </div>

            <!-- Center Content (Grill + Slider) -->
            <div style="flex: 2; min-width: 400px; text-align: center; position: relative;">
                <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-FrontFace.webp" alt="Weather Resistant Grill" loading="lazy" style="max-width: 100%; height: auto; margin-top: -20px; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15));" />
                
                <!-- Mini Slider Container -->
                <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 20px;">
                    <div style="color: #DB4155; font-size: 30px; cursor: pointer;">&#10094;</div>
                    <img src="/wp-content/uploads/2026/01/OPEN-HEATED-GRILL-1.webp" alt="Grill Feature" style="width: 300px; height: 220px; object-fit: cover; box-shadow: 0 10px 20px rgba(0,0,0,0.1);" />
                    <img src="/wp-content/uploads/2026/01/ELEC-Grill-PROFILE-BackFace.webp" alt="Grill Feature" style="width: 300px; height: 220px; object-fit: cover; box-shadow: 0 10px 20px rgba(0,0,0,0.1);" />
                    <div style="color: #DB4155; font-size: 30px; cursor: pointer;">&#10095;</div>
                </div>
            </div>

            <!-- Right Text -->
            <div style="flex: 1; min-width: 250px; max-width: 300px; font-size: 20px; color: #444; font-weight: 500; line-height: 1.6; padding-top: 20px;">
                <p>IPx4 water-resistant design with UL certification for safe, year-rounded outdoor use.</p>
            </div>
            
        </div>
    </section>
`;

function processAstroFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    const startIdx = content.indexOf('<section class="innovations-redesign"');
    const endIdx = content.indexOf('<!-- Getting Started Tabs -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + replacementHTML.trim() + '\n\n    ' + content.substring(endIdx);
        fs.writeFileSync(file, content);
        console.log("Updated HTML in", file);
    } else {
        console.log("Could not find innovations-redesign section in", file);
        
        // Try falling back to looking for feature-video
        const vidStartIdx = content.indexOf('<section class="product-features"');
        const vidEndIdx = content.indexOf('<!-- Image Carousel -->');
        if (vidStartIdx !== -1 && vidEndIdx !== -1) {
             content = content.substring(0, vidStartIdx) + replacementHTML.trim() + '\n\n    ' + content.substring(vidEndIdx);
             fs.writeFileSync(file, content);
             console.log("Replaced video with redesign in", file);
        }
    }
}

processAstroFile('src/pages/index.astro');
processAstroFile('src/pages/fr/index.astro');
