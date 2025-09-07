# Atomic Pages System

This guide explains how to create and maintain atomic pages with consistent font styling.

## Overview

All atomic pages now use the `AtomicPage` component and its sub-components to ensure consistent font styling, spacing, and layout across all atomic ideas.

## Components

### AtomicPage (Main Component)
The main wrapper component that provides:
- Consistent header with title, date, and "Atomic Ideas" label
- Proper navigation and background
- Twitter comments integration
- Translation links or back navigation
- Consistent max-width and padding

### AtomicParagraph
For text content with consistent styling:
- `size="xl"`: Large text for opening paragraphs
- `size="base"`: Regular text (default)
- `size="sm"`: Small text
- Automatically includes `font-sans` class

### AtomicHeading
For section headings:
- `level={2}`: Major sections (text-2xl)
- `level={3}`: Subsections (text-base)
- Automatically includes `font-sans` class

### AtomicQuote
For highlighted examples or quotes:
- Blue left border
- Proper spacing
- Use with `AtomicQuoteText` for attribution

### AtomicQuoteText
For quote attribution:
- Italic styling
- Lighter color
- Automatically includes `font-sans` class

## Creating a New Atomic Page

1. Copy `/app/ai/_template/page.tsx` to your new page location
2. Update the metadata with your page slug
3. Replace the title and date
4. Choose either translations OR showBackLink
5. Use the appropriate components for your content

## Font Consistency

All components automatically include the `font-sans` class, ensuring:
- Consistent Inter font family across all atomic pages
- Proper font hierarchy (h1 > h2 > h3 > p)
- No manual font class management needed

## Example Usage

```tsx
import AtomicPage, { AtomicParagraph, AtomicHeading, AtomicQuote } from '@/components/AtomicPage'

export default function MyAtomicPage() {
  return (
    <AtomicPage 
      title="My Atomic Idea"
      date="Dec 21"
      twitterTitle="My Atomic Idea"
    >
      <AtomicParagraph size="xl">
        Opening thought that hooks the reader.
      </AtomicParagraph>

      <AtomicParagraph>
        Regular content paragraph.
      </AtomicParagraph>

      <AtomicHeading level={2}>
        Major Section
      </AtomicHeading>

      <AtomicQuote>
        <p>Important example or quote.</p>
      </AtomicQuote>
    </AtomicPage>
  )
}
```

## Benefits

- **Consistency**: All atomic pages look and feel the same
- **Maintainability**: Font changes only need to be made in one place
- **Developer Experience**: Easy to create new pages with proper styling
- **Future-proof**: New atomic pages automatically get consistent styling
