const fs = require('fs');
const path = require('path');

// Create placeholder images directory
const imagesDir = path.join(__dirname, '../public/images/notes');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of all content with their colors
const content = [
  // Books
  { name: 'atomic-habits', color: '#1e40af' },
  { name: 'lean-startup', color: '#dc2626' },
  { name: 'deep-work', color: '#059669' },
  { name: 'art-of-war', color: '#7c2d12' },
  { name: 'thinking-fast-slow', color: '#7c3aed' },
  { name: 'pragmatic-programmer', color: '#ea580c' },
  // Podcast Episodes
  { name: 'acquired-netflix', color: '#e50914' },
  { name: 'knowledge-project-housel', color: '#1e40af' },
  { name: 'naval-get-rich', color: '#7c3aed' },
  { name: 'founders-bezos', color: '#ff9900' },
  { name: 'tbpn-future-work', color: '#059669' },
  // Articles
  { name: 'network-state', color: '#059669' },
  { name: 'art-of-focus', color: '#dc2626' },
  // Conversations
  { name: 'startup-conversation', color: '#f59e0b' },
  { name: 'professor-talk', color: '#7c3aed' },
  // Talks
  { name: 'future-work', color: '#be185d' },
  // Courses
  { name: 'react-patterns', color: '#0ea5e9' }
];

// Generate SVG placeholders
content.forEach(item => {
  const svg = `
<svg width="166" height="220" xmlns="http://www.w3.org/2000/svg">
  <rect width="166" height="220" fill="${item.color}"/>
  <rect x="10" y="20" width="146" height="180" fill="white" opacity="0.1"/>
  <text x="83" y="110" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${item.name.replace('-', ' ').toUpperCase()}
  </text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, `${item.name}.svg`), svg);
  console.log(`Generated placeholder for ${item.name}`);
});

console.log('All placeholder images generated!');
