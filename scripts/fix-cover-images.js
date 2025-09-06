const fs = require('fs');
const path = require('path');

// Read the notes.ts file
const notesPath = path.join(__dirname, '..', 'lib', 'notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Map of book titles to their ISBNs for OpenLibrary covers
const bookISBNs = {
  "An Introduction to Probability Theory and Its Applications": "9780471257080",
  "Probability Theory: The Logic of Science": "9780521592710", 
  "Outlines of Pyrrhonism": "9780671203231",
  "Essays": "9780140446029",
  "Against the Gods": "9780471295631",
  "Judgment under Uncertainty: Heuristics and Biases": "9780521284141",
  "Manias, Panics, and Crashes": "9780471467144",
  "The Logic of Scientific Discovery": "9780415278447",
  "Conjectures and Refutations": "9780415285940",
  "Objective Knowledge": "9780198240838",
  "On Computable Numbers": "9780521055801",
  "Gödel, Escher, Bach": "9780465026562",
  "The Character of Physical Law": "9780262560030",
  "The Many-Worlds Interpretation of Quantum Mechanics": "9780199674721",
  "Critique of Pure Reason": "9780521657297",
  "The World as I See It": "9780806513527",
  "The Structure of Scientific Revolutions": "9780226458120",
  "Hackers & Painters": "9780596006624",
  "Fooled by Randomness": "9780812975215",
  "The Black Swan": "9781400063512",
  "The Bed of Procrustes": "9781400065257",
  "Antifragile": "9780812979688",
  "Skin in the Game": "9780425284629",
  "Statistical Consequences of Fat Tails": "9781549306470",
  "The Almanack of Naval Ravikant": "9781544514220",
  "The Fabric of Reality": "9780140275414",
  "The Beginning of Infinity": "9780143121350",
  "Influence": "9780061241895",
  "Influence: Science and Practice": "9780205992020",
  "Influence, New and Expanded": "9780062934676",
  "Yes!": "9781416576146",
  "The Small BIG": "9781472136460",
  "Pre-Suasion": "9781501109799",
  "The Psychology of Money": "9780857197689",
  "Same as Ever": "9780593429386",
  "The Art of Spending Money": "9780593429386",
  "The 4-Hour Workweek": "9780307465351",
  "Seeking Wisdom": "9781578644280",
  "Poor Charlie's Almanack": "9781578645015",
  "Tao of Charlie Munger": "9781578644280",
  "The Psychology of Human Misjudgment": "9781578644280",
  "On Success": "9781578644280",
  "Worldly Wisdom": "9781578644280",
  "Man's Search for Meaning": "9780807014295",
  "Guns, Germs, and Steel": "9780393317558",
  "Einstein: His Life and Universe": "9780743264747",
  "The Autobiography of Benjamin Franklin": "9780486290737",
  "Zero to One": "9780804139298",
  "Scale": "9780143110903",
  "Good Calories, Bad Calories": "9781400041320",
  "The Complete Essays": "9780140446043",
  "Collected Fictions": "9780140286809",
  "A History of Private Life, Volumes I–V": "9780674399747",
  "Demons": "9780140445275",
  "This Explains Everything": "9780062290178",
  "Elements of Information Theory": "9780471241959",
  "Straw Dogs": "9780374270995",
  "Deep Learning": "9780262035613",
  "Order Without Design": "9780262038980",
  "I Think, Therefore I Laugh": "9780385242059",
  "The Basic Laws of Human Stupidity": "9780393312041",
  "The Count of Monte Cristo": "9780140449266",
  "Plato and a Platypus Walk Into a Bar": "9780805086930",
  "Rational Decisions": "9780691123915",
  "The Elements of Statistical Learning": "9780387848570",
  "How Nature Works": "9780387984925",
  "The Tyranny of Experts": "9780465021734",
  "Kant and the Platypus": "9780156011594",
  "Statistical Models: Theory and Practice": "9780521743853",
  "The Status Syndrome": "9780805073701",
  "The Wisdom Paradox": "9781592401879",
  "Explaining Social Behavior": "9780521773089",
  "Mean Genes": "9780738201932",
  "Happy Accidents": "9781592404450",
  "Mathematics": "9780486409160",
  "Thinking, Fast and Slow": "9780374533557",
  "What I Learned Losing a Million Dollars": "9780071386906",
  "Cool Tools": "9781944869114",
  "The Inevitable": "9780525428084",
  "Excellent Advice for Living": "9780593538705",
  "The Easy Way to Stop Drinking": "9781402727742",
  "Private Truths, Public Lies": "9780674706370",
  "Six Easy Pieces": "9780465025275",
  "Six Not Easy Pieces": "9780465026562",
  "Surely You're Joking, Mr. Feynman!": "9780393316049",
  "The Pleasure of Finding Things Out": "9780465023950"
};

// Replace Amazon URLs with OpenLibrary URLs
Object.entries(bookISBNs).forEach(([title, isbn]) => {
  // Find the book entry and replace its cover image
  const bookRegex = new RegExp(
    `(title: "${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?coverImage: ")[^"]*(")`,
    'g'
  );
  
  content = content.replace(bookRegex, `$1https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg$2`);
});

// Write the updated content back to the file
fs.writeFileSync(notesPath, content);

console.log('✅ Updated all book cover images with working OpenLibrary URLs!');
console.log(`📚 Updated ${Object.keys(bookISBNs).length} books`);
