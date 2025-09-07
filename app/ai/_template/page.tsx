import AtomicPage, { AtomicParagraph, AtomicHeading, AtomicQuote, AtomicQuoteText } from '@/components/AtomicPage'
import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata('/ai/your-page-slug')

export default function YourAtomicIdeaPage() {
  return (
    <AtomicPage 
      title="Your Atomic Idea Title"
      date="Dec 21"
      twitterTitle="Your Atomic Idea Title"
      // Optional: Add translations if available
      translations={[
        { language: "O'zbekcha", href: "/ai/your-page-slug/uz" },
        { language: "Русский", href: "/ai/your-page-slug/ru" }
      ]}
      // Optional: Show back link instead of translations
      // showBackLink={true}
    >
      {/* Opening paragraph - use size="xl" for emphasis */}
      <AtomicParagraph size="xl">
        Your opening thought that hooks the reader and sets up the main idea.
      </AtomicParagraph>

      {/* Regular paragraphs */}
      <AtomicParagraph>
        Your main content goes here. Each paragraph should be a complete thought.
      </AtomicParagraph>

      <AtomicParagraph>
        Build your argument or story step by step.
      </AtomicParagraph>

      {/* Section headings - use level 2 for major sections */}
      <AtomicHeading level={2}>
        Major Section Title
      </AtomicHeading>

      <AtomicParagraph>
        Content for this major section.
      </AtomicParagraph>

      {/* Subsection headings - use level 3 for subsections */}
      <AtomicHeading level={3}>
        Subsection Title
      </AtomicHeading>

      <AtomicParagraph>
        Content for this subsection.
      </AtomicParagraph>

      {/* Quotes with attribution */}
      <AtomicQuote>
        <p>Your quote or example goes here. This is great for highlighting important points or examples.</p>
        <AtomicQuoteText>
          "Attribution or additional context"
        </AtomicQuoteText>
      </AtomicQuote>

      {/* Multiple examples */}
      <AtomicQuote>
        <p>Another example or case study.</p>
      </AtomicQuote>

      {/* Conclusion paragraph */}
      <AtomicParagraph className="font-bold mt-16 mb-8">
        Your key takeaway or conclusion in bold.
      </AtomicParagraph>
    </AtomicPage>
  )
}

/*
TEMPLATE USAGE GUIDE:

1. Copy this file to create a new atomic page
2. Replace "your-page-slug" with your actual page slug
3. Update the title and date
4. Choose either translations OR showBackLink (not both)
5. Use the appropriate components:
   - AtomicParagraph: Regular text content
   - AtomicParagraph size="xl": Opening paragraph for emphasis
   - AtomicHeading level={2}: Major section headings
   - AtomicHeading level={3}: Subsection headings
   - AtomicQuote: Highlighted examples or quotes
   - AtomicQuoteText: Attribution for quotes

FONT CONSISTENCY:
- All components automatically include font-sans class
- Headings use appropriate sizes (h1: text-3xl, h2: text-2xl, h3: text-base)
- Paragraphs use consistent spacing and colors
- No need to manually add font classes - they're built into the components

STYLING:
- Main title: text-3xl sm:text-4xl font-bold
- Section headings: text-2xl font-bold
- Subsection headings: text-base font-semibold
- Regular text: text-gray-700 dark:text-gray-300
- Opening text: text-xl for emphasis
- Quotes: Blue left border with proper spacing
*/
