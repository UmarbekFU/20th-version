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

export const notes: Note[] = [
  // Probability Theory
  {
    title: "An Introduction to Probability Theory and Its Applications",
    author: "William Feller",
    date: "2024",
    rating: 9,
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71WOIOz0ihL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81k3r1lG+VL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71UQATYLEtL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71YKQ8UJ8QL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71K-5zBgXcL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81Q+5Kz0QJL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71Q+5Kz0QJL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81Q+5Kz0QJL.jpg",
    spineColor: "#059669",
    textColor: "#ffffff",
    slug: "excellent-advice-for-living",
    summary: "Wisdom I wish I'd known earlier. Kelly's collection of practical insights and life lessons learned over decades of exploration and innovation.",
    category: "book"
  },
  // Additional Books
  {
    title: "The Easy Way to Stop Drinking",
    author: "Allen Carr",
    date: "2024",
    rating: 8,
    coverImage: "https://m.media-amazon.com/images/I/81Q+5Kz0QJL.jpg",
    spineColor: "#dc2626",
    textColor: "#ffffff",
    slug: "easy-way-stop-drinking",
    summary: "A revolutionary approach to quitting alcohol without willpower. Carr's method focuses on changing your mindset rather than relying on discipline.",
    category: "book"
  },
  {
    title: "Private Truths, Public Lies",
    author: "Timur Kuran",
    date: "2024",
    rating: 9,
    coverImage: "https://m.media-amazon.com/images/I/71Q+5Kz0QJL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81Q+5Kz0QJL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71Q+5Kz0QJL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/81Q+5Kz0QJL.jpg",
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
    coverImage: "https://m.media-amazon.com/images/I/71Q+5Kz0QJL.jpg",
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
    coverImage: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/6d/40/be/6d40bef9-4b50-d74b-70b4-3b97d3a3c7b8/mza_8234567890123456789.jpg/1200x1200bb.jpg",
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
    coverImage: "https://via.placeholder.com/300x400/1e40af/ffffff?text=Knowledge+Project",
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
    coverImage: "https://via.placeholder.com/300x400/7c3aed/ffffff?text=Naval",
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
    coverImage: "https://via.placeholder.com/300x400/ff9900/ffffff?text=Founders",
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
    coverImage: "https://via.placeholder.com/300x400/059669/ffffff?text=TBPN",
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
    coverImage: "https://via.placeholder.com/300x400/0ea5e9/ffffff?text=React+Course",
    spineColor: "#0ea5e9",
    textColor: "#ffffff",
    slug: "react-patterns-course",
    summary: "An in-depth course covering advanced React patterns, performance optimization, and modern development practices.",
    category: "course",
    duration: "8 hours",
    url: "https://kentcdodds.com/",
    tags: ["react", "javascript", "frontend", "programming"]
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
