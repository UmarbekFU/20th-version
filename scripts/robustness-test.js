#!/usr/bin/env node

/**
 * Comprehensive robustness test for the website
 * Tests all systems under various failure conditions
 */

const http = require('http');
const https = require('https');
const { performance } = require('perf_hooks');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const CONCURRENT_REQUESTS = 50;
const TEST_DURATION_MS = 60000; // 1 minute

class RobustnessTester {
  constructor() {
    this.results = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0,
      maxResponseTime: 0,
      minResponseTime: Infinity,
      errors: {},
      responseTimes: []
    };
    this.startTime = Date.now();
  }

  async makeRequest(path) {
    const startTime = performance.now();
    
    return new Promise((resolve) => {
      const url = `${BASE_URL}${path}`;
      const client = url.startsWith('https') ? https : http;
      
      const req = client.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          const endTime = performance.now();
          const responseTime = endTime - startTime;
          
          this.results.totalRequests++;
          this.results.responseTimes.push(responseTime);
          
          if (res.statusCode >= 200 && res.statusCode < 400) {
            this.results.successfulRequests++;
          } else {
            this.results.failedRequests++;
            this.results.errors[res.statusCode] = (this.results.errors[res.statusCode] || 0) + 1;
          }
          
          resolve({
            statusCode: res.statusCode,
            responseTime,
            path
          });
        });
      });
      
      req.on('error', (error) => {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        
        this.results.totalRequests++;
        this.results.failedRequests++;
        this.results.errors['NETWORK_ERROR'] = (this.results.errors['NETWORK_ERROR'] || 0) + 1;
        this.results.responseTimes.push(responseTime);
        
        resolve({
          statusCode: 0,
          responseTime,
          path,
          error: error.message
        });
      });
      
      req.setTimeout(10000, () => {
        req.destroy();
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        
        this.results.totalRequests++;
        this.results.failedRequests++;
        this.results.errors['TIMEOUT'] = (this.results.errors['TIMEOUT'] || 0) + 1;
        this.results.responseTimes.push(responseTime);
        
        resolve({
          statusCode: 0,
          responseTime,
          path,
          error: 'Request timeout'
        });
      });
    });
  }

  async runConcurrentTest(paths) {
    const promises = [];
    
    for (let i = 0; i < CONCURRENT_REQUESTS; i++) {
      const path = paths[i % paths.length];
      promises.push(this.makeRequest(path));
    }
    
    return Promise.all(promises);
  }

  async runLoadTest() {
    console.log('🚀 Starting robustness test...');
    console.log(`Target: ${BASE_URL}`);
    console.log(`Concurrent requests: ${CONCURRENT_REQUESTS}`);
    console.log(`Test duration: ${TEST_DURATION_MS}ms`);
    console.log('');

    const testPaths = [
      '/',
      '/about',
      '/notes',
      '/projects',
      '/api/health',
      '/api/metrics',
      '/api/search?q=test',
      '/api/notes?category=book&page=1&limit=10'
    ];

    const testInterval = setInterval(async () => {
      await this.runConcurrentTest(testPaths);
    }, 1000); // Run every second

    // Stop after test duration
    setTimeout(() => {
      clearInterval(testInterval);
      this.finishTest();
    }, TEST_DURATION_MS);
  }

  finishTest() {
    const endTime = Date.now();
    const totalTime = endTime - this.startTime;
    
    // Calculate statistics
    this.results.averageResponseTime = this.results.responseTimes.reduce((a, b) => a + b, 0) / this.results.responseTimes.length;
    this.results.maxResponseTime = Math.max(...this.results.responseTimes);
    this.results.minResponseTime = Math.min(...this.results.responseTimes);
    
    const successRate = (this.results.successfulRequests / this.results.totalRequests) * 100;
    const requestsPerSecond = this.results.totalRequests / (totalTime / 1000);
    
    console.log('📊 Test Results:');
    console.log('================');
    console.log(`Total requests: ${this.results.totalRequests}`);
    console.log(`Successful: ${this.results.successfulRequests} (${successRate.toFixed(2)}%)`);
    console.log(`Failed: ${this.results.failedRequests}`);
    console.log(`Requests/sec: ${requestsPerSecond.toFixed(2)}`);
    console.log('');
    console.log('⏱️ Response Times:');
    console.log(`Average: ${this.results.averageResponseTime.toFixed(2)}ms`);
    console.log(`Min: ${this.results.minResponseTime.toFixed(2)}ms`);
    console.log(`Max: ${this.results.maxResponseTime.toFixed(2)}ms`);
    console.log('');
    
    if (Object.keys(this.results.errors).length > 0) {
      console.log('❌ Errors:');
      Object.entries(this.results.errors).forEach(([error, count]) => {
        console.log(`  ${error}: ${count}`);
      });
      console.log('');
    }
    
    // Performance assessment
    if (successRate >= 95 && this.results.averageResponseTime < 1000) {
      console.log('✅ EXCELLENT: System is highly robust');
    } else if (successRate >= 90 && this.results.averageResponseTime < 2000) {
      console.log('✅ GOOD: System is robust with minor issues');
    } else if (successRate >= 80) {
      console.log('⚠️ FAIR: System needs improvement');
    } else {
      console.log('❌ POOR: System is not robust enough');
    }
    
    console.log('');
    console.log('🔧 Recommendations:');
    
    if (successRate < 95) {
      console.log('- Implement better error handling and retry mechanisms');
    }
    
    if (this.results.averageResponseTime > 1000) {
      console.log('- Optimize response times with caching and performance improvements');
    }
    
    if (this.results.maxResponseTime > 5000) {
      console.log('- Add timeouts and circuit breakers for slow operations');
    }
    
    if (requestsPerSecond < 10) {
      console.log('- Consider horizontal scaling or performance optimizations');
    }
    
    console.log('');
    console.log('Test completed!');
  }
}

// Run the test
const tester = new RobustnessTester();
tester.runLoadTest().catch(console.error);
