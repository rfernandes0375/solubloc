const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Quick fix: remove leading slash from all src attributes so they use relative resolution
content = content.replace(/src="\//g, 'src="');

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx updated!');
