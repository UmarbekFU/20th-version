const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '../lib/notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Function to generate placeholder cover
function generatePlaceholderCover(title, author, color = '#10b981') {
  const encodedTitle = encodeURIComponent(title);
  const encodedAuthor = encodeURIComponent(author);
  const encodedColor = encodeURIComponent(color);
  
  return `https://via.placeholder.com/300x400/${encodedColor.replace('#', '')}/ffffff?text=${encodedTitle}+by+${encodedAuthor}`;
}

// Find all coverImage entries and replace them with placeholder covers
const coverImageRegex = /coverImage:\s*"https:\/\/[^"]+"/g;

// Extract book data and replace covers
const bookDataRegex = /{\s*title:\s*"([^"]+)",\s*author:\s*"([^"]+)",[\s\S]*?coverImage:\s*"https:\/\/[^"]+"/g;

content = content.replace(bookDataRegex, (match, title, author) => {
  const placeholderCover = generatePlaceholderCover(title, author);
  return match.replace(/coverImage:\s*"https:\/\/[^"]+"/, `coverImage: "${placeholderCover}"`);
});

// Write the updated content back to the file
fs.writeFileSync(notesPath, content, 'utf8');

console.log('✅ All book covers updated to placeholder covers!');
console.log('📚 Books now use consistent green placeholder covers with title and author text.');
console.log('🔧 To update a specific book cover, edit the coverImage field in lib/notes.ts');
