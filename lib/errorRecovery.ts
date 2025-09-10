/**
 * Error recovery and resilience utilities
 */

import { MemoryMonitor } from './robustness';

interface ErrorContext {
  operation: string;
  timestamp: number;
  error: Error;
  retryCount: number;
  context?: any;
}

interface RecoveryStrategy {
  maxRetries: number;
  backoffMs: number;
  fallbackAction?: () => any;
  shouldRetry: (error: Error, context: ErrorContext) => boolean;
}

class ErrorRecoveryManager {
  private errorHistory: ErrorContext[] = [];
  private readonly MAX_ERROR_HISTORY = 100;
  private readonly ERROR_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

  // Clear old errors from history
  private cleanupErrorHistory(): void {
    const cutoff = Date.now() - this.ERROR_WINDOW_MS;
    this.errorHistory = this.errorHistory.filter(error => error.timestamp > cutoff);
  }

  // Log error for analysis
  private logError(context: ErrorContext): void {
    this.cleanupErrorHistory();
    this.errorHistory.push(context);
    
    // Keep only recent errors
    if (this.errorHistory.length > this.MAX_ERROR_HISTORY) {
      this.errorHistory = this.errorHistory.slice(-this.MAX_ERROR_HISTORY);
    }

    console.error(`Error in ${context.operation}:`, {
      message: context.error.message,
      stack: context.error.stack,
      retryCount: context.retryCount,
      context: context.context
    });
  }

  // Check if we should retry based on error type and frequency
  private shouldRetryOperation(error: Error, operation: string): boolean {
    // Don't retry certain types of errors
    if (error.name === 'ValidationError' || 
        error.name === 'TypeError' ||
        error.message.includes('Rate limit')) {
      return false;
    }

    // Check error frequency for this operation
    const recentErrors = this.errorHistory.filter(
      e => e.operation === operation && 
           (Date.now() - e.timestamp) < 60000 // Last minute
    );

    // If too many recent errors, don't retry
    return recentErrors.length < 5;
  }

  // Execute operation with recovery strategy
  async executeWithRecovery<T>(
    operation: () => Promise<T>,
    operationName: string,
    strategy: RecoveryStrategy,
    context?: any
  ): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 0; attempt <= strategy.maxRetries; attempt++) {
      try {
        const result = await operation();
        
        // Reset error count on success
        this.errorHistory = this.errorHistory.filter(e => e.operation !== operationName);
        
        return result;
      } catch (error) {
        lastError = error as Error;
        
        const errorContext: ErrorContext = {
          operation: operationName,
          timestamp: Date.now(),
          error: lastError,
          retryCount: attempt,
          context
        };

        this.logError(errorContext);

        // Check if we should retry
        if (attempt === strategy.maxRetries || 
            !strategy.shouldRetry(lastError, errorContext) ||
            !this.shouldRetryOperation(lastError, operationName)) {
          break;
        }

        // Wait before retry with exponential backoff
        const delay = strategy.backoffMs * Math.pow(2, attempt) + Math.random() * 1000;
        console.warn(`Retrying ${operationName} in ${delay}ms (attempt ${attempt + 1}/${strategy.maxRetries})`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    // All retries failed, try fallback
    if (strategy.fallbackAction) {
      console.warn(`Using fallback for ${operationName}`);
      try {
        return await strategy.fallbackAction();
      } catch (fallbackError) {
        console.error(`Fallback also failed for ${operationName}:`, fallbackError);
      }
    }

    throw lastError!;
  }

  // Get error statistics
  getErrorStats() {
    this.cleanupErrorHistory();
    
    const stats = {
      totalErrors: this.errorHistory.length,
      errorsByOperation: {} as Record<string, number>,
      recentErrors: this.errorHistory.filter(e => Date.now() - e.timestamp < 300000).length, // Last 5 minutes
      errorTypes: {} as Record<string, number>
    };

    this.errorHistory.forEach(error => {
      stats.errorsByOperation[error.operation] = (stats.errorsByOperation[error.operation] || 0) + 1;
      stats.errorTypes[error.error.name] = (stats.errorTypes[error.error.name] || 0) + 1;
    });

    return stats;
  }

  // Clear error history
  clearErrorHistory(): void {
    this.errorHistory = [];
  }
}

// Singleton instance
const errorRecoveryManager = new ErrorRecoveryManager();

// Predefined recovery strategies
export const RecoveryStrategies = {
  // For file operations
  fileOperation: {
    maxRetries: 3,
    backoffMs: 1000,
    shouldRetry: (error: Error) => 
      error.message.includes('ENOENT') || 
      error.message.includes('EACCES') ||
      error.message.includes('timeout'),
    fallbackAction: () => {
      console.warn('File operation fallback: returning empty result');
      return [];
    }
  },

  // For network operations
  networkOperation: {
    maxRetries: 5,
    backoffMs: 2000,
    shouldRetry: (error: Error) => 
      error.message.includes('timeout') ||
      error.message.includes('ECONNRESET') ||
      error.message.includes('ENOTFOUND'),
    fallbackAction: () => {
      console.warn('Network operation fallback: returning cached data');
      return null;
    }
  },

  // For search operations
  searchOperation: {
    maxRetries: 2,
    backoffMs: 500,
    shouldRetry: (error: Error) => 
      error.message.includes('timeout') ||
      error.message.includes('memory'),
    fallbackAction: () => {
      console.warn('Search operation fallback: returning empty results');
      return [];
    }
  },

  // For memory-intensive operations
  memoryOperation: {
    maxRetries: 1,
    backoffMs: 2000,
    shouldRetry: (error: Error, context: ErrorContext) => {
      const memoryMonitor = MemoryMonitor.getInstance();
      const memoryUsage = memoryMonitor.getMemoryUsage();
      
      // Only retry if memory usage is low
      return memoryUsage.heapUsed < 300 && 
             error.message.includes('timeout');
    },
    fallbackAction: () => {
      console.warn('Memory operation fallback: returning minimal data');
      return [];
    }
  }
};

// Utility function to execute with recovery
export async function executeWithRecovery<T>(
  operation: () => Promise<T>,
  operationName: string,
  strategy: RecoveryStrategy,
  context?: any
): Promise<T> {
  return errorRecoveryManager.executeWithRecovery(operation, operationName, strategy, context);
}

// Get error statistics
export function getErrorStats() {
  return errorRecoveryManager.getErrorStats();
}

// Clear error history
export function clearErrorHistory() {
  errorRecoveryManager.clearErrorHistory();
}

export { errorRecoveryManager };
