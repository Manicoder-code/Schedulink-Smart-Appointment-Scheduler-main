// OPTIMIZED API SERVICE - Merged HTTP + Service Layers
import { apiCache, requestDeduplicator } from '../utils/debounce';

// Direct API configuration (eliminating separate axios.js layer)
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Lightweight fetch wrapper (replaces Axios for smaller bundle)
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.timeout = 8000; // Reduced from 10s
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        signal: controller.abort,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  get(endpoint) { return this.request(endpoint); }
  post(endpoint, data) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) }); }
  put(endpoint, data) { return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) }); }
  patch(endpoint, data) { return this.request(endpoint, { method: 'PATCH', body: JSON.stringify(data) }); }
  delete(endpoint) { return this.request(endpoint, { method: 'DELETE' }); }
}

const api = new ApiClient(API_BASE_URL);

// Optimized API service with reduced abstraction
export const fastApi = {
  // Users - with aggressive caching
  users: {
    async getAll() {
      return requestDeduplicator.deduplicate('users', async () => {
        const cached = apiCache.get('users');
        if (cached) return { success: true, data: cached };

        try {
          const data = await api.get('/users');
          apiCache.set('users', data);
          return { success: true, data };
        } catch (error) {
          return { success: false, error: error.message };
        }
      });
    },

    async create(userData) {
      try {
        const data = await api.post('/users', userData);
        apiCache.clear(); // Invalidate cache
        return { success: true, data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  },

  // Slots - with query-based caching
  slots: {
    async getAll(filters = {}) {
      const cacheKey = `slots_${JSON.stringify(filters)}`;
      const cached = apiCache.get(cacheKey);
      if (cached) return { success: true, data: cached };

      try {
        const params = new URLSearchParams(filters);
        const data = await api.get(`/slots?${params}`);
        apiCache.set(cacheKey, data);
        return { success: true, data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },

    async book(slotId, userId) {
      try {
        const data = await api.patch(`/slots/${slotId}/book`, { user_id: userId });
        apiCache.clear(); // Clear all slot caches
        return { success: true, data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  }
};

export default fastApi;

