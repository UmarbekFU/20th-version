import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function FoodRulesPage() {
  const note = getNoteBySlug('food-rules')
  
  if (!note) {
    notFound()
  }

  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={note.coverImage}
              alt={note.title}
              className="w-32 h-40 md:w-40 md:h-52 object-cover rounded border border-gray-200 dark:border-gray-700 flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {note.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                by {note.author}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Read: {note.date} • Rating: {note.rating}/10
              </p>
            </div>
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {note.summary}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Notes</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Power of Simple Rules</h3>
                <p className="leading-relaxed">
                  Pollan's genius lies in distilling complex nutritional science into simple, memorable rules. 
                  Instead of overwhelming readers with conflicting studies and complicated guidelines, he provides 
                  clear, actionable principles that anyone can follow. This approach cuts through the noise of 
                  modern nutrition advice and focuses on what really matters.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Eat Food, Not Too Much, Mostly Plants</h3>
                <p className="leading-relaxed">
                  This seven-word summary encapsulates Pollan's entire philosophy. It's deceptively simple 
                  yet profound—avoid processed "food-like substances," practice portion control, and 
                  prioritize plant-based foods. This rule alone can transform how we think about eating 
                  and guide most of our food choices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Grandmother Test</h3>
                <p className="leading-relaxed">
                  One of the most memorable rules: "Don't eat anything your great-grandmother wouldn't 
                  recognize as food." This simple test helps us avoid highly processed foods and stick 
                  to whole, natural ingredients. It's a powerful way to navigate the modern food landscape 
                  using ancestral wisdom.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Ingredient List Rule</h3>
                <p className="leading-relaxed">
                  "Avoid food products containing ingredients that are unfamiliar, unpronounceable, or 
                  more than five in number." This rule helps identify overly processed foods and encourages 
                  us to choose simpler, more natural options. It's a practical tool for grocery shopping.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Importance of Cooking</h3>
                <p className="leading-relaxed">
                  Pollan emphasizes that cooking is one of the most important things we can do for our 
                  health. When we cook, we control the ingredients and avoid the hidden sugars, salts, 
                  and unhealthy fats found in processed foods. Cooking also connects us to our food 
                  and makes us more mindful eaters.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The French Paradox</h3>
                <p className="leading-relaxed">
                  Pollan explores how the French eat rich foods yet have better health outcomes than Americans. 
                  The key difference isn't what they eat, but how they eat—smaller portions, more leisurely 
                  meals, and greater appreciation for food quality over quantity. This cultural approach to 
                  eating offers valuable lessons.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Snack Attack</h3>
                <p className="leading-relaxed">
                  "Don't eat anything that won't eventually rot" is a clever way to identify real food. 
                  This rule helps us avoid preservative-laden products and choose fresh, perishable foods 
                  that our bodies are designed to digest. It's a simple test that works in any grocery store.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Meal Structure</h3>
                <p className="leading-relaxed">
                  Pollan advocates for structured meals rather than constant snacking. "Eat meals" and 
                  "Eat at a table" are simple rules that promote better digestion, portion control, and 
                  social connection. This approach helps us develop healthier relationships with food.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Plant Kingdom</h3>
                <p className="leading-relaxed">
                  "Eat mostly plants, especially leaves" emphasizes the importance of vegetables in our diet. 
                  Pollan explains that plants provide essential nutrients, fiber, and antioxidants that 
                  processed foods lack. This rule encourages us to make vegetables the foundation of our meals.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Rules That Changed My Eating</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rule #19: If it came from a plant, eat it; if it was made in a plant, don't.</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    This simple distinction helps identify real food versus processed food products.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rule #39: Eat all the junk food you want as long as you cook it yourself.</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    This rule allows for treats while encouraging home cooking and portion control.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rule #58: Do all your eating at a table.</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    This promotes mindful eating and prevents mindless snacking.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rule #64: Break the rules once in a while.</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Flexibility prevents the rules from becoming a source of stress or guilt.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Food Rules" is a masterclass in practical nutrition advice. In a world overwhelmed by 
                conflicting dietary information, Pollan provides a clear, simple framework for healthy eating. 
                His rules are based on traditional wisdom and common sense rather than fad diets or 
                marketing claims.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its accessibility. Anyone can understand and apply these 
                rules, regardless of their nutritional knowledge or cooking skills. Pollan democratizes 
                healthy eating by making it simple and achievable for everyone.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Food Rules" helps us develop a healthier relationship with food. 
                Instead of viewing eating as a source of stress or guilt, Pollan encourages us to see 
                food as a source of pleasure, nourishment, and connection. His approach promotes both 
                physical health and mental well-being, making it a truly holistic guide to better eating.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
