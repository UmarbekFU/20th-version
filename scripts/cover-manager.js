#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const notesPath = path.join(__dirname, '../lib/notes.ts');

// Color palette for different categories
const colorPalette = {
  book: '#10b981',      // Green
  podcast: '#3b82f6',   // Blue
  course: '#8b5cf6',    // Purple
  video: '#f59e0b',     // Amber
  essay: '#ef4444',     // Red
  documentary: '#06b6d4' // Cyan
};

function generatePlaceholderCover(title, author, color = '#10b981') {
  const encodedTitle = encodeURIComponent(title);
  const encodedAuthor = encodeURIComponent(author);
  const encodedColor = encodeURIComponent(color);
  
  return `https://via.placeholder.com/300x400/${encodedColor.replace('#', '')}/ffffff?text=${encodedTitle}+by+${encodedAuthor}`;
}

function listBooks() {
  const content = fs.readFileSync(notesPath, 'utf8');
  const bookRegex = /{\s*title:\s*"([^"]+)",\s*author:\s*"([^"]+)",[\s\S]*?slug:\s*"([^"]+)"/g;
  const books = [];
  let match;
  
  while ((match = bookRegex.exec(content)) !== null) {
    books.push({
      title: match[1],
      author: match[2],
      slug: match[3]
    });
  }
  
  return books;
}

function updateBookCover(slug, newCoverUrl) {
  let content = fs.readFileSync(notesPath, 'utf8');
  
  const regex = new RegExp(`(slug: "${slug}"[\\s\\S]*?coverImage: ")[^"]+(")`, 'g');
  const updated = content.replace(regex, `$1${newCoverUrl}$2`);
  
  if (updated === content) {
    console.log(`❌ Book with slug "${slug}" not found.`);
    return false;
  }
  
  fs.writeFileSync(notesPath, updated, 'utf8');
  console.log(`✅ Updated cover for book: ${slug}`);
  return true;
}

function resetAllCovers() {
  let content = fs.readFileSync(notesPath, 'utf8');
  
  const bookDataRegex = /{\s*title:\s*"([^"]+)",\s*author:\s*"([^"]+)",[\s\S]*?category:\s*"([^"]+)"[\s\S]*?coverImage:\s*"https:\/\/[^"]+"/g;
  
  content = content.replace(bookDataRegex, (match, title, author, category) => {
    const color = colorPalette[category] || '#10b981';
    const placeholderCover = generatePlaceholderCover(title, author, color);
    return match.replace(/coverImage:\s*"https:\/\/[^"]+"/, `coverImage: "${placeholderCover}"`);
  });
  
  fs.writeFileSync(notesPath, content, 'utf8');
  console.log('✅ All book covers reset to placeholder covers!');
}

function showHelp() {
  console.log(`
📚 Cover Manager - Easy Book Cover Management

Usage:
  node scripts/cover-manager.js [command] [options]

Commands:
  list                    List all books with their slugs
  update <slug> <url>     Update a specific book's cover
  reset                   Reset all covers to placeholders
  help                    Show this help message

Examples:
  node scripts/cover-manager.js list
  node scripts/cover-manager.js update "feller-probability" "https://example.com/cover.jpg"
  node scripts/cover-manager.js reset

Color-coded placeholders by category:
  📖 Books: Green (#10b981)
  🎧 Podcasts: Blue (#3b82f6)
  🎓 Courses: Purple (#8b5cf6)
  🎥 Videos: Amber (#f59e0b)
  📝 Essays: Red (#ef4444)
  🎬 Documentaries: Cyan (#06b6d4)
`);
}

async function interactiveMode() {
  console.log('📚 Cover Manager - Interactive Mode\n');
  
  while (true) {
    const books = listBooks();
    console.log('\n📋 Available books:');
    books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author} (${book.slug})`);
    });
    
    const answer = await new Promise(resolve => {
      rl.question('\nWhat would you like to do?\n1. Update a book cover\n2. Reset all covers\n3. Exit\n\nEnter your choice (1-3): ', resolve);
    });
    
    switch (answer.trim()) {
      case '1':
        const bookIndex = await new Promise(resolve => {
          rl.question(`\nEnter book number (1-${books.length}): `, resolve);
        });
        
        const selectedBook = books[parseInt(bookIndex) - 1];
        if (!selectedBook) {
          console.log('❌ Invalid book number.');
          continue;
        }
        
        const newCoverUrl = await new Promise(resolve => {
          rl.question(`\nEnter new cover URL for "${selectedBook.title}": `, resolve);
        });
        
        if (newCoverUrl.trim()) {
          updateBookCover(selectedBook.slug, newCoverUrl.trim());
        }
        break;
        
      case '2':
        const confirm = await new Promise(resolve => {
          rl.question('\nAre you sure you want to reset all covers? (y/N): ', resolve);
        });
        
        if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
          resetAllCovers();
        }
        break;
        
      case '3':
        console.log('👋 Goodbye!');
        rl.close();
        return;
        
      default:
        console.log('❌ Invalid choice. Please enter 1, 2, or 3.');
    }
  }
}

// Main execution
const command = process.argv[2];

switch (command) {
  case 'list':
    const books = listBooks();
    console.log('\n📚 Available books:\n');
    books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author}`);
      console.log(`   Slug: ${book.slug}\n`);
    });
    break;
    
  case 'update':
    const slug = process.argv[3];
    const url = process.argv[4];
    
    if (!slug || !url) {
      console.log('❌ Usage: node scripts/cover-manager.js update <slug> <url>');
      process.exit(1);
    }
    
    updateBookCover(slug, url);
    break;
    
  case 'reset':
    resetAllCovers();
    break;
    
  case 'help':
    showHelp();
    break;
    
  case undefined:
    interactiveMode();
    break;
    
  default:
    console.log(`❌ Unknown command: ${command}`);
    showHelp();
    process.exit(1);
}
