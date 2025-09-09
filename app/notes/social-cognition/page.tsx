import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import { getNoteBySlug } from '@/lib/notes'
import { notFound } from 'next/navigation'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap' })

export default function SocialCognitionPage() {
  const note = getNoteBySlug('social-cognition')
  
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Social Mind</h3>
                <p className="leading-relaxed">
                  Kunda's work explores how our minds are fundamentally social, 
                  shaped by our interactions with others and our need to 
                  understand and navigate social relationships. Social cognition 
                  is not just about thinking about others—it's about how our 
                  social environment shapes our very thought processes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Motivated Reasoning</h3>
                <p className="leading-relaxed">
                  One of Kunda's most important contributions is the concept of 
                  motivated reasoning—the idea that our reasoning processes are 
                  often driven by our desires and goals rather than by a 
                  dispassionate search for truth. We tend to seek information 
                  that confirms our beliefs and avoid information that challenges them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Self-Serving Bias</h3>
                <p className="leading-relaxed">
                  Kunda explores how we tend to attribute our successes to our 
                  own abilities and efforts while attributing our failures to 
                  external factors. This self-serving bias helps us maintain 
                  a positive self-image but can also lead to poor decision-making 
                  and interpersonal conflicts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Comparison</h3>
                <p className="leading-relaxed">
                  The book examines how we constantly compare ourselves to others 
                  to evaluate our own abilities, opinions, and behaviors. This 
                  process of social comparison is essential for self-evaluation 
                  but can also lead to feelings of inadequacy or superiority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Stereotyping and Prejudice</h3>
                <p className="leading-relaxed">
                  Kunda explores the cognitive processes underlying stereotyping 
                  and prejudice, showing how these biases emerge from normal 
                  cognitive processes rather than from malice or ignorance. 
                  Understanding these processes is essential for addressing 
                  social problems.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">The Role of Emotion</h3>
                <p className="leading-relaxed">
                  The book examines how emotions influence our social judgments 
                  and decision-making. Emotions can both help and hinder our 
                  ability to think clearly about social situations, and 
                  understanding their role is crucial for improving our 
                  social interactions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Cultural Influences</h3>
                <p className="leading-relaxed">
                  Kunda explores how cultural background shapes our social 
                  cognition, showing that many of our social judgments and 
                  behaviors are influenced by the cultural context in which 
                  we were raised. This understanding is essential for 
                  cross-cultural communication and cooperation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Implications for Society</h3>
                <p className="leading-relaxed">
                  The book's insights have important implications for addressing 
                  social problems such as prejudice, discrimination, and 
                  intergroup conflict. By understanding the cognitive processes 
                  underlying these problems, we can develop more effective 
                  interventions and policies.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Concepts</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Motivated Reasoning</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How our desires and goals influence our reasoning processes.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Social Comparison</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How we evaluate ourselves by comparing ourselves to others.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Self-Serving Bias</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How we attribute success to ourselves and failure to external factors.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Cultural Influences</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    How cultural background shapes our social cognition and behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why This Book Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "Social Cognition" is more than an academic text—it's a practical 
                guide to understanding how our minds work in social situations. 
                Kunda's insights help us understand ourselves and others better, 
                leading to more effective communication and relationships.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The book's greatest strength is its ability to make complex 
                psychological concepts accessible and applicable to everyday 
                life. By understanding the cognitive processes underlying 
                our social judgments, we can become more aware of our biases 
                and make better decisions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Perhaps most importantly, "Social Cognition" reminds us that 
                our social judgments are not always rational or objective. 
                By understanding the biases and heuristics that influence 
                our thinking, we can work to overcome them and develop more 
                accurate and fair assessments of ourselves and others.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
