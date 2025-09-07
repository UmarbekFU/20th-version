// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Polyfill for Request and Response objects in Node.js environment
import { TextEncoder, TextDecoder } from 'util'

// Set up TextEncoder/TextDecoder first
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

// Simple polyfills for Web APIs
if (typeof global.Request === 'undefined') {
  global.Request = class Request {
    constructor(input, init = {}) {
      Object.defineProperty(this, 'url', {
        value: typeof input === 'string' ? input : input.url,
        writable: false,
        enumerable: true,
        configurable: false
      })
      this.method = init.method || 'GET'
      this.headers = new Headers(init.headers)
      this.body = init.body
    }
  }
}

if (typeof global.Response === 'undefined') {
  global.Response = class Response {
    constructor(body, init = {}) {
      this.body = body
      this.status = init.status || 200
      this.statusText = init.statusText || 'OK'
      this.headers = new Headers(init.headers)
    }
    
    json() {
      return Promise.resolve(JSON.parse(this.body || '{}'))
    }
    
    static json(data, init = {}) {
      return new Response(JSON.stringify(data), {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          ...init.headers
        }
      })
    }
  }
}

if (typeof global.Headers === 'undefined') {
  global.Headers = class Headers {
    constructor(init = {}) {
      this._headers = new Map()
      if (init) {
        if (Array.isArray(init)) {
          init.forEach(([key, value]) => {
            this._headers.set(key.toLowerCase(), value)
          })
        } else {
          Object.entries(init).forEach(([key, value]) => {
            this._headers.set(key.toLowerCase(), value)
          })
        }
      }
    }
    
    get(name) {
      return this._headers.get(name.toLowerCase())
    }
    
    set(name, value) {
      this._headers.set(name.toLowerCase(), value)
    }
    
    has(name) {
      return this._headers.has(name.toLowerCase())
    }
    
    delete(name) {
      this._headers.delete(name.toLowerCase())
    }
  }
}

// Mock fetch for API tests
global.fetch = jest.fn()

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))
