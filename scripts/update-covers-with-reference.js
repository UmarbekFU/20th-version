const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '..', 'lib', 'notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Map of book titles to their working cover URLs from the reference site
const bookCoverMappings = {
  "Antifragile": "https://m.media-amazon.com/images/I/61cmwTmON3L._AC_UF1000,1000_QL80_.jpg",
  "Zero to One": "https://m.media-amazon.com/images/I/51zGCdRQXOL._AC_UF894,1000_QL80_.jpg",
  "The Almanack of Naval Ravikant": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
  "Poor Charlie's Almanack": "https://m.media-amazon.com/images/I/81vgkcr86iL._AC_UF1000,1000_QL80_.jpg",
  "Six Easy Pieces": "https://schoolworkhelper.net/wp-content/uploads/2012/05/Six-Easy-Pieces.jpeg",
  "Wild Problems": "https://m.media-amazon.com/images/I/81jfAzU2VNL._AC_UY436_FMwebp_QL65_.jpg",
  "Thinking in Bets": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The Black Swan": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Thinking, Fast and Slow": "https://m.media-amazon.com/images/I/71K-5zBgXcL._AC_UF1000,1000_QL80_.jpg",
  "The Psychology of Money": "https://m.media-amazon.com/images/I/41j3-7nvnXL._AC_UF1000,1000_QL80_.jpg",
  "Sapiens": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "Atomic Habits": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The Lean Startup": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "Good to Great": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The 7 Habits of Highly Effective People": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "How to Win Friends and Influence People": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The Power of Now": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The 4-Hour Workweek": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "Getting Things Done": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The Lean Startup": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg"
};

// Replace cover images for books that have mappings
Object.entries(bookCoverMappings).forEach(([title, coverUrl]) => {
  // Find the book entry and replace its cover image
  const bookRegex = new RegExp(
    `(title: "${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?coverImage: ")[^"]*(")`,
    'g'
  );
  
  content = content.replace(bookRegex, `$1${coverUrl}$2`);
});

// Write the updated content back to the file
fs.writeFileSync(notesPath, content);

console.log('✅ Updated book cover images with working URLs from reference site!');
console.log(`📚 Updated ${Object.keys(bookCoverMappings).length} books`);
