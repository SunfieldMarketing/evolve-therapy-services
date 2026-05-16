const fs = require('fs');
const path = require('path');

const content = {};

const readDir = (dir) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readDir(fullPath);
        } else if (file.endsWith('.json')) {
            try {
                const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
                // Use the relative path as key for better mapping
                const relativePath = path.relative('./content', fullPath);
                content[relativePath] = data;
            } catch (e) {
                console.error(`Error parsing ${fullPath}:`, e);
            }
        }
    });
};

console.log('Generating Evolve Knowledge Base...');
readDir('./content');

if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
}

fs.writeFileSync('./public/knowledge.json', JSON.stringify(content, null, 2));
console.log('Knowledge Base generated at public/knowledge.json');
