#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to fix quotes and apostrophes in JSX content
function fixQuotesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8')
    let modified = false
    
    // Fix apostrophes in JSX text content (not in attributes)
    const apostropheRegex = /(>[^<]*?)'([^<]*?<)/g
    content = content.replace(apostropheRegex, (match, before, after) => {
      modified = true
      return before + '&apos;' + after
    })
    
    // Fix quotes in JSX text content (not in attributes)
    const quoteRegex = /(>[^<]*?)"([^<]*?<)/g
    content = content.replace(quoteRegex, (match, before, after) => {
      modified = true
      return before + '&quot;' + after
    })
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8')
      console.log(`✅ Fixed quotes in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error)
    return false
  }
}

// Function to recursively find and fix all TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  let fixedCount = 0
  
  for (const file of files) {
    const filePath = path.join(dir, file.name)
    
    if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
      fixedCount += fixAllTSXFiles(filePath)
    } else if (file.isFile() && file.name.endsWith('.tsx')) {
      if (fixQuotesInFile(filePath)) {
        fixedCount++
      }
    }
  }
  
  return fixedCount
}

// Main execution
async function main() {
  console.log('🔧 Fixing ESLint quote errors...')
  
  const appDir = path.join(process.cwd(), 'app')
  const componentsDir = path.join(process.cwd(), 'components')
  
  let totalFixed = 0
  
  if (fs.existsSync(appDir)) {
    totalFixed += fixAllTSXFiles(appDir)
  }
  
  if (fs.existsSync(componentsDir)) {
    totalFixed += fixAllTSXFiles(componentsDir)
  }
  
  console.log(`✅ Fixed quotes in ${totalFixed} files`)
}

main().catch(console.error)
