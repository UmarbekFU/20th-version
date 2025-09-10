'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: number;
  checks: {
    memory: boolean;
    cache: boolean;
    filesystem: boolean;
    search: boolean;
  };
  metrics: {
    memoryUsage: number;
    cacheSize: number;
    notesCount: number;
  };
}

interface Metrics {
  timestamp: number;
  memory: {
    heapUsed: number;
    heapTotal: number;
    external: number;
    rss: number;
  };
  uptime: number;
  nodeVersion: string;
  platform: string;
  arch: string;
  pid: number;
  environment: string;
  requests: {
    total: number;
    errors: number;
  };
  cache: {
    hitRate: number;
    size: number;
  };
}

export function MonitoringDashboard() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const fetchHealthStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/health');
      if (!response.ok) {
        throw new Error(`Health check failed: ${response.status}`);
      }
      const data = await response.json();
      setHealthStatus(data);
    } catch (err) {
      console.error('Failed to fetch health status:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch health status');
    }
  }, []);

  const fetchMetrics = useCallback(async () => {
    try {
      const response = await fetch('/api/metrics');
      if (!response.ok) {
        throw new Error(`Metrics fetch failed: ${response.status}`);
      }
      const data = await response.json();
      setMetrics(data);
    } catch (err) {
      console.error('Failed to fetch metrics:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch metrics');
    }
  }, []);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    await Promise.all([
      fetchHealthStatus(),
      fetchMetrics()
    ]);
    
    setIsLoading(false);
  }, [fetchHealthStatus, fetchMetrics]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchAll, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [autoRefresh, fetchAll]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 dark:text-green-400';
      case 'degraded': return 'text-yellow-600 dark:text-yellow-400';
      case 'unhealthy': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '✅';
      case 'degraded': return '⚠️';
      case 'unhealthy': return '❌';
      default: return '❓';
    }
  };

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          System Monitor
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`text-xs px-2 py-1 rounded ${
              autoRefresh 
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            {autoRefresh ? 'Auto ON' : 'Auto OFF'}
          </button>
          <button
            onClick={fetchAll}
            disabled={isLoading}
            className="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-3 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-xs">
          {error}
        </div>
      )}

      {healthStatus && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">Status:</span>
            <span className={`text-xs font-medium ${getStatusColor(healthStatus.status)}`}>
              {getStatusIcon(healthStatus.status)} {healthStatus.status.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Memory:</span>
              <span className={healthStatus.checks.memory ? 'text-green-600' : 'text-red-600'}>
                {healthStatus.checks.memory ? '✓' : '✗'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Cache:</span>
              <span className={healthStatus.checks.cache ? 'text-green-600' : 'text-red-600'}>
                {healthStatus.checks.cache ? '✓' : '✗'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Filesystem:</span>
              <span className={healthStatus.checks.filesystem ? 'text-green-600' : 'text-red-600'}>
                {healthStatus.checks.filesystem ? '✓' : '✗'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Search:</span>
              <span className={healthStatus.checks.search ? 'text-green-600' : 'text-red-600'}>
                {healthStatus.checks.search ? '✓' : '✗'}
              </span>
            </div>
          </div>
        </div>
      )}

      {metrics && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Memory Used:</span>
            <span className="font-mono">{metrics.memory.heapUsed}MB</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Notes Count:</span>
            <span className="font-mono">{healthStatus?.metrics.notesCount || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Uptime:</span>
            <span className="font-mono">{Math.round(metrics.uptime / 60)}m</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Environment:</span>
            <span className="font-mono">{metrics.environment}</span>
          </div>
        </div>
      )}

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
