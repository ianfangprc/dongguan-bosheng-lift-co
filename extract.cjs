const fs = require('fs');
const path = require('path');

const historyDir = './migrated_prompt_history';
const files = fs.readdirSync(historyDir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const content = fs.readFileSync(path.join(historyDir, file), 'utf8');
    
    // Try to find the image data using regex
    const match = content.match(/\\"data\\":\\"(\/9j\/[a-zA-Z0-9+/=]+)\\"/);
    if (match && match[1]) {
      const buffer = Buffer.from(match[1], 'base64');
      fs.writeFileSync('./public/logo.jpeg', buffer);
      console.log('Logo extracted to ./public/logo.jpeg');
      process.exit(0);
    }
  }
}
console.log('Logo not found');
