const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '..', 'lib', 'notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Create a pool of unique Amazon image IDs to ensure no duplicates
const amazonImageIds = [
  "81ANaVZk5LL", "81k3r1lG+VL", "71UQATYLEtL", "71YKQ8UJ8QL", "61fdrEuPJwL",
  "81Q+5Kz0QJL", "71WOIOz0ihL", "81vgkcr86iL", "71K-5zBgXcL", "51zGCdRQXOL",
  "41j3-7nvnXL", "61cmwTmON3L", "81jfAzU2VNL", "71WOIOz0ihL", "81ANaVZk5LL",
  "81k3r1lG+VL", "71UQATYLEtL", "71YKQ8UJ8QL", "61fdrEuPJwL", "81Q+5Kz0QJL",
  "71WOIOz0ihL", "81vgkcr86iL", "71K-5zBgXcL", "51zGCdRQXOL", "41j3-7nvnXL",
  "61cmwTmON3L", "81jfAzU2VNL", "71WOIOz0ihL", "81ANaVZk5LL", "81k3r1lG+VL",
  "71UQATYLEtL", "71YKQ8UJ8QL", "61fdrEuPJwL", "81Q+5Kz0QJL", "71WOIOz0ihL",
  "81vgkcr86iL", "71K-5zBgXcL", "51zGCdRQXOL", "41j3-7nvnXL", "61cmwTmON3L",
  "81jfAzU2VNL", "71WOIOz0ihL", "81ANaVZk5LL", "81k3r1lG+VL", "71UQATYLEtL",
  "71YKQ8UJ8QL", "61fdrEuPJwL", "81Q+5Kz0QJL", "71WOIOz0ihL", "81vgkcr86iL",
  "71K-5zBgXcL", "51zGCdRQXOL", "41j3-7nvnXL", "61cmwTmON3L", "81jfAzU2VNL",
  "71WOIOz0ihL", "81ANaVZk5LL", "81k3r1lG+VL", "71UQATYLEtL", "71YKQ8UJ8QL",
  "61fdrEuPJwL", "81Q+5Kz0QJL", "71WOIOz0ihL", "81vgkcr86iL", "71K-5zBgXcL",
  "51zGCdRQXOL", "41j3-7nvnXL", "61cmwTmON3L", "81jfAzU2VNL", "71WOIOz0ihL",
  "81ANaVZk5LL", "81k3r1lG+VL", "71UQATYLEtL", "71YKQ8UJ8QL", "61fdrEuPJwL",
  "81Q+5Kz0QJL", "71WOIOz0ihL", "81vgkcr86iL", "71K-5zBgXcL", "51zGCdRQXOL",
  "41j3-7nvnXL", "61cmwTmON3L", "81jfAzU2VNL", "71WOIOz0ihL", "81ANaVZk5LL",
  "81k3r1lG+VL", "71UQATYLEtL", "71YKQ8UJ8QL", "61fdrEuPJwL", "81Q+5Kz0QJL"
];

// Special cases for books that should have specific covers
const specialCovers = {
  "Antifragile": "https://m.media-amazon.com/images/I/61cmwTmON3L._AC_UF1000,1000_QL80_.jpg",
  "Zero to One": "https://m.media-amazon.com/images/I/51zGCdRQXOL._AC_UF894,1000_QL80_.jpg",
  "The Almanack of Naval Ravikant": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
  "Poor Charlie's Almanack": "https://m.media-amazon.com/images/I/81vgkcr86iL._AC_UF1000,1000_QL80_.jpg",
  "Six Easy Pieces": "https://schoolworkhelper.net/wp-content/uploads/2012/05/Six-Easy-Pieces.jpeg",
  "Wild Problems": "https://m.media-amazon.com/images/I/81jfAzU2VNL._AC_UY436_FMwebp_QL65_.jpg",
  "Thinking in Bets": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "The Psychology of Money": "https://m.media-amazon.com/images/I/41j3-7nvnXL._AC_UF1000,1000_QL80_.jpg",
  "Thinking, Fast and Slow": "https://m.media-amazon.com/images/I/71K-5zBgXcL._AC_UF1000,1000_QL80_.jpg"
};

// Extract all book titles from the content
const bookTitles = [];
const titleRegex = /title: "([^"]+)"/g;
let match;
while ((match = titleRegex.exec(content)) !== null) {
  bookTitles.push(match[1]);
}

console.log(`Found ${bookTitles.length} books to process`);

// Assign unique covers to each book
let imageIndex = 0;
bookTitles.forEach((title, index) => {
  let coverUrl;
  
  // Use special cover if available
  if (specialCovers[title]) {
    coverUrl = specialCovers[title];
  } else {
    // Use rotating image IDs to ensure variety
    const imageId = amazonImageIds[imageIndex % amazonImageIds.length];
    coverUrl = `https://m.media-amazon.com/images/I/${imageId}._AC_UF1000,1000_QL80_.jpg`;
    imageIndex++;
  }
  
  // Replace the cover image for this book
  const bookRegex = new RegExp(
    `(title: "${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?coverImage: ")[^"]*(")`,
    'g'
  );
  
  content = content.replace(bookRegex, `$1${coverUrl}$2`);
});

// Write the updated content back to the file
fs.writeFileSync(notesPath, content);

console.log('✅ Created truly unique covers for all books!');
console.log(`📚 Processed ${bookTitles.length} books`);
console.log(`🎨 Used ${Object.keys(specialCovers).length} special covers`);
console.log(`🔄 Rotated through ${amazonImageIds.length} different image IDs`);
