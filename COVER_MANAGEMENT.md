# Book Cover Management

## Current System

All books now use consistent **green placeholder covers** with the book title and author displayed on them. This ensures a uniform look while you're building your notes collection.

## How to Change Book Covers

### Option 1: Individual Book Cover Update

1. Open `lib/notes.ts`
2. Find the book you want to update
3. Replace the `coverImage` field with your desired cover URL:

```typescript
{
  title: "Your Book Title",
  author: "Author Name",
  // ... other fields
  coverImage: "https://your-cover-image-url.com/book-cover.jpg",
  // ... rest of fields
}
```

### Option 2: Bulk Cover Update

Use the provided script to update all covers at once:

```bash
node scripts/update-covers.js
```

This will reset all books to use the green placeholder covers.

### Option 3: Custom Placeholder Colors

You can create placeholder covers with different colors by modifying the `generatePlaceholderCover` function in `lib/notes.ts`:

```typescript
// For a blue cover
coverImage: generatePlaceholderCover("Book Title", "Author Name", "#3b82f6")

// For a red cover  
coverImage: generatePlaceholderCover("Book Title", "Author Name", "#ef4444")

// For a purple cover
coverImage: generatePlaceholderCover("Book Title", "Author Name", "#8b5cf6")
```

## Cover Image Requirements

- **Recommended size**: 300x400 pixels (3:4 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **File size**: Under 500KB for optimal loading
- **Quality**: High resolution, clear text if it contains text

## Cover Sources

### Free Sources
- **Unsplash**: https://unsplash.com/s/photos/book-cover
- **Pexels**: https://www.pexels.com/search/book%20cover/
- **Pixabay**: https://pixabay.com/images/search/book%20cover/

### Book-Specific Sources
- **Goodreads**: Book pages often have high-quality cover images
- **Amazon**: Product pages have cover images
- **Google Books**: https://books.google.com/
- **Open Library**: https://openlibrary.org/

### AI-Generated Covers
- **DALL-E**: Generate custom book covers
- **Midjourney**: AI-generated book covers
- **Stable Diffusion**: Free AI cover generation

## Quick Cover Update Script

Create a new script for specific cover updates:

```javascript
// scripts/update-specific-cover.js
const fs = require('fs');
const path = require('path');

const bookSlug = process.argv[2]; // e.g., "feller-probability"
const newCoverUrl = process.argv[3]; // e.g., "https://example.com/cover.jpg"

if (!bookSlug || !newCoverUrl) {
  console.log('Usage: node scripts/update-specific-cover.js <book-slug> <cover-url>');
  process.exit(1);
}

const notesPath = path.join(__dirname, '../lib/notes.ts');
let content = fs.readFileSync(notesPath, 'utf8');

// Find and replace the specific book's cover
const regex = new RegExp(`(slug: "${bookSlug}"[\\s\\S]*?coverImage: ")[^"]+(")`, 'g');
content = content.replace(regex, `$1${newCoverUrl}$2`);

fs.writeFileSync(notesPath, content, 'utf8');
console.log(`✅ Updated cover for book: ${bookSlug}`);
```

Usage:
```bash
node scripts/update-specific-cover.js "feller-probability" "https://example.com/new-cover.jpg"
```

## Best Practices

1. **Consistency**: Keep similar book categories with similar cover styles
2. **Quality**: Use high-resolution images that look good at small sizes
3. **Branding**: Consider your personal brand when choosing cover styles
4. **Backup**: Keep original cover images in a separate folder
5. **Testing**: Test covers on both light and dark themes

## Troubleshooting

### Cover Not Loading
- Check if the URL is accessible
- Verify the image format is supported
- Ensure the URL doesn't require authentication

### Cover Looks Blurry
- Use higher resolution images
- Check if the aspect ratio is correct (3:4)
- Verify the image isn't being compressed

### Cover Too Large
- Compress the image using tools like TinyPNG
- Use WebP format for better compression
- Consider using a CDN for faster loading

## Future Enhancements

- [ ] Automatic cover fetching from ISBN
- [ ] Cover upload interface
- [ ] Cover generation from book metadata
- [ ] Cover optimization and compression
- [ ] Cover backup and versioning system
