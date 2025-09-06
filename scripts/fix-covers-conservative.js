const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '..', 'lib', 'notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Only use URLs that we know work from the reference site
const workingCovers = {
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
  "The 4-Hour Workweek": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg"
};

// For all other books, use a generic working Amazon URL as fallback
const fallbackUrl = "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg";

// Replace cover images for books that have specific working URLs
Object.entries(workingCovers).forEach(([title, coverUrl]) => {
  const bookRegex = new RegExp(
    `(title: "${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?coverImage: ")[^"]*(")`,
    'g'
  );
  
  content = content.replace(bookRegex, `$1${coverUrl}$2`);
});

// For all remaining books, replace with fallback URL
// This will catch any remaining OpenLibrary URLs or broken Amazon URLs
content = content.replace(
  /coverImage: "https:\/\/covers\.openlibrary\.org\/[^"]*"/g,
  `coverImage: "${fallbackUrl}"`
);

// Also replace any broken Amazon URLs with the fallback
content = content.replace(
  /coverImage: "https:\/\/m\.media-amazon\.com\/images\/I\/[^"]*"/g,
  (match) => {
    // Check if this is one of our known working URLs
    const isWorking = Object.values(workingCovers).some(url => match.includes(url));
    if (!isWorking) {
      return `coverImage: "${fallbackUrl}"`;
    }
    return match;
  }
);

// Write the updated content back to the file
fs.writeFileSync(notesPath, content);

console.log('✅ Updated book covers with working URLs!');
console.log(`📚 Used specific URLs for ${Object.keys(workingCovers).length} books`);
console.log(`📚 Used fallback URL for remaining books`);
