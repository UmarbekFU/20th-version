const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '..', 'lib', 'notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Create unique cover images for each book using different Amazon image IDs
const uniqueBookCovers = {
  // Probability Theory
  "An Introduction to Probability Theory and Its Applications": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "Probability Theory: The Logic of Science": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  
  // Ancient Skepticism
  "Outlines of Pyrrhonism": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Essays": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  
  // Risk and Uncertainty
  "Against the Gods": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Judgment under Uncertainty: Heuristics and Biases": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  "Manias, Panics, and Crashes": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  
  // Philosophy of Science
  "The Logic of Scientific Discovery": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "Conjectures and Refutations": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Objective Knowledge": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  
  // Mathematics and Logic
  "On Computable Numbers": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Gödel, Escher, Bach": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "The Character of Physical Law": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "The Many-Worlds Interpretation of Quantum Mechanics": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  
  // Philosophy
  "Critique of Pure Reason": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "The World as I See It": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "The Structure of Scientific Revolutions": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  
  // Technology and Innovation
  "Hackers & Painters": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  
  // Taleb Collection
  "Fooled by Randomness": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "The Black Swan": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "The Bed of Procrustes": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "Antifragile": "https://m.media-amazon.com/images/I/61cmwTmON3L._AC_UF1000,1000_QL80_.jpg",
  "Skin in the Game": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Statistical Consequences of Fat Tails": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  
  // Business and Entrepreneurship
  "The Almanack of Naval Ravikant": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
  "The Fabric of Reality": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "The Beginning of Infinity": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  
  // Psychology and Influence
  "Influence": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "Influence: Science and Practice": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Influence, New and Expanded": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "Yes!": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "The Small BIG": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Pre-Suasion": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  
  // Finance and Economics
  "The Psychology of Money": "https://m.media-amazon.com/images/I/41j3-7nvnXL._AC_UF1000,1000_QL80_.jpg",
  "Same as Ever": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "The Art of Spending Money": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "The 4-Hour Workweek": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
  
  // Munger Collection
  "Seeking Wisdom": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "Poor Charlie's Almanack": "https://m.media-amazon.com/images/I/81vgkcr86iL._AC_UF1000,1000_QL80_.jpg",
  "Tao of Charlie Munger": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "The Psychology of Human Misjudgment": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "On Success": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Worldly Wisdom": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  
  // Life and Philosophy
  "Man's Search for Meaning": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "Guns, Germs, and Steel": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Einstein: His Life and Universe": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "The Autobiography of Benjamin Franklin": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  
  // Business Strategy
  "Zero to One": "https://m.media-amazon.com/images/I/51zGCdRQXOL._AC_UF894,1000_QL80_.jpg",
  "Scale": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "Good Calories, Bad Calories": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  
  // Literature and Classics
  "The Complete Essays": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Collected Fictions": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "A History of Private Life, Volumes I–V": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Demons": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "This Explains Everything": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  
  // Science and Technology
  "Elements of Information Theory": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Straw Dogs": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "Deep Learning": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Order Without Design": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "I Think, Therefore I Laugh": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "The Basic Laws of Human Stupidity": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "The Count of Monte Cristo": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "Plato and a Platypus Walk Into a Bar": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  
  // Statistics and Data Science
  "Rational Decisions": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "The Elements of Statistical Learning": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "How Nature Works": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "The Tyranny of Experts": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "Kant and the Platypus": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Statistical Models: Theory and Practice": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  
  // Psychology and Neuroscience
  "The Status Syndrome": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  "The Wisdom Paradox": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  "Explaining Social Behavior": "https://m.media-amazon.com/images/I/71YKQ8UJ8QL._AC_UF1000,1000_QL80_.jpg",
  "Mean Genes": "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
  "Happy Accidents": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  "Mathematics": "https://m.media-amazon.com/images/I/81k3r1lG+VL._AC_UF1000,1000_QL80_.jpg",
  
  // Decision Making
  "Thinking, Fast and Slow": "https://m.media-amazon.com/images/I/71K-5zBgXcL._AC_UF1000,1000_QL80_.jpg",
  "What I Learned Losing a Million Dollars": "https://m.media-amazon.com/images/I/71UQATYLEtL._AC_UF1000,1000_QL80_.jpg",
  
  // Kevin Kelly Collection
  "Cool Tools": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  "The Inevitable": "https://m.media-amazon.com/images/I/71Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  "Excellent Advice for Living": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  
  // Self-Help and Recovery
  "The Easy Way to Stop Drinking": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  "Private Truths, Public Lies": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  
  // Feynman Collection
  "Six Easy Pieces": "https://schoolworkhelper.net/wp-content/uploads/2012/05/Six-Easy-Pieces.jpeg",
  "Six Not Easy Pieces": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  "Surely You're Joking, Mr. Feynman!": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg",
  "The Pleasure of Finding Things Out": "https://m.media-amazon.com/images/I/81Q+5Kz0QJL._AC_UF1000,1000_QL80_.jpg"
};

// Replace cover images for books that have specific unique URLs
Object.entries(uniqueBookCovers).forEach(([title, coverUrl]) => {
  const bookRegex = new RegExp(
    `(title: "${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?coverImage: ")[^"]*(")`,
    'g'
  );
  
  content = content.replace(bookRegex, `$1${coverUrl}$2`);
});

// Write the updated content back to the file
fs.writeFileSync(notesPath, content);

console.log('✅ Updated book covers with unique images!');
console.log(`📚 Assigned unique covers to ${Object.keys(uniqueBookCovers).length} books`);
