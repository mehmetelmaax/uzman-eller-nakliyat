const fs = require('fs');
const path = require('path');

const projectDir = "C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\uzman-eller-nakliyat";
const logoJpg = path.join(projectDir, 'public/img/logo.jpg');
const iconPng = path.join(projectDir, 'public/img/icon.png');

async function main() {
  try {
    console.log("Checking for sharp module...");
    const sharp = require('sharp');
    console.log("Sharp is loaded! Starting image processing...");
    
    // 1. Convert logo to webp and png
    if (fs.existsSync(logoJpg)) {
      await sharp(logoJpg)
        .webp({ quality: 85 })
        .toFile(path.join(projectDir, 'public/img/logo.webp'));
      console.log("Generated logo.webp.");
      
      await sharp(logoJpg)
        .png()
        .toFile(path.join(projectDir, 'public/img/logo.png'));
      console.log("Generated logo.png.");
    } else {
      console.error("logo.jpg not found:", logoJpg);
    }
    
    // 2. Convert and resize icons
    if (fs.existsSync(iconPng)) {
      await sharp(iconPng)
        .webp({ quality: 85 })
        .toFile(path.join(projectDir, 'public/img/icon.webp'));
      console.log("Generated icon.webp.");
      
      // Generate Apple touch icon (180x180)
      await sharp(iconPng)
        .resize(180, 180)
        .png()
        .toFile(path.join(projectDir, 'public/apple-touch-icon.png'));
      console.log("Generated apple-touch-icon.png.");
      
      // Generate Favicon 32x32
      await sharp(iconPng)
        .resize(32, 32)
        .png()
        .toFile(path.join(projectDir, 'public/favicon-32x32.png'));
      console.log("Generated favicon-32x32.png.");
      
      // Generate Favicon 16x16
      await sharp(iconPng)
        .resize(16, 16)
        .png()
        .toFile(path.join(projectDir, 'public/favicon-16x16.png'));
      console.log("Generated favicon-16x16.png.");
    } else {
      console.error("icon.png not found:", iconPng);
    }
    
    console.log("Brand asset optimization completed successfully!");
  } catch (err) {
    console.error("Error optimizing assets:", err.message);
  }
}

main();
