export interface Note {
  title: string;
  author: string;
  date: string;
  rating: number;
  coverImage: string;
  spineColor: string;
  textColor: string;
  slug: string;
  summary: string;
  category: 'book' | 'podcast' | 'course' | 'video' | 'essay' | 'documentary';
  duration?: string; // For podcasts, videos, courses
  url?: string; // For external links
  tags?: string[]; // For better organization
}

// Placeholder cover generator
export function generatePlaceholderCover(title: string, author: string, color: string = '#10b981'): string {
  const encodedTitle = encodeURIComponent(title);
  const encodedAuthor = encodeURIComponent(author);
  const encodedColor = encodeURIComponent(color);
  
  return `https://via.placeholder.com/300x400/${encodedColor.replace('#', '')}/ffffff?text=${encodedTitle}+by+${encodedAuthor}`;
}

export const notes: Note[] = [
  // Probability Theory
  {
    title: "An Introduction to Probability Theory and Its Applications",
    author: "William Feller",
    date: "2024",
    rating: 9,
    coverImage: generatePlaceholderCover("An Introduction to Probability Theory and Its Applications", "William Feller"),
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "feller-probability",
    summary: "Probability basics, the mathematical foundation that Taleb assumes. A comprehensive treatment of probability theory and its applications.",
    category: "book"
  },
  {
    title: "Probability Theory: The Logic of Science",
    author: "E.T. Jaynes",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=An%20Introduction%20to%20Probability%20Theory%20and%20Its%20Applications+by+William%20Feller",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "jaynes-probability",
    summary: "Bayesian thinking, crucial for Taleb's 'skeptical empiricism'. A deep dive into the logical foundations of probability.",
    category: "book"
  },
  // Ancient Skepticism
  {
    title: "Outlines of Pyrrhonism",
    author: "Sextus Empiricus",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Outlines%20of%20Pyrrhonism+by+Sextus%20Empiricus",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "sextus-pyrrhonism",
    summary: "Taleb's love of ancient skeptics. The foundational text of Pyrrhonian skepticism, questioning the possibility of certain knowledge.",
    category: "book"
  },
  {
    title: "Essays",
    author: "Montaigne",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Essays+by+Montaigne",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "montaigne-essays",
    summary: "Practical skepticism, embraced by Taleb. Montaigne's exploration of human nature and the limits of knowledge.",
    category: "book"
  },
  // Risk and Finance
  {
    title: "Against the Gods",
    author: "Peter L. Bernstein",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Against%20the%20Gods+by+Peter%20L.%20Bernstein",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "bernstein-against-gods",
    summary: "History of risk, a prelude to Taleb. The remarkable story of risk and how it has shaped human civilization.",
    category: "book"
  },
  {
    title: "Judgment under Uncertainty: Heuristics and Biases",
    author: "Kahneman, Slovic & Tversky",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Judgment%20under%20Uncertainty%3A%20Heuristics%20and%20Biases+by+Kahneman%2C%20Slovic%20%26%20Tversky",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "kahneman-heuristics",
    summary: "Taleb reacts to this tradition critically. The foundational work on cognitive biases and decision-making under uncertainty.",
    category: "book"
  },
  {
    title: "Manias, Panics, and Crashes",
    author: "Charles Kindleberger",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Manias%2C%20Panics%2C%20and%20Crashes+by+Charles%20Kindleberger",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "kindleberger-crashes",
    summary: "Fragility in finance, a seed for Black Swan. A comprehensive history of financial crises and their patterns.",
    category: "book"
  },
  // Popper and Scientific Method
  {
    title: "The Logic of Scientific Discovery",
    author: "Karl Popper",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Logic%20of%20Scientific%20Discovery+by+Karl%20Popper",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "popper-logic-discovery",
    summary: "Scientific method as conjecture & refutation. Popper's revolutionary approach to the philosophy of science.",
    category: "book"
  },
  {
    title: "Conjectures and Refutations",
    author: "Karl Popper",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Conjectures%20and%20Refutations+by+Karl%20Popper",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "popper-conjectures",
    summary: "Shorter, easier entry point to Popper's philosophy. Essays on the growth of scientific knowledge.",
    category: "book"
  },
  {
    title: "Objective Knowledge",
    author: "Karl Popper",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Objective%20Knowledge+by+Karl%20Popper",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "popper-objective-knowledge",
    summary: "Directly cited by Deutsch often. Popper's evolutionary epistemology and theory of knowledge.",
    category: "book"
  },
  // Computation and Logic
  {
    title: "On Computable Numbers",
    author: "Alan Turing",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=On%20Computable%20Numbers+by+Alan%20Turing",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "turing-computable",
    summary: "Original paper on computation, source of Deutsch's computational worldview. The foundational work of computer science.",
    category: "book"
  },
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=G%C3%B6del%2C%20Escher%2C%20Bach+by+Douglas%20Hofstadter",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "hofstadter-geb",
    summary: "Explores recursion, consciousness, computation—similar spirit to Deutsch. A mind-bending exploration of formal systems.",
    category: "book"
  },
  // Physics and Philosophy
  {
    title: "The Character of Physical Law",
    author: "Richard Feynman",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Character%20of%20Physical%20Law+by+Richard%20Feynman",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "feynman-physical-law",
    summary: "Clear physics thinking, style Deutsch inherits. Feynman's accessible introduction to the fundamental principles of physics.",
    category: "book"
  },
  {
    title: "The Many-Worlds Interpretation of Quantum Mechanics",
    author: "Hugh Everett",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Many-Worlds%20Interpretation%20of%20Quantum%20Mechanics+by+Hugh%20Everett",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "everett-many-worlds",
    summary: "Basis of Deutsch's multiverse view. The revolutionary interpretation of quantum mechanics that challenges our understanding of reality.",
    category: "book"
  },
  // Philosophy and Epistemology
  {
    title: "Critique of Pure Reason",
    author: "Immanuel Kant",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Critique%20of%20Pure%20Reason+by+Immanuel%20Kant",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "kant-critique",
    summary: "Limits of certainty, basis for later rationalist skepticism. Kant's revolutionary work on the limits of human knowledge.",
    category: "book"
  },
  {
    title: "The World as I See It",
    author: "Albert Einstein",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20World%20as%20I%20See%20It+by+Albert%20Einstein",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "einstein-world",
    summary: "Humility before uncertainty, physics and philosophy together. Einstein's philosophical reflections on science and life.",
    category: "book"
  },
  {
    title: "The Structure of Scientific Revolutions",
    author: "Thomas Kuhn",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Structure%20of%20Scientific%20Revolutions+by+Thomas%20Kuhn",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "kuhn-revolutions",
    summary: "How science changes, complements both thinkers. Kuhn's paradigm-shifting analysis of scientific progress.",
    category: "book"
  },
  // Programming and Technology
  {
    title: "Hackers & Painters",
    author: "Paul Graham",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Hackers%20%26%20Painters+by+Paul%20Graham",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "hackers-painters",
    summary: "Essays on programming, technology, and the intersection of art and code. Graham's insights on startups and creativity.",
    category: "book"
  },
  // Taleb Collection
  {
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Fooled%20by%20Randomness+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "fooled-by-randomness",
    summary: "The hidden role of chance in life and markets. Taleb's first book on uncertainty and randomness.",
    category: "book"
  },
  {
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Black%20Swan+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "black-swan",
    summary: "The impact of highly improbable events. Taleb's magnum opus on uncertainty and rare events.",
    category: "book"
  },
  {
    title: "The Bed of Procrustes",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Bed%20of%20Procrustes+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "bed-of-procrustes",
    summary: "Philosophical and practical aphorisms. Taleb's collection of wisdom on uncertainty and life.",
    category: "book"
  },
  {
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Antifragile+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "antifragile",
    summary: "Things that gain from disorder. Taleb's framework for systems that benefit from volatility.",
    category: "book"
  },
  {
    title: "Skin in the Game",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Skin%20in%20the%20Game+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "skin-in-the-game",
    summary: "Hidden asymmetries in daily life. Taleb on accountability and the importance of having something at stake.",
    category: "book"
  },
  {
    title: "Statistical Consequences of Fat Tails",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Statistical%20Consequences%20of%20Fat%20Tails+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "fat-tails",
    summary: "Technical analysis of extreme events and their statistical properties. Taleb's mathematical treatment of tail risk.",
    category: "book"
  },
  // Naval Collection
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Almanack%20of%20Naval%20Ravikant+by+Eric%20Jorgenson",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "naval-almanack",
    summary: "A guide to wealth and happiness. Compiled wisdom from Naval Ravikant on entrepreneurship and life.",
    category: "book"
  },
  // Deutsch Collection
  {
    title: "The Fabric of Reality",
    author: "David Deutsch",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Fabric%20of%20Reality+by+David%20Deutsch",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "fabric-of-reality",
    summary: "The science of parallel universes and the nature of reality. Deutsch's unified theory of knowledge.",
    category: "book"
  },
  {
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Beginning%20of%20Infinity+by+David%20Deutsch",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "beginning-of-infinity",
    summary: "Explanations that transform the world. Deutsch's optimistic view of progress and human potential.",
    category: "book"
  },
  // Cialdini Collection
  {
    title: "Influence",
    author: "Robert B. Cialdini",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Influence+by+Robert%20B.%20Cialdini",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "influence",
    summary: "The psychology of persuasion. Cialdini's classic work on the principles of influence.",
    category: "book"
  },
  {
    title: "Influence: Science and Practice",
    author: "Robert B. Cialdini",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Influence%3A%20Science%20and%20Practice+by+Robert%20B.%20Cialdini",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "influence-science-practice",
    summary: "The expanded version with practical applications. Cialdini's comprehensive guide to persuasion.",
    category: "book"
  },
  {
    title: "Influence, New and Expanded",
    author: "Robert B. Cialdini",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Influence%2C%20New%20and%20Expanded+by+Robert%20B.%20Cialdini",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "influence-new-expanded",
    summary: "The latest edition with new research. Updated insights on the psychology of persuasion.",
    category: "book"
  },
  {
    title: "Yes!",
    author: "Robert B. Cialdini, Noah J. Goldstein, Steve J. Martin",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Yes!+by+Robert%20B.%20Cialdini%2C%20Noah%20J.%20Goldstein%2C%20Steve%20J.%20Martin",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "yes-cialdini",
    summary: "50 scientifically proven ways to be persuasive. Practical applications of influence principles.",
    category: "book"
  },
  {
    title: "The Small BIG",
    author: "Robert B. Cialdini, Noah J. Goldstein, Steve J. Martin",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Small%20BIG+by+Robert%20B.%20Cialdini%2C%20Noah%20J.%20Goldstein%2C%20Steve%20J.%20Martin",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "small-big",
    summary: "Small changes that spark big influence. Micro-actions that lead to major behavioral changes.",
    category: "book"
  },
  {
    title: "Pre-Suasion",
    author: "Robert B. Cialdini",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Pre-Suasion+by+Robert%20B.%20Cialdini",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "pre-suasion",
    summary: "A revolutionary way to influence and persuade. Cialdini's latest work on the psychology of influence.",
    category: "book"
  },
  // Housel Collection
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Psychology%20of%20Money+by+Morgan%20Housel",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "psychology-of-money",
    summary: "Timeless lessons on wealth, greed, and happiness. Housel's insights on the psychology of financial decisions.",
    category: "book"
  },
  {
    title: "Same as Ever",
    author: "Morgan Housel",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Same%20as%20Ever+by+Morgan%20Housel",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "same-as-ever",
    summary: "A guide to what never changes. Housel's exploration of timeless principles in a changing world.",
    category: "book"
  },
  {
    title: "The Art of Spending Money",
    author: "Morgan Housel",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Art%20of%20Spending%20Money+by+Morgan%20Housel",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "art-of-spending-money",
    summary: "How to spend money wisely. Housel's practical advice on financial decision-making.",
    category: "book"
  },
  // Productivity and Lifestyle
  {
    title: "The 4-Hour Workweek",
    author: "Timothy Ferriss",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%204-Hour%20Workweek+by+Timothy%20Ferriss",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "4-hour-workweek",
    summary: "Escape 9-5, live anywhere, and join the new rich. Ferriss's guide to lifestyle design and productivity.",
    category: "book"
  },
  // Munger Collection
  {
    title: "Seeking Wisdom",
    author: "Peter Bevelin",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Seeking%20Wisdom+by+Peter%20Bevelin",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "seeking-wisdom",
    summary: "From Darwin to Munger. Bevelin's synthesis of wisdom from great thinkers across disciplines.",
    category: "book"
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Peter D. Kaufman",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Poor%20Charlie's%20Almanack+by+Peter%20D.%20Kaufman",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "poor-charlies-almanack",
    summary: "The wit and wisdom of Charles T. Munger. A comprehensive collection of Munger's speeches and writings.",
    category: "book"
  },
  {
    title: "Tao of Charlie Munger",
    author: "David Clark",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Tao%20of%20Charlie%20Munger+by+David%20Clark",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "tao-of-charlie-munger",
    summary: "A compilation of quotes from the legendary investor. Clark's curated wisdom from Munger.",
    category: "book"
  },
  {
    title: "The Psychology of Human Misjudgment",
    author: "Charles T. Munger",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Psychology%20of%20Human%20Misjudgment+by+Charles%20T.%20Munger",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "psychology-human-misjudgment",
    summary: "Munger's famous speech on cognitive biases. A masterclass in understanding human psychology.",
    category: "book"
  },
  {
    title: "On Success",
    author: "Charles T. Munger",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=On%20Success+by+Charles%20T.%20Munger",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "on-success-munger",
    summary: "Munger's thoughts on achieving success. Insights from one of the world's most successful investors.",
    category: "book"
  },
  {
    title: "Worldly Wisdom",
    author: "Charles T. Munger",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Worldly%20Wisdom+by+Charles%20T.%20Munger",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "worldly-wisdom",
    summary: "Munger's approach to life and investing. Practical wisdom for navigating complex decisions.",
    category: "book"
  },
  // Philosophy and Psychology
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Man's%20Search%20for%20Meaning+by+Viktor%20Frankl",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "mans-search-for-meaning",
    summary: "A psychiatrist's experiences in Nazi death camps. Frankl's profound insights on finding meaning in suffering.",
    category: "book"
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Guns%2C%20Germs%2C%20and%20Steel+by+Jared%20Diamond",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "guns-germs-steel",
    summary: "The fates of human societies. Diamond's Pulitzer Prize-winning analysis of civilization's development.",
    category: "book"
  },
  {
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Einstein%3A%20His%20Life%20and%20Universe+by+Walter%20Isaacson",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "einstein-isaacson",
    summary: "The definitive biography of Albert Einstein. Isaacson's comprehensive portrait of the great physicist.",
    category: "book"
  },
  {
    title: "The Autobiography of Benjamin Franklin",
    author: "Benjamin Franklin",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Autobiography%20of%20Benjamin%20Franklin+by+Benjamin%20Franklin",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "franklin-autobiography",
    summary: "The life and wisdom of America's founding father. Franklin's timeless advice on self-improvement.",
    category: "book"
  },
  // Business and Innovation
  {
    title: "Zero to One",
    author: "Peter Thiel",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Zero%20to%20One+by+Peter%20Thiel",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "zero-to-one",
    summary: "Notes on startups, or how to build the future. Thiel's contrarian views on innovation and monopoly.",
    category: "book"
  },
  {
    title: "Scale",
    author: "Geoffrey West",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Scale+by+Geoffrey%20West",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "scale-west",
    summary: "The universal laws of growth, innovation, and sustainability. West's exploration of scaling laws in nature and society.",
    category: "book"
  },
  // Health and Science
  {
    title: "Good Calories, Bad Calories",
    author: "Gary Taubes",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Good%20Calories%2C%20Bad%20Calories+by+Gary%20Taubes",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "good-calories-bad-calories",
    summary: "Challenging the conventional wisdom on diet and disease. Taubes's controversial take on nutrition science.",
    category: "book"
  },
  // Literature and Philosophy
  {
    title: "The Complete Essays",
    author: "Michel de Montaigne",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Complete%20Essays+by+Michel%20de%20Montaigne",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "complete-essays-montaigne",
    summary: "The father of the essay form. Montaigne's timeless reflections on human nature and experience.",
    category: "book"
  },
  {
    title: "Collected Fictions",
    author: "Jorge Luis Borges",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Collected%20Fictions+by+Jorge%20Luis%20Borges",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "collected-fictions-borges",
    summary: "The complete short stories of the Argentine master. Borges's mind-bending explorations of reality and fiction.",
    category: "book"
  },
  {
    title: "A History of Private Life, Volumes I–V",
    author: "Various Authors",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=A%20History%20of%20Private%20Life%2C%20Volumes%20I%E2%80%93V+by+Various%20Authors",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "history-private-life",
    summary: "A comprehensive history of private life from antiquity to the present. An exploration of how people lived.",
    category: "book"
  },
  {
    title: "Demons",
    author: "Fyodor Dostoyevsky",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Demons+by+Fyodor%20Dostoyevsky",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "demons-dostoyevsky",
    summary: "A political novel about revolutionary terrorism. Dostoyevsky's exploration of ideology and human nature.",
    category: "book"
  },
  // Science and Mathematics
  {
    title: "This Explains Everything",
    author: "John Brockman",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=This%20Explains%20Everything+by+John%20Brockman",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "this-explains-everything",
    summary: "Deep, beautiful, and elegant theories of how the world works. Brockman's collection of scientific insights.",
    category: "book"
  },
  {
    title: "Elements of Information Theory",
    author: "Thomas M. Cover",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Elements%20of%20Information%20Theory+by+Thomas%20M.%20Cover",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "elements-information-theory",
    summary: "The mathematical foundations of information theory. Cover's comprehensive treatment of entropy and communication.",
    category: "book"
  },
  {
    title: "Straw Dogs",
    author: "John Gray",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Straw%20Dogs+by+John%20Gray",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "straw-dogs",
    summary: "Thoughts on humans and other animals. Gray's provocative critique of humanism and progress.",
    category: "book"
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Deep%20Learning+by+Ian%20Goodfellow",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "deep-learning",
    summary: "The comprehensive textbook on deep learning. Goodfellow's authoritative guide to neural networks.",
    category: "book"
  },
  {
    title: "Order Without Design",
    author: "Alain Bertaud",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Order%20Without%20Design+by+Alain%20Bertaud",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "order-without-design",
    summary: "How markets shape cities. Bertaud's analysis of urban economics and city planning.",
    category: "book"
  },
  {
    title: "I Think, Therefore I Laugh",
    author: "John Allen Paulos",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=I%20Think%2C%20Therefore%20I%20Laugh+by+John%20Allen%20Paulos",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "i-think-therefore-i-laugh",
    summary: "The intersection of mathematics and humor. Paulos's exploration of mathematical thinking through jokes.",
    category: "book"
  },
  {
    title: "The Basic Laws of Human Stupidity",
    author: "Carlo Cipolla",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Basic%20Laws%20of%20Human%20Stupidity+by+Carlo%20Cipolla",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "basic-laws-human-stupidity",
    summary: "A humorous yet insightful analysis of human behavior. Cipolla's famous essay on the economics of stupidity.",
    category: "book"
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Count%20of%20Monte%20Cristo+by+Alexandre%20Dumas",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "count-of-monte-cristo",
    summary: "The ultimate tale of revenge and redemption. Dumas's masterpiece of adventure and human psychology.",
    category: "book"
  },
  {
    title: "Plato and a Platypus Walk Into a Bar",
    author: "Thomas Cathcart",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Plato%20and%20a%20Platypus%20Walk%20Into%20a%20Bar+by+Thomas%20Cathcart",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "plato-platypus-bar",
    summary: "Understanding philosophy through jokes. Cathcart's humorous introduction to philosophical concepts.",
    category: "book"
  },
  {
    title: "Rational Decisions",
    author: "Ken Binmore",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Rational%20Decisions+by+Ken%20Binmore",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "rational-decisions",
    summary: "The foundations of game theory and decision theory. Binmore's rigorous treatment of rational choice.",
    category: "book"
  },
  {
    title: "The Elements of Statistical Learning",
    author: "Trevor Hastie",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Elements%20of%20Statistical%20Learning+by+Trevor%20Hastie",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "elements-statistical-learning",
    summary: "The definitive textbook on machine learning. Hastie's comprehensive guide to statistical methods.",
    category: "book"
  },
  {
    title: "How Nature Works",
    author: "Per Bak",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=How%20Nature%20Works+by+Per%20Bak",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "how-nature-works",
    summary: "The science of self-organized criticality. Bak's exploration of complexity and emergence in nature.",
    category: "book"
  },
  {
    title: "The Tyranny of Experts",
    author: "William Easterly",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Tyranny%20of%20Experts+by+William%20Easterly",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "tyranny-of-experts",
    summary: "Economists, dictators, and the forgotten rights of the poor. Easterly's critique of development economics.",
    category: "book"
  },
  {
    title: "Kant and the Platypus",
    author: "Umberto Eco",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Kant%20and%20the%20Platypus+by+Umberto%20Eco",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "kant-and-platypus",
    summary: "Essays on language and cognition. Eco's exploration of how we understand and categorize the world.",
    category: "book"
  },
  {
    title: "Statistical Models: Theory and Practice",
    author: "David A. Freedman",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Statistical%20Models%3A%20Theory%20and%20Practice+by+David%20A.%20Freedman",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "statistical-models-theory-practice",
    summary: "A critical examination of statistical modeling. Freedman's rigorous analysis of statistical methods.",
    category: "book"
  },
  {
    title: "The Status Syndrome",
    author: "Michael G. Marmot",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Status%20Syndrome+by+Michael%20G.%20Marmot",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "status-syndrome",
    summary: "How social standing affects our health and longevity. Marmot's research on social determinants of health.",
    category: "book"
  },
  {
    title: "The Wisdom Paradox",
    author: "Elkhonon Goldberg",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Wisdom%20Paradox+by+Elkhonon%20Goldberg",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "wisdom-paradox",
    summary: "How your mind can grow stronger as your brain grows older. Goldberg's insights on aging and cognition.",
    category: "book"
  },
  {
    title: "Explaining Social Behavior",
    author: "Jon Elster",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Explaining%20Social%20Behavior+by+Jon%20Elster",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "explaining-social-behavior",
    summary: "More nuts and bolts for the social sciences. Elster's analysis of social mechanisms and explanations.",
    category: "book"
  },
  {
    title: "Mean Genes",
    author: "Terry Burnham",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Mean%20Genes+by+Terry%20Burnham",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "mean-genes",
    summary: "From sex to money to food, taming our primal instincts. Burnham's evolutionary perspective on human behavior.",
    category: "book"
  },
  {
    title: "Happy Accidents",
    author: "Morton A. Meyers",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Happy%20Accidents+by+Morton%20A.%20Meyers",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "happy-accidents",
    summary: "Serendipity in major medical breakthroughs. Meyers's exploration of how chance discoveries shaped medicine.",
    category: "book"
  },
  {
    title: "Mathematics",
    author: "A.D. Aleksandrov",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Mathematics+by+A.D.%20Aleksandrov",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "mathematics-aleksandrov",
    summary: "Its content, methods, and meaning. Aleksandrov's comprehensive introduction to mathematics.",
    category: "book"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Thinking%2C%20Fast%20and%20Slow+by+Daniel%20Kahneman",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "thinking-fast-slow",
    summary: "The definitive work on human decision-making. Kahneman's Nobel Prize-winning insights on cognitive biases.",
    category: "book"
  },
  {
    title: "What I Learned Losing a Million Dollars",
    author: "Jim Paul",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=What%20I%20Learned%20Losing%20a%20Million%20Dollars+by+Jim%20Paul",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "losing-million-dollars",
    summary: "A personal account of financial failure and lessons learned. Paul's honest reflection on trading mistakes.",
    category: "book"
  },
  // Kevin Kelly Collection
  {
    title: "Cool Tools",
    author: "Kevin Kelly",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Cool%20Tools+by+Kevin%20Kelly",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "cool-tools",
    summary: "A catalog of possibilities. Kelly's comprehensive guide to tools and technologies that can enhance human capabilities and creativity.",
    category: "book"
  },
  {
    title: "The Inevitable",
    author: "Kevin Kelly",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Inevitable+by+Kevin%20Kelly",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "the-inevitable",
    summary: "Understanding the 12 technological forces that will shape our future. Kelly's vision of how technology will transform our world in the coming decades.",
    category: "book"
  },
  {
    title: "Excellent Advice for Living",
    author: "Kevin Kelly",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Excellent%20Advice%20for%20Living+by+Kevin%20Kelly",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "excellent-advice-for-living",
    summary: "Wisdom I wish I'd known earlier. Kelly's collection of practical insights and life lessons learned over decades of exploration and innovation.",
    category: "book"
  },
  // Risk and Systems Theory
  {
    title: "Normal Accidents",
    author: "Charles Perrow",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Normal%20Accidents+by+Charles%20Perrow",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "normal-accidents",
    summary: "Living with high-risk technologies. Perrow's analysis of how complex systems inevitably fail and the paradox of safety measures.",
    category: "book"
  },
  {
    title: "Silent Risk",
    author: "Nassim Nicholas Taleb",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Silent%20Risk+by+Nassim%20Nicholas%20Taleb",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "silent-risk",
    summary: "Taleb's technical work on hidden risks and the mathematics of uncertainty. A deeper dive into the statistical foundations of his philosophy.",
    category: "book"
  },
  {
    title: "The Collapse of Complex Societies",
    author: "Joseph Tainter",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Collapse%20of%20Complex%20Societies+by+Joseph%20Tainter",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "collapse-complex-societies",
    summary: "Why civilizations fall and what we can learn from their demise. Tainter's analysis of diminishing returns in complex systems.",
    category: "book"
  },
  {
    title: "The Failure of Risk Management",
    author: "Douglas Hubbard",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Failure%20of%20Risk%20Management+by+Douglas%20Hubbard",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "failure-risk-management",
    summary: "Why risk management fails and how to fix it. Hubbard's critique of common risk management practices and his proposed solutions.",
    category: "book"
  },
  // Philosophy and Reality
  {
    title: "Information and the Nature of Reality",
    author: "Paul Davies & Niels Henrik Gregersen",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Information%20and%20the%20Nature%20of%20Reality+by+Paul%20Davies%20%26%20Niels%20Henrik%20Gregersen",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "information-nature-reality",
    summary: "From physics to biology to mind. A multidisciplinary exploration of information as the fundamental building block of reality.",
    category: "book"
  },
  {
    title: "Why Does the World Exist?",
    author: "Jim Holt",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Why%20Does%20the%20World%20Exist%3F+by+Jim%20Holt",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "why-world-exist",
    summary: "An existential detective story. Holt's philosophical investigation into the deepest question of all: why is there something rather than nothing?",
    category: "book"
  },
  {
    title: "The Road to Reality",
    author: "Roger Penrose",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Road%20to%20Reality+by+Roger%20Penrose",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "road-to-reality",
    summary: "A complete guide to the laws of the universe. Penrose's comprehensive journey through physics, mathematics, and the nature of reality.",
    category: "book"
  },
  // Economics and Society
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson & William Rees-Mogg",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Sovereign%20Individual+by+James%20Dale%20Davidson%20%26%20William%20Rees-Mogg",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "sovereign-individual",
    summary: "How to survive and thrive during the collapse of the welfare state. A prescient analysis of the digital revolution's impact on society.",
    category: "book"
  },
  {
    title: "Finite and Infinite Games",
    author: "James P. Carse",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Finite%20and%20Infinite%20Games+by+James%20P.%20Carse",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "finite-infinite-games",
    summary: "A vision of life as play and possibility. Carse's profound distinction between finite games (played to win) and infinite games (played to keep playing).",
    category: "book"
  },
  {
    title: "The Rational Optimist",
    author: "Matt Ridley",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Rational%20Optimist+by+Matt%20Ridley",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "rational-optimist",
    summary: "How prosperity evolves. Ridley's argument that human progress comes from the exchange of ideas and specialization.",
    category: "book"
  },
  // Stoicism and Ancient Wisdom
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Meditations+by+Marcus%20Aurelius",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "meditations-aurelius",
    summary: "The personal writings of the Roman emperor and Stoic philosopher. Aurelius's timeless wisdom on virtue, duty, and the art of living.",
    category: "book"
  },
  {
    title: "Discourses & Enchiridion",
    author: "Epictetus",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Discourses%20%26%20Enchiridion+by+Epictetus",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "discourses-enchiridion",
    summary: "The complete works of the former slave turned Stoic philosopher. Epictetus's practical philosophy of freedom through acceptance.",
    category: "book"
  },
  {
    title: "Letters from a Stoic",
    author: "Seneca",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Letters%20from%20a%20Stoic+by+Seneca",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "letters-stoic-seneca",
    summary: "Seneca's essays and letters on Stoic philosophy. Practical wisdom on virtue, mortality, and the good life from ancient Rome's greatest philosopher.",
    category: "book"
  },
  // Prediction and Decision Making
  {
    title: "Superforecasting",
    author: "Philip Tetlock",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Superforecasting+by+Philip%20Tetlock",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "superforecasting",
    summary: "The art and science of prediction. Tetlock's study of what makes some people remarkably good at forecasting the future.",
    category: "book"
  },
  {
    title: "The Halo Effect",
    author: "Phil Rosenzweig",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Halo%20Effect+by+Phil%20Rosenzweig",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "halo-effect",
    summary: "The delusion of connecting winning with winning. Rosenzweig's critique of business success stories and the illusions they create.",
    category: "book"
  },
  {
    title: "Models of My Life",
    author: "Herbert A. Simon",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Models%20of%20My%20Life+by+Herbert%20A.%20Simon",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "models-my-life",
    summary: "The autobiography of a Nobel Prize winner in economics. Simon's reflections on bounded rationality and the limits of human decision-making.",
    category: "book"
  },
  {
    title: "The Checklist Manifesto",
    author: "Atul Gawande",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Checklist%20Manifesto+by+Atul%20Gawande",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "checklist-manifesto",
    summary: "How to get things right. Gawande's argument for the power of simple checklists in complex environments.",
    category: "book"
  },
  // Psychology and Meaning
  {
    title: "The Denial of Death",
    author: "Ernest Becker",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Denial%20of%20Death+by+Ernest%20Becker",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "denial-of-death",
    summary: "A Pulitzer Prize-winning exploration of human psychology. Becker's analysis of how our awareness of mortality shapes human behavior and culture.",
    category: "book"
  },
  // Anthropology and History
  {
    title: "The Dawn of Everything",
    author: "David Graeber",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Dawn%20of%20Everything+by+David%20Graeber",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "dawn-of-everything",
    summary: "A new history of humanity. Graeber's radical reimagining of human social evolution and the origins of inequality.",
    category: "book"
  },
  {
    title: "The Lessons of History",
    author: "Will & Ariel Durant",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Lessons%20of%20History+by+Will%20%26%20Ariel%20Durant",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "lessons-of-history",
    summary: "A distillation of human experience. The Durants' concise summary of patterns and lessons from thousands of years of human history.",
    category: "book"
  },
  // Philosophy and Metaphysics
  {
    title: "Invariances",
    author: "Robert Nozick",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Invariances+by+Robert%20Nozick",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "invariances",
    summary: "The structure of the objective world. Nozick's exploration of what remains constant across different perspectives and frameworks.",
    category: "book"
  },
  // Neuroscience and Mind
  {
    title: "Mapping the Mind",
    author: "Rita Carter",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Mapping%20the%20Mind+by+Rita%20Carter",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "mapping-mind",
    summary: "A visual guide to the brain and consciousness. Carter's accessible exploration of how the brain creates the mind.",
    category: "book"
  },
  // Eastern Philosophy
  {
    title: "Tao Te Ching",
    author: "Lao Tzu",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Tao%20Te%20Ching+by+Lao%20Tzu",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "tao-te-ching",
    summary: "The fundamental text of Taoism. Lao Tzu's timeless wisdom on the nature of reality, virtue, and the way of effortless action.",
    category: "book"
  },
  // Genetics and Human Origins
  {
    title: "Who We Are and How We Got Here",
    author: "David Reich",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Who%20We%20Are%20and%20How%20We%20Got%20Here+by+David%20Reich",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "who-we-are-how-got-here",
    summary: "Ancient DNA and the new science of the human past. Reich's revolutionary insights into human migration and genetic history.",
    category: "book"
  },
  // Literature
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Siddhartha+by+Hermann%20Hesse",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "siddhartha",
    summary: "A spiritual journey of self-discovery. Hesse's classic novel about the search for meaning and enlightenment.",
    category: "book"
  },
  // Additional Books
  {
    title: "The Easy Way to Stop Drinking",
    author: "Allen Carr",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Easy%20Way%20to%20Stop%20Drinking+by+Allen%20Carr",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "easy-way-stop-drinking",
    summary: "A revolutionary approach to quitting alcohol without willpower. Carr's method focuses on changing your mindset rather than relying on discipline.",
    category: "book"
  },
  // Logic and Reasoning
  {
    title: "A Few Lessons from Sherlock Holmes",
    author: "Peter Bevelin",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=A%20Few%20Lessons%20from%20Sherlock%20Holmes+by+Peter%20Bevelin",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "few-lessons-sherlock-holmes",
    summary: "Lessons in logic and reasoning from the world's greatest detective. Bevelin extracts practical wisdom from Holmes's methods of deduction.",
    category: "book"
  },
  {
    title: "Alchemy",
    author: "Rory Sutherland",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Alchemy+by+Rory%20Sutherland",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "alchemy-sutherland",
    summary: "The surprising power of ideas that don't make sense. Sutherland explores how illogical solutions often work better than logical ones.",
    category: "book"
  },
  // Finance and Economics
  {
    title: "The Hour Between Dog and Wolf",
    author: "John Coates",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Hour%20Between%20Dog%20and%20Wolf+by+John%20Coates",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "hour-between-dog-wolf",
    summary: "How risk taking transforms us, body and mind. Coates explores the biology of financial decision-making and market behavior.",
    category: "book"
  },
  {
    title: "The Cancer Code",
    author: "Jason Fung",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Cancer%20Code+by+Jason%20Fung",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "cancer-code",
    summary: "A revolutionary new understanding of a medical mystery. Fung presents a new paradigm for understanding and treating cancer.",
    category: "book"
  },
  {
    title: "A Man for All Markets",
    author: "Edward Thorp",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=A%20Man%20for%20All%20Markets+by+Edward%20Thorp",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "man-all-markets",
    summary: "From Las Vegas to Wall Street, how I beat the dealer and the market. Thorp's autobiography of mathematical finance and gambling.",
    category: "book"
  },
  // Philosophy and Classics
  {
    title: "Les sceptiques grecs",
    author: "Victor Brochard",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Les%20sceptiques%20grecs+by+Victor%20Brochard",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "sceptiques-grecs",
    summary: "The Greek skeptics and their philosophy. Brochard's comprehensive study of ancient skepticism and its influence on Western thought.",
    category: "book"
  },
  {
    title: "The Management Myth",
    author: "Matthew Stewart",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Management%20Myth+by+Matthew%20Stewart",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "management-myth",
    summary: "Why the experts keep getting it wrong. Stewart's critique of management consulting and its pseudoscientific foundations.",
    category: "book"
  },
  {
    title: "In the Shadow of the Sword",
    author: "Tom Holland",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=In%20the%20Shadow%20of%20the%20Sword+by+Tom%20Holland",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "shadow-sword",
    summary: "The battle for global empire and the end of the ancient world. Holland's narrative of the rise of Islam and the fall of the ancient world.",
    category: "book"
  },
  // Mathematics
  {
    title: "The First Six Books of the Elements of Euclid",
    author: "Euclid",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid+by+Euclid",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "euclid-elements",
    summary: "The foundational text of geometry and mathematical reasoning. Euclid's systematic approach to geometry remains influential today.",
    category: "book"
  },
  // Ayn Rand Collection
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Atlas%20Shrugged+by+Ayn%20Rand",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "atlas-shrugged",
    summary: "The fountainhead of objectivism. Rand's magnum opus on individualism, capitalism, and the power of human reason.",
    category: "book"
  },
  {
    title: "The Fountainhead",
    author: "Ayn Rand",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Fountainhead+by+Ayn%20Rand",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "fountainhead",
    summary: "The triumph of individualism over collectivism. Rand's novel about an architect who refuses to compromise his vision.",
    category: "book"
  },
  // Architecture and Design
  {
    title: "How Buildings Learn",
    author: "Stewart Brand",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=How%20Buildings%20Learn+by+Stewart%20Brand",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "how-buildings-learn",
    summary: "What happens after they're built. Brand's exploration of how buildings evolve and adapt over time.",
    category: "book"
  },
  // Economics Classics
  {
    title: "The Wealth of Nations",
    author: "Adam Smith",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Wealth%20of%20Nations+by+Adam%20Smith",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "wealth-of-nations",
    summary: "The foundational text of modern economics. Smith's analysis of the division of labor and the invisible hand of the market.",
    category: "book"
  },
  // Walter Benjamin Collection
  {
    title: "Illuminations",
    author: "Walter Benjamin",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Illuminations+by+Walter%20Benjamin",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "illuminations",
    summary: "Essays and reflections on art, culture, and modernity. Benjamin's influential collection of critical essays.",
    category: "book"
  },
  {
    title: "The Arcades Project",
    author: "Walter Benjamin",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Arcades%20Project+by+Walter%20Benjamin",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "arcades-project",
    summary: "A massive, unfinished work on 19th-century Paris. Benjamin's exploration of modernity through the lens of the arcades.",
    category: "book"
  },
  // Literary Criticism
  {
    title: "The Unquiet Grave",
    author: "Cyril Connolly",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Unquiet%20Grave+by+Cyril%20Connolly",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "unquiet-grave",
    summary: "A word cycle by Palinurus. Connolly's meditation on literature, life, and the creative process.",
    category: "book"
  },
  {
    title: "The Poetics of Space",
    author: "Gaston Bachelard",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Poetics%20of%20Space+by+Gaston%20Bachelard",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "poetics-space",
    summary: "The classic look at how we experience intimate places. Bachelard's phenomenological study of space and imagination.",
    category: "book"
  },
  {
    title: "The Psychoanalysis of Fire",
    author: "Gaston Bachelard",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Psychoanalysis%20of%20Fire+by+Gaston%20Bachelard",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "psychoanalysis-fire",
    summary: "A study of the imagination of fire. Bachelard's exploration of fire as a symbol and metaphor in human consciousness.",
    category: "book"
  },
  // Anthropology
  {
    title: "Tristes Tropiques",
    author: "Claude Lévi-Strauss",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Tristes%20Tropiques+by+Claude%20L%C3%A9vi-Strauss",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "tristes-tropiques",
    summary: "A classic of anthropological literature. Lévi-Strauss's memoir and meditation on the nature of civilization.",
    category: "book"
  },
  {
    title: "The Savage Mind",
    author: "Claude Lévi-Strauss",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Savage%20Mind+by+Claude%20L%C3%A9vi-Strauss",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "savage-mind",
    summary: "The structural analysis of primitive thought. Lévi-Strauss's exploration of how 'primitive' societies think and organize knowledge.",
    category: "book"
  },
  // Roland Barthes Collection
  {
    title: "Mythologies",
    author: "Roland Barthes",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Mythologies+by+Roland%20Barthes",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "mythologies",
    summary: "A collection of essays on modern myths. Barthes's semiotic analysis of contemporary culture and ideology.",
    category: "book"
  },
  {
    title: "Camera Lucida",
    author: "Roland Barthes",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Camera%20Lucida+by+Roland%20Barthes",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "camera-lucida",
    summary: "Reflections on photography. Barthes's personal and theoretical exploration of the nature of photography.",
    category: "book"
  },
  // Emil Cioran Collection
  {
    title: "The Trouble with Being Born",
    author: "Emil Cioran",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Trouble%20with%20Being%20Born+by+Emil%20Cioran",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "trouble-being-born",
    summary: "A collection of aphorisms on existence and mortality. Cioran's dark and brilliant reflections on the human condition.",
    category: "book"
  },
  {
    title: "A Short History of Decay",
    author: "Emil Cioran",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=A%20Short%20History%20of%20Decay+by+Emil%20Cioran",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "short-history-decay",
    summary: "A philosophical meditation on the decline of civilization. Cioran's pessimistic but insightful analysis of human nature.",
    category: "book"
  },
  // Paul Celan Collection
  {
    title: "Selected Poems",
    author: "Paul Celan",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Selected%20Poems+by+Paul%20Celan",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "selected-poems-celan",
    summary: "The essential poems of one of the greatest poets of the 20th century. Celan's haunting and powerful verse.",
    category: "book"
  },
  {
    title: "Death Fugue",
    author: "Paul Celan",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Death%20Fugue+by+Paul%20Celan",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "death-fugue",
    summary: "One of the most powerful poems about the Holocaust. Celan's masterpiece of witness and remembrance.",
    category: "book"
  },
  // Isaiah Berlin Collection
  {
    title: "The Hedgehog and the Fox",
    author: "Isaiah Berlin",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Hedgehog%20and%20the%20Fox+by+Isaiah%20Berlin",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "hedgehog-fox",
    summary: "An essay on Tolstoy's view of history. Berlin's famous distinction between hedgehogs and foxes in intellectual life.",
    category: "book"
  },
  {
    title: "Against the Current",
    author: "Isaiah Berlin",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Against%20the%20Current+by+Isaiah%20Berlin",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "against-current",
    summary: "Essays in the history of ideas. Berlin's exploration of counter-Enlightenment thinkers and their influence.",
    category: "book"
  },
  // George Santayana Collection
  {
    title: "The Life of Reason",
    author: "George Santayana",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Life%20of%20Reason+by+George%20Santayana",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "life-reason",
    summary: "The phases of human progress. Santayana's comprehensive philosophy of human nature and society.",
    category: "book"
  },
  {
    title: "Scepticism and Animal Faith",
    author: "George Santayana",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Scepticism%20and%20Animal%20Faith+by+George%20Santayana",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "scepticism-animal-faith",
    summary: "Introduction to a system of philosophy. Santayana's exploration of the relationship between skepticism and belief.",
    category: "book"
  },
  // John Gray Collection
  {
    title: "Straw Dogs",
    author: "John Gray",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Straw%20Dogs+by+John%20Gray",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "straw-dogs-gray",
    summary: "Thoughts on humans and other animals. Gray's provocative critique of humanism and progress.",
    category: "book"
  },
  {
    title: "Black Mass",
    author: "John Gray",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Black%20Mass+by+John%20Gray",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "black-mass",
    summary: "Apocalyptic religion and the death of utopia. Gray's analysis of how secular ideologies inherit religious patterns.",
    category: "book"
  },
  // Ernest Renan Collection
  {
    title: "Life of Jesus",
    author: "Ernest Renan",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Life%20of%20Jesus+by+Ernest%20Renan",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "life-jesus",
    summary: "A historical and critical study of Jesus. Renan's influential biography that treats Jesus as a historical figure.",
    category: "book"
  },
  {
    title: "What is a Nation?",
    author: "Ernest Renan",
    date: "2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=What%20is%20a%20Nation%3F+by+Ernest%20Renan",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "what-nation",
    summary: "A classic essay on nationalism and identity. Renan's influential definition of the nation as a daily plebiscite.",
    category: "book"
  },
  {
    title: "Private Truths, Public Lies",
    author: "Timur Kuran",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Private%20Truths%2C%20Public%20Lies+by+Timur%20Kuran",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "private-truths-public-lies",
    summary: "Explores how people often hide their true preferences in public while expressing different views privately. A deep dive into preference falsification and social dynamics.",
    category: "book"
  },
  {
    title: "Six Easy Pieces",
    author: "Richard P. Feynman",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Six%20Easy%20Pieces+by+Richard%20P.%20Feynman",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "six-easy-pieces",
    summary: "Essential physics concepts explained by one of the greatest teachers. Feynman's clear explanations make complex physics accessible to everyone.",
    category: "book"
  },
  {
    title: "Six Not Easy Pieces",
    author: "Richard P. Feynman",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Six%20Not%20Easy%20Pieces+by+Richard%20P.%20Feynman",
    spineColor: "#7c2d12",
    textColor: "#ffffff",
    slug: "six-not-easy-pieces",
    summary: "The more challenging physics concepts from Feynman's lectures. For those ready to dive deeper into quantum mechanics and relativity.",
    category: "book"
  },
  {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman, Ralph Leighton",
    date: "2024",
    rating: 10,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Surely%20You're%20Joking%2C%20Mr.%20Feynman!+by+Richard%20P.%20Feynman%2C%20Ralph%20Leighton",
    spineColor: "#ea580c",
    textColor: "#ffffff",
    slug: "surely-joking-mr-feynman",
    summary: "Feynman's entertaining autobiography filled with stories of his adventures in physics, safecracking, and life. A delightful read that shows the human side of genius.",
    category: "book"
  },
  {
    title: "The Pleasure of Finding Things Out",
    author: "Richard P. Feynman",
    date: "2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Pleasure%20of%20Finding%20Things%20Out+by+Richard%20P.%20Feynman",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "pleasure-finding-things-out",
    summary: "A collection of Feynman's best short works on science, philosophy, and the joy of discovery. Perfect for understanding his approach to learning and thinking.",
    category: "book"
  },
  // Podcast Episodes
  {
    title: "The Netflix Story: From DVD Rentals to Global Streaming Empire",
    author: "Acquired",
    date: "January 2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Netflix%20Story%3A%20From%20DVD%20Rentals%20to%20Global%20Streaming%20Empire+by+Acquired",
    spineColor: "#e50914",
    textColor: "#ffffff",
    slug: "acquired-netflix-story",
    summary: "A deep dive into Netflix's transformation from a DVD rental service to the world's leading streaming platform. Exploring their strategic pivots, content strategy, and competitive moats.",
    category: "podcast",
    duration: "2.5 hours",
    url: "https://www.acquired.fm/",
    tags: ["business", "strategy", "technology", "entertainment"]
  },
  {
    title: "The Psychology of Money with Morgan Housel",
    author: "The Knowledge Project",
    date: "February 2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Psychology%20of%20Money%20with%20Morgan%20Housel+by+The%20Knowledge%20Project",
    spineColor: "#1e40af",
    textColor: "#ffffff",
    slug: "knowledge-project-housel",
    summary: "Morgan Housel discusses the psychology behind financial decisions, the difference between being rich and being wealthy, and how our emotions drive our money choices.",
    category: "podcast",
    duration: "1.5 hours",
    url: "https://fs.blog/knowledge-project/",
    tags: ["finance", "psychology", "money", "behavior"]
  },
  {
    title: "How to Get Rich (Without Getting Lucky)",
    author: "Naval",
    date: "March 2024",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=How%20to%20Get%20Rich%20(Without%20Getting%20Lucky)+by+Naval",
    spineColor: "#7c3aed",
    textColor: "#ffffff",
    slug: "naval-get-rich",
    summary: "Naval Ravikant shares his framework for building wealth through leverage, accountability, and specific knowledge. A masterclass in entrepreneurship and wealth creation.",
    category: "podcast",
    duration: "1 hour",
    url: "https://nav.al/",
    tags: ["entrepreneurship", "wealth", "philosophy", "business"]
  },
  {
    title: "The Bezos Letters: 14 Principles Behind Amazon's Success",
    author: "Founders Podcast",
    date: "April 2024",
    rating: 8,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Bezos%20Letters%3A%2014%20Principles%20Behind%20Amazon's%20Success+by+Founders%20Podcast",
    spineColor: "#ff9900",
    textColor: "#ffffff",
    slug: "founders-bezos-letters",
    summary: "An analysis of Jeff Bezos's annual letters to shareholders, extracting the key principles that built Amazon into one of the world's most valuable companies.",
    category: "podcast",
    duration: "2 hours",
    url: "https://thefounderspodcast.com/",
    tags: ["amazon", "bezos", "leadership", "business"]
  },
  {
    title: "The Future of Work: Remote vs. Office",
    author: "TBPN",
    date: "May 2024",
    rating: 7,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=The%20Future%20of%20Work%3A%20Remote%20vs.%20Office+by+TBPN",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "tbpn-future-work",
    summary: "A comprehensive discussion about the evolution of work, the pros and cons of remote work, and how companies are adapting to the new normal.",
    category: "podcast",
    duration: "1.5 hours",
    url: "https://tbpn.com/",
    tags: ["work", "remote", "future", "productivity"]
  },
  // Courses
  {
    title: "Advanced React Patterns",
    author: "Kent C. Dodds",
    date: "December 2023",
    rating: 9,
    coverImage: "https://via.placeholder.com/300x400/%2310b981/ffffff?text=Advanced%20React%20Patterns+by+Kent%20C.%20Dodds",
    spineColor: "#0ea5e9",
    textColor: "#ffffff",
    slug: "react-patterns-course",
    summary: "An in-depth course covering advanced React patterns, performance optimization, and modern development practices.",
    category: "course",
    duration: "8 hours",
    url: "https://kentcdodds.com/",
    tags: ["react", "javascript", "frontend", "programming"]
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    author: "Angela Yu",
    date: "2024",
    rating: 9,
    coverImage: "https://picsum.photos/300/400?random=1",
    spineColor: "#f59e0b",
    textColor: "#ffffff",
    slug: "complete-fullstack-bootcamp-angular-yu",
    summary: "A comprehensive bootcamp covering HTML, CSS, JavaScript, Node.js, React, MongoDB, and more. Perfect for beginners looking to become full-stack developers.",
    category: "course",
    duration: "65+ hours",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    tags: ["web-development", "javascript", "react", "nodejs", "mongodb", "html", "css"]
  }
];

export function getAllNotes(): Note[] {
  return notes;
}

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find(note => note.slug === slug);
}

export function getNotesByCategory(category: Note['category']): Note[] {
  return notes.filter(note => note.category === category);
}

export function getNotesByCategories(): Record<Note['category'], Note[]> {
  const categories = ['book', 'podcast', 'course', 'video', 'essay', 'documentary'] as const;
  const result: Record<string, Note[]> = {};
  
  categories.forEach(category => {
    result[category] = notes.filter(note => note.category === category);
  });
  
  return result;
}

export function getCategoryDisplayName(category: Note['category']): string {
  const displayNames: Record<Note['category'], string> = {
    book: 'Books',
    podcast: 'Podcasts',
    course: 'Courses',
    video: 'Videos',
    essay: 'Essays',
    documentary: 'Documentaries'
  };
  
  return displayNames[category] || category;
}

export function getCategoryIcon(category: Note['category']): string {
  const icons: Record<Note['category'], string> = {
    book: '📚',
    podcast: '🎧',
    course: '🎓',
    video: '🎥',
    essay: '📝',
    documentary: '🎬'
  };
  
  return icons[category] || '📄';
}
