const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/new images');
const destDir = path.join(__dirname, '../public/images/recent-work');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let counter = 1;

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && /\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
      // It's an image file
      const ext = path.extname(file).toLowerCase();
      // Only get up to the expected total or rename appropriately
      const tempCounterStr = counter.toString().padStart(2, '0');
      const newName = `work-${tempCounterStr}${ext}`;
      const destPath = path.join(destDir, newName);
      
      console.log(`Copying ${fullPath} -> ${destPath}`);
      fs.copyFileSync(fullPath, destPath);
      counter++;
    }
  }
}

if (fs.existsSync(sourceDir)) {
  console.log('Starting image import...');
  processDirectory(sourceDir);
  console.log(`Imported ${counter - 1} images successfully!`);
} else {
  console.error(`Source directory not found: ${sourceDir}`);
}
