interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  // Simple Markdown to HTML converter for basic formatting
  const convertMarkdown = (text: string): string => {
    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-10">$1</h1>')
      
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>')
      
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$1</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
      
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400">$1</blockquote>')
      
      // Unordered lists
      .replace(/^[\s]*[-*+] (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      
      // Ordered lists
      .replace(/^[\s]*\d+\. (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      
      // Line breaks
      .replace(/\n/g, '<br>')
      
      // Wrap list items in ul/ol tags
      .replace(/(<li class="ml-4 mb-2">[\s\S]*?<\/li>)/g, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
      
      // Clean up nested ul tags
      .replace(/<\/ul>\s*<ul class="list-disc list-inside space-y-2 my-4">/g, '');
  };

  const htmlContent = convertMarkdown(content);

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
