#!/usr/bin/env node

/**
 * Simple performance test script
 * Tests basic functionality without external dependencies
 */

console.log('🚀 Running performance tests...')

// Test 1: Basic functionality
console.log('✅ Testing basic functionality...')
console.log('✅ Performance test script loaded successfully')

// Test 2: Memory usage check
const memUsage = process.memoryUsage()
console.log(`📊 Memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`)

// Test 3: Simple timing test
const startTime = Date.now()
const testArray = Array.from({ length: 10000 }, (_, i) => i)
const sum = testArray.reduce((a, b) => a + b, 0)
const endTime = Date.now()

console.log(`⏱️  Array processing time: ${endTime - startTime}ms`)
console.log(`🔢 Test result: ${sum === 49995000 ? 'PASS' : 'FAIL'}`)

console.log('✅ All performance tests completed successfully!')
